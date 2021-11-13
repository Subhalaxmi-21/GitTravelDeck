import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
// import './App.css';

import Header from '../../components(map)/Header/Header'
import PlaceDetails from '../../components(map)/PlaceDetails/PlaceDetails'
import Map from '../../components(map)/Map/Map'
import List from '../../components(map)/List/List'
import {getPlaceData} from '../../api'
const Search = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [type, setType ] = useState('restaurants');
  const [rating, setRating] = useState('')
const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
      setCoordinates({lat: latitude, lng: longitude})

    })
  },[])
  useEffect(()=>{
    console.log(coordinates)
    getPlaceData(type, coordinates.lat,coordinates.lng).then((data) => {
      console.log(data)

      setPlaces(data)
      setFilteredPlaces([])
      
    }).catch((err) => {
      console.log(err)
    });;
  },[type, coordinates])

  useEffect(()=>{
    const filterplaces = places.filter((place)=>place.rating>rating)
    setFilteredPlaces(filterplaces)
    
    },[rating])

  return (
    <>
    <CssBaseline/>
    <Header setCoordinates={setCoordinates} />
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item xs={12} md={4}><List places={filteredPlaces.length ? filteredPlaces : places } type={type} setType={setType} rating={rating} setRating={setRating} /></Grid>
      <Grid item xs={12} md={8}><Map setCoordinates={setCoordinates} setBounds={setBounds} places={filteredPlaces.length ? filteredPlaces : places }/></Grid>
    </Grid>
    </>
  );
}

export default Search