export type Store = {
  id: string;
  name: string;
  slug: string;
  city: string;
  area?: string | null;
  is_verified: boolean;
};
