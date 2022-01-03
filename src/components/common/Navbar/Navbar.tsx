import * as React from 'react';
import Link from 'next/link';
import { NavItem } from './NavItem';
import { ThemeDropdown } from './ThemeDropdown';
import { MobileNav } from './MobileNav';
import * as Toolbar from '@radix-ui/react-toolbar';
export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <Toolbar.Root>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex max-w-7xl items-center justify-between w-full relative  border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <Link passHref href="/">
            <Toolbar.Link className="font-semibold px-2 py-1 md:block hidden rounded-lg text-3xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
              N
            </Toolbar.Link>
          </Link>
          <MobileNav />
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/guestbook" text="Guestbook" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/nft-gallery" text="NFT gallery" />
          </div>

          <ThemeDropdown />
        </nav>
      </div>
    </Toolbar.Root>
  );
}
