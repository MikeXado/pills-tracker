import { fontSans } from '@pills-tracker/pills-tracker-web-ui'
import './global.css'

export const metadata = {
  title: 'Welcome to pills-tracker'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}
