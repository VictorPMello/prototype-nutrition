import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { FixedThemeToggle } from "@/components/FixedThemeToggle";
import { LenisProvider } from "@/components/LenisProvider";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Dra. Ana Vitale - Emagreça Definitivamente Sem Dietas Restritivas | Nutricionista Especialista",
  description:
    "Método científico personalizado que elimina o efeito sanfona. Mais de 800 pacientes transformados com 94% de taxa de sucesso. Consulta gratuita disponível.",

  keywords: [
    "nutricionista",
    "emagrecimento saudável",
    "dieta personalizada",
    "perda de peso definitiva",
    "método científico",
    "reeducação alimentar",
    "nutrição clínica",
    "consulta nutricional",
    "sem efeito sanfona",
    "Ana Vitale nutricionista",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} text-2xl antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider />
          {children}
          <FixedThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
