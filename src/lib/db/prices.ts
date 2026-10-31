import { createClient } from "@/lib/supabase/server";

export async function listPriceReports() {
  const supabase = await createClient();
  return supabase.from("price_reports").select("*");
}
