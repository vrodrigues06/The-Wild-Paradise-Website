import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10 sm:gap-4">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Paradise logo"
        className="h-12 w-12   sm:h-16 sm:w-16"
      />
      <span className=" font-semibold text-primary-100  text-base sm:text-xl">
        The Wild Paradise
      </span>
    </Link>
  );
}

export default Logo;
