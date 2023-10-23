"use client";

import FormContainer from "@/app/components/FormContainer";
import Input from "@/app/components/ui/forms/ControlInput";
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
