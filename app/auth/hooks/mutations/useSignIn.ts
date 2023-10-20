import { useMutation } from "@tanstack/react-query";
import { signInService } from "@/app/auth/_services/auth";
import { TSignInPayload } from "@/app/auth/types";
import useMe from "@/app/auth/hooks/queries/useMe";
import { useLocalStorage } from "react-use";
import _omit from "lodash/omit";

export const useSignIn = () => {
  const { setMe, me } = useMe();
  const [, setToken] = useLocalStorage("token");

  return useMutation({
    mutationFn: (signInPayload: TSignInPayload) => signInService(signInPayload),
    onSuccess: ({ data }) => {
      setToken(data.token);
      setMe(_omit(data, ["token"]) as any);
    },
  });
};
