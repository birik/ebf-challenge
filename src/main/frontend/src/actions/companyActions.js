import * as ActionTypes from './../constants/actionTypes';
import { fetchGet } from './../utils/APIUtils';

export function requestCompanyList() {
  return (dispatch) => {
    dispatch({type: ActionTypes.REQUEST_COMPANY_LIST});

    return fetchGet('company', {}, 'companyList').then(
      response => dispatch({type: ActionTypes.REQUEST_COMPANY_LIST_SUCCESS, ...response}),
      error => dispatch({type: ActionTypes.REQUEST_COMPANY_LIST_ERROR, ...error})
    );
  };
}

export function requestCompanyInfo(companyId) {
  return (dispatch) => {
    dispatch({type: ActionTypes.REQUEST_COMPANY_INFO});

    return fetchGet(`company/${companyId}`, {}, 'companyInfo').then(
      response => dispatch({type: ActionTypes.REQUEST_COMPANY_INFO_SUCCESS, ...response}),
      error => dispatch({type: ActionTypes.REQUEST_COMPANY_INFO_ERROR, ...error})
    );
  };
}