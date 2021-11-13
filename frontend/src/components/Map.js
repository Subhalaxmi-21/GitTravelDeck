import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react';
import ReactMapGL, {GeolocateControl, Marker, NavigationControl, Popup} from 'react-map-gl';
import {Room, Star} from '@material-ui/icons'
import './Map.css'
import axios from 'axios'
import Geocoder from 'react-map-gl-geocoder';
import "mapbox-gl/dist/mapbox-gl.css";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import {format} from 'timeago.js'
import Register from './Register';
import Login from './Login';

function Map() {
    const myStorage = window.localStorage;
    const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"))
    const mapRef = useRef()
    const [pins, setPins] = useState([])
    const [currentPlaceId, setCurrentPlaceId] = useState(null)
    const [newPlace, setNewPlace] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [rating, setRating] = useState(0)
    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 47.040182,
        longitude: 17.071727,
        zoom: 4
    });   

    useEffect(() => {
        const getPins = async () => {
            try {
                const allPins = await axios.get("/pins")
                setPins(allPins.data)
                console.log(allPins.data)
            } catch (err) {
                console.log(err)
            }
        };
        getPins();
    }, []);

    const handleMarkerClick = (id, lat, long) => {
        setCurrentPlaceId(id)
        setViewport({...viewport, latitude:lat, longitude:long})
    }

    const handleAddClick = (e) => {
        const [long, lat] = e.lngLat
        setNewPlace({
            lat,
            long,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPin = {
            username: currentUser,
            title,
            desc,
            rating,
            lat: newPlace.lat,
            long: newPlace.long
        }

        try {
            const res = await axios.post("/pins", newPin)
            setPins([...pins, res.data]);
            setNewPlace(null)
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogout = () => {
        myStorage.removeItem("user");
        setCurrentUser(null)
    }

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
    
    return (
        <div className="Map">

      <ReactMapGL
      ref={mapRef}
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={handleViewportChange}
      mapStyle="mapbox://styles/falguni-2001/ckuch4mij3dbs17t685ay4z37"
      onDblClick={handleAddClick}
      transitionDuration = "200"
      >

        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          position="top-left"
        />
        
        {pins.map(p=>(
        <>
        <Marker latitude={p.lat} longitude={p.long} offsetLeft={-viewport.zoom * 3.5} offsetTop={-viewport.zoom * 7}>
        <Room style={{fontSize:viewport.zoom * 7, color: p.username===currentUser ? "blue" : "#FF0000", cursor: "pointer"}}
         onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
         />
        </Marker>
        {p._id === currentPlaceId && ( 
        <Popup
          latitude={p.lat}
          longitude={p.long}
          closeButton={true}
          closeOnClick={false}
          anchor="left"
          onClose={() => setCurrentPlaceId(null)}
          >
          <div className="pin_card">
              <label>Place</label>
              <h4 className="place">{p.title}</h4>
              <label>Review</label>
              <p className="desc">{p.desc}</p>
              <label>Rating</label>
              <div className="stars">
                  {Array(p.rating).fill(<Star className="star" />)}
              </div>
              <label>Information</label>
              <span className="username">Created by <b>{p.username}</b></span>
              <span className="date">{format(p.createdAt)}</span>
          </div>
        </Popup>
        )}
        </> 
        ))}
        {newPlace && (
            <Popup
            latitude={newPlace.lat}
            longitude={newPlace.long}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
            onClose={() => setNewPlace(null)}
            >
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input placeholder="Enter a title" onChange={(e) => setTitle(e.target.value)} />
                        <label>Review</label>
                        <textarea placeholder="Say us something about this place!!" onChange={(e) => setDesc(e.target.value)} />
                        <label>Rating</label>
                        <select onChange={(e) => setRating(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button className="submitButton" type="submit">Add Pin</button>
                    </form>
                </div>
            </Popup>
        )}
        {currentUser ? (<button className="button logout" onClick={handleLogout}>Log Out</button>) : 
        (
        <div className="buttons">
        <button className="button login" onClick={() => setShowLogin(true)}>Login</button>
        <button className="button register" onClick={() => setShowRegister(true)}>Register</button>
        </div>
        )}
        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && <Login setShowLogin={setShowLogin} myStorage={myStorage} setCurrentUser={setCurrentUser} />}
        <GeolocateControl />
        <NavigationControl />
        
        </ReactMapGL>            
        </div>
    )
}

export default Map
