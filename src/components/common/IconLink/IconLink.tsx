import clsx from 'clsx';
import * as React from 'react';

export interface IIconLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
}

export function IconLink({ children, className, ...rest }: IIconLinkProps) {
  return (
    <a className={clsx('rounded-lg  transition-all p-2', className)} {...rest}>
      {children}
    </a>
  );
}
