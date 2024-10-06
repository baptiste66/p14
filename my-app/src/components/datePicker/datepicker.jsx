import React, { useState } from 'react';
import './datepicker.css'; 

const DatePicker = ({ selectedDate, onDateChange, placeholder }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateClick = (date) => {
    onDateChange(date);
    setInputValue(formatDate(date)); 
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const generateCalendarDays = () => {
    const days = [];
    const currentDate = new Date();
    currentDate.setDate(1); 

   
    const firstDay = currentDate.getDay();
    
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    
    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      days.push(
        <div
          key={i}
          className="calendar-day"
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="date-picker">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={toggleCalendar}
        placeholder={placeholder}
        readOnly 
      />
      {showCalendar && (
        <div className="calendar">
          <div className="calendar-grid">
            {generateCalendarDays()}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
