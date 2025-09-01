import { Button } from "@/components/ui/button";
import { NavComponent } from "./NavComponent";

export function Header() {
  return (
    <>
      <header
        className="fixed w-screen z-50
        flex justify-between items-center
        p-4 lg:px-10
        backdrop-blur-md
        text-shadow-black text-shadow-lg"
      >
        <h1 className="text-xl lg:text-4xl">Dra. Ana Vitale</h1>
        <NavComponent />

        <div className="hidden lg:flex items-center gap-4">
          <Button className="bg-transparent text-2xl cursor-pointer font-bold text-foreground shadow-none text-shadow-black text-shadow-lg">
            Método
          </Button>
          <Button className="bg-transparent text-2xl cursor-pointer font-bold text-foreground shadow-none text-shadow-black text-shadow-lg">
            Resultados
          </Button>
          <Button className="bg-transparent text-2xl cursor-pointer font-bold text-foreground shadow-none text-shadow-black text-shadow-lg">
            Sobre
          </Button>
          <Button className="bg-transparent text-2xl cursor-pointer font-bold text-foreground shadow-none text-shadow-black text-shadow-lg">
            FAQ
          </Button>
          <Button className="bg-transparent text-2xl cursor-pointer font-bold text-foreground shadow-none text-shadow-black text-shadow-lg">
            Contato
          </Button>
        </div>
      </header>
    </>
  );
}
