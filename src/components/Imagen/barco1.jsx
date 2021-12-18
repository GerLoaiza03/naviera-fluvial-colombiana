import React from 'react';
import Barco1 from '../../img/barco1.jpg';

const Logo = () => {
    return (

        <div className="text-center">
            <img src={Barco1} alt="" className="col-12 wow animate__animated animate__lightSpeedInLeft"/>
        </div>
    );
}

export default Logo;