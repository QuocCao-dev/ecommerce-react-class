"use client";

import AuthFormContainer from "@/app/components/AuthFormContainer";
import { Button } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import ControlInput from "@/app/components/ui/forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const DEFAULT_VALUES: SignUpFormValues = { name: "", email: "", password: "" };

export default function SignUp() {
  const form = useForm<SignUpFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(signUpSchema),
  });

  const formErrors: string[] = [];
  const { control, handleSubmit } = form;

  const handleSignUp = async (values: SignUpFormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <AuthFormContainer
        title="Create New Account"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <ControlInput name="name" label="Name" />
        <ControlInput name="email" label="Email" />
        <ControlInput name="password" type="password" label="Password" />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <div className="">
          {formErrors.map((err) => {
            return (
              <div
                key={err}
                className="flex items-center space-x-1 text-red-500"
              >
                <XMarkIcon className="w-4 h-4" />
                <p className="text-xs">{err}</p>
              </div>
            );
          })}
        </div>
      </AuthFormContainer>
    </FormProvider>
  );
}
