# Database Design

Checkout Scout is relational by nature.

Core entities:

- stores
- categories
- products
- price_reports
- price_votes
- profiles

The most important data pattern is:

> product + store + latest approved price report

Moderation and freshness matter more than perfect inventory accuracy.
