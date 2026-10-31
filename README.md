# Checkout Scout

Checkout Scout is a community-updated local price discovery app.

It helps users check product prices across nearby stores before buying.

## Purpose

Checkout Scout is not a marketplace.

It does not handle:

- carts
- orders
- payments
- delivery
- commissions

The core goal is simple:

> Check local prices before you buy.

## MVP Features

- Browse stores
- Browse products
- Compare prices
- Submit price reports
- Confirm existing prices
- Report changed prices
- Admin moderation

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui style components
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Vercel

## Project Structure

```txt
src/
├── app/              Next.js app routes
├── components/       Reusable UI and feature components
├── lib/              Supabase clients, db helpers, utilities
├── schemas/          Zod validation schemas
├── types/            TypeScript domain types
└── data/             Mock data and constants

supabase/
├── migrations/       Database migrations
└── seed.sql          Starter seed data

docs/
├── project-brief.md
├── database-design.md
├── mvp-scope.md
├── user-flows.md
└── moderation-rules.md
```

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file based on `.env.example`.

## Environment Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Suggested First Commit

```bash
git add .
git commit -m "chore: scaffold checkout scout project"
```
