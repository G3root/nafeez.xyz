import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  FiHome,
  FiEdit3,
  FiStar,
  FiBookmark,
  FiAward,
  FiMenu,
  FiX
} from 'react-icons/fi';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface IMobileNavProps {}

const items = [
  { name: 'Home', url: '/', icon: <FiHome aria-hidden className="mx-2" /> },
  {
    name: 'Guestbook',
    url: '/guestbook',
    icon: <FiEdit3 aria-hidden className="mx-2" />
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: <FiStar aria-hidden className="mx-2" />
  },
  {
    name: 'Bookmarks',
    url: '/bookmarks',
    icon: <FiBookmark aria-hidden className="mx-2" />
  },
  {
    name: 'NFT gallery',
    url: '/nft-gallery',
    icon: <FiAward aria-hidden className="mx-2" />
  }
];

export function MobileNav(props: IMobileNavProps) {
  const router = useRouter();
  const path = router.asPath;
  const navItems = items.map((item) => (
    <li
      key={item.name}
      className={clsx(
        'w-full text-base my-2',
        path === item.url
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400'
      )}
    >
      <NextLink href={item.url}>
        <a className="flex w-auto py-3 mx-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
          {item.icon} <span className="capsize">{item.name}</span>
        </a>
      </NextLink>
    </li>
  ));
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label="Toggle menu"
        className="w-9 h-9  md:hidden flex items-center justify-center   bg-transparent"
      >
        <FiMenu aria-hidden className="h-5 w-5 " />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="absolute inset-0 bg-gray-800 bg-opacity-75 " />
        <Dialog.Content className="fixed top-0 bottom-0 w-72 left-0">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 ">
            <ul className="mt-32">{navItems}</ul>
          </div>
          <Dialog.DialogClose className="top-10 left-3 absolute flex items-center justify-center ml-2 rounded-full w-6 h-6 hover:bg-gray-200 dark:hover:bg-gray-800">
            <FiX aria-hidden className="h-5 w-5 " />
          </Dialog.DialogClose>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
