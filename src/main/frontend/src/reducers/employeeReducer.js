import * as ActionTypes from '../constants/actionTypes';

export const initialState = {
  employeeList: [],
  error: null,
  isLoading: false
};

export default function employee(state = initialState, action) {
  
  let newEmployeeList;
  let employeeIndex;

  switch (action.type) {
    case ActionTypes.REQUEST_EMPLOYEE_LIST:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.REQUEST_EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employeeList: action.employeeList,
        error: null
      };

    case ActionTypes.REQUEST_EMPLOYEE_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        employeeList: [],
        error: action.error
      };
      
    case ActionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        employeeList: state.employeeList.concat(action.employee),
        error: null
      };

    case ActionTypes.ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error.message
      };
      
    case ActionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.UPDATE_EMPLOYEE_SUCCESS:
      employeeIndex = state.employeeList.findIndex(employee => employee.id === action.employee.id);
      newEmployeeList = [].concat(state.employeeList),
      newEmployeeList.splice(employeeIndex, 1, action.employee);
      return {
        ...state,
        isLoading: false,
        employeeList: newEmployeeList,
        error: null
      };

    case ActionTypes.UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error.message
      };
      
    case ActionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.DELETE_EMPLOYEE_SUCCESS:
      employeeIndex = state.employeeList.findIndex(employee => employee.id === action.employeeId);
      newEmployeeList = [].concat(state.employeeList);
      newEmployeeList.splice(employeeIndex, 1);
      return {
        ...state,
        isLoading: false,
        employeeList: [].concat(newEmployeeList),
        error: null
      };

    case ActionTypes.DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error.message
      };

    default:
      return state;
  }
}