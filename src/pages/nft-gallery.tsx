import { MainLayout } from '@/components/layout';
import type { InferGetStaticPropsType } from 'next';
import type { OpenSeaAsset } from '@/types/opensea';
import type { PoapAsset } from '@/types/poap';
import {
  NFTAccordian,
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
    <MainLayout
      title="Nafees Nazik – my NFT collection"
      description="my NFT collection"
      image="https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dpaco%26title%3DNafeez.xyz%2B-%2BMy%2BNFT%2BGallery%26p%3D2gO1PEZsZXgKICBzeD17ewogICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIGJnOiBxdWVyeS5iZywKICAgIGNvbG9yOiBxdWVyeS5jb2xvciwKICAgIHBhZGRpbmc6IDgwLAogIH19Cj4KICA8RmxleAogICAgc3g9e3sKICAgICAganVzdGlmeUNvbnRlbnQ6ICJzcGFjZS1iZXR3ZWVuIiwKICAgICAgYWxpZ25JdGVtczogImZsZXgtZW5kIiwKICAgIH19CiAgPgogICAgPExpbmsKICAgICAgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDcwMCZkaXNwbGF5PWJsb2NrIgogICAgICByZWw9InN0eWxlc2hlZXQiCiAgICAvPgogICAgPFRleHQKICAgICAgc3g9e3sKICAgICAgICBmb250RmFtaWx5OiAiSW50ZXIiLAogICAgICAgIGZvbnRTaXplOiA1NSwKICAgICAgICBmb250V2VpZ2h0OiA3MDAsCiAgICAgICAgbGluZUhlaWdodDogIjEwMCUiLAogICAgICAgIGxldHRlclNwYWNpbmc6ICItNHB4IiwKICAgICAgICBmbGV4OiAiMCAxIDYwJSIsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICAgIDxGbGV4IHN4PXt7IGdhcDogMjAsIGFsaWduSXRlbXM6ICJjZW50ZXIiIH19PgogICAgICA8Qm94CiAgICAgICAgc3g9e3sKICAgICAgICAgIGJhY2tncm91bmRJbWFnZToKICAgICAgICAgICAgImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDIzNiwgNzIsIDE1MyksIHJnYigyMzksIDY4LCA2OCksIHJnYigyNDUsIDE1OCwgMTEpKSIsCiAgICAgICAgICBoZWlnaHQ6ICI0MHB4IiwKICAgICAgICAgIHdpZHRoOiAiNDBweCIsCiAgICAgICAgICBib3JkZXJSYWRpdXM6ICI5OTk5cHgiCiAgICAgICAgfX0KICAgICAgLz4KICAgICAgPFRleHQgc3g9e3sgZm9udFdlaWdodDogNTAwIH19Pk5hZmVlcyBOYXppazwvVGV4dD4KICAgIDwvRmxleD4KICA8L0ZsZXg-CjwvRmxleD47Cg"
    >
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
