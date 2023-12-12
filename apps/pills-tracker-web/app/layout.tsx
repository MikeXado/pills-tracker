import './global.css'

export const metadata = {
  title: 'Welcome to pills-tracker'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
