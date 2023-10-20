import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "Name is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
