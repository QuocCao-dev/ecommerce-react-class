import { useMutation } from "@tanstack/react-query";
import { signInService } from "@/app/(guest_routes)/auth/_services/auth";
import { TSignInPayload } from "@/app/(guest_routes)/auth/_types";
import useMe from "@/app/(guest_routes)/auth/_hooks/queries/useMe";
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
