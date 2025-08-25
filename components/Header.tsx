import { NavComponent } from "./NavComponent";

export function Header() {
  return (
    <>
      <header className="flex fixed w-screen z-50 justify-between items-center p-6 backdrop-blur-md text-shadow-black text-shadow-lg">
        <h1>Dra. Ana Vitale</h1>
        <NavComponent />
      </header>
    </>
  );
}
