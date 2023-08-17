import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AdsBodyContaxt } from '../../Contaxt/AdsBodyContaxt'
import Header from '../Home/Header/Header'
import Footer from '../Home/Footer/Footer'
import './SingleAds.css'

import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { HeartContext } from '../../Contaxt/HeartContext'
import { AiFillHeart, AiFillWarning, AiOutlineHeart } from 'react-icons/ai'
import { BiArrowFromLeft, BiChat, BiLogoTelegram, BiPhone, BiPhoneCall, BiShare, BiShareAlt } from 'react-icons/bi'
import { Api } from '../../Api'
import AdsComponent from '../../Component/AdsComponent'
export default function SingleAds() {
    const params = useParams()
    const adsbody = useContext(AdsBodyContaxt)
    const [informdata, setinformdata] = useState('')
    const [loading, setloading] = useState(true)
    useEffect(() => {
 
        if (adsbody && adsbody.adsbodylist) {
            const info = adsbody.adsbodylist.find((item) => item.id == params.id)
         
            if (info) {
                setinformdata(info)
                
                setloading(false)
            }
        
    }

    }, [params.id, adsbody])
 
    const [heartslist, setheartslist] = useState([]);
    const hearts = useContext(HeartContext);
    
    useEffect(() => {
        setheartslist(hearts.listsave);
    }, [hearts.listsave]);


    const [category, setCat] = useState([]);
    const [singlecat,setsinglecat]=useState([])
    const [loadingscat,setloadingscat]=useState(true)
    useEffect(() => {
        cats();
      }, [informdata]);

    
      const cats = async () => {
        const apiadsbody = `${Api}/category`;
        const res = await fetch(apiadsbody);
    
     
          const data = await res.json();
          if (data) {
            setCat(data);
            setloadingscat(false)
   
          }
              };
              

 useEffect(()=>{
    if( loadingscat==false && category){ 
        const catarray=category.find((item)=>item.nameid==informdata.cat)

        if(catarray){
            setsinglecat(catarray)
          
        }
    }
   
   

 },[category])
    return (
        <>
            <Header />
            <div className='singlepageads mt-5'>

                {loading == false &&
                    <div >
                        <>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}

                                pagination={{
                                    clickable: true,

                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}

                                modules={[Pagination]}
                                className="mySwiper"
                                centeredSlides={!informdata.otherimg}
                            >
                                <SwiperSlide><img src={informdata.img} alt="" /></SwiperSlide>
                                {informdata.otherimg &&
                                    informdata.otherimg.map((item) => (
                                        <>

                                            <SwiperSlide><img src={item} alt="" /></SwiperSlide>

                                        </>
                                    ))

                                }


                            </Swiper>
                            <hr />
                        </>


                        <div className="underimgs d-lg-flex justify-content-between">
                            <div className="rightuimgs">
                        <div className='d-flex justify-content-between align-items-center'>
                                    <h3 className='mt-3'>{informdata.title}</h3>
      <div>
       <span className='ml-1 fs-3 btn'><BiShareAlt/></span> 
     
       <span className='pe-1 fs-3 btn border-0'>
       {hearts.listsave.some((savedItem) => savedItem.id === informdata.id) ? (
                    <AiFillHeart onClick={() => hearts.toggleHeart(informdata.id)} />
                  ) : (
                    <AiOutlineHeart onClick={() => hearts.toggleHeart(informdata.id)} />
                  )}

       </span>
       </div>
 
       </div>     

       <div className='py-4'>
        <span>{informdata.date}</span> ،
        <span className='pe-1'>{informdata.city}</span>
       </div>
       <hr />
       <div className='d-flex justify-content-between py-4'>
        <p className='fs-5'>دسته بندی:</p>
        <p className='fs-5'>{loadingscat==false&&singlecat.name}</p>
       </div>
       <hr />
       <div className='py-4'>
        <p className='fs-5'>
            {informdata.content}
        </p>
       </div>
       <hr />
       <div className='d-flex justify-content-between py-4'>
        <p className='fs-5'>شماره تماس تایید شده:</p>
        <p className='fs-5 text-primary'>{informdata.number}</p>
       </div>

       <hr />

       <div className='py-4'>
        <form action="" className='d-flex justify-content-start align-items-center'>
        <button className='btn btn-primary p-3 ms-2'>
            <BiLogoTelegram className='fs-4'/>
            
        </button>
            <input type="text" className='w-75 p-3   border-0 bg-light rounded-2' placeholder='پیامتان را بنویسید' />
     
        </form>
       </div>
       <hr />
       <div className='d-flex justify-content-start py-4'>
        <p className='fs-5 me-2'>شناسه اگهی:</p>
        <p className='fs-5 me-2'>{informdata.id}</p>
       </div>
       <hr />
       <div className='d-flex flex-column py-4'>
        <p className='fs-5 me-2  text-primary'>
        <AiFillWarning className='ps-2 fs-3 text-dark '/>
             امنیت معاملات:</p>
        <p className='fs-5 me-2 ' >

            شیپور در قبال آگهی‌هایی که امکان «خرید امن» ندارند، مسئولیتی ندارد. پیش از دریافت این کالا هیچ مبلغی را واریز نکنید.</p>
       </div>

                            </div>
                            <div className="leftuimgs">
<div className="boxsingleads mt-3 p-3 border border-1 rounded-2 d-flex justify-content-center align-items-center flex-column">
<img className='w-25 p-2' src="https://www.sheypoor.com/img/placeholders/user.png" alt="" />
<p className='fs-4 '> کاربر شیپور</p>
<p className='fs-4'>عضو شیپور</p>
<button className='fs-4 btn btn-primary rounded-5 w-75 my-3'><BiPhone/> تماس با {informdata.number} </button>
<button className='fs-4 btn btn-light rounded-5 border-1 border w-75'><BiChat/> چت با کاربر شیپور</button>
</div>
                            </div>

                            
                        </div>
                        <div>
                                <AdsComponent text='مشابه در ' cityname={informdata.city} name={informdata.city} nameid={informdata.ostan} catid={informdata.cat} />
                            </div>

                    </div>
                }
            </div>


            <Footer />
        </>

    )
}
