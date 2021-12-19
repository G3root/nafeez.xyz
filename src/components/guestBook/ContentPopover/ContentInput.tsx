import { LoadingSpinner } from '@/components/common';
import clsx from 'clsx';
import * as React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
export interface IContentInputProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum Form {
  Initial,
  Loading
}
export type FormState = Form;

export function ContentInput({ setIsOpen }: IContentInputProps) {
  const [form, setForm] = React.useState<FormState>(Form.Initial);
  const inputEl = React.useRef<HTMLTextAreaElement>(null);
  const { mutate } = useSWRConfig();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm(Form.Loading);
    if (!inputEl.current) return;
    const req = await fetch('/api/guestbook/sign', {
      body: JSON.stringify({
        message: inputEl?.current?.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const res = await req.json();
    if (res.success) {
      inputEl.current.value = '';
      mutate('/api/guestbook/all');
      toast.success('Hooray! Thanks for signing my Guestbook.');
    }
    if (!res.success) {
      toast.error(res.message);
    }
    setForm(Form.Initial);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-lg">Sign a message</h2>
      <form
        className="flex flex-col items-center space-y-3"
        onSubmit={onSubmit}
      >
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          className="text-sm dark:bg-gray-800 dark:text-white shadow-sm border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 dark:focus:ring-gray-300 dark:focus:border-gray-300"
          ref={inputEl}
          aria-label="Your message"
          placeholder="Your message..."
          required
          id="message"
          disabled={form === Form.Loading ? true : false}
          maxLength={500}
        />
        <button
          type="submit"
          disabled={form === Form.Loading ? true : false}
          className={clsx(
            'font-medium bg-gray-200 dark:bg-gray-600 rounded px-3 py-1 w-full ',
            form === Form.Loading
              ? 'cursor-not-allowed'
              : 'hover:ring-2 ring-gray-300 transition-all'
          )}
        >
          {form === Form.Loading ? (
            <>
              <LoadingSpinner className="inline-flex" /> loading{' '}
            </>
          ) : (
            'Sign'
          )}
        </button>
      </form>
    </div>
  );
}
