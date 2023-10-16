```bash
npm i @material-tailwind/react
npm i heroicons/react

```

in file `app/components/navbar/NavUi.tsx`, create a file
```tsx
"use client";

import { Navbar as MaterialNav, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import CartIcon from "@/app/components/CartIcon";

export const menuItems = [
  {
    href: "/profile",
    icon: <UserCircleIcon className="h-4 w-4" />,
    label: "My Profile",
  },
  {
    href: "/profile/orders",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    label: "Orders",
  },
];

type Props = {
  cartItemsCount: number;
};

const NavUi = ({ cartItemsCount }: Props) => {
  return (
    <>
      <MaterialNav className="mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            href="/"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-semibold"
          >
            Next Ecom
          </Link>

          <div className="hidden lg:flex gap-2 items-center">
            <CartIcon cartItems={cartItemsCount} />
            {/* <ProfileMenu menuItems={menuItems} /> */}
            <Link className="px-4 py-1" href="/auth/signin">
              Sign in
            </Link>
            <Link
              className="bg-blue-500 text-white px-4 py-1 rounded"
              href="/auth/signup"
            >
              Sign up
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            {/* <CartIcon cartItems={cartItemsCount} /> */}

            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              //   onClick={() => setOpen(!open)}
            >
              {true ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>
      </MaterialNav>
      <div className="lg:hidden">
        {/* <MobileNav
          menuItems={menuItems}
          onClose={() => setOpen(false)}
          open={open}
        /> */}
      </div>
    </>
  );
};
export default NavUi;

```

---

in file `app/components/navbar/Navbar.tsx`, create a file
```tsx
import NavUi from "./NavUi";

const Navbar = () => {
  return (
    <div>
      <NavUi cartItemsCount={1} />
    </div>
  );
};
export default Navbar;
```

---
