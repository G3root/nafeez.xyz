import * as React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
export interface ILinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
}

export function Link({
  isExternal,
  href,
  children,
  className,
  ...rest
}: ILinkProps) {
  const className_ =
    'underline decoration-wavy hover:text-gray-800 dark:hover:text-gray-200 font-bold transition-all';
  if (isExternal) {
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
