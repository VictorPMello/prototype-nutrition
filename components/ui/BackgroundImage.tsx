import Image from "next/image";

export function BackgroundImage() {
  return (
    <div className="min-h-screen w-full fixed z-[-10]">
      <Image
        className="w-screen h-screen absolute inset-0 z-[-10] lg:max-w-5xl mx-auto"
        src="/formBg.webp"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
