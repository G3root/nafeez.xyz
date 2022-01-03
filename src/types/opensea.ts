export interface OpenSeaAsset {
  id: number;
  name: string;
  image_url: string;
  image_preview_url: string;
  image_original_url: string;
  image_thumbnail_url: string;
  permalink: string;
  description: string;
  collection: {
    name: string;
    slug: string;
    image_url: string;
  };
  asset_contract: {
    name: string;
  };
  token_id: string;
}
