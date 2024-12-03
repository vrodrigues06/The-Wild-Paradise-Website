"use client";
import React from "react";

const ReservationContext = React.createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = React.useState(initialState);

  function resetRange() {
    setRange(initialState);
  }

  const objValue = { range, setRange, resetRange };

  return (
    <ReservationContext.Provider value={objValue}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = React.useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside Provider!");

  return context;
}

export { ReservationProvider, useReservation };
