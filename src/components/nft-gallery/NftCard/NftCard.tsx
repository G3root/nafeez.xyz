import * as React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
export interface INftCardProps {
  imageUrl: string;
  name: string;
  description: string;
  permalink: string;
}

export function NftCard(props: INftCardProps) {
  const { imageUrl, name, description, permalink } = props;
  return (
    <div className="w-full h-full shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300 transform hover:translate-y-[-2px] flex flex-col   border border-transparent dark:border-gray-700">
      <div className="p-4 relative">
        <div className="flex items-center justify-end">
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger className="text-right text-gray-600 dark:text-white focus:outline-none rounded-full relative hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:bg-gray-100 dark:focus-visible:bg-gray-800 p-2">
              <FiMoreHorizontal className="h-6 w-6" aria-hidden="true" />
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Content
              className="space-y-2 min-w-[14rem] rounded-xl p-2 border border-transparent dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-lg "
              align="end"
            >
              <DropdownMenuPrimitive.Item
                onClick={() => window.open(permalink, '_blank')}
                className="font-medium text-gray-900 dark:text-white cursor-pointer select-none rounded-md px-2 py-1 w-full text-left focus:bg-gray-100 focus:dark:bg-gray-800"
              >
                view on opensea
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </div>
      </div>
      <div className="relative">
        <div className="cursor-pointer">
          <div>
            <div className="relative  rounded-lg group-hover:opacity-75 aspect-square">
              <Image
                src={imageUrl}
                alt={name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div>
          <p className="break-words cursor-pointer truncate text-lg font-semibold ">
            {name}
          </p>

          <p className="text-sm font-light leading-relaxed text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
