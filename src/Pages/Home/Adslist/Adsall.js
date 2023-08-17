import React from 'react'
import { useContext } from 'react'
import { AdsBodyContaxt } from '../../../Contaxt/AdsBodyContaxt'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './Adsall.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { HeartContext } from '../../../Contaxt/HeartContext'
import { Alert } from 'react-bootstrap'
import AdsComponent from '../../../Component/AdsComponent'
import { Link } from 'react-router-dom'
import Filter from '../Header/Filters/Filter'
export default function Adsall() {
const adsbody=useContext(AdsBodyContaxt)
const hearts=useContext(HeartContext)


  return (
    <>
   
    <div className='ads'>
    <Filter/>
    <div className='newadstitle'>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.306 16.468l1.402-3.856a.411.411 0 00-.246-.525l-1.54-.558a.41.41 0 00-.525.246l-.279.771-5.778-2.108-.844 2.313 5.778 2.11-.279.77a.411.411 0 00.246.526l1.54.557c.206.083.443-.032.525-.246z" fill="currentColor"></path><path d="M11.562 10.142a4.844 4.844 0 00-1.385.23c-.074.025-.156.05-.23.082a4.546 4.546 0 00-1.09.574c-.163.115-.31.238-.442.345l-.008.008c-.131.123-.254.238-.36.353-.443.476-.665.91-.812 1.198-.066.148-.115.254-.14.336l-.04.115a5.01 5.01 0 00-.295 1.904c.008.254.04.5.09.746v.009c.155.754.483 1.468.959 2.075a4.956 4.956 0 002.18 1.584c.606.221 1.253.32 1.9.295a4.93 4.93 0 002.82-1.042 4.965 4.965 0 001.582-2.183s.016-.04.04-.114c.025-.074.058-.189.107-.345a4.872 4.872 0 00.132-1.682 5.012 5.012 0 00-.615-1.961c-.041-.065-.082-.14-.123-.205a4.899 4.899 0 00-.926-1.083 4.97 4.97 0 00-1.55-.919l-.417 1.157-.418 1.157a2.468 2.468 0 011.467 3.159 2.456 2.456 0 01-3.147 1.469 2.468 2.468 0 01-1.467-3.16 2.463 2.463 0 013.155-1.468l.418-1.157.418-1.157a4.928 4.928 0 00-1.672-.295c-.057-.025-.098-.025-.13-.025z" fill="currentColor"></path><path d="M12.496 12.752l.844-2.314-3.18-1.157-4.343-5.136a.41.41 0 00-.697.123l-2.877 7.926c-.106.295.148.598.451.541l6.63-1.14 3.172 1.156z" fill="currentColor"></path><defs><radialGradient id="monochromeSheypoor_svg__paint0_angular_873_4709" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.91806 0 0 4.92882 11.674 15.071)"><stop offset="0.788" stop-color="currentColor"></stop><stop offset="0.796" stop-color="currentColor"></stop></radialGradient></defs></svg>
<p>اگهی های جدید در همه {
                        adsbody.deeppageinformcity && adsbody.deeppageinformcity.name ?
                        adsbody.deeppageinformcity.name
                            : 'ایران'}</p>
    </div>
    <div className="adslist">

      {adsbody.loadingads == false && adsbody.adsbodylist.map((item)=>(
 <div className="singleads">
  <span>
{hearts.listsave.some((savedItem) => savedItem.id === item.id) ? (
                    <AiFillHeart onClick={() => hearts.toggleHeart(item.id)} />
                  ) : (
                    <AiOutlineHeart onClick={() => hearts.toggleHeart(item.id)} />
                  )}
  </span>
 <Link  to={'../'+item.city+'/'+item.cat+'/'+item.id} className='text-dark text-decoration-none'>
 <img src={item.img} alt="" />

 <h5>  {item.title &&  item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</h5>
 <p className='fw-bold'>
  {item.price} 
 <span className='p-1'>تومان</span></p>
<p className=' opacity-75 fs-6'>
{item.city}
</p>
<p className=' opacity-75'>{item.date}</p>
 </Link>
</div>
      ))}



{adsbody.loadingads == false && adsbody.adsbodylist.length==0 && 

<Alert className='w-100 mt-3 fs-4' key={'primary'} variant={'primary'}>
اگهی ای وجود ندارد.
</Alert>

}
   
   </div>

   <AdsComponent name='کرمانشاه' nameid='kermanshah' text=' جدید در همه' />
</div>
</>
  )
}
