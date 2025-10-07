import Image from "next/image";
import llaves from "../../public/llaves.jpg";
import CustomButton from "../components/ui/buttons/CustomButton";
import SignIn from "@/components/ui/buttons/sign-in";

export default function Home() {
  return (
    <div className="h-[100dvh] w-full grid md:grid-cols-2">
      {/* Bloque de la imagen */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <Image
          src={llaves}
          alt="Llaves"
          fill
          className="object-cover brightness-75"
          priority
        />
        {/* Overlay sutil en la imagen */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Bloque del login con gradient de colores */}
      <div className="flex flex-col items-center justify-center gap-6 bg-[radial-gradient(circle_at_top_left,_#facc15,_#7e22ce,_#000000)] text-white p-10">
        <div className="w-full max-w-sm text-center space-y-4 bg-black/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Bienvenido de nuevo
          </h1>
          <p className="text-white/90">Ingresá a tu cuenta para continuar</p>
          <CustomButton href="/dashboard">Ingresar</CustomButton>
          <SignIn></SignIn>
        </div>
      </div>
    </div>
  );
}
