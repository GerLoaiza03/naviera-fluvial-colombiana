import React from 'react';
import UserIcon from '../../img/usericon.jpg';

const Logo = () => {
    return (

        <div class="text-center">
            <img src={UserIcon} alt="" className="col-12 wow animate__animated animate__lightSpeedInLeft"/>
        </div>
    );
}

export default Logo;