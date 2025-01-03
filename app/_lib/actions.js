"use server";

import { redirect } from "next/navigation";
import supabase from "./supabase";

export async function orderAction(formData) {
  const newOrder = {
    email: formData.get("email"),
    totalPrice: formData.get("totalPrice"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    address: formData.get("address"),
    phoneNumber: formData.get("phoneNumber"),
    city: formData.get("city"),
    ids: formData.get("ids"),
  };
  const { data, error } = await supabase
    .from("orders")
    .insert([newOrder])
    .select();
}
