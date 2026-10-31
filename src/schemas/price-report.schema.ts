import { z } from "zod";

export const priceReportSchema = z.object({
  productId: z.string().uuid(),
  storeId: z.string().uuid(),
  price: z.coerce.number().positive(),
  notes: z.string().optional()
});
