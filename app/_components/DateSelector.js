"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

const dayStyle = {};

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const defaultClassNames = getDefaultClassNames();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="p-0  sm:pt-12 sm:p-4"
        classNames={{
          day: `w-[0.5rem] text-xs h-[0.5rem]  sm:w-[1rem] sm:h-[1rem] sm:text-sm`,
          root: `${defaultClassNames.root} md:max-w-[80vw] mx-auto`,
          months: `flex flex-col md:flex-row md:justify-between `,
          month: `lg:w-[48%] pt-4 p-0 sm:p-4`,
          today: "text-amber-400",
          day_button: `p-3 flex justify-center items-center rounded-full border-2 border-transparent focus:rounded-full focus:border-2 w-full focus:bg-accent-500 hover:border-primary-500`,
          range_start: "bg-accent-500 rounded-l",
          range_middle: "bg-primary-500",
          range_end: "bg-accent-500 rounded-r",
          chevron: "fill-accent-500",
        }}
        styles={{
          day: {
            width: "1rem",
            height: "1rem",
            margin: "0",
            padding: "0",
          },
        }}
        mode="range"
        onSelect={(range) => {
          if (range === undefined) return null;
          setRange(range);
        }}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-4 md:px-8 bg-accent-500 text-primary-800 h-[64px] md:h-[72px]">
        <div className="flex items-baseline gap-3 md:gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-lg md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-lg md:text-2xl">${regularPrice}</span>
            )}
            <span className="text-xs md:text-base">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-2 py-1 md:px-3 md:py-2 md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-xs md:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-lg md:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-1 px-2 md:py-2 md:px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
