import {BackgroundImage} from '@/components/BackgroundImage'
import {Button, RedButton} from '@/components/Button'
import {Container} from '@/components/Container'
import Image from 'next/image'
// import JoAnneToon from '@/images/joanne-sketch-2.png'
import JoAnneToon from '@/images/illustration.png'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="flex flex-col items-center max-w-2xl mx-auto sm:items-start lg:max-w-4xl lg:px-12">
          <Image src={JoAnneToon} alt="Jo-Anne Hart" className="w-[65vw] sm:w-[370px]" />
          <div className="mt-6 text-2xl tracking-tight text-blackish space-y-6 font-display">
            <p>
              Experience Jo-Anne Hart’s solo performance, <span className="italic">Friendship: A Love Story</span> —
              a powerful exploration of empathy, trauma, and transformation through storytelling.
            </p>
            <p>
              Winner of the <span className="italic">Grand Slam Prize</span> at the KO Festival of Performance 2022 and a storyteller on the <span className="italic">Moth</span> stage, Jo-Anne brings her captivating tale of love, bravery, and enduring friendship to life.
            </p>
          </div>
          <Button href="https://www.fringepvd.org/friendship-a-love-story.html" target="_blank" className="w-full mt-10 sm:hidden"> Get your tickets!
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Streaming Dates', 'July 16–26'],
              ['Live Performances', 'Sweden, Norway'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-sans text-sm text-blackish">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blackish">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container >
    </div >
  )
}
