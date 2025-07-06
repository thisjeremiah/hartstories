import { RedButton } from '@/components/Button'
import { Container } from '@/components/Container'
import envelopeImg from '@/images/oslo-fringe-envelope.jpg'
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
        <div className="relative -mx-4 overflow-hidden bg-blackish px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-24 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-3xl font-medium tracking-tighter text-whitish sm:text-5xl">
                Get your tickets
              </p>
              <p className="mt-6 text-lg tracking-tight text-whitish">
                Don’t miss Jo-Anne Hart’s solo performance,{' '}
                <span className="italic">
Travel Whore: The Backside of International Relations
</span>.
              </p>
            </div>
            <form className="flex flex-1 flex-col items-start gap-12 self-end justify-self-center">
              <Image
                src={envelopeImg}
                alt=""
                className="rounded-sm px-4 shadow-lg lg:px-0"
              />
              <RedButton
                className="mx-4 lg:mx-0"
                href="https://web.ovationtix.com/trs/pr/1244526"
                target="_blank"
              >
                Get your tickets <ArrowRightIcon className="ml-2 h-6 w-6" />
              </RedButton>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
