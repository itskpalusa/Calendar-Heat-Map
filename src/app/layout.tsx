import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line

const inter = Inter({ subsets: ['latin'] })
const dotenv = require("dotenv")
dotenv.config()
export const metadata = {
  title: 'DailyView',
  description: 'an app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
