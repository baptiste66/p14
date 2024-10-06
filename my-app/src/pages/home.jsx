import React, { useState } from 'react';
import Modal from '../components/modal/modal'; 
import '../components/modal/modal.css';
import { Link } from 'react-router-dom';
import { Select } from "../components/select/select"; 
import city from '../data/city.json';
import {SelectDate} from "../components/select/selectDate"; 
import { useEmployeeContext } from '../components/context/EmployeeContext';

function HRnet() {
  const { setEmployees } = useEmployeeContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('Sales');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stateOptions = city.states.map(state => state.name);
  const departmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  const saveEmployee = (e) => {
    e.preventDefault(); 
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city: cityInput,
      state,
      zipCode,
      department,
    };

  
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);

    console.log(newEmployee); 
    setIsModalOpen(true); 

    // Reset form fields
    setFirstName('');
    setLastName('');
    setDateOfBirth(null);
    setStartDate(null);
    setStreet('');
    setCityInput('');
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
      <Link to="/employees">View Current Employees</Link>
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
        <SelectDate
          value={dateOfBirth}
          onChange={setDateOfBirth}
          id="date-of-birth"
          required
        />

        <label htmlFor="start-date">Start Date</label>
        <SelectDate
          value={startDate}
          onChange={setStartDate}
          id="start-date"
          required
        />

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
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            required
          />

          <label htmlFor="state">State</label>
          <Select
            id="state"
            options={stateOptions}
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

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
        <Select
          id="department"
          options={departmentOptions}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

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
