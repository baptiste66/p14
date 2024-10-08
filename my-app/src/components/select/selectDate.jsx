import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './selectDate.css';
//props
export const SelectDate = ({
    label,
    value,
    onChange,
    error,
    className,
    ariaLabel,
}) => {
    const rule = (e) => {
        const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape'];
        
        if (/[\d]/.test(e.key) || !allowedKeys.includes(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className="input-date-container">
            <label htmlFor={label} className="input-date-label">
                {label}
            </label>
            <DatePicker
                selected={value}
                onChange={date => onChange(date)}
                id={label}
                aria-label={ariaLabel || label}
                className={`input-date-picker ${className} ${error ? "input-date-error" : ""}`}
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                aria-invalid={!!error}
                aria-describedby={error ? `${label}-error` : undefined}
                popperPlacement="bottom"
                onKeyDown={rule} 
            />
            {error && (
                <span id={`${label}-error`} className="input-date-error-message">
                    {error}
                </span>
            )}
        </div>
    );
};
