import React, { useContext } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { Api, domain } from '../../../Api'
import { useState } from 'react'
import SearchBox from './SearchBox/SearchBox'
import Filter from './Filters/Filter'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdModeComment } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'
import { HeartContext } from '../../../Contaxt/HeartContext'
import { Modal } from 'react-bootstrap'

export default function () {
 const [logodata,setlogodata]=useState([])
  const [loading,setloading]=useState(true) 
useEffect(()=>{
    logodb()
},[])

const logodb=async()=>{
    const res=await fetch(`${Api}/logo`)
    const data= await res.json()
    setlogodata(...data)
    setloading(false)
}

const hearts=useContext(HeartContext)


const [fullscreen, setFullscreen] = useState(true);
const [show, setShow] = useState(false);

function handleShow(breakpoint) {
  setFullscreen(breakpoint);
  setShow(true);
}

  return (
    <div className='header'>
        <div className="bodyheader">
    <div className="logo">
        {loading==false &&   <Link className='d-flex w-100 justify-content-center' to='../'><img src={domain +'/'+ logodata.img}  alt="" /> </Link> }
       
    </div>
     {/* search box */}
     <SearchBox/>
    <div className="leftheader">
        <Link className='savelink' onClick={handleShow}> <AiFillHeart /> ذخیره ها
        {hearts.listsave.length>0 &&   <p className='countf'>{hearts.listsave.length}</p>}
      
        </Link>
        <Link to='/'> <MdModeComment />پیام ها </Link>
        <Link to='/'> <BiSolidUser />  حساب من</Link>
        <div>

      
        <Link to='/' className='btn btn-primary text-white'>+  ثبت اگهی رایگان </Link>
        </div>

    </div>
    
        </div>

        
 









        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>علاقه مندی ها</Modal.Title>
        </Modal.Header>
        <Modal.Body className='heartlist'>
     {hearts.listsave.map((item)=>(
         <div className="singleads w-75 m-auto mt-3 img-thumbnail p-4">
         <Link to={'../'+item.city+'/'+item.cat+'/'+item.id} className='text-dark text-decoration-none'>
         <img src={item.img} alt="" />
         <span>
{hearts.listsave.some((savedItem) => savedItem.id === item.id) ? (
                    <AiFillHeart onClick={() => hearts.toggleHeart(item.id)} />
                  ) : (
                    <AiOutlineHeart onClick={() => hearts.toggleHeart(item.id)} />
                  )}
  </span>
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
     {hearts.listsave.length ==0 && 'لیست علاقمندی های شما خالی است.'}
        </Modal.Body>
      </Modal>
    </div>
  )
}
