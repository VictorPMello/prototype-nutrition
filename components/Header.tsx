import { NavComponent } from "./NavComponent";

export function Header() {
  return (
    <>
      <header className="flex fixed bg-popover/75 w-screen z-50 justify-between items-center p-6">
        <h1>Dra. Ana Vitale</h1>
        <NavComponent />
      </header>
    </>
  );
}
