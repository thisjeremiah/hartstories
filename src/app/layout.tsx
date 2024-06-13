import {type Metadata} from 'next'
import {Inter, Noto_Serif_JP} from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-inter',
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
    default: 'HartStories',
  },
  description:
    'Experience Jo-Anne Hart’s award-winning solo performance, Friendship: A Love Story, a powerful exploration of empathy and trauma through storytelling.'
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
        notoSerifJP.variable
      )}
    >
      <body className="flex min-h-full">
        <div className="flex flex-col w-full">{children}</div>
      </body>
    </html>
  )
}
