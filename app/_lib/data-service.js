import supabase from "./supabase";

export async function getAllStore() {
  const { data, error } = await supabase.from("store").select("*");
  return data;
}
