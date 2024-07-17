// import {BackgroundImage} from '@/components/BackgroundImage'
import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import Image from 'next/image'
// import JoAnneToon from '@/images/joanne-sketch-2.png'
import JoAnneToon from '@/images/illustration.png'

export function Hero() {
  return (
    <div className="relative pt-20 pb-10 sm:pt-24">
      <Container className="relative">
        <div className="flex flex-col items-center max-w-2xl mx-auto sm:items-start lg:max-w-4xl lg:px-12">
          <Image src={JoAnneToon} alt="Jo-Anne Hart" className="w-[60vw] sm:w-[370px]" />
          <div className="mt-6 text-xl tracking-tight sm:text-2xl text-blackish space-y-6 font-display">
            <p>
              Experience Jo-Anne Hart’s solo performance, <span className="italic">Friendship: A Love Story</span> —
              a powerful exploration of empathy, trauma, and transformation through storytelling.
            </p>
            <p>
              Winner of the <span className="italic">Grand Slam Prize</span> at the KO Festival of Performance 2022 and a storyteller on the <span className="italic">Moth</span> stage, Jo-Anne brings her real life tale of love, bravery, and enduring friendship to life.
            </p>
          </div>
          <Button href="https://www.fringepvd.org/friendship-a-love-story.html" target="_blank" className="w-full mt-10 sm:hidden"> Get your tickets!
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Streaming Dates', 'July 16–26'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-sans text-sm text-blackish">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blackish">
                  {value}
                </dd>
                <dt className="w-56 text-sm">
                  Watch at your own convenience, on your device.
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Container >
    </div >
  )
}
