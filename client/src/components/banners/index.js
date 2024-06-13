import React from 'react';
import storeCardSpecialist from '../../assets/images/store-card-specialist.jpg';
import storeCardApplepay from '../../assets/images/store-card-applepay.jpg';
import storeCardHomekit from '../../assets/images/store-card-homekit.jpg';

import './style.css';
import Image from 'next/image';

const Banners = ()=>{
    return(
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                            <div className='box-card-text'>
                            <h2 className='hd'>Calidad de productos</h2>
                            <p>Contamos con los mejores productos para tu hogar.</p>
                            </div>
                            <Image src={storeCardSpecialist} className='w-100 transition'  alt="store card specialist"/>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                        <div className='box-card-text'>
                            <h2 className='hd'>Pago seguro</h2>
                            <p>Elige el método de pago que más te guste</p>
                        </div>
                            <Image src={storeCardApplepay} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                        <div className='box-card-text'>
                        <h2 className='hd'>Variedad de productos</h2>
                        <p>Contamos con una variedad de productos para  tus necesidades.</p>
                        </div>
                            <Image src={storeCardHomekit} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Banners;