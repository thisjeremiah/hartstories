import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import envelopeImg from '@/images/envelope.jpeg'
import Image from 'next/image'

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BuyTickets() {
  return (
    <section id="buy-tickets" aria-label="Buy tickets">
      <Container>
        <div className="relative px-4 py-20 -mx-4 overflow-hidden bg-blackish sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative max-w-2xl mx-auto grid grid-cols-1 gap-x-24 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="text-4xl font-medium tracking-tighter font-display text-whitish sm:text-5xl">
                Get your tickets
              </p>
              <p className="mt-4 text-lg tracking-tight text-whitish">
                Don’t miss Jo-Anne Hart’s solo performance,{' '}
                <span className="italic">Friendship: A Love Story</span>, live in Sweden and Norway.
              </p>
              <p className="mt-4 text-lg tracking-tight text-whitish">
                A recording of the live show will be streaming online from the Fringe PVD – The Providence Fringe Festival 24/7 for ten days July 16-26th
              </p>
            </div>
            <form className="flex flex-col items-start self-end flex-1 gap-12 justify-self-center">
              <Image src={envelopeImg} alt="" className="px-4 lg:px-0 grayscale-[0.5] rounded-sm shadow-lg" />
              <Button className="mx-4 lg:mx-0" href="https://www.fringepvd.org/friendship-a-love-story.html" target="_blank">
                Get your tickets <ArrowRightIcon className="w-6 h-6 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
