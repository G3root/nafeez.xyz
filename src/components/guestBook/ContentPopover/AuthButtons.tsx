import * as React from 'react';
import { FiTwitter, FiGithub } from 'react-icons/fi';
import { signIn, useSession } from 'next-auth/react';
export interface IAuthButtonsProps {}

export function AuthButtons(props: IAuthButtonsProps) {
  const { data: session } = useSession();
  const buttons = React.useMemo(
    () => [
      {
        label: 'Github',
        icon: <FiGithub aria-hidden className="h-5 w-5" />,
        handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          signIn('github');
        }
      },
      {
        label: 'Twitter',
        icon: <FiTwitter aria-hidden className="h-5 w-5" />,
        handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          signIn('twitter');
        }
      }
    ],
    []
  );
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-lg">Login with</h2>
      <div className="flex items-center space-x-3 mt-6">
        {buttons.map(({ label, icon, handler }) => (
          <div
            key={label}
            className="w-full dark:bg-gray-600 bg-gray-200 p-2 rounded-lg hover:ring-2 ring-gray-300 transition-all"
          >
            <button
              className="flex flex-col items-center justify-center w-full font-medium"
              onClick={handler}
            >
              {icon}
              {label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
