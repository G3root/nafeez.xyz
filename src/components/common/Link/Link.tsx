import * as React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
export interface ILinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...rest }: ILinkProps) {
  const className_ =
    'underline decoration-dashed underline-offset-4 hover:text-gray-800 dark:hover:text-gray-200 font-bold transition-all';
  if (href.startsWith('https://')) {
    return (
      <a href={href} className={clsx(className_, className)} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href}>
      <a className={clsx(className_, className)} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}
