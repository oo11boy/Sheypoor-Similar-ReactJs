import { createContext } from "react";
import { Api } from "../Api";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

import { useState } from 'react'
export let AdsBodyContaxt=createContext({
    loadingads:()=>{},
    adsbodylist:()=>{},
    setsearchmaintext:()=>{},
    deeppageinformcity:()=>{},
    setmainostan:()=>{},
    mainostan:()=>{},
    searchostantext:()=>{},
    setsearchcitytext:()=>{},
    setsearchostantext:()=>{},
    loadingostan:()=>{},
    listostan:()=>{},
    setidostan:()=>{},
    setmainostan:()=>{},
    ostanname:()=>{},
    loadingcity:()=>{},
    listcitys:()=>{},
    setparams:()=>{},
    searchmaintext:()=>{},
    setcatapi:()=>{},
    categoryapi:()=>{},
    setsort:()=>{}
}) 


export default function AdsBodyContaxtProvider(props) {
  const {children}=props


  const [listostan, setlistostan] = useState('')
  const [loadingostan, setloadingostan] = useState(true)
  const [searchostantext, setsearchostantext] = useState('')
  const [idostan, setidostan] = useState('')
  const [mainostan, setmainostan] = useState(true)
  const [listcitys, setlistcitys] = useState('')
  const [loadingcity, setloadingcity] = useState(true)
  const [ostanname, setostanname] = useState('')
  const [searchcitytext, setsearchcitytext] = useState('')
  const [adsbodylist, setadsbodylist] = useState('')
  const [loadingads, setloadingads] = useState(true)
  const [searchmaintext, setsearchmaintext] = useState('')
  const [params,setparams]=useState('')
  const [categoryapi,setcatapi]=useState('')
  const [sort,setsort]=useState(['price','asc'])
  useEffect(() => {
      ostan()
      citys()
  }, [searchostantext, idostan])
  const ostan = async () => {
      const res = await fetch(`${Api}/ostan?q=${searchostantext}`)

      const data = await res.json()

      if (data) {
          setlistostan(data)
          setloadingostan(false)
      }
  }


  useEffect(() => {

      citys()
  }, [idostan, searchcitytext])
  useEffect(() => {
      citys();
  }, [idostan, searchcitytext]);

  const citys = async () => {
      const apiUrl = `${Api}/citys?q=${searchcitytext}` + (idostan ? `&province_id=${idostan}` : '');

      const res = await fetch(apiUrl);

      if (res.ok) {
          const data = await res.json();
          if (data) {
              setlistcitys(data);
              setloadingcity(false);
          }
      }
  }


  const [deeppageinformcity, setdeeppageinformcity] = useState('')
  useEffect(() => {
      if (listostan) {
          const newar = listostan.find((item) => item.id == idostan)

          setostanname(newar)
      }

  }, [idostan, params.city, params.ostan])



  useEffect(() => {
      if (listostan && params.city == undefined) {
          const list = listostan.find((item) => item.slug == params.ostan)
          setdeeppageinformcity(list)
      }


  }, [listostan, params.city, params.ostan])

  useEffect(() => {
      if (listcitys && params.city) {
          const list = listcitys.find((item) => item.slug == params.city)
          setdeeppageinformcity(list)
      }

  }, [listcitys, params.city, params.ostan])


  useEffect(() => {
      adsbody()
  }, [params.city, params.slug, searchmaintext,categoryapi,sort])

  const adsbody = async () => {
      const apiadsbody = `${Api}/adsbody/?q=${searchmaintext}${params.ostan ? '&ostan=' + params.ostan : ''}${params.city ? '&idcity=' + params.city : ''}${categoryapi ? '&cat='+categoryapi:''}${sort ? '&_sort='+sort[0]+'&_order='+sort[1] :''} `;
     
   
       const res = await fetch(apiadsbody);

      if (res.ok) {
          const data = await res.json();
          if (data) {
              setadsbodylist(data);
              setloadingads(false);


          }
      }
  }

const AdsBodyValue={
     loadingads:loadingads,
    adsbodylist:adsbodylist,
    setsearchmaintext:setsearchmaintext,
    deeppageinformcity:deeppageinformcity,
    setmainostan:setmainostan,
    mainostan:mainostan,
    searchostantext:searchostantext,
    setsearchcitytext:setsearchcitytext,
    setsearchostantext:setsearchostantext,
    loadingostan:loadingostan,
    listostan:listostan,
    setidostan:setidostan,
    setmainostan:setmainostan,
    ostanname:ostanname,
    loadingcity:loadingcity,
    listcitys:listcitys,
    setparams:setparams,
    searchmaintext:searchmaintext,
    setcatapi,
    categoryapi:categoryapi,
    setsort
}
  return (
  <AdsBodyContaxt.Provider value={AdsBodyValue}>{children}</AdsBodyContaxt.Provider>
  )
}
