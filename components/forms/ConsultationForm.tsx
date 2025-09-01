"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as Z from "zod";

import { useRef } from "react";
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
  SelectItem,
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
  size: Z.string().min(1),
  select: Z.string().min(1, {
    message: "Nome de usuário deve ter pelo menos 3 caracteres",
  }),
});

export function ConsultationForm() {
  const ref = useRef(null);

  const form = useForm<Z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      whatsapp: "",
      email: "",
      objective: "",
      size: "",
      select: "",
    },
  });

  function onSubmit(values: Z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col gap-4 justify-center items-center snap-start snap-always"
    >
      <h2 className="text-lg text-center font-bold text-primary text-shadow-lg/50 text-shadow-black">
        Comece Sua Transformação Hoje
      </h2>

      <p className="text-sm font-bold text-primary text-shadow-lg/50 text-shadow-black text-center">
        Consulta diagnóstica gratuita - Vagas limitadas
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4 px-4 backdrop-blur-sm rounded-4xl h-[30rem]"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 w-full text-xl md:!text-2xl border-black !bg-foreground !text-primary-foreground"
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
                    className="h-12 w-full text-xl md:!text-2xl border-black !bg-foreground !text-primary-foreground"
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
                    className="h-12 w-full text-xl md:!text-2xl border-black !bg-foreground !text-primary-foreground"
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
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 w-full text-xl md:!text-2xl border-black !bg-foreground !text-primary-foreground"
                    placeholder="Peso Atual*"
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
                  <Input
                    type="text"
                    className="h-12 w-full text-xl md:!text-2xl border-black !bg-foreground !text-primary-foreground"
                    placeholder="Objetivo (kg para perder)*"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="select"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full !h-12 !text-2xl border-black !bg-foreground !text-primary-foreground">
                      <SelectValue placeholder="Já fez dietas antes?*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        className="w-full h-12 text-xl md:!text-2xl !bg-foreground !text-primary-foreground hover:!bg-primary-foreground/80"
                        value="perder-peso"
                      >
                        Sim
                      </SelectItem>
                      <SelectItem
                        className="w-full h-12 text-xl md:!text-2xl !bg-foreground !text-primary-foreground hover:!bg-primary-foreground/80"
                        value="ganhar-massa"
                      >
                        Não
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="h-12 text-xl md:!text-2xl border-0 !bg-primary !text-primary-foreground w-full"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>

      <p className="text-lg md:text-xl text-center text-primary text-shadow-lg/50 text-shadow-black">
        <span className="font-bold">Garantia: </span>
        Se não ficar satisfeito(a) nos primeiros 30 dias, devolvemos 100% do
        investimento.
      </p>
    </motion.section>
  );
}
