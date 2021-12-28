import { MainLayout } from '@/components/layout';
import type { InferGetStaticPropsType } from 'next';
import type { OpenSeaAsset } from '@/types/opensea';
import type { PoapAsset } from '@/types/poap';
import { NftCard } from '@/components/nft-gallery';
import { Link } from '@/components/common';
type NftMetadata = {
  assets: OpenSeaAsset[];
};

export const getStaticProps = async () => {
  const req = await fetch(
    'https://api.opensea.io/api/v1/assets?owner=0xD2eCE15856813709Dd181A55c9fC82059Fdb2E2c&order_direction=desc&offset=0&limit=20'
  );
  const poapReq = await fetch(
    'https://api.poap.xyz/actions/scan/0xD2eCE15856813709Dd181A55c9fC82059Fdb2E2c'
  );
  const res: NftMetadata = await req.json();
  const poapRes: PoapAsset[] = await poapReq.json();
  return {
    props: { ...res, poap: poapRes, revalidate: 60 * 60 * 4 } //revalidate every 4 hours
  };
};

const NftGallery = ({
  assets,
  poap
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout>
      <section className="flex flex-col items-start justify-center max-w-7xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-white">
          My NFT Gallery
        </h1>
        <div>
          <p className="mb-4 text-gray-600 dark:text-gray-400 max-w-lg">
            These are the collection of nft&apos;s and poap&apos;s I own .
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {assets && assets.length > 0
            ? assets.map(({ name, description, id, image_url, permalink }) => (
                <NftCard
                  name={name}
                  description={description}
                  permalink={permalink}
                  imageUrl={image_url}
                  key={id}
                />
              ))
            : null}
        </div>
        <h2 className="text-3xl mt-10  font-extrabold tracking-tight ">
          Collected POAP&apos;s
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {poap && poap.length > 0
            ? poap.map(({ event, tokenId }) => (
                <NftCard
                  name={event.name}
                  description={event.description}
                  permalink={`https://app.poap.xyz/token/${tokenId}`}
                  imageUrl={event.image_url}
                  key={tokenId}
                />
              ))
            : null}
        </div>
      </section>
    </MainLayout>
  );
};

export default NftGallery;
