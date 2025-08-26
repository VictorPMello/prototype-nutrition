"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as Z from "zod";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

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

const formSchema = Z.object({
  username: Z.string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
});

export function FormComponent() {
  const ref = useRef(null);

  const form = useForm<Z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: Z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col gap-4 p-4 justify-center items-center snap-start snap-always relative text-center"
    >
      <Image
        className="w-screen h-screen absolute inset-0 z-[-10]"
        src="/formBg.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 backdrop-blur-md"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shacn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </motion.section>
  );
}
