import "./globals.css"
import Loader from "../components/Loader"
import { Oswald } from "next/font/google"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata = {
  title: "Sun Marketing Alliance",
  description: "Structured FMCG Distribution Network",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        {children}
      </body>
    </html>
  )
}