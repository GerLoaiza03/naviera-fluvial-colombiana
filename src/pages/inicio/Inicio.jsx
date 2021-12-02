import React from 'react'
import cobertura from '../../img/cobertura.png';
import Imagen1 from '../../components/Imagen/image1'
import Carrusel from '../../components/Carrusel/Carrusel';

const Inicio = () => {
	return (
		<>

			<br /><br /><br />
			<h1 className="title1 container wow animate__animated animate__rollIn text-center">Bienvenidos</h1>
			<section className="container" id="borderl" >
				<div>
					<div className="row">
						<Imagen1 />
						<article className="col-md-6">
							<div className="pad"></div>
							<h3 className="title3 wow animate__animated animate__jackInTheBox"> Plataforma Transporte Marítimo/Fluvial de Mercancías</h3>
							<p className="wow animate__animated animate__flipInY">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo accusantium voluptate et reprehenderit voluptatum voluptatibus beatae omnis enim aut.</p>
						</article>

					</div>
				</div>
			</section>

			<section className="container ">
				<div >
					<div className="row">
						<article className="col-md-6 ">
							<div className="pad"></div>
							<h3 className="title3 wow animate__animated animate__jackInTheBox"> <a className="nav-link" href="Clientes"> Nuestros Clientes</a> </h3>
							<p className="wow animate__animated animate__flipInY">En nuestra trayectoria hemos tenido la oportunidad de realizar proyectos para empresas e instituciones ampliamente reconocidas en el ámbito nacional e.</p>
						</article>
						<Carrusel/>
					</div>
				</div>
			</section>

			<div className="container">
				<div className="row ">
					<article className="article2 col-md-12">
						<h1 className="title3 wow animate__animated animate__zoomIn text-center" id="t3"> Cobertura</h1>
						<img className="map_col wow animate__animated animate__zoomInDown img-fluid" src={cobertura} alt="" />
						<div className="container col-md-9 bg-white">
							<h4 className="text-center">
								Transportamos su mercancía a los principales puertos del mundo
							</h4>
						</div>
					</article>
				</div>
			</div>

		</>

	);
}

export default Inicio;