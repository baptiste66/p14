export const setEmployees = (employees) => ({
    type: 'SET_EMPLOYEES',
    payload: employees,
});
export const addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    payload: employee,
});