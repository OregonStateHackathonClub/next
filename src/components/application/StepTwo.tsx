"use client";

import { useForm } from "react-hook-form";
import { projectSchema } from "@/features/projectform/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const projectFormSchema = projectSchema.pick({
  projectName: true,
  projectDescription: true,
});

type ProjectFormSchema = z.infer<typeof projectFormSchema>;

export function StepTwo() {
  // const [projectTitle, setProjectTitle] = useState("");
  // const [projectDescription, setProjectDescription] = useState("");

  const form = useForm<ProjectFormSchema>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
    },
  });

  const onSubmit = (data: ProjectFormSchema) => {
    console.log(data);
  };

  return (
    <div className="pt-60 px-8 max-w-2xl mx-auto w-full">
      <h2 className="text-white-3xl font-bold mb-2 text-left">
        2 → Enter your project information
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="Project Title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Input placeholder="Project Description..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
