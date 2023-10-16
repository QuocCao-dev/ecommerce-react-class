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
