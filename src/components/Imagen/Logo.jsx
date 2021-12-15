import React from 'react';
import Logo1 from '../../img/logo1.png';

const Logo = () => {
    return (

        <div className="text-center">
            <img src={Logo1} width="150" height="150" alt="Logotipo"
                className="img-fluid" />
        </div>
    );
}

export default Logo;