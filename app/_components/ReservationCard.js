import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col sm:flex-row border border-primary-800 sm:space-x-4 space-y-3 sm:space-y-0">
      {/* Imagem do componente */}
      <div className="relative h-20 sm:h-32 sm:w-32 aspect-square">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-b sm:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-3 py-2 flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-xs sm:text-lg font-semibold mb-2 ">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-4 sm:h-7 px-1 sm:px-3 uppercase text-[0.5rem] sm:text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-4 sm:h-7 px-1 sm:px-3 uppercase text-[0.5rem] sm:text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-[0.6rem] sm:text-sm text-primary-300 mb-2">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 mt-auto items-baseline flex-wrap">
          <p className="text-sm sm:text-lg font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <div className="flex items-center gap-1 ">
            <p className="text-primary-300">&bull;</p>
            <p className="text-xs sm:text-sm text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
          </div>
          <p className="ml-auto text-xs sm:text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:w-[90px] border-t sm:border-l border-primary-800">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-1 sm:gap-2 uppercase text-[0.6rem] sm:text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-2 sm:px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-4 sm:h-5 w-4 sm:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
