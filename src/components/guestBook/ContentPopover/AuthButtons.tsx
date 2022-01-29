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
      <h2 className="text-lg font-bold">Login with</h2>
      <div className="mt-6 flex items-center space-x-3">
        {buttons.map(({ label, icon, handler }) => (
          <div
            key={label}
            className="w-full rounded-lg bg-gray-200 p-2 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
          >
            <button
              className="flex w-full flex-col items-center justify-center font-medium"
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
