import Image from "next/image";
import Sabin from "@/public/images/sabinHero.png";

export default function Sabinpage() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center gap-5 text-center">
        <p className="text-4xl font-bold">Maw taw Sabin ho 🤘 Developer</p>
        <Image
          src={Sabin}
          alt="Sabin"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
