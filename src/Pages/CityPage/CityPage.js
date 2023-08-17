import React from 'react'
import Header from '../Home/Header/Header'
import { useParams } from "react-router-dom";
import Adsall from '../Home/Adslist/Adsall';
export default function CityPage() {
    const idcity=useParams()

  return (
   <>
   <Header/>
   <Adsall/>
   </>
  )
}
