"use client"

import React, { useEffect, useContext} from 'react';
import Slider from "react-slick";
import './index.css';
import Link from 'next/link';
import Slide1 from '../../assets/images/slider-1.png';
import Slide2 from '../../assets/images/slider-2.png';

import Newsletter from '../../components/newsletter/index';

import { MyContext } from '../../context/ThemeContext';
import Image from 'next/image';
import { Button } from '@mui/material';

const HomeSlider = () => {

    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth>992 ? true : false,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
        <div className='container-fluid position-relative'>
    <Slider {...settings} className='home_slider_Main'>
        <div className="item">
            <Image src={Slide1} className='w-100' alt='slide'/>
            <div className='info'>
                <h2 class="">
                    No te pierdas<br />
                    ofertas increíbles <br />de comestibles
                </h2>
                <Link href={'/category/electronics'}>
                    <Button className="btn btn-g btn-container">Explora nuestros productos</Button>
                </Link>
            </div>
        </div>
        <div className="item">
            <Image src={Slide2} className='w-100' alt='slide' />
            <div className='info'>
                <h2 class="">
                    Verduras Frescas <br /> y muchas cosas mas<br />
                    Gran descuento
                </h2>
                <Link href={'/category/electronics'} >
                    <Button className="btn btn-g btn-container">Explora nuestros productos</Button>
                </Link>
            </div>
        </div>
    </Slider>
</div>



        </section>

    )
}

export default HomeSlider;