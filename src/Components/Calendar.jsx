import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronLeft />
        </button>

        <h2 className="text-xl font-semibold">
          {months[month]} {year}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-2">
        {days.map((day, index) => (
          <div key={index} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center gap-y-2">
        {calendarDays.map((date, index) => (
          <div key={index} className="h-10 flex items-center justify-center">
            {date ? (
              <span
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition cursor-pointer"
              >
                {date}
              </span>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}