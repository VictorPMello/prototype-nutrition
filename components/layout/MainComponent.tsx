import { HeroSection } from "@/components/sections/HeroSection";
import { FormComponent } from "@/components/forms/FormComponet";
import { MethodComponent } from "@/components/sections/MethodComponent";
import { ResultsComponent } from "@/components/sections/ResultsComponent";
import { DifferentialComponent } from "@/components/sections/DifferentialComponent";
import { InfosComponent } from "@/components/sections/InfosComponent";
import { Photos } from "@/components/sections/Photos";
import { FAQComponent } from "@/components/sections/FAQComponent";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export function MainComponent() {
  return (
    <main>
      <HeroSection />
      <FormComponent />
      <MethodComponent />
      <ResultsComponent />
      <DifferentialComponent />
      <InfosComponent />
      <Photos />
      <FAQComponent />
    </main>
  );
}
