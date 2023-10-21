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
            <CartIcon cartItems={cartItemsCount} /> 

            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
                onClick={() => setOpen(!open)}
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
"use client";

import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import { MenuItems } from "@/app/types";

type Props = {
  menuItems: MenuItems[];
};

const ProfileMenu = ({ menuItems }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {menuItems.map(({ href, icon, label }) => {
          return (
            <Link key={href} href={href} className="outline-none">
              <MenuItem
                onClick={closeMenu}
                className="flex items-center gap-2 rounded"
              >
                {icon}
                <span>{label}</span>
              </MenuItem>
            </Link>
          );
        })}

        {/* isAdmin  */}
        <Link href="/dashboard" className="outline-none">
          <MenuItem
            onClick={closeMenu}
            className="flex items-center gap-2 rounded"
          >
            <RectangleGroupIcon className="w-4 h-4" />
            <span>Dashboard</span>
          </MenuItem>
        </Link>

        <MenuItem>
          <p className="flex items-center gap-2 rounded">
            <PowerIcon className="w-4 h-4" />
            <span>Sign Out</span>
          </p>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
```
---
`auth/signup/page.tsx`
```tsx
"use client";

import AuthFormContainer from "@/app/components/AuthFormContainer";
import { Button, Input } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SignUp() {
  const formErrors: string[] = [];

  return (
    <AuthFormContainer title="Create New Account">
      <Input name="name" label="Name" crossOrigin={undefined} />
      <Input name="email" label="Email" crossOrigin={undefined} />
      <Input
        name="password"
        label="Password"
        type="password"
        crossOrigin={undefined}
      />
      <Button type="submit" className="w-full">
        Sign up
      </Button>
      <div className="">
        {formErrors.map((err) => {
          return (
            <div key={err} className="flex items-center space-x-1 text-red-500">
              <XMarkIcon className="w-4 h-4" />
              <p className="text-xs">{err}</p>
            </div>
          );
        })}
      </div>
    </AuthFormContainer>
  );
}

```

---

`auth/layout.tsx`
```tsx
type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
};

export default AuthLayout;

```

---

`app/components/AuthFormContainer.tsx`
```tsx
import React, { FormEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  title: string;
}

export default function AuthFormContainer({
  title,
  children,
  onSubmit,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-6 space-y-6 bg-white rounded-md shadow-md w-96"
    >
      <h3 className="font-semibold text-center">{title}</h3>
      {children}
    </form>
  );
}
```
---

`app/auth/signip/page.tsx`
```tsx
"use client";

import AuthFormContainer from "@/app/components/AuthFormContainer";
import Input from "@/app/components/ui/forms/Input";
import Button from "@material-tailwind/react/components/Button";
import Link from "next/link";

const SignInPage = () => {
  return (
    <AuthFormContainer title="Create New Account" onSubmit={() => {}}>
      <Input name="email" label="Email" />
      <Input name="password" label="Password" type="password" />
      <Button type="submit" className="w-full" disabled={false}>
        Sign in
      </Button>
      <div className="flex items-center justify-between">
        <Link href="/auth/signup">Sign up</Link>
        <Link href="/auth/forget-password">Forget password</Link>
      </div>
    </AuthFormContainer>
  );
};
export default SignInPage;

```

---

`app/auth/forget-password/page.tsx`
```tsx
"use client";

import FormContainer from "@/app/components/AuthFormContainer";
import Input from "@/app/components/ui/forms/Input";
import Button from "@material-tailwind/react/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";

const ForgetPasswordPage = () => {
  const { control } = useForm();

  return (
    <FormContainer title="Forget Password" onSubmit={() => {}}>
      <Input name="email" label="Email" control={control} />
      <Button type="submit" className="w-full" disabled={false}>
        Send Link
      </Button>
      <div className="flex items-center justify-between">
        <Link href="/auth/signin">Sign in</Link>
        <Link href="/auth/signup">Sign up</Link>
      </div>
    </FormContainer>
  );
};
export default ForgetPasswordPage;
```

---
Reset password
`app/(guest_routes)/reset-password/page.tsx`
```tsx
"use client";

import FormContainer from "@/app/components/FormContainer";
import Input from "@/app/components/ui/forms/Input";
import Button from "@material-tailwind/react/components/Button";
import { useForm } from "react-hook-form";

const ResetPasswordPage = () => {
  const { control } = useForm();

  return (
    <FormContainer title="Reset password" onSubmit={() => {}}>
      <Input
        name="password"
        label="Password"
        type="password"
        control={control}
      />
      <Input
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        control={control}
      />
      <Button type="submit" className="w-full" disabled={false}>
        Reset Password
      </Button>
    </FormContainer>
  );
};
export default ResetPasswordPage;

