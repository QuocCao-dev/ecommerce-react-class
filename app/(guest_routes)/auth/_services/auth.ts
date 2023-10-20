import axiosClient from "@/app/libs/axios-client";
import { TSignInPayload } from "@/app/(guest_routes)/auth/_types";

export const signInService = async (signIn: TSignInPayload) => {
  try {
    const { data } = await axiosClient.post("users/sign-in", signIn);

    return data;
  } catch (error) {
    throw error;
  }
};
