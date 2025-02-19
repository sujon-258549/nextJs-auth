"use server";
import { FormValues } from "@/app/login/page";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(
    "https://next-auth-lilac-rho.vercel.app/api/v1/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const loginInfo = await res.json();
  return loginInfo;
};
