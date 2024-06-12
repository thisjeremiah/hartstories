import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & {href?: undefined})

export function Button({className, ...props}: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-redish p-4 text-base font-semibold text-whitish hover:bg-redish/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blackish/50 active:text-whitish/70',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
