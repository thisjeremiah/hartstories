'use client'

import {useEffect, useState} from 'react'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'

import {BackgroundImage} from '@/components/BackgroundImage'
import {Container} from '@/components/Container'
import Image from 'next/image'
import joAnneImage3 from '@/images/jo-anne-3.jpg'

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

    function onMediaQueryChange({matches}: {matches: boolean}) {
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
      className="max-w-2xl mx-auto grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="flex pb-4 pl-4 -mx-4 overflow-x-auto gap-x-4 gap-y-10 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({selectedIndex}) => (
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

function DaySummary({day}: {day: Day}) {
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

function TimeSlots({day, className}: {day: Day; className?: string}) {
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
            <div className="w-48 h-px mx-auto mb-8 bg-indigo-500/10" />
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

export function DescriptionOfPiece() {
  return (
    <section id="description-of-piece" aria-label="Description of piece" className="py-20 sm:py-32">
      <Container className="relative z-10 flex flex-col-reverse items-start md:flex-row-reverse gap-16">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-3xl font-medium tracking-tighter font-display text-redish sm:text-5xl">
            A Journey of Friendship and Courage
          </h2>
          <p className="mt-4 text-xl tracking-tight sm:text-2xl text-blackish font-display">
            Finding the funny in foreign policy. In this solo storytelling romp, Jo-Anne Hart uses her real experiences (including being taken for a prostitute) in settings including the end days of the Soviet Union; dining with the President of Iran; and landing on an aircraft carrier at sea to brief US naval leaders – to show us the laugh-out-loud backstage of missteps, insecurities, and costuming disasters. Come cringe, howl, and gape at these confessions from a hard-working travel whore.​
          </p>
        </div>
        <Image alt="" className="grayscale w-full mx-auto max-w-[30rem] md:w-[20rem] lg:w-[30rem] rounded-xl" src={joAnneImage3} />
      </Container>
      {
        // <div className="relative mt-14 sm:mt-24">
        // <BackgroundImage position="right" className="-bottom-32 -top-40" />
        // <Container className="relative">
        // <ScheduleTabbed />
        // <ScheduleStatic />
        // </Container>
        // </div>
      }
    </section>
  )
}
