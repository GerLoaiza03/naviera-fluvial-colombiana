import React from 'react';
import { useState, useEffect } from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import Puerto1 from '../../components/Imagen/puerto1';
import TablePuertos from '../../components/TablePuertos/TablePuertos';
import axios from 'axios';
const GestionPuerto = () => {
	const [prueba, setPrueba] = useState([]);
	const mostrarOrdenes = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_puertos')
			.then((response) => {
				setPrueba(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		mostrarOrdenes();
	}, []);
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<NavbarVerticalUI />
					<div className='col-1'></div>
					<div className='col-8'>
						<h5 className='fw-bold text-center mt-4 pt-2 pb-3'>Puertos </h5>
						<div className='row mb-3'>
							<TablePuertos prueba={prueba} />
						</div>

						<div className='row mb-4'>
							<div className='col'></div>
							<div className='col-5'>
								<Puerto1 />
							</div>
							<div className='col'></div>
						</div>
					</div>
					<div className='col-1'></div>
				</div>
			</div>
		</>
	);
};

export default GestionPuerto;
