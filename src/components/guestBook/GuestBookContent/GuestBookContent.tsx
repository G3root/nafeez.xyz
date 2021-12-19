import * as React from 'react';
import { format } from 'date-fns';
import { useSession } from '@/hooks/auth';
import { useGuestbookEntries } from '@/hooks/dataFetch';
export interface IGuestBookContentProps {
  data: {
    id: number;
    body: string;
    createdBy: string;
    createdAt: string;
  }[];
}

export function GuestBookContent({ data }: IGuestBookContentProps) {
  const { data: user } = useSession();
  const { data: entries, mutate } = useGuestbookEntries(data);

  const deleteEntry = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    const filteredEntries = entries?.data.filter((entry) => entry.id !== id);
    mutate({ success: true, data: filteredEntries as any }, false);
    await fetch(`/api/guestbook/delete/${id}`, {
      method: 'DELETE'
    });
  };

  return (
    <div className="mt-4 space-y-8">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        {entries?.data &&
          entries.data.map((entry) => (
            <div key={entry.id}>
              <div className="flex py-3 min-h-[5rem] lg:py-2 px-3.5 space-x-3 border-b lg:border-none border-gray-100 dark:border-gray-900 text-sm lg:rounded-lg sm:hover:bg-gray-200 sm:hover:dark:bg-gray-800">
                <div className="flex flex-col justify-center space-y-1">
                  <div className="font-medium  text-base ">{entry.body}</div>
                  <div className="line-clamp-1 text-gray-600 dark:text-white text-opacity-80">
                    <div className="flex items-center space-x-2 mb-2">
                      <p className="text-sm text-gray-500">
                        {entry.createdBy} /{' '}
                        {format(
                          new Date(entry.createdAt),
                          "d MMM yyyy 'at' h:mm bb"
                        )}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {user && entry.createdBy === user.user.name && (
                        <button
                          aria-label="delete comment"
                          className="text-sm text-red-600 dark:text-red-400 "
                          onClick={(e) => deleteEntry(e, entry.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
