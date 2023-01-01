import React from 'react';
import './App.css';
import { GET_ROUTES, GET_AIRCRAFTS, GET_AIRPORTS } from './redux/actions';
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const getRoutes = () => {
    dispatch({
      type: GET_ROUTES
    });
  }
  const getAircrafts = () => {
    dispatch({
      type: GET_AIRCRAFTS
    });
  }
  const getAirports = () => {
    dispatch({
      type: GET_AIRPORTS
    });
  }
  return (
    <div className="App">
      <button onClick={getAircrafts}>get Aircrafts</button>
      <button onClick={getRoutes}>get Routes</button>
      <button onClick={getAirports}>get Airports</button>
    </div>
  );
}

export default App;
