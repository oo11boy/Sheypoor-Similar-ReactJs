import React from 'react'
import './Footer.css'
import { AiFillApple, AiOutlineLeft } from 'react-icons/ai'
import { FcDownload } from 'react-icons/fc'
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
export default function Footer() {
    return (
        <div className='cfooter '>

            <div className='footer '>
                <div className='rightfooter'>
                    <div>
                        <p>شیپور</p>
                        <ul>
                            <li>درباره شیپور</li>
                            <li>وبلاگ</li>
                            <li>نقشه سایت</li>
                            <li>فرصت های شغلی</li>
                        </ul>
                    </div>

                    <div>
                        <p>راهنمای مشتریان</p>
                        <ul>
                            <li>سوالات متداول</li>
                            <li>تماس با پشتیبانی</li>
                            <li>راهنما و پشتیبانی</li>
                            <li> قوانین و مقررات</li>
                        </ul>
                    </div>


                    <div>
                        <p>خدمات</p>
                        <ul>
                            <li>همه فروشگاه ها</li>
                            <li>همه مشاوران</li>
                            <li>دانلود الونک</li>
                        </ul>
                    </div>
                </div>
                <div className="leftfooter">
                    <div className="namad">
                        <a href=""><img src="https://www.sheypoor.com/x/imgs/3sus8W3D.png" alt="" /></a>
                        <a href=""><img src="https://www.sheypoor.com/x/imgs/1MDy1-uz.png" alt="" /></a>
                        <a href=""><img src="https://www.sheypoor.com/x/imgs/2ueFIypm.png" alt="" /></a>
                    </div>

                    <div className='applicationfooter'>
                        <a className='text-dark text-decoration-none' href="#">
                            <div className='applicationd1 img-thumbnail'>
                                <div>
                                    <p>اپلیکیشن اندروید</p>
                                    <p>دانلود مستقیم</p>
                                </div>
                                <span><FcDownload /></span>
                            </div>
                        </a>
                        <a className='text-dark text-decoration-none' href="#">
                            <div className='applicationd1 img-thumbnail'>
                                <div>
                                    <p>اپلیکیشن ios</p>
                                    <p>سیب اپ</p>
                                </div>
                                <span><AiFillApple /></span>
                            </div>
                        </a>
                        <a  className='text-dark text-decoration-none' href="#">
                            <div className='applicationd1 img-thumbnail' >
                                <div>
                                    <p>همه مارکت ها</p>
                                </div>
                                <span><AiOutlineLeft /></span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <div className="underfooter ">
                <div className='bodyunderfooter paddingdownmob'>
                <p>کليه حقوق اين سایت متعلق به شرکت نت تجارت اهورا (شیپور) است.</p>
                <div className='logosocial'>
                    <BiLogoTwitter/>
                    <BiLogoLinkedin />
                    <BiLogoInstagram />
                </div>
                </div>
               
            </div>
        </div>
    )
}
