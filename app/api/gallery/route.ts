import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export const revalidate = 300

export interface MediaItem {
  id: string
  name: string
  type: 'photo' | 'video'
  mimeType: string
}

async function collectMedia(drive: any, folderId: string): Promise<MediaItem[]> {
  const [imgRes, subRes] = await Promise.all([
    drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: 'files(id, name, mimeType)',
      orderBy: 'createdTime desc',
      pageSize: 100,
    }),
    drive.files.list({
      q: `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: 'files(id, name)',
    }),
  ])

  const photos: MediaItem[] = (imgRes.data.files ?? []).map((f: any) => ({
    id: f.id, name: f.name, type: 'photo' as const, mimeType: f.mimeType,
  }))

  const nested = await Promise.all(
    (subRes.data.files ?? []).map((sf: any) => collectMedia(drive, sf.id))
  )

  return [...photos, ...nested.flat()]
}

export async function GET() {
  const email  = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key    = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const folder = process.env.GOOGLE_DRIVE_FOLDER_ID

  if (!email || !key || !folder) {
    return NextResponse.json({ error: 'Google Drive not configured' }, { status: 503 })
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: email, private_key: key },
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    })
    const drive = google.drive({ version: 'v3', auth })
    const items = await collectMedia(drive, folder)
    return NextResponse.json(items, {
      headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=60' },
    })
  } catch (err) {
    console.error('[gallery] Drive API error:', err)
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 })
  }
}
