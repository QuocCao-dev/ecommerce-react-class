"use client";

import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import useMeStore from "../(guest_routes)/auth/_stores/me";

type Props = PropsWithChildren<{}>;

const PrivateRoutes = ({ children }: Props) => {
  //   const { me } = useMeStore();
  console.log("PrivateRoutes");

  //   if (!me) redirect("/auth/signin");

  return <div>{children}</div>;
};
export default PrivateRoutes;