```
---
Admin Sidebar
`app/components/AdminSidebar.tsx`
```tsx
"use client";

import Link from "next/link";
import React, { PropsWithChildren } from "react";
import {
  Squares2X2Icon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  SparklesIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

type Props = PropsWithChildren<{}>;

const AdminSidebar = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between bg-cyan-600 h-screen sticky top-0 w-64 p-10">
        <ul className="space-y-4 text-white">
          <li>
            <Link
              className="font-semibold text-lg text-white"
              href="/dashboard"
            >
              Ecommerce
            </Link>
          </li>
          <li>
            <Link className="flex items-center space-x-1" href="/dashboard">
              <Squares2X2Icon className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <hr className="w-full " />
          </li>
          <li>
            <Link className="flex items-center space-x-1" href="/products">
              <ShoppingCartIcon className="w-4 h-4" />
              <span>Products</span>
            </Link>
            <hr className="w-full " />
          </li>
          <li>
            <Link
              className="flex items-center space-x-1"
              href="/products/featured/add"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Featured</span>
            </Link>
            <hr className="w-full " />
          </li>
          <li>
            <Link className="flex items-center space-x-1" href="/sales">
              <CurrencyDollarIcon className="w-4 h-4" />
              <span>Sales</span>
            </Link>
            <hr className="w-full " />
          </li>
          <li>
            <Link className="flex items-center space-x-1" href="/orders">
              <ShoppingBagIcon className="h-4 w-4" />
              <span>Orders</span>
            </Link>
            <hr className="w-full " />
          </li>
        </ul>

        <div>
          <Button>
            <div className="cursor-pointer text-white">Logout</div>
          </Button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex-1 p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
export default AdminSidebar;

```
---
Admin Layout
`app/components/AdminLayout.tsx`
```tsx
import { PropsWithChildren } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

type Props = PropsWithChildren<{}>;

const AdminLayout = ({ children }: Props) => {
  return <AdminSidebar>{children}</AdminSidebar>;
};

export default AdminLayout;

```

---

Product Table 
`app/components/ProductTable.tsx`
```tsx
"use client";
import { PencilIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Typography,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Button,
} from "@material-tailwind/react";
import truncate from "truncate";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchForm from "./SearchForm";

export type TProduct = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  price: {
    mrp: number;
    salePrice: number;
    saleOff: number;
  };
  category: string;
  quantity: number;
};

const formatPrice = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(amount);
};

const TABLE_HEAD = [
  "Product",
  "MRP",
  "Sale Price",
  "Quantity",
  "Category",
  "Edit",
];

interface Props {
  products: TProduct[];
  currentPageNo: number;
  hasMore?: boolean;
  showPageNavigator?: boolean;
}

const ProductTable = (props: Props) => {
  const router = useRouter();
  const {
    products = [],
    currentPageNo,
    hasMore,
    showPageNavigator = true,
  } = props;

  const handleOnPrevPress = () => {
    const prevPage = currentPageNo - 1;
    if (prevPage > 0) router.push(`/products?page=${prevPage}`);
  };

  const handleOnNextPress = () => {
    const nextPage = currentPageNo + 1;
    router.push(`/products?page=${nextPage}`);
  };

  return (
    <div className="py-5">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Typography variant="h5" color="blue-gray">
            Products
          </Typography>
        </div>
        <div className="flex w-full shrink-0 gap-2 md:w-max">
          <SearchForm />
          <Link
            href="/products/create"
            className="select-none font-bold text-center uppercase transition-all text-xs py-2 px-4 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3"
          >
            <PlusIcon strokeWidth={2} className="h-4 w-4" />{" "}
            <span>Add New</span>
          </Link>
        </div>
      </div>
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              const { id, thumbnail, title, price, quantity, category } = item;
              const isLast = index === products.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={thumbnail}
                        alt={title}
                        size="md"
                        variant="rounded"
                      />
                      <Link href={`/${title}/${id}`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {truncate(title, 30)}
                        </Typography>
                      </Link>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatPrice(price.mrp)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatPrice(price.salePrice)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography variant="small" color="blue-gray">
                        {quantity}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography variant="small" color="blue-gray">
                        {category}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Link href={`/products/update/${id}`}>
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      {showPageNavigator ? (
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
          <div className="flex items-center gap-2">
            <Button
              disabled={currentPageNo === 1}
              onClick={handleOnPrevPress}
              variant="text"
            >
              Previous
            </Button>
            <Button
              disabled={!hasMore}
              onClick={handleOnNextPress}
              variant="text"
            >
              Next
            </Button>
          </div>
        </CardFooter>
      ) : null}
    </div>
  );
};
export default ProductTable;

```
---
`app/components/SearchForm.tsx`
```tsx
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) return;
        router.push(`/products/search?query=${query}`);
      }}
      className="w-full md:w-72"
    >
      <Input
        label="Search"
        icon={
          <button>
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        }
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        crossOrigin={undefined}
      />
    </form>
  );
}

