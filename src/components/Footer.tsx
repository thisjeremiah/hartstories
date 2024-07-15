import {Container} from '@/components/Container'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row md:items-end">
        <div />
        <p className="mt-6 text-base text-blackish md:mt-0">
          Copyright &copy; {new Date().getFullYear()} HartStories. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
