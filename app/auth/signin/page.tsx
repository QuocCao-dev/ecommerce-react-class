"use client";

import {
  SignInFormValues,
  signInSchema,
} from "@/app/auth/_validation-schema/signin";
import AuthFormContainer from "@/app/components/AuthFormContainer";
import Input from "@/app/components/ui/forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@material-tailwind/react/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSignIn } from "@/app/auth/hooks/mutations/useSignIn";

const SignInPage = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate: $signIn } = useSignIn();

  const handleSignIn = (values: SignInFormValues) => {
    $signIn(values, {
      onSuccess: () => {
        console.log("on success");
      },
    });
  };

  return (
    <AuthFormContainer
      title="Create New Account"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Input name="email" label="Email" control={control} />
      <Input
        name="password"
        label="Password"
        type="password"
        control={control}
      />
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
