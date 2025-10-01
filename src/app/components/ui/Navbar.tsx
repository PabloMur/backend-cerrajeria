import NavLink from "./buttons/Navlinks";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-start p-4 w-full">
      <ul className="flex flex-col gap-2 w-full">
        <li><NavLink href="/tecnicos" text="Tecnicos" /></li>
        <li><NavLink href="/proveedores" text="Proveedores" /></li>
        <li><NavLink href="/clientes" text="Clientes" /></li>
        <li><NavLink href="/productos" text="Productos" /></li>
        <li><NavLink href="/servicios" text="Servicios" /></li>
        <li><NavLink href="/ventas" text="Ventas" /></li>
        <li><NavLink href="/compras" text="Compras" /></li>
        <li><NavLink href="/reportes" text="Reportes" /></li>
      </ul>
    </nav>
  );
};

export { Navbar };
