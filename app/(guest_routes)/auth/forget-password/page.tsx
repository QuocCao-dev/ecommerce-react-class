"use client";

import FormContainer from "@/app/components/FormContainer";
import Input from "@/app/components/ui/forms/ControlInput";
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
