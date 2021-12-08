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
    <a
      className={clsx(
        'rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all p-2',
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
