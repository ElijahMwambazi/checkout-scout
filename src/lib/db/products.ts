import { createClient } from "@/lib/supabase/server";

export async function listProducts() {
  const supabase = await createClient();
  return supabase.from("products").select("*");
}
