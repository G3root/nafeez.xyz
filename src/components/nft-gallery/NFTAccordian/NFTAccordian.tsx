import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import { FiChevronRight, FiExternalLink } from 'react-icons/fi';
export interface INFTAccordianProps {
  name: string;
  slug: string;
  image: string;

  nfts: {
    id: string;
    name: string;
    image: string;
    description: string;
    openseaLink?: string;
  }[];
}

export function NFTAccordian(props: INFTAccordianProps) {
  const { slug, name, image, nfts } = props;
  return (
    <Accordion.Item value={slug}>
      <Accordion.Header asChild>
        <Accordion.Trigger className="w-full relative rounded-2xl mb-3 hover:dark:bg-gray-800 focus:ring-2  hover:bg-gray-200 p-3 group max-w-5xl">
          <span className="relative flex items-center w-full flex-wrap space-x-2">
            <Image
              width={45}
              height={45}
              alt={`${name} nft collection`}
              src={image}
              className="rounded-full"
            />

            <div className="flex-1 ">
              <div className="flex w-full items-center justify-between">
                <h3 className=" text-lg font-semibold  ">{name}</h3>

                <div className="flex items-center space-x-2">
                  <span>{nfts.length}</span>
                  <FiChevronRight
                    aria-hidden
                    className="h-5 w-5 group-rdx-state-open:rotate-90 transition ease-out delay-150"
                  />
                </div>
              </div>
            </div>
          </span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="mb-2">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-3">
          {nfts.map((data) => (
            <React.Fragment key={data.id}>
              <div className="md:col-span-2">
                <Image
                  width={200}
                  height={200}
                  className="rounded-md"
                  alt={`${data.name} nft`}
                  src={data.image}
                />
              </div>
              <div className="md:col-span-10">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold mt-4 ">{data.name}</h3>
                  {data.openseaLink ? (
                    <a
                      href={data.openseaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="mt-4" />
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400  max-w-2xl break-words">
                  {data.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function AccordianRoot({ children }: { children: React.ReactNode }) {
  return <Accordion.Root type="multiple">{children}</Accordion.Root>;
}
