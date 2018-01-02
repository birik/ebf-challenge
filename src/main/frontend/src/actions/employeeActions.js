import * as ActionTypes from './../constants/actionTypes';
import { fetchGet, fetchPost, fetchPut, fetchDelete } from './../utils/APIUtils';
import { requestCompanyInfo } from './companyActions';

export function requestEmployeeList(companyId) {
  return (dispatch) => {
    dispatch({type: ActionTypes.REQUEST_EMPLOYEE_LIST});
    return fetchGet(`employee/${companyId}`, {}, 'employeeList').then(
      response => dispatch({type: ActionTypes.REQUEST_EMPLOYEE_LIST_SUCCESS, ...response}),
      error => dispatch({type: ActionTypes.REQUEST_EMPLOYEE_LIST_ERROR, ...error})
    );
  };
}

export function addEmployee(companyId, employee) {
  return (dispatch) => {
    dispatch({type: ActionTypes.ADD_EMPLOYEE});
    return fetchPut(`employee/${companyId}`, employee, 'employee').then(
      response => {
        dispatch({type: ActionTypes.ADD_EMPLOYEE_SUCCESS, ...response});
        return dispatch(requestCompanyInfo(companyId));
      },
      error => dispatch({type: ActionTypes.ADD_EMPLOYEE_ERROR, ...error})
    );
  };
}

export function updateEmployee(companyId, employee) {
  return (dispatch) => {
    dispatch({type: ActionTypes.UPDATE_EMPLOYEE});
    return fetchPost(`employee/${companyId}`, employee, 'employee').then(
      response => {
        dispatch({type: ActionTypes.UPDATE_EMPLOYEE_SUCCESS, ...response});
        return dispatch(requestCompanyInfo(companyId));
      },
      error => dispatch({type: ActionTypes.UPDATE_EMPLOYEE_ERROR, ...error})
    );
  };
}

export function deleteEmployee(companyId, employeeId) {
  return (dispatch) => {
    dispatch({type: ActionTypes.DELETE_EMPLOYEE});
    return fetchDelete(`employee/${companyId}/${employeeId}`).then(
      response => {
        dispatch({type: ActionTypes.DELETE_EMPLOYEE_SUCCESS, ...response, employeeId});
        return dispatch(requestCompanyInfo(companyId));
      },
      error => dispatch({type: ActionTypes.DELETE_EMPLOYEE_ERROR, ...error})
    );
  };
}