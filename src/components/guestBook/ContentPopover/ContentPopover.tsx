import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { FiX } from 'react-icons/fi';
import { AuthButtons } from './AuthButtons';
import { ContentInput } from './ContentInput';
import { useSession } from 'next-auth/react';
import { getProviders, signIn } from 'next-auth/react';
export interface IContentPopoverProps {}

export function ContentPopover(props: IContentPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, status } = useSession();
  return (
    <div className="border-2 border-dashed border-gray-300 rounded p-6 my-4 w-full dark:border-gray-800 ">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 ">
        Share a message for a future visitor of my site.
      </h5>

      <PopoverPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <PopoverPrimitive.Trigger className="px-4 py-2 my-4  font-bold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded">
          Sign the Guestbook
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Content
          className="rounded-md p-5 bg-gray-50 dark:bg-gray-900 w-64 shadow-xl border border-transparent dark:border-gray-700"
          sideOffset={5}
        >
          {status === 'authenticated' ? (
            <ContentInput setIsOpen={setIsOpen} />
          ) : (
            <AuthButtons />
          )}

          <PopoverPrimitive.Close
            aria-label="Close"
            className="rounded-full w-6 h-6 inline-flex items-center justify-center absolute top-2 right-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiX className="h-4 w-4" aria-hidden />
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
      <p className="text-sm text-gray-800 dark:text-gray-200 max-w-sm">
        Your information is only used to display your name and reply by email.
      </p>
    </div>
  );
}
