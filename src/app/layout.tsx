import {type Metadata} from 'next'
import {DM_Sans, Inter, Noto_Serif_JP} from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
})

export const metadata: Metadata = {
  title: {
    template: '%s - HartStories',
    default: 'HartStories - A community-driven design conference',
  },
  description:
    'At HartStories you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-whitish antialiased',
        inter.variable,
        dmSans.variable,
        notoSerifJP.variable
      )}
    >
      <body className="flex min-h-full">
        <div className="flex flex-col w-full">{children}</div>
      </body>
    </html>
  )
}
