import * as React from 'react';
import Link from 'next/link';
import { NavItem } from './NavItem';
import { KbarButton } from './KbarButton';

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative  border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <Link href="/">
          <a className="font-semibold px-2 py-1 rounded-lg text-3xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
            N
          </a>
        </Link>
        <div className="ml-[-0.60rem]">
          <NavItem href="/" text="Home" />
          <NavItem href="/guestbook" text="Guestbook" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/bookmarks" text="Bookmarks" />
          <NavItem href="/nft-gallery" text="NFT Gallery" />
        </div>
        <KbarButton />
      </nav>
    </div>
  );
}
