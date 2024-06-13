import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
// import {DiamondIcon} from '@/components/DiamondIcon'
import {Logo} from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="w-auto h-12 text-slate-900" />
        </div>

        {
          // <div className="flex flex-auto order-first py-4 -mx-4 overflow-x-auto font-mono text-sm border-b text-blackish basis-full whitespace-nowrap border-blackish/30 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          // <div className="flex items-center px-4 mx-auto gap-4">
          // <p>
          // <time dateTime="2024-06-10">16</time>-
          // <time dateTime="2024-06-12">26 of July, 2024</time>
          // </p>
          // <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
          // <p>Watch online</p>
          // </div>
          // </div>
        }

        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Get your tickets</Button>
        </div>
      </Container>
    </header>
  )
}
