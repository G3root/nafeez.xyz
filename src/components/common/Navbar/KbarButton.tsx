import * as React from 'react';
import { FiCommand } from 'react-icons/fi';
import { useKBar } from 'kbar';
export interface IKbarButtonProps {}

export function KbarButton(props: IKbarButtonProps) {
  const { query } = useKBar();
  return (
    <button
      aria-label="Toggle command bar"
      type="button"
      title="⌘ + k"
      onClick={query.toggle}
      className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
    >
      <FiCommand aria-hidden className="h-5 w-5" />
    </button>
  );
}
