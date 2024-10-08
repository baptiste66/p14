import { createStore } from 'redux';
import { employeeReducer } from './employeeReducer'; 


const store = createStore(employeeReducer);

export default store;
