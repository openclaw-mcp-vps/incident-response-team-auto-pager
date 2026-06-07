import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Auto-Pager — Smart On-Call Escalation',
  description: 'Automatically pages the right engineers based on incident keywords, severity, and team expertise. Integrates with PagerDuty, Opsgenie, Slack, and Teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="031f8daa-de78-4d61-9d4f-9d2909e35939"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
