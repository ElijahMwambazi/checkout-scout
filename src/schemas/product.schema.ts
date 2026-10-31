import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2),
  categoryId: z.string().uuid().optional(),
  brand: z.string().optional(),
  model: z.string().optional()
});
