// import {BackgroundImage} from '@/components/BackgroundImage'
// import {Button} from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import illustrationImg from '@/images/illustration.png'
import illustrationDesktopImg from '@/images/illustration-desktop.png'

export function Hero() {
  return (
    <div className="relative pb-10 pt-20 sm:pt-32">
      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center sm:items-start lg:max-w-4xl lg:px-12">
          <Image
            src={illustrationImg}
            alt="Jo-Anne Hart"
            className="w-[60vw] sm:hidden"
          />
          <Image
            src={illustrationDesktopImg}
            alt="Jo-Anne Hart"
            className="hidden w-full sm:block"
          />
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-blackish sm:text-2xl">
            <p>
              Finding the funny in foreign policy. In this solo storytelling romp, Jo-Anne Hart uses her real experiences (including being taken for a prostitute) in settings including the end days of the Soviet Union; dining with the President of Iran; and landing on an aircraft carrier at sea to brief US naval leaders – to show us the laugh-out-loud backstage of missteps, insecurities, and costuming disasters. Come cringe, howl, and gape at these confessions from a hard-working travel whore.​
            </p>
          </div>
          {
            // <Button href="https://www.fringepvd.org/friendship-a-love-story.html" target="_blank" className="w-full mt-10 sm:hidden"> Get your tickets!
            // </Button>
          }
          {
            // <dl className="flex items-start w-full mt-10 sm:mt-16 lg:text-left">
            // {[
            // ['Streaming Dates', 'July 16–26'],
            // ].map(([name, value]) => (
            // <div key={name}>
            // <dt className="font-sans text-lg text-blackish">{name}</dt>
            // <dd className="mt-0.5 text-3xl font-semibold tracking-tight text-blackish">
            // {value}
            // </dd>
            // <dt className="text-sm">
            // Watch at your own convenience,<br /> on your device.
            // </dt>
            // </div>
            // ))}
            // </dl>
          }
        </div>
      </Container>
    </div>
  )
}
