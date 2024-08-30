'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import Image from 'next/image'
import joAnneImage4 from '@/images/image4.jpg'
import osfrImg from '@/images/osfr.png'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'April 4',
    dateTime: '2022-04-04',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'Steven McHail',
        description: 'Not so one-time payments',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Jaquelin Isch',
        description: 'The finer print',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Dianne Guilianelli',
        description: 'Post-purchase blackmail',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Ronni Cantadore',
        description: 'Buy or die',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Erhart Cockrin',
        description: 'In-person cancellation',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Parker Johnson',
        description: 'The pay/cancel switcheroo',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'April 5',
    dateTime: '2022-04-05',
    summary:
      'Next we spend the day talking about deceiving people with technology.',
    timeSlots: [
      {
        name: 'Damaris Kimura',
        description: 'The invisible card reader',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Ibrahim Frasch',
        description: 'Stealing fingerprints',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Cathlene Burrage',
        description: 'Voting machines',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Rinaldo Beynon',
        description: 'Blackhat SEO that works',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Waylon Hyden',
        description: 'Turning your audience into a botnet',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Giordano Sagucio',
        description: 'Fly phishing',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'April 6',
    dateTime: '2022-04-06',
    summary:
      'We close out the event previewing new techniques that are still in development.',
    timeSlots: [
      {
        name: 'Andrew Greene',
        description: 'Neuralink dark patterns',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Heather Terry',
        description: 'DALL-E for passports',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Piers Wilkins',
        description: 'Quantum password cracking',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Gordon Sanderson',
        description: 'SkyNet is coming',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Kimberly Parsons',
        description: 'Dark patterns for the metaverse',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Richard Astley',
        description: 'Knowing the game and playing it',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blackish">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blackish">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-whitish/60 px-10 py-14 text-center shadow-xl shadow-blackish/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blackish">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blackish">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function News() {
  return (
    <section id="news" aria-label="News" className="py-20 sm:py-32">
      <Container className="relative z-10 flex">
        <div className="flex-1">
          <h2 className="font-display text-3xl font-medium tracking-tighter text-blackish sm:text-5xl">
            News
          </h2>
          <div className="flex flex-1 flex-col justify-between gap-16 lg:flex-row">
            <div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-blackish">
                Upcoming events
              </h3>
              <div className="mt-4 flex gap-1 font-display text-xl tracking-tight text-blackish sm:gap-6 sm:text-2xl">
                <div>
                  <p>Oslo Fringe Performance</p>
                  <a
                    className="italic underline underline-offset-2"
                    href="https://www.oslofringe.no/friendship-a-love-story"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Friendship: A Love Story
                  </a>
                  <p className="italic">
                    Salt Theater, Den Arktiske Hovedscena, Oslo
                  </p>
                  <p>September 7, 2024 @ 2pm</p>
                </div>
                <Image
                  alt=""
                  className="mt-2 h-24 w-24 rounded-full bg-blackish grayscale"
                  src={osfrImg}
                />
              </div>
            </div>
            <div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-blackish">
                Past events
              </h3>
              <div className="mt-4 font-display text-xl tracking-tight text-blackish sm:text-2xl">
                <p>Tranås At The Fringe International Arts Festival</p>
              </div>
              <div className="mt-4 font-display text-xl tracking-tight text-blackish sm:text-2xl">
                <p>PVD Fringe Festival</p>
                <p className="text-lg">
                  Won <i>Best Solo Performance</i> and <i>Best Love Story</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        {
          // <Image alt="" className="w-full mx-auto max-w-[30rem] md:w-[20rem] lg:w-[30rem] rounded-xl" src={joAnneImage4} />
        }
      </Container>
    </section>
  )
}
