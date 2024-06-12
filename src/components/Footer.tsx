import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="w-auto h-12 text-blackish" />
        <p className="mt-6 text-base text-blackish md:mt-0">
          Copyright &copy; {new Date().getFullYear()} DeceptiConf, LLC. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
