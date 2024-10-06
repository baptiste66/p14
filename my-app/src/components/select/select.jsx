import React from "react";
import './select.css'; 

export const Select = ({
	label,
	name,
	options,
	value,
	onChange,
	className = "",
	error,
}) => {
	return (
		<div className="select-container">
			<label htmlFor={name} className="select-label">
				{label}
			</label>
			<select
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				className={`select-input ${error ? "error" : ""} ${className}`}
				aria-describedby={`${name}-error`}
				aria-invalid={!!error}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			{error && (
				<p id={`${name}-error`} className="error-message">
					{error}
				</p>
			)}
		</div>
	);
};
