import { createClient } from "@/lib/supabase/server";

export async function listPriceVotes() {
  const supabase = await createClient();
  return supabase.from("price_votes").select("*");
}
