import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Header } from "@/components/layout/Header/Header";
import { MainComponent } from "@/components/layout/MainComponent";
import { Footer } from "@/components/layout/Footer";
import { FixedThemeToggle } from "@/components/layout/FixedThemeToggle";

export default function Home() {
  return (
    <>
      <BackgroundImage />
      <Header />
      <MainComponent />
      <Footer />

      <FixedThemeToggle />
    </>
  );
}
