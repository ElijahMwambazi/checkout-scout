export type Product = {
  id: string;
  name: string;
  slug: string;
  brand?: string | null;
  model?: string | null;
  image_url?: string | null;
};
