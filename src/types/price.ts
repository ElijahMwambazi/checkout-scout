export type PriceReportStatus = "pending" | "approved" | "rejected" | "outdated";
export type PriceVoteType = "confirmed" | "changed" | "out_of_stock";

export type PriceReport = {
  id: string;
  product_id: string;
  store_id: string;
  price: number;
  currency: "ZMW";
  status: PriceReportStatus;
  reported_at: string;
  confirmed_at?: string | null;
};
