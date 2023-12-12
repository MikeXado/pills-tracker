import { ClerkProvider } from '@clerk/nextjs'
import { fontSans } from '@pills-tracker/pills-tracker-web-ui'
import './global.css'

export const metadata = {
  title: 'Welcome to pills-tracker'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fontSans.className + ' h-screen'}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
