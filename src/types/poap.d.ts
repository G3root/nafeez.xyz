export interface PoapAsset {
  created: string;
  event: {
    city: string;
    country: string;
    description: string;
    end_date: string;
    event_url: string;
    expiry_date: string;
    fancy_id: string;
    id: number;
    image_url: string;
    name: string;
    start_date: string;
    supply: number;
    year: number;
  };
  owner: string;
  tokenId: string;
}
