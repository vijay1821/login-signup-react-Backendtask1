import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
function Home() {
  var location = useLocation();
  var [loading, setLoading] = useState(false);
  var [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then((result) => {
        setData(result.data);

      }).catch((err) => {
        console.log(err);
      })
      .finally(() => { setLoading(false) });
  }, [])

  return (
    <>
      Hi {location.state.id} Wellcome to home Page
      
    </>
  )
}

export default Home
