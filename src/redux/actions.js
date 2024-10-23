import axios from 'axios';

// User Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};

// Fetch Patient Data Action
export const fetchPatientData = () => async (dispatch, getState) => {
  try {
    const { userInfo } = getState().auth;
    const { data } = await axios.get('/api/patient/dashboard', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: 'FETCH_PATIENT_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_PATIENT_FAIL', payload: error.response.data.message });
  }
};
