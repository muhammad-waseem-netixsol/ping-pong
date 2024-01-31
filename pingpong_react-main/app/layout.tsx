import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="max-h-screen overflow-hidden min-h-screen">
        
        {children}
        </body>
    </html>
  )
}
