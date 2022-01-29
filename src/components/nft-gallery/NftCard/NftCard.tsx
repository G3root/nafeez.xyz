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
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={imageUrl}
          alt={name}
          height={400}
          width={400}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>

      <p className="mt-4 cursor-pointer truncate break-words text-center text-lg font-semibold ">
        {name}
      </p>
    </div>
  );
}
