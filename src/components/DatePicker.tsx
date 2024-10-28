import React, { useState, useEffect } from "react";

const years: number[] = Array.from({ length: 25 }, (_, i) => 2000 + i);
const months: string[] = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const DatePicker: React.FC = () => {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState<string>(
    currentDate.getFullYear().toString()
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    months[currentDate.getMonth()]
  );
  const [selectedDay, setSelectedDay] = useState<string>(
    currentDate.getDate().toString()
  );
  const [days, setDays] = useState<string[]>([]);

  useEffect(() => {
    updateDays(parseInt(selectedYear), months.indexOf(selectedMonth));
  }, [selectedYear, selectedMonth]);

  const updateDays = (year: number, monthIndex: number): void => {
    const daysInMonth = getDaysInMonth(year, monthIndex);
    const dayOptions: string[] = Array.from({ length: daysInMonth }, (_, i) =>
      (i + 1).toString()
    );
    setDays(dayOptions);

    if (parseInt(selectedDay) > daysInMonth) {
      setSelectedDay(daysInMonth.toString());
    }
  };

  const getDaysInMonth = (year: number, monthIndex: number): number => {
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedMonth(e.target.value);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedDay(e.target.value);
  };

  return (
    <div className="max-w-md p-4 mx-auto bg-white border rounded-lg shadow-lg  w-96">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Select a Date</h2>
      <div className="flex mb-6 space-x-4">
        <div className="relative w-full">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8"
          >
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="relative w-full">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="relative w-full">
          <select
            value={selectedDay}
            onChange={handleDayChange}
            className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold text-center text-blue-600">
        {selectedDay} {selectedMonth} {selectedYear}
      </div>
    </div>
  );
};

export default DatePicker;
