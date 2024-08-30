import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>

        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blackish/30 py-4 font-sans text-sm text-blackish sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>Oslo Fringe</p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible bg-current" />
            <p>
              <time dateTime="2024-09-07">7 of September 2024</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible bg-current" />
            <p>2:00 PM</p>
          </div>
        </div>

        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button
            target="_blank"
            href="https://www.oslofringe.no/friendship-a-love-story"
          >
            Get tickets
          </Button>
        </div>
      </Container>
    </header>
  )
}
