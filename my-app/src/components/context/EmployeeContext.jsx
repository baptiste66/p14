import React, { createContext, useContext, useState, useEffect } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    // Charger les employés depuis le localStorage lorsque le contexte est initialisé
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);
    }, []);

    // Mettre à jour le localStorage chaque fois que l'état des employés change
    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployeeContext = () => {
    return useContext(EmployeeContext);
};