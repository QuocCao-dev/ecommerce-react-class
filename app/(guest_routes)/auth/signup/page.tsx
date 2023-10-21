"use client";

import FormContainer from "@/app/components/FormContainer";
import { Button } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormProvider, useForm } from "react-hook-form";
import ControlInput from "@/app/components/ui/forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpSchema } from "../_validation-schema/signup";

const DEFAULT_VALUES: SignUpSchema = { name: "", email: "", password: "" };

export default function SignUp() {
  const form = useForm<SignUpSchema>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(signUpSchema),
  });

  const { control, handleSubmit } = form;

  const handleSignUp = async (values: SignUpSchema) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <FormContainer
        title="Create New Account"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <ControlInput name="name" label="Name" control={control} />
        <ControlInput name="email" label="Email" control={control} />
        <ControlInput
          name="password"
          type="password"
          label="Password"
          control={control}
        />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </FormContainer>
    </FormProvider>
  );
}
