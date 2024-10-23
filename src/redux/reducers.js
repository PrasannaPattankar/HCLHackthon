// Authentication Reducer
export const authReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { userInfo: action.payload };
      case 'LOGIN_FAIL':
        return { error: action.payload };
      default:
        return state;
    }
  };
  
  // Patient Data Reducer
  export const patientReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case 'FETCH_PATIENT_SUCCESS':
        return { data: action.payload };
      case 'FETCH_PATIENT_FAIL':
        return { error: action.payload };
      default:
        return state;
    }
  };
  