import { google } from 'googleapis'
import { NextRequest, NextResponse } from 'next/server'

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  })
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const auth = getAuth()
    const drive = google.drive({ version: 'v3', auth })

    // Get file metadata for content-type and size
    const meta = await drive.files.get({
      fileId: id,
      fields: 'mimeType, size, name',
    })

    const mimeType = meta.data.mimeType ?? 'application/octet-stream'
    const fileSize = parseInt(meta.data.size ?? '0', 10)
    const rangeHeader = request.headers.get('range')

    // Fetch raw bytes via googleapis
    const dlRes = await drive.files.get(
      { fileId: id, alt: 'media' },
      { responseType: 'arraybuffer', ...(rangeHeader ? { headers: { Range: rangeHeader } } : {}) }
    ) as any

    const buffer = Buffer.from(dlRes.data as ArrayBuffer)

    if (rangeHeader && fileSize > 0) {
      // Parse range: bytes=start-end
      const [, rangeVal] = rangeHeader.split('=')
      const [startStr, endStr] = rangeVal.split('-')
      const start = parseInt(startStr, 10)
      const end   = endStr ? parseInt(endStr, 10) : fileSize - 1

      return new NextResponse(buffer, {
        status: 206,
        headers: {
          'Content-Type': mimeType,
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': String(buffer.length),
          'Cache-Control': 'public, max-age=3600',
        },
      })
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Length': String(buffer.length),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (err) {
    console.error('[gallery/proxy] error:', err)
    return new NextResponse('Not found', { status: 404 })
  }
}
