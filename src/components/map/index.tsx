import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { GET_AIRPORTS } from '../../redux/actions';
import { selectorAirports } from "../../redux/selectors";
import { Airport } from '../../model/airports';
import getCoordsRoutes from '../../helpers/getCoordsRoutes';

function Map() {

  const dispatch = useDispatch();
  const airports = useSelector(selectorAirports);

  const [ selectedMarker, setSelectedMarker ] = useState({});
  const paths = getCoordsRoutes();

  const getAirports = () => {
    dispatch({
      type: GET_AIRPORTS
    });
  };


  const infoWindowStyle = {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  useEffect(getAirports, []);

  return (
    <LoadScript googleMapsApiKey={"AIzaSyCC2pit9710eRYYFtLqHKHfuEkowfrhv7Q"}>
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '800px',
        }}
        center={{
          lat: 28.2566,
          lng: 65.3641
        }}
        zoom={3}
      >
        {paths.map(path => {

          const midPoint = {
            lat: path.coordinates.reduce((sum, coord) => sum + coord.lat, 0) / path.coordinates.length,
            lng: path.coordinates.reduce((sum, coord) => sum + coord.lng, 0) / path.coordinates.length,
          };

          return (
            <>
              <Polyline
                path={path.coordinates}
                options={{
                  strokeColor: '#FF0000',
                  strokeOpacity: 1,
                  strokeWeight: 4
                }}
              />
              <InfoWindow
                position={midPoint}
              >
                <div style={infoWindowStyle}>
                  <p>{path.label}</p>
                </div>
              </InfoWindow>
            </>
          )

        })}
        {airports.map((airport: Airport, index) => {
          return (
            <Marker
              key={index}
              position={airport.position}
              title={airport.title}
              onMouseUp={() => setSelectedMarker(airport)}
              onMouseOver={() => setSelectedMarker(airport)}
              onMouseOut={() => setSelectedMarker({})}
            />
          )
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
