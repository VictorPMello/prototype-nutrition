import { NavComponent } from "./ NavComponent";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <h1>Dra. Ana Vitale</h1>
        <NavComponent />
      </header>
    </>
  );
}
