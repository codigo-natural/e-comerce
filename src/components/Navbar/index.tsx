import Link from "next/link";
import { Menu } from "../Menu";
import Image from "next/image";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-32 relative">
      <div className="h-full flex items-center justify-between">
        {/* MOBILE */}
        <Link href="/">
          <div className="text-2xl tracking-wide">E-comerce</div>
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">E-comerce</div>
          </Link>
        </div>
        <div className="w-2/3">
        
        </div>
      </div>
    </div>
  );
};
