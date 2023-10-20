import { useMutation } from "@tanstack/react-query";
import { signInService } from "@/app/auth/_services/auth";
import { TSignInPayload } from "@/app/auth/types";

export const useSignIn = () => {
  return useMutation({
    mutationFn: (signInPayload: TSignInPayload) => signInService(signInPayload),
  });
};
