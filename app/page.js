import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-50 mb-6 sm:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 text-primary-800 text-sm sm:text-base lg:text-lg font-semibold hover:bg-accent-600 transition-all rounded-md inline-block max-w-[90%]"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
