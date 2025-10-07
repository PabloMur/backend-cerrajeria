import { ReactNode } from "react";

interface BannerProps {
  children?: ReactNode; // permite recibir cualquier contenido
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="min-h-[300px] w-full bg-black/20 text-white p-4 text-center rounded-2xl">
      {children ? children : "Welcome to our website!"}
    </div>
  );
};

export default Banner;
