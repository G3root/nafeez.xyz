import * as React from 'react';
import { useTheme } from 'next-themes';
import { Navbar } from '../common';
import { createAction, useRegisterActions } from 'kbar';
export interface IMainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: IMainLayoutProps) {
  const { setTheme, theme } = useTheme();

  useRegisterActions(
    [
      {
        id: 'darkTheme',
        name: 'Dark',
        keywords: 'dark theme',
        section: '',
        perform: () => (theme === 'light' ? setTheme('dark') : null),
        parent: 'theme'
      },
      {
        id: 'lightTheme',
        name: 'Light',
        keywords: 'light theme',
        section: '',
        perform: () => (theme === 'dark' ? setTheme('light') : null),
        parent: 'theme'
      }
    ],
    [theme]
  );
  return (
    <>
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
      </main>
    </>
  );
}
