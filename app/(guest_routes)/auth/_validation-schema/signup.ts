import { z } from "zod";
import { signInSchema } from "./signin";

export const signUpSchema = signInSchema.extend({
  name: z.string().min(1, "Name is required"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
