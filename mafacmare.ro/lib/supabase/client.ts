import { createBrowserClient } from "@supabase/ssr";
import { supabaseConfig } from "./config";

export function createClient() {
  if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    throw new Error("Supabase nu este configurat inca. Adauga variabilele de mediu in pasul urmator.");
  }

  return createBrowserClient(supabaseConfig.url, supabaseConfig.anonKey);
}
