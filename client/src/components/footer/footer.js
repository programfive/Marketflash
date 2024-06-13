"use client"
import React from 'react';
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Logo from '../../assets/images/logo.svg';
import Link from 'next/link';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/index';
import NewsletterImg from '../../assets/images/newsletter.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <>

            <section className='newsLetterSection'>
            <div className='container-fluid'>
    <div className='box d-flex align-items-center'>
        <div className='info'>
            <h2>Quédese en casa y obtenga sus necesidades diarias <br /> de nuestra tienda</h2>
            <p className='info-text'>Comience su compra diaria con Nest Mart</p>
            <br /><br className='res-hide' />
        </div>

        <div className='img'>
            <Image src={NewsletterImg} className='w-100' />
        </div>
    </div>
</div>
</section>

<div className='footerWrapper'>
    <div className='footerBoxes'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='box d-flex align-items-center w-100'>
                        <span><Image src={Icon1} /></span>
                        <div className='info'>
                            <h4>Los mejores precios y ofertas</h4>
                            <p>Pedidos de 10 Bs o más</p>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='box d-flex align-items-center w-100'>
                        <span><Image src={Icon2} /></span>
                        <div className='info'>
                            <h4>Envío gratuito</h4>
                            <p>Pedidos de 100 Bs o más</p>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='box d-flex align-items-center w-100'>
                        <span><Image src={Icon3} /></span>
                        <div className='info'>
                            <h4>Gran oferta diaria</h4>
                            <p>Pedidos de 200 Bs o más</p>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='box d-flex align-items-center w-100'>
                        <span><Image src={Icon4} /></span>
                        <div className='info'>
                            <h4>Amplio surtido</h4>
                            <p>Pedidos de 250 Bs o más</p>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='box d-flex align-items-center w-100'>
                        <span><Image src={Icon5} /></span>
                        <div className='info'>
                            <h4>Devoluciones fáciles</h4>
                            <p>Pedidos de 50 Bs o más</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <footer>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 part1'>
                    <Link href='/'><Image src={Logo} /></Link>
                    <br /><br />
                    <p>Comuníquese con nosotros</p>
                    <br />

                    <p><LocationOnOutlinedIcon /> <strong>Dirección</strong>: Av.Doble via la guardia km11</p>
                    <p><HeadphonesOutlinedIcon /> <strong>Llámenos:</strong> (+516) - 76620678 </p>
                    <p><EmailOutlinedIcon /> <strong>Email:</strong> Kennedysuedavid24@mail.com</p>
                    <p><WatchLaterOutlinedIcon /> <strong>Horas:</strong> 10:00 - 18:00, Lun - Sáb</p>

                </div>

                <div className='col-md-6 part2'>
                    <div className='row'>
                        <div className='col'>
                            <h3>Compañía</h3>
                            <ul class="footer-list mb-sm-5 mb-md-0">
                                <li><Link href="#">Sobre Nosotros</Link></li>
                                <li><Link href="#">Información de Envío</Link></li>
                                <li><Link href="#">Política de Privacidad</Link></li>
                                <li><Link href="#">Términos y Condiciones</Link></li>
                                <li><Link href="#">Contáctenos</Link></li>
                                <li><Link href="#">Centro de Soporte</Link></li>
                                <li><Link href="#">Carreras</Link></li>
                            </ul>
                        </div>

                        <div className='col'>
                            <h3>Compañía</h3>
                            <ul class="footer-list mb-sm-5 mb-md-0">
                                <li><Link href="#">Cuenta</Link></li>
                                <li><Link href="#">Información de Envío</Link></li>
                                <li><Link href="#">Política de Privacidad</Link></li>
                                <li><Link href="#">Términos y Condiciones</Link></li>
                                <li><Link href="#">Contáctenos</Link></li>
                                <li><Link href="#">Centro de Soporte</Link></li>
                                <li><Link href="#">Carreras</Link></li>
                            </ul>
                        </div>

                        <div className='col'>
                            <h3>Corporativo</h3>
                            <ul class="footer-list mb-sm-5 mb-md-0">
                                <li><Link href="#">Sobre Nosotros</Link></li>
                                <li><Link href="#">Información de Envío</Link></li>
                                <li><Link href="#">Política de Privacidad</Link></li>
                                <li><Link href="#">Términos y Condiciones</Link></li>
                                <li><Link href="#">Contáctenos</Link></li>
                                <li><Link href="#">Centro de Soporte</Link></li>
                                <li><Link href="#">Carreras</Link></li>
                            </ul>
                        </div>

                        <div className='col'>
                            <h3>Popular</h3>
                            <ul class="footer-list mb-sm-5 mb-md-0">
                                <li><Link href="#">Sobre Nosotros</Link></li>
                                <li><Link href="#">Información de Envío</Link></li>
                                <li><Link href="#">Política de Privacidad</Link></li>
                                <li><Link href="#">Términos y Condiciones</Link></li>
                                <li><Link href="#">Contáctenos</Link></li>
                                <li><Link href="#">Centro de Soporte</Link></li>
                                <li><Link href="#">Carreras</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 part3'>
                    <h3>Instalar Aplicación</h3>
                    <br className='res-hide'/>
                    <p>Desde App Store o Google Play</p>

                    <div className='d-flex'>
                        <Link href={''}><Image src={appStore} width={150} /></Link>
                        <Link href={''}><Image src={googlePlay} className='mx-2' width={150} /></Link>
                    </div>

                    <br />

                    <p>Pasarelas de Pago Seguras</p>
                    <Image src={paymentImage} />
                </div>

            </div>

    

                        <hr />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                                <p>© 2022, Nest -MarkertFlash
                                    All rights reserved</p>
                            </div>

                             <div className='col-md-6 d-flex part_2'>
        <div className='m-auto d-flex align-items-center phWrap'>
            <div className='phNo d-flex align-items-center mx-5'>
                <span><HeadphonesOutlinedIcon /></span>
                <div className='info ml-3'>
                    <h3 className='text-g mb-0'>1900 - 888</h3>
                    <p className='mb-0'>Centro de Soporte 24/7</p>
                </div>
            </div>

            <div className='phNo d-flex align-items-center  mx-5'>
                <span><HeadphonesOutlinedIcon /></span>
                <div className='info ml-3'>
                    <h3 className='text-g mb-0'>1900 - 888</h3>
                    <p className='mb-0'>Centro de Soporte 24/7</p>
                </div>
            </div>
        </div>
    </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link href={''}><FacebookOutlinedIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><TwitterIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><InstagramIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><YouTubeIcon /></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;