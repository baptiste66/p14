const initialState = {
    employees: [],
};

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return {//initial state 
                ...state,
                employees: action.payload,
            };
        case 'ADD_EMPLOYEE': 
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };
        default:
            return state;
    }
};