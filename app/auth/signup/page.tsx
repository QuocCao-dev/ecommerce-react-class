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
