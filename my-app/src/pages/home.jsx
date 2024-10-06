import React, { useState } from 'react';
import Modal from '../components/modal/modal'; 
import '../components/modal/modal.css';
import { Link } from 'react-router-dom';

function HRnet() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('Sales');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stateOptions = ['California', 'New York', 'Texas', 'Washington'];
  const departmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  const saveEmployee = (e) => {
    e.preventDefault(); 
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    console.log(newEmployee); 
    setIsModalOpen(true); 

    
    setFirstName('');
    setLastName('');
    setDateOfBirth(null);
    setStartDate(null);
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
    setDepartment('Sales');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={saveEmployee}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

<label htmlFor="date-of-birth">Date of Birth</label>
        
        {/*<DatePicker
          selectedDate={dateOfBirth}
          onDateChange={setDateOfBirth}
          placeholder="Select Date of Birth"
        />

        <label htmlFor="start-date">Start Date</label>
        
        <DatePicker
          selectedDate={startDate}
          onDateChange={setStartDate}
          placeholder="Select Start Date"
        />*/}

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label htmlFor="state">State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            {stateOptions.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          {departmentOptions.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <button type="submit">Save</button>
      </form>

      
      {isModalOpen && (
        <Modal
          modalMessage="Employee Created!"
          closeModal={closeModal}
          modalFontColor="green"
          modalFontSize={24}
        />
      )}
    </div>
  );
}

export default HRnet;
