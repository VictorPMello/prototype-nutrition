import { FixedThemeToggle } from "@/components/FixedThemeToggle";
import { FormComponent } from "@/components/FormComponet";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MethodComponent } from "@/components/MethodComponent";
import { ResultsComponent } from "@/components/ResultsComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full fixed z-[-10]">
        <Image
          className="w-screen h-screen absolute inset-0 z-[-10]"
          src="/formBg.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <Header />
      <main>
        <HeroSection />
        <FormComponent />
        <MethodComponent />
        <ResultsComponent />
      </main>

      <FixedThemeToggle />
    </>
  );
}
