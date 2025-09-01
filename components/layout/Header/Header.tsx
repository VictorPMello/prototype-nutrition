import { NavComponent } from "./NavComponent";

export function Header() {
  return (
    <>
      <header
        className="fixed w-screen z-50
        flex justify-between items-center
        p-4
        backdrop-blur-md
        text-shadow-black text-shadow-lg"
      >
        <h1 className="text-xl">Dra. Ana Vitale</h1>
        <NavComponent />
      </header>
    </>
  );
}
