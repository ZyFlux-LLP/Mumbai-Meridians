import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message,
      submittedAt: new Date().toISOString(),
    }

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contact-submissions.json')

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    let submissions: typeof submission[] = []
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8')
      submissions = JSON.parse(raw)
    }

    submissions.push(submission)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
