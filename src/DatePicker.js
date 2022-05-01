import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Allnotification.css";
function DatePick() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="fromDate">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd-MMMM-yyyy"
        //  isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default DatePick;
