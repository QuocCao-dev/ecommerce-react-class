"use client";

import {
  SignInFormValues,
  signInSchema,
} from "@/app/(guest_routes)/auth/_validation-schema/signin";
import FormContainer from "@/app/components/FormContainer";
import Input from "@/app/components/ui/forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@material-tailwind/react/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSignIn } from "@/app/(guest_routes)/auth/_hooks/mutations/useSignIn";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate: $signIn } = useSignIn();
  const router = useRouter();

  const handleSignIn = (values: SignInFormValues) => {
    $signIn(values, {
      onSuccess() {
        router.push("/");
      },
    });
  };

  return (
    <FormContainer
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
    </FormContainer>
  );
};
export default SignInPage;
