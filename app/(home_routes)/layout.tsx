import { PropsWithChildren } from "react";
import Navbar from "@/app/components/navbar/Navbar";

type Props = PropsWithChildren<{}>;

const HomeLayout = ({ children }: Props) => {
  console.log("HomeLayout");
  return (
    <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
      <Navbar />
      {children}
    </div>
  );
};
export default HomeLayout;
