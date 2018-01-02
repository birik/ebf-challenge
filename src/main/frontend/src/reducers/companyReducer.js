import * as ActionTypes from '../constants/actionTypes';

export const initialState = {
  companyList: [],
  companyInfo: null,
  error: null,
  isLoading: false
};


export default function company(state = initialState, action) {
  
  switch (action.type) {
    case ActionTypes.REQUEST_COMPANY_LIST:
      return {
        ...state,
        isLoading: true
      };
      
    case ActionTypes.REQUEST_COMPANY_LIST_SUCCESS:
      
      return {
        ...state,
        isLoading: false,
        companyList: action.companyList
      };  
      
    case ActionTypes.REQUEST_COMPANY_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
        companyList: []
      };  

    case ActionTypes.REQUEST_COMPANY_INFO:
      return {
        ...state,
        companyInfo: null,
        isLoading: true
      };

    case ActionTypes.REQUEST_COMPANY_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companyInfo: action.companyInfo,
        error: null
      };

    case ActionTypes.REQUEST_COMPANY_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error.message
      };

    default:
      return state;
  }
}
