import React from 'react';
import Imagen2 from '../../components/Imagen/image2'
import Imagen3 from '../../components/Imagen/image3'
import Carrusel1 from '../../components/Carrusel/Carrusel1';

const Organigrama = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-8">
                        <h1 className="text-center">Organigrama empresarial</h1>
                        <Imagen3/>
                    </div>
                    <div className="col-4">
                        <Imagen2 />
                        <Carrusel1 />
                    </div>
                </div>

            </div>



        </>
    );
}

export default Organigrama;