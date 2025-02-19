import { UserData } from "@/app/register/page";
export const registerUser = async (data: UserData) => {
  const res = await fetch(
    "https://next-auth-lilac-rho.vercel.app/api/v1/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
