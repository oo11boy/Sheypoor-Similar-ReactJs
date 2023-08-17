import React from 'react'
import { useState } from 'react'
import { BiArrowBack, BiArrowToRight, BiSolidLocationPlus } from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SearchBox.css'
import { useEffect } from 'react';
import { Api, domain } from '../../../../Api';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { AdsBodyContaxt } from '../../../../Contaxt/AdsBodyContaxt';
export default function SearchBox() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const adsbody=useContext(AdsBodyContaxt)
    const paramsdata = useParams()
  useEffect(()=>{
    adsbody.setparams(paramsdata)
  },[paramsdata.city,paramsdata.ostan])

    return (
        <div className="searchbox">
            {/* {adsbody.loadingads == false && adsbody.adsbodylist ? adsbody.adsbodylist.map((item) => (item.body)) : ''} */}

            <form action="">
                <input type="text"
                    onChange={(event) => {
                        adsbody.setsearchmaintext(event.target.value)
                    }}
                    placeholder='جستجو در شیپور' />
                <Button variant="primary" onClick={handleShow}>

                    همه {
                        adsbody.deeppageinformcity && adsbody.deeppageinformcity.name ?
                        adsbody.deeppageinformcity.name
                            : 'ایران'}

                    <BiSolidLocationPlus />
                </Button>
            </form>


            {/* modal: */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <BiArrowToRight onClick={() => {
                        adsbody.setmainostan(true)
                    }} />

                    <Modal.Title>انتخاب استان</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <form className='searchbox w-100' action="">
                        {adsbody.mainostan ? <input
                            className='w-100' type="text" value={adsbody.searchostantext} onChange={(event) => {
                                adsbody.setsearchcitytext('')
                                adsbody.setsearchostantext(event.target.value)

                            }} placeholder='استان را وارد کنید ' /> :
                            <input
                                className='w-100' type="text" value={adsbody.searchostantext} onChange={(event) => {
                                    adsbody.setsearchostantext('')
                                    adsbody.setsearchcitytext(event.target.value)

                                }} placeholder='شهرستان را وارد کنید ' />
                        }


                    </form>

                    <ul className='w-100 ostanlist overflow-auto'>

                        <>

                            {adsbody.loadingostan == false && adsbody.mainostan == true ?
                                <>
                                    <Link onClick={() => { setShow(false) }} to={domain} className=' text-decoration-none text-dark d-block list-unstyled border-bottom fs-5 m-2 p-2'>همه ایران</Link>

                                    {adsbody.listostan.map((item) => (
                                        <Link onClick={() => {
                                            adsbody.setidostan(item.id)
                                            adsbody.setmainostan(false)
                                        }} className='text-decoration-none text-dark d-block list-unstyled border-bottom fs-5 m-2 p-2'>{item.name}</Link>
                                    ))}
                                </>
                                :
                                <>
                                    <Link onClick={() => { setShow(false) }} to={adsbody.ostanname.slug &&  '../' +adsbody.ostanname.slug } className=' text-decoration-none text-dark d-block list-unstyled border-bottom fs-5 m-2 p-2'>همه {adsbody.ostanname.name && adsbody.ostanname.name}</Link>

                                    {adsbody.loadingcity == false && adsbody.mainostan == false && adsbody.listcitys.map((item) => (
                                        <Link onClick={() => { setShow(false) }} to={adsbody.ostanname.slug && '../' + adsbody.ostanname.slug + '/' + item.slug} className='text-decoration-none text-dark d-block list-unstyled border-bottom fs-5 m-2 p-2'>{item.name}</Link>
                                    ))}
                                </>
                            }


                        </>


                    </ul>
                </Modal.Body>
                
            </Modal>
        </div>




    )
}