import supabase from "./supabase";

export async function getAllStore() {
  const { data, error } = await supabase.from("store").select("*");
  console.log(error);
  return data;
}
