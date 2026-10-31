insert into public.categories (name, slug)
values
  ('Phones', 'phones'),
  ('Electronics', 'electronics'),
  ('Groceries', 'groceries'),
  ('Hardware', 'hardware'),
  ('Clothing', 'clothing'),
  ('Cosmetics', 'cosmetics')
on conflict (slug) do nothing;

insert into public.stores (name, slug, city, area, is_verified)
values
  ('Example Electronics', 'example-electronics', 'Lusaka', 'Town Centre', false),
  ('Example Groceries', 'example-groceries', 'Lusaka', 'Kabulonga', false)
on conflict (slug) do nothing;
