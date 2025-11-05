import React from "react";
import attendanceData from "../../data/attendanceData";

const Attendence = () => {
  const totalPresent = attendanceData.reduce((s, c) => s + c.present, 0);
  const totalAll = attendanceData.reduce((s, c) => s + c.total, 0);
  const overallPercent =
    totalAll === 0 ? 0 : Math.round((totalPresent / totalAll) * 100);

  return (
    <div className="p-4 max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {attendanceData.map((item, idx) => {
          const percent =
            Math.round((item.present / item.total) * 100 * 10) / 10;
          return (
            <div
              key={idx}
              className="rounded-xl p-4 md:p-5 shadow-2xl bg-gradient-to-br from-white to-blue-50 h-full"
            >
              <div className="flex items-start justify-between ">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/60 flex items-center justify-center ">
                    <span className="text-l">📚</span>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    Attendance
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-semibold">
                  {item.present}/{item.total}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-snug break-words">
                  {item.title}
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">Present</div>
                <div className="text-xl md:text-2xl font-extrabold text-green-600">
                  {percent}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fixed left-2 right-2 sm:left-6 sm:right-6 md:left-80 md:right-6 bottom-4 pointer-events-none z-40">
        <div className="relative">
          <div className="pointer-events-auto bg-blue-50 rounded-xl shadow-lg px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold text-slate-700">Total</div>
              <div className="hidden sm:block text-sm text-slate-600">-</div>
              <div className="text-sm sm:ml-4 text-slate-600">
                {totalPresent}/{totalAll}
              </div>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold text-green-600">
              {overallPercent}%
            </div>
          </div>

          {/* Floating filter FAB overlapping the right side of the bar */}
          <button
            aria-label="filter"
            className="pointer-events-auto absolute -right-4 md:-right-6 -bottom-6 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
