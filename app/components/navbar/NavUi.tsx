"use client";

import { useEffect, useState } from "react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Navbar as MaterialNav } from "@material-tailwind/react";
import Link from "next/link";

import CartIcon from "@/app/components/CartIcon";
import MobileNav from "@/app/components/MobileNav";
import ProfileMenu from "@/app/components/ProfileMenu";

export const menuItems = [
  {
    href: "/profile",
    icon: <UserCircleIcon className="w-4 h-4" />,
    label: "My Profile",
  },
  {
    href: "/profile/orders",
    icon: <ShoppingBagIcon className="w-4 h-4" />,
    label: "Orders",
  },
];

type Props = {
  cartItemsCount: number;
};

const NavUi = ({ cartItemsCount }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <MaterialNav className="max-w-screen-xl px-4 py-2 mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            href="/"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-semibold"
          >
            Next Ecom
          </Link>

          <div className="items-center hidden gap-2 lg:flex">
            <CartIcon cartItems={cartItemsCount} />
            <ProfileMenu menuItems={menuItems} />
            <Link className="px-4 py-1" href="/auth/signin">
              Sign in
            </Link>
            <Link
              className="px-4 py-1 text-white bg-blue-500 rounded"
              href="/auth/signup"
            >
              Sign up
            </Link>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <CartIcon cartItems={cartItemsCount} />

            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XMarkIcon className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="w-6 h-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
      </MaterialNav>
      <div className="lg:hidden">
        <MobileNav
          menuItems={menuItems}
          onClose={() => setOpen(false)}
          open={open}
        />
      </div>
    </>
  );
};
export default NavUi;
