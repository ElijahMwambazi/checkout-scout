import { z } from "zod";

export const storeSchema = z.object({
  name: z.string().min(2),
  city: z.string().min(2),
  area: z.string().optional(),
  phone: z.string().optional(),
  whatsapp: z.string().optional()
});
