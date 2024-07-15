import HartStoriesLogo from '@/images/logo.svg'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src={HartStoriesLogo}
      alt="Hart Stories"
      className="w-[9rem] sm:w-[11rem]"
    />
  )
}
