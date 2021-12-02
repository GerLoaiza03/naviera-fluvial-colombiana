import React from 'react';

function Footer () {
	return (
        
        <footer className="">
            <div className="row secfoot">
                    <div className="col-md-9 align-self-left foot text-white">
                        © 2021 Grupo 9 
                        <br></br>Dirección - Barranquilla - Colombia
                        <br></br>(+ 57 1) xxx-xx-xx
                        <br></br>Cel.:(+ 57) xxx-xxx-xx-xx
                        <br></br>contacto@gmail.com
                    </div>
                    <div className="col-md-3 align-self-end foot">
                        <p className="creador text-white">Sitio creado por:<br/>  	
                        MisionTic-Uninorte <br/> Grupo 21 <br/>Equipo 9
                        </p>
                    </div>	
            </div>
    
            <div className="title6">
                <div className="row">
                    <section className="col-md-12 text-center">
                        <h6 className=" text-white ">Todos los Derechos Reservados &copy; 2021</h6>
                    </section>	
                </div>	
            </div>
        </footer>
    );
}
export default Footer;