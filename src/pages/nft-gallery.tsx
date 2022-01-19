import { MainLayout } from '@/components/layout';
import type { InferGetStaticPropsType } from 'next';
import type { OpenSeaAsset } from '@/types/opensea';
import type { PoapAsset } from '@/types/poap';
import {
  NFTAccordian,
  NftCard,
  AccordianRoot,
  WalletAddressButton
} from '@/components/nft-gallery';

type NftMetadata = {
  assets: OpenSeaAsset[];
};

export const getStaticProps = async () => {
  const nftReq = await fetch(
    'https://api.opensea.io/api/v1/assets?owner=0xD2eCE15856813709Dd181A55c9fC82059Fdb2E2c&order_direction=desc&offset=0&limit=20',
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
      }
    }
  );
  const poapReq = await fetch(
    'https://api.poap.xyz/actions/scan/0xD2eCE15856813709Dd181A55c9fC82059Fdb2E2c'
  );
  const nftRes: NftMetadata = await nftReq.json();
  const poapRes: PoapAsset[] = await poapReq.json();

  const nftCollectionBucket: string[] = [];
  const nftCollection = [];
  const poapCollection: {
    collectionSlug: string;
    collectionName: string;
    collectionImage: string;
    assets: { id: string; name: string; image: string; description: string }[];
  } = {
    collectionSlug: 'poap',
    collectionName: 'POAP',
    collectionImage:
      'https://lh3.googleusercontent.com/FwLriCvKAMBBFHMxcjqvxjTlmROcDIabIFKRp87NS3u_QfSLxcNThgAzOJSbphgQqnyZ_v2fNgMZQkdCYHUliJwH-Q=s60',
    assets: []
  };

  for (let index = 0; index < nftRes.assets.length; index++) {
    const nft = nftRes.assets[index];
    if (nftCollectionBucket.includes(nft.collection.name)) {
      nftCollection.find(function (obj) {
        if (obj.collectionName === nft.collection.name)
          obj.assets.push({
            id: nft.token_id,
            name: nft.name,
            image: nft.image_preview_url,
            openseaLink: nft.permalink,
            description: nft.description
          });
      });
    } else {
      nftCollectionBucket.push(nft.collection.name);
      nftCollection.push({
        id: nft.id,
        collectionSlug: nft.collection.slug,
        collectionName: nft.collection.name,
        collectionImage: nft.collection.image_url,
        assets: [
          {
            id: nft.token_id,
            name: nft.name,
            image: nft.image_preview_url,
            openseaLink: nft.permalink,
            description: nft.description
          }
        ]
      });
    }
  }

  for (let index = 0; index < poapRes.length; index++) {
    const poap = poapRes[index];
    poapCollection.assets.push({
      id: poap.tokenId,
      image: poap.event.image_url,
      name: poap.event.name,
      description: poap.event.description
    });
  }
  return {
    props: { nft: nftCollection, poap: poapCollection, revalidate: 60 * 60 * 4 } //revalidate every 4 hours
  };
};

const NftGallery = ({
  nft,
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
            An overview of NFTs in my wallet: <WalletAddressButton />
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 w-full ">
          <AccordianRoot>
            {nft.map(
              ({
                collectionName,
                collectionSlug,
                collectionImage,
                assets,
                id
              }) => (
                <NFTAccordian
                  key={id}
                  name={collectionName}
                  slug={collectionSlug}
                  image={collectionImage}
                  nfts={assets}
                />
              )
            )}

            <NFTAccordian
              name={poap.collectionName}
              slug={poap.collectionSlug}
              image={poap.collectionImage}
              nfts={poap.assets}
            />
          </AccordianRoot>
        </div>
      </section>
    </MainLayout>
  );
};

export default NftGallery;
