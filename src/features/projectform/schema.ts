import { z } from "zod";

export const projectSchema = z.object({
  projectName: z
    .string()
    .min(3, { message: "Project name must be longer than 3 characters" })
    .max(50),
  projectDescription: z
    .string()
    .min(1, { message: "Project description cannot be blank" })
    .max(500),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
