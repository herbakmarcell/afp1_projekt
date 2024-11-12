import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const lastDayOfPrevMonth = new Date(year, month, 0);
    const lastDatePrevMonth = lastDayOfPrevMonth.getDate();
    const daysInMonth = lastDayOfMonth.getDate();
    const startDay = firstDayOfMonth.getDay();

    const days = [];
    // Empty previous month's days
    for (let i = startDay - 1; i >= 0; i--) {
      days.push(lastDatePrevMonth - i);
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Empty next month's days
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays !== 7) {
      for (let i = 1; i < remainingDays; i++) {
        days.push(i);
      }
    }

    return days;
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const days = renderCalendar(currentDate);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="chooseMotnhBtn" onClick={handlePrevMonth}>
          &lt;
        </button>
        <h4>
          {currentDate.getFullYear()}{" "}
          {currentDate.toLocaleString("hu-HU", { month: "long" })}
        </h4>
        <button className="chooseMotnhBtn" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-days">
        <div>V</div>
        <div>H</div>
        <div>K</div>
        <div>Sze</div>
        <div>Csu</div>
        <div>P</div>
        <div>Szo</div>
      </div>
      <div className="calendar-days-container">
        {days.map((day, index) => (
          <div key={index} className={day > 0 && day <= 31 ? "" : "empty"}>
            {day > 0 && day <= 31 ? day : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
