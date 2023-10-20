"use client";

import { PropsWithChildren } from "react";
import useMeStore from "./auth/_stores/me";
import { redirect } from "next/navigation";

type Props = PropsWithChildren<{}>;

const GuestLayout = ({ children }: Props) => {
  const { me } = useMeStore();

  if (me) redirect("/profile");

  return <div className="">{children}</div>;
};
export default GuestLayout;
