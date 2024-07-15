'use client'

import {useEffect, useId, useState} from 'react'
import Image from 'next/image'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {DiamondIcon} from '@/components/DiamondIcon'
import joAnneImage2 from '@/images/image0.jpg'
import joAnneImage4 from '@/images/image2.jpg'

const speakers = [
  {
    name: '',
    role: '',
    image: joAnneImage4,
  },
  {
    name: '',
    role: '',
    image: joAnneImage2,
  },
]

const days = [
  {
    name: 'Tranås, Sweden',
    date: 'June 29, July 1',
    dateTime: '2024-07-01',
    speakers
  },
  {
    name: 'Providence, Rhode Island',
    date: 'July 16-26',
    dateTime: '2024-07-10',
    speakers
  },
  {
    name: 'Oslo, Norway',
    date: 'September 7',
    dateTime: '2024-07-10',
    speakers
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {id: string}) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Performances() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({matches}: {matches: boolean}) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="performances"
      aria-labelledby="performances-title"
      className="py-20 sm:py-32 bg-pink"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            id="performances-title"
            className="text-4xl font-medium tracking-tighter font-display text-blackish sm:text-5xl"
          >
            Performances
          </h2>
          <p className="mt-4 text-2xl tracking-tight font-display text-blackish">
            Jo-Anne Hart will perform <span className="italic">Friendship: A Love Story</span> this year at the <span className="italic">Tranås At The Fringe International Arts Festival</span> in Sweden, the <span className="italic">Providence Fringe Festival</span> in Rhode Island, and the <span className="italic">Oslo Fringe Performing Arts Festival</span> in Norway.
          </p>
        </div>
        <TabGroup
          className="items-start mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <TabList className="justify-start px-4 grid auto-cols-auto grid-flow-col gap-x-8 gap-y-10 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({selectedIndex}) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          'bg-blackish',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-sans text-sm',
                            'text-blackish'
                          )}
                        >
                          <Tab className="cursor-default ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-redish"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-2"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[25.5rem] transform overflow-hidden rounded-xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-redish',
                            'border-blackish',
                            'border-redish',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                      // Clip path
                      // style={{clipPath: `url(#${id}-${speakerIndex % 3})`}}
                      >
                        <Image
                          className="absolute inset-0 object-cover w-full h-full transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 25.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-bold tracking-tight font-display text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
