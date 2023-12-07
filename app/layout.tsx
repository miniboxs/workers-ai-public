import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import StyledComponentsRegistry from "@/lib/AntRegistry"
import dynamic from 'next/dynamic'

const Header = dynamic(() => import("@/app/components/Header/header"))

const roboto = Roboto({
  weight: '500',
  style: "italic",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Workers AI Prompt Generator | Stable Diffusion Prompt Generator',
  description: 'Stable Diffusion Prompt Generator',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}