```

---
ImageSelector
```tsx
"use client";
import React, { ChangeEventHandler } from "react";
import { TrashIcon, PhotoIcon } from "@heroicons/react/24/outline";
import SelectedImageThumb from "@/app/ui/SelectedImageThumb";
import ImageInput from "@/app/ui/ImageInput";

interface Props {
  id: string;
  images?: string[];
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onRemove?(index: number): void;
}

export default function ImageSelector({
  id,
  images,
  onChange,
  onRemove,
  multiple,
}: Props) {
  const icon = multiple ? (
    <div className="relative">
      <PhotoIcon className="w-8 h-8 bg-white" />
      <PhotoIcon className="w-8 h-8 absolute -top-2 -right-2 -z-10" />
    </div>
  ) : (
    <PhotoIcon className="w-8 h-8" />
  );

  return (
    <div className="flex items-center space-x-4">
      {images?.map((img, index) => {
        return (
          <div key={index} className="relative">
            <SelectedImageThumb src={img} />
            {multiple ? (
              <div
                onClick={() => onRemove?.(index)}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded cursor-pointer"
              >
                <TrashIcon className="w-4 h-4" />
              </div>
            ) : null}
          </div>
        );
      })}

      <ImageInput id={id} onChange={onChange} multiple={multiple}>
        {icon}
      </ImageInput>
    </div>
  );
}

```

---
ProductForm
```tsx
"use client";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import React, {
  useEffect,
  useState,
  useTransition,
  ChangeEventHandler,
} from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import categories from "@/app/utils/categories";
import ImageSelector from "./ImageSelector";

interface Props {
  initialValue?: InitialValue;
  onSubmit(values: any): void;
}

export interface InitialValue {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images?: string[];
  bulletPoints: string[];
  mrp: number;
  salePrice: number;
  category: string;
  quantity: number;
}

const defaultValue = {
  title: "",
  description: "",
  bulletPoints: [""],
  mrp: 0,
  salePrice: 0,
  category: "",
  quantity: 0,
};

