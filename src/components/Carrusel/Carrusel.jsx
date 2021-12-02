import React from 'react'
import nutresa from '../../img/nutresa.png';
import pacific from '../../img/pacific.png';
import ecopetrol from '../../img/ecopetrol.png';
import alcaldia from '../../img/alcaldia.png';

const Carrusel = () => {

    return (
        <section className="carousel-section col-md-6 wow animate__animated animate__lightSpeedInRight">
            <div className="container" id="carru">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                        <li type="li" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></li>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={nutresa} className="d-block w-100 carru" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={pacific} className="d-block w-100 carru" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={ecopetrol} className="d-block w-100 carru" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={alcaldia} className="d-block w-100 carru" alt="..." />
                        </div>
                    </div>
                    <ol className="carousel-control-prev" type="Button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </ol>
                    <ol className="carousel-control-next" type="Button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Carrusel;