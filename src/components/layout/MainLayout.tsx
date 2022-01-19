import * as React from 'react';
import { Navbar } from '../common';
export interface IMainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900 mb-8"
      >
        {children}
      </main>
    </>
  );
}
