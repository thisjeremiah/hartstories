import {BackgroundImage} from '@/components/BackgroundImage'
import {Button} from '@/components/Button'
import {Container} from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:max-w-4xl lg:px-12">
          <h1 className="font-sans text-5xl font-black tracking-[-0.04em] text-redish sm:text-7xl">
            Hart
            <br />
            <span className="text-blackish">Stories</span>
          </h1>
          <div className="mt-6 text-2xl tracking-tight text-blackish space-y-6 font-display">
            <p>
              Experience Jo-Anne Hart's award-winning solo performance, <span className="font-bold">Friendship: A Love Story</span> —
              a powerful exploration of empathy, trauma, and transformation through storytelling.
            </p>
            <p>
              Winner of the <span className="font-bold">Grand Slam Prize</span> at the KO Festival of Performance 2022 and a celebrated storyteller on the <span className="font-bold">Moth</span> stage, Jo-Anne brings her captivating tale of love, bravery, and enduring friendship to life.
            </p>
            <p>
              Don't miss this moving and intimate performance.
            </p>
          </div>
          <Button href="#" className="w-full mt-10 sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Streaming Dates', 'July 16–26'],
              ['Live Locations', 'Sweden, Norway '],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blackish">{name}</dt>
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
