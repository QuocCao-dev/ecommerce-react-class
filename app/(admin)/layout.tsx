import { PropsWithChildren } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

type Props = PropsWithChildren<{}>;

const AdminLayout = ({ children }: Props) => {
  return <AdminSidebar>{children}</AdminSidebar>;
};

export default AdminLayout;
