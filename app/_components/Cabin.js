import React from "react";
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid gap-10 lg:grid-cols-[3fr_4fr] mb-12 border border-primary-800 py-6 px-2 sm:px-4 md:px-5 lg:mb-24">
      {/* Image Section */}
      <div className="relative w-full max-w-[100%] h-60 md:h-80 lg:w-[75%] lg:scale-[1.2] lg:h-auto lg:-translate-x-[-08%]">
        <Image
          src={image}
          fill
          className="object-cover rounded-md"
          alt={`Cabin ${name}`}
        />
      </div>

      {/* Content Section */}
      <div>
        <h3 className="text-accent-100 font-black text-3xl md:text-5xl lg:text-7xl mb-5 bg-primary-950 pb-2 lg:pb-1 w-full lg:w-[150%] lg:p-4 -translate-x-0 lg:translate-x-[-254px]">
          Cabin {name}
        </h3>

        <p className="text-base max-w-[35ch] md:max-w-[80ch] text-primary-300 mb-8 leading-relaxed">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-sm md:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-sm md:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-sm md:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
