import React, { useState, useEffect } from 'react'
import { Context } from './Context'
import axios from 'axios'
function ApiContext({ children }) {

  //Get Data Smartphones
  const [smartphones, setSmartphones] = useState([]);
  useEffect(()=>{
    axios
      .get('http://localhost:1337/api/smartphones')
      .then(({data})=>setSmartphones(data))      
  },[])

  //Get Data Categories
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    axios
      .get('http://localhost:1337/api/categories')
      .then(({data})=>setCategories(data))      
  },[])

  //Get Data Brands
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/brands")
      .then(({ data }) => setBrands(data));
  }, []);

  //Get Data Essentials
  const [essentials, setEssentials] = useState([]);
  useEffect(()=>{
    axios
      .get('http://localhost:1337/api/essentials')
      .then(({data})=>setEssentials(data))      
  },[])

  return (
    <Context.Provider value={[smartphones, categories, brands, essentials] }>
      {children}
    </Context.Provider>
  )
}
export default ApiContext