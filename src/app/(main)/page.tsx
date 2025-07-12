import {Hero} from '@/components/Hero'
import {BuyTickets} from '@/components/BuyTickets'
import {DescriptionOfPiece} from '@/components/Schedule'
import {News} from '@/components/News'
import {Performances} from '@/components/Performances'

export default function Home() {
  return (
    <>
      <Hero />
      <Performances />
      <BuyTickets />
      <News />
    </>
  )
}
