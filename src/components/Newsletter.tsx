import Image from 'next/image'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

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
          {
            // <Image
            // className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            // src={backgroundImage}
            // alt=""
            // width={919}
            // height={1351}
            // unoptimized
            // />
          }
          <div className="relative max-w-2xl mx-auto grid grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="text-4xl font-medium tracking-tighter font-display text-whitish sm:text-5xl">
                Get your tickets
              </p>
              <p className="mt-4 text-lg tracking-tight text-whitish">
                Don't miss Jo-Anne Hart's award-winning solo performance,
                Friendship: A Love Story, live in Sweden and Norway.
              </p>
            </div>
            <form className="self-end justify-self-center">
              <Button type="submit">
                Get your tickets <ArrowRightIcon className="w-6 h-6 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
