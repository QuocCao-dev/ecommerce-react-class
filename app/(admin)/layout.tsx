import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const AdminLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AdminLayout;
