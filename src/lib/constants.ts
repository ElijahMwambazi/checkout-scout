export const APP_NAME = "Checkout Scout";

export const PRICE_REPORT_STATUSES = [
  "pending",
  "approved",
  "rejected",
  "outdated"
] as const;

export const PRICE_VOTE_TYPES = [
  "confirmed",
  "changed",
  "out_of_stock"
] as const;
