"use client";

import React from "react";
import ReservationCard from "@/app/_components/ReservationCard";
import { DeleteReservationAction } from "../_lib/actions";

const ReservationList = ({ bookings }) => {
  const [optimisticBookings, optimisticDelete] = React.useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await DeleteReservationAction(bookingId);
  }

  return (
    <ul className="space-y-6 md:space-y-4">
      {" "}
      {/* Ajuste para telas menores */}
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ReservationList;
