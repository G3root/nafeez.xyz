import { MainLayout } from '@/components/layout';
import type { InferGetStaticPropsType } from 'next';
import type { OpenSeaAsset } from '@/types/opensea';
import { NftCard } from '@/components/nft-gallery';
import { Link } from '@/components/common';
type NftMetadata = {
  assets: OpenSeaAsset[];
};

export const getStaticProps = async () => {
  const req = await fetch(
    'https://api.opensea.io/api/v1/assets?owner=0xD2eCE15856813709Dd181A55c9fC82059Fdb2E2c&order_direction=desc&offset=0&limit=20'
  );
  const res: NftMetadata = await req.json();

  return {
    props: { ...res, revalidate: 60 * 60 * 4 } //revalidate every 4 hours
  };
};

const NftGallery = ({
  assets
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout>
      <section className="flex flex-col items-start justify-center max-w-7xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-white">
          My NFT Gallery
        </h1>
        <div>
          <p className="mb-4 text-gray-600 dark:text-gray-400 max-w-lg">
            These are the collection of nft&apos;s I own and also check out my
            account on{' '}
            <Link
              isExternal
              href="https://opensea.io/nfs__21"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenSea
            </Link>
            .
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-4">
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
      </section>
    </MainLayout>
  );
};

export default NftGallery;
