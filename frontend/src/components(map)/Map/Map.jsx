import {Box} from '@material-ui/core'
import ReactMapGL from "react-map-gl";
import {  useState, useRef, useCallback  } from "react";

import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'


const App=({ setCoordinates, setBounds, coordinates, places  })=> {

  const myStorage = window.localStorage;
 
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [viewport, setViewport] = useState({
    lat: 80.6,
    long: 30.2,
    zoom: 5,
  });
  const [sw, ne] = useState({})


  const mapRef = useRef();
const handleViewportChange = useCallback(
  (newViewport) => setViewport(newViewport),
  []
);
const handleGeocoderViewportChange = useCallback(
  (newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    });
  },
  [handleViewportChange]
);



  const handleAddClick = (e) => {
    console.log(e);

    console.log("In HandleClick")
    const [longitude, latitude] = e.lngLat;

    setCoordinates({lat: latitude, lng: longitude});
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };


  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapboxApiAccessToken="pk.eyJ1Ijoic3ViaGFsYXhtaSIsImEiOiJja3U4ZW8yaXUwOWo1Mm9sZHpjczBoMWJuIn0.0xUPokiMihEz69XAj7GwEg"
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/subhalaxmi/ckucrpf1z0ybz18rz7yfh32ak"
        onViewportChange={(viewport) => { setViewport(viewport)}}
        onDblClick={handleAddClick}
  
      >
      
       <Box>
       
       <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1Ijoic3ViaGFsYXhtaSIsImEiOiJja3U4ZW8yaXUwOWo1Mm9sZHpjczBoMWJuIn0.0xUPokiMihEz69XAj7GwEg"
          position="top-left"
        />
               
        </Box>
      
      </ReactMapGL>
    </div>
  );
}

export default App;