import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & {href?: undefined})

function ImplButton({className, ...props}: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-lg p-4 text-base font-semibold text-whitish focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blackish/50 active:text-whitish/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

export function Button({
  className,
  ...props
}: ButtonProps) {
  return <ImplButton className={clsx('bg-blackish hover:bg-blackish/90', className)} {...props} />
}

export function RedButton({
  className,
  ...props
}: ButtonProps) {
  return <ImplButton className={clsx('bg-redish hover:bg-redish/90', className)} {...props} />
}
