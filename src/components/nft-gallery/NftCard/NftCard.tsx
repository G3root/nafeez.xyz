import * as React from 'react';
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
    <div className="group relative cursor-pointer">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={imageUrl}
          alt={name}
          height={400}
          width={400}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>

      <p className="break-words cursor-pointer text-center truncate text-lg font-semibold mt-4 ">
        {name}
      </p>
    </div>
  );
}
