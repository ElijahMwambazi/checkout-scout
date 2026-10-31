create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key,
  display_name text,
  role text not null default 'user',
  created_at timestamptz default now()
);

create table public.stores (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  phone text,
  whatsapp text,
  address text,
  city text not null,
  area text,
  latitude numeric,
  longitude numeric,
  is_verified boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamptz default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  slug text unique not null,
  description text,
  brand text,
  model text,
  image_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.price_reports (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete cascade,
  store_id uuid references public.stores(id) on delete cascade,
  reported_by uuid references public.profiles(id) on delete set null,
  price numeric(12, 2) not null,
  currency text not null default 'ZMW',
  status text not null default 'pending',
  proof_image_url text,
  notes text,
  reported_at timestamptz default now(),
  confirmed_at timestamptz
);

create table public.price_votes (
  id uuid primary key default gen_random_uuid(),
  price_report_id uuid references public.price_reports(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  vote_type text not null,
  created_at timestamptz default now(),
  unique(price_report_id, user_id)
);

create index idx_stores_city on public.stores(city);
create index idx_products_name on public.products(name);
create index idx_price_reports_product_id on public.price_reports(product_id);
create index idx_price_reports_store_id on public.price_reports(store_id);
create index idx_price_reports_status on public.price_reports(status);
