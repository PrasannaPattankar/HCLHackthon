import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatientData } from '../redux/actions';

const PatientDashboard = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.patientData);

  useEffect(() => {
    dispatch(fetchPatientData());
  }, [dispatch]);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      {error ? <p>{error}</p> : <p>Welcome {data.name}, here are your upcoming appointments.</p>}
    </div>
  );
};

export default PatientDashboard;
