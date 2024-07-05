import HartStoriesLogo from '@/images/hartstorieslogo.svg'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src={HartStoriesLogo}
      alt="Hart Stories"
      className="w-[13rem]"
    />
  )
}
