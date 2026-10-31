import { createClient } from "@/lib/supabase/server";

export async function listStores() {
  const supabase = await createClient();
  return supabase.from("stores").select("*");
}
