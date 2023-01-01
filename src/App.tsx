import React, { useEffect } from 'react';
import './App.css';
import { GET_ROUTES, GET_AIRPORTS, INIT } from './redux/actions';
import { useDispatch } from "react-redux";
import Aircrafts from './components/aircrafts';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: INIT
    })
  });

  const getRoutes = () => {
    dispatch({
      type: GET_ROUTES
    });
  }

  const getAirports = () => {
    dispatch({
      type: GET_AIRPORTS
    });
  }
  return (
    <div className="App">
      <Aircrafts />
    </div>
  );
}

export default App;
