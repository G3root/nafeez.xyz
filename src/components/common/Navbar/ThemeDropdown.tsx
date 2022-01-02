import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi';
export interface IThemeDropdownProps {}

const states = [
  { name: 'light', icon: <FiSun aria-hidden className="mx-2" /> },
  { name: 'dark', icon: <FiMoon aria-hidden className="mx-2" /> },
  { name: 'system', icon: <FiMonitor aria-hidden className="mx-2" /> }
];

export function ThemeDropdown(props: IThemeDropdownProps) {
  const { theme, setTheme } = useTheme();

  const radioItems = states.map(({ name, icon }) => (
    <DropdownMenu.RadioItem
      key={name}
      className="py-1 pl-4 flex items-center cursor-pointer hover:bg-gray-200/50 hover:dark:bg-gray-700 rounded-sm "
      value={name}
    >
      <DropdownMenu.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
            className="fill-red-500"
          ></path>
        </svg>
      </DropdownMenu.ItemIndicator>
      {icon} {name}
    </DropdownMenu.RadioItem>
  ));
  const onChange = (value: string) => {
    if (theme !== value) {
      setTheme(value);
    }
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label="Switch theme"
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
      >
        <FiMoon aria-hidden className="h-5 w-5 dark:hidden block" />
        <FiSun aria-hidden className="h-5 w-5 dark:block hidden" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-36 bg-gray-50 dark:bg-gray-800 rounded-md p-1 text-sm font-medium shadow-lg overflow-hidden"
        sideOffset={5}
      >
        <DropdownMenu.RadioGroup value={theme} onValueChange={onChange}>
          {radioItems}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
