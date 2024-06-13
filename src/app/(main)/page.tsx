import {Hero} from '@/components/Hero'
import {BuyTickets} from '@/components/Newsletter'
import {DescriptionOfPiece} from '@/components/Schedule'
import {Performances} from '@/components/Performances'
// import {Sponsors} from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Performances />
      <DescriptionOfPiece />
      {
        // <Sponsors />
      }
      <BuyTickets />
    </>
  )
}