export default function ProductForm(props: Props) {
  const { onSubmit, initialValue } = props;
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState<File[]>([]);
  const [thumbnail, setThumbnail] = useState<File>();
  const [isForUpdate, setIsForUpdate] = useState(false);
  const [productInfo, setProductInfo] = useState({ ...defaultValue });
  const [thumbnailSource, setThumbnailSource] = useState<string[]>();
  const [productImagesSource, setProductImagesSource] = useState<string[]>();

  const fields = productInfo.bulletPoints;

  const addMoreBulletPoints = () => {
    setProductInfo({
      ...productInfo,
      bulletPoints: [...productInfo.bulletPoints, ""],
    });
  };

  const removeBulletPoint = (indexToRemove: number) => {
    const points = [...productInfo.bulletPoints];
    const filteredPoints = points.filter((_, index) => index !== indexToRemove);
    setProductInfo({
      ...productInfo,
      bulletPoints: [...filteredPoints],
    });
  };

  const updateBulletPointValue = (value: string, index: number) => {
    const oldValues = [...fields];
    oldValues[index] = value;

    setProductInfo({ ...productInfo, bulletPoints: [...oldValues] });
  };

  const removeImage = async (index: number) => {
    const newImages = images.filter((_, idx) => idx !== index);
    setImages([...newImages]);
  };

  const getBtnTitle = () => {
    if (isForUpdate) return isPending ? "Updating" : "Update";
    return isPending ? "Creating" : "Create";
  };

  useEffect(() => {
    if (initialValue) {
      setProductInfo({ ...initialValue });
      setThumbnailSource([initialValue.thumbnail]);
      setProductImagesSource(initialValue.images);
      setIsForUpdate(true);
    }
  }, []);

  const onImagesChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const files = target.files;
    if (files) {
      const newImages = Array.from(files).map((item) => item);
      const oldImages = productImagesSource || [];
      setImages([...images, ...newImages]);
      setProductImagesSource([
        ...oldImages,
        ...newImages.map((file) => URL.createObjectURL(file)),
      ]);
    }
  };

  const onThumbnailChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const files = target.files;
    if (files) {
      const file = files[0];
      setThumbnail(file);
      setThumbnailSource([URL.createObjectURL(file)]);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="mb-2 text-xl">Add new product</h1>

      <form className="space-y-6">
        <div className="space-y-4">
          <h3>Poster</h3>
          <ImageSelector
            id="thumb"
            images={thumbnailSource}
            onChange={onThumbnailChange}
          />

          <h3>Images</h3>
          <ImageSelector
            multiple
            id="images"
            images={productImagesSource}
            onRemove={removeImage}
            onChange={onImagesChange}
          />
        </div>

        <Input
          label="Title"
          value={productInfo.title}
          onChange={({ target }) =>
            setProductInfo({ ...productInfo, title: target.value })
          }
          crossOrigin={undefined}
        />

        <Textarea
          className="h-52"
          label="Description"
          value={productInfo.description}
          onChange={({ target }) =>
            setProductInfo({ ...productInfo, description: target.value })
          }
        />

        <Select
          onChange={(category) => {
            if (category) setProductInfo({ ...productInfo, category });
          }}
          value={productInfo.category}
          label="Select Category"
        >
          {categories.map((c) => (
            <Option value={c} key={c}>
              {c}
            </Option>
          ))}
        </Select>

        <div className="flex space-x-4">
          <div className="space-y-4 flex-1">
            <h3>Price</h3>

            <Input
              value={productInfo.mrp}
              label="MRP"
              onChange={({ target }) => {
                const mrp = +target.value;
                setProductInfo({ ...productInfo, mrp });
              }}
              className="mb-4"
              crossOrigin={undefined}
            />
            <Input
              value={productInfo.salePrice}
              label="Sale Price"
              onChange={({ target }) => {
                const salePrice = +target.value;
                setProductInfo({ ...productInfo, salePrice });
              }}
              className="mb-4"
              crossOrigin={undefined}
            />
          </div>

          <div className="space-y-4 flex-1">
            <h3>Stock</h3>

            <Input
              value={productInfo.quantity}
              label="Qty"
              onChange={({ target }) => {
                const quantity = +target.value;
                if (!isNaN(quantity))
                  setProductInfo({ ...productInfo, quantity });
              }}
              className="mb-4"
              crossOrigin={undefined}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3>Bullet points</h3>
          {fields.map((field, index) => (
            <div key={index} className="flex items-center">
              <Input
                type="text"
                value={field}
                label={`Bullet point ${index + 1}`}
                onChange={({ target }) =>
                  updateBulletPointValue(target.value, index)
                }
                className="mb-4"
                crossOrigin={undefined}
              />
              {fields.length > 1 ? (
                <button
                  onClick={() => removeBulletPoint(index)}
                  type="button"
                  className="ml-2"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              ) : null}
            </div>
          ))}

          <button
            disabled={isPending}
            type="button"
            onClick={addMoreBulletPoints}
            className="flex items-center space-x-1 text-gray-800 ml-auto"
          >
            <PlusIcon className="w-4 h-4" />
            <span>Add more</span>
          </button>
        </div>

        <Button disabled={isPending} type="submit">
          {getBtnTitle()}
        </Button>
      </form>
    </div>
  );
}

```

---

ImageInput
```tsx
import React, { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export default function ImageInput({ id, onChange, children, ...rest }: Props) {
  if (children) rest.hidden = true;
  else rest.hidden = false;

  return (
    <label htmlFor={id}>
      <input
        type="file"
        id={id}
        onChange={onChange}
        accept="image/*"
        {...rest}
      />
      <div className="w-20 h-20 rounded flex items-center justify-center border border-gray-700 cursor-pointer">
        {children}
      </div>
    </label>
  );
}

```

---

SelectedImageThumb
```tsx
import Image from "next/image";

interface Props {
  src?: string;
}

const SelectedImageThumb = ({ src }: Props) => {
  if (!src) return null;

  return (
    <div className="w-20 h-20 relative">
      <Image
        src={src}
        alt="product"
        fill
        className="object-fill rounded bg-blue-gray-200"
      />
    </div>
  );
};

export default SelectedImageThumb;

```
---
categories
```ts
const categories = [
  "Electronics",
  "Fashion",
  "Home and Kitchen",
  "Health and Beauty",
  "Sports and Fitness",
  "Baby and Kids",
  "Automotive",
  "Books, Music, and Movies",
  "Office and School Supplies",
  "Pet Supplies",
  "Home Improvement",
  "Outdoor and Garden",
  "Art and Crafts",
  "Food and Beverages",
  "Jewelry and Watches",
  "Travel and Luggage",
  "Gifts and Occasions",
  "Industrial and Scientific",
  "Electronics Accessories",
];

export default categories;

```