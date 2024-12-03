import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border">
      {/* Imagem */}
      <div className="sm:w-1/2 relative h-64 sm:h-auto">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="sm:border-r border-primary-800 object-cover"
        />
      </div>

      {/* Informações */}
      <div className="sm:w-1/2 flex flex-col">
        <div className="pt-3 pb-2 px-3 sm:pt-4 sm:pb-3 sm:px-5 lg:pt-5 lg:pb-4 lg:px-7 bg-primary-950 flex-grow">
          <h3 className="text-accent-500 font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-2 sm:gap-3 items-center mb-1 sm:mb-2">
            <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
            <p className="text-sm sm:text-md md:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-1 sm:gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl md:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl md:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm sm:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
