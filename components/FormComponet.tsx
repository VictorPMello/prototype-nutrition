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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = Z.object({
  username: Z.string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
  whatsapp: Z.string(),
  email: Z.email(),
  objective: Z.string().min(1, {
    message: "Nome de usuário deve ter pelo menos 3 caracteres",
  }),
});

export function FormComponent() {
  const ref = useRef(null);

  const form = useForm<Z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      whatsapp: "",
      email: "",
      objective: "",
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
          className="flex flex-col justify-center gap-4 p-4 backdrop-blur-sm rounded-4xl w-3xl h-[30rem]"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="h-16 !text-2xl border-0 !bg-primary-foreground !text-primary"
                    placeholder="Nome*"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    className="h-16 !text-2xl border-0 !bg-primary-foreground !text-primary"
                    placeholder="WhatsApp*"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="h-16 !text-2xl border-0 !bg-primary-foreground !text-primary"
                    placeholder="Email*"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="objective"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full !h-16 !text-2xl border-0 !bg-primary-foreground !text-primary">
                      <SelectValue placeholder="Objetivo Principal*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        className="w-full !h-16 !text-2xl border-0 !bg-primary-foreground !text-primary hover:!bg-primary-foreground/80"
                        value="perder-peso"
                      >
                        Perder Peso
                      </SelectItem>
                      <SelectItem
                        className="w-full !h-16 !text-2xl border-0 !bg-primary-foreground !text-primary hover:!bg-primary-foreground/80"
                        value="ganhar-massa"
                      >
                        Ganhar Massa Muscular
                      </SelectItem>
                      <SelectItem
                        className="w-full !h-16 !text-2xl border-0 !bg-primary-foreground !text-primary hover:!bg-primary-foreground/80"
                        value="reeducacao"
                      >
                        Reeducação Alimentar
                      </SelectItem>
                      <SelectItem
                        className="w-full !h-16 !text-2xl border-0 !bg-primary-foreground !text-primary hover:!bg-primary-foreground/80"
                        value="melhora-saude"
                      >
                        Melhoria da Saúde
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="h-16 !text-2xl border-0 !bg-primary-foreground !text-primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </motion.section>
  );
}
