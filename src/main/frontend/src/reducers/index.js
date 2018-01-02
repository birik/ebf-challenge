import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import company from './companyReducer';
import employee from './employeeReducer';


const rootReducer = combineReducers({
  company,
  employee,
  routing: routerReducer
});

export default rootReducer;
