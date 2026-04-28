import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nexus Quest Automation',
  description: 'Persistent Cloud Automation for Discord Quests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
