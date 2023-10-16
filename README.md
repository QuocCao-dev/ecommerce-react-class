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
`app/components/CartIcon.tsx`
```tsx
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

type Props = {
  cartItems: number;
};

const CartIcon = ({ cartItems }: Props) => {
  return (
    <Link
      className="bg-amber-500 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center p-2 rounded-full relative"
      href="/cart"
    >
      <ShoppingCartIcon className="w-4 h-4" />
      <div className="absolute bg-gray-700 text-white lg:text-xs text-[9px] -top-2 -right-1 w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center rounded-full">
        {cartItems}
      </div>
    </Link>
  );
};
export default CartIcon;

```
---
app/components/MobileNav.tsx
```tsx
import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { XMarkIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import { PowerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MenuItems } from "@/app/types";
import { menuItems } from "./navbar/NavUi";

type Props = {
  open: boolean;
  onClose(): void;
  menuItems: MenuItems[];
};

const MobileNav = ({ open, onClose }: Props) => {
  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <div className="z-50 flex items-center justify-between p-4 mb-2">
          <Typography variant="h5" color="blue-gray">
            Next Ecom
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={onClose}>
            <XMarkIcon strokeWidth={2} className="w-5 h-5" />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({ href, icon, label }) => {
            return (
              <Link key={href} href={href}>
                <ListItem onClick={onClose}>
                  <ListItemPrefix>{icon}</ListItemPrefix>
                  {label}
                </ListItem>
              </Link>
            );
          })}

          {/* isAdmin  */}
          <Link href="/dashboard">
            <ListItem onClick={onClose}>
              <ListItemPrefix>
                <RectangleGroupIcon className="w-4 h-4" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>

          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="w-5 h-5" />
            </ListItemPrefix>
            Sign Out
          </ListItem>
          <div className="flex items-center">
            <Link className="flex-1 px-4 py-1 text-center" href="/auth/signin">
              Sign in
            </Link>
            <Link
              className="flex-1 px-4 py-1 text-center text-white bg-blue-500 rounded"
              href="/auth/signup"
            >
              Sign up
            </Link>
          </div>
        </List>
      </Drawer>
    </>
  );
};
export default MobileNav;

```
---
`app/components/ProfileMenu.tsx`
```tsx
```