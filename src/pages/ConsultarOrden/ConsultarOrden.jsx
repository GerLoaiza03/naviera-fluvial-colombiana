import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import VectorOrden from '../../components/Imagen/vectororden';
import TableOrdenes from '../../components/TableOrdenes/TableOrdenes';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ConsultarOrden = () => {
	const [prueba, setPrueba] = useState([]);
	const mostrarOrdenes = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
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

	//Respuestas filtradas
	// Manejo onClick

	const onClickPendientes = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
			.then((response) => {
				const pendientes = response.data.filter(
					(comp) => comp.estado === 'Pendiente'
				);
				setPrueba(pendientes);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onClickCanceladas = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
			.then((response) => {
				const canceladas = response.data.filter(
					(comp) => comp.estado === 'Cancelada'
				);
				setPrueba(canceladas);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onClickDespachadas = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
			.then((response) => {
				const despachadas = response.data.filter(
					(comp) => comp.estado === 'Despachada'
				);
				setPrueba(despachadas);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onClickFinalizadas = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
			.then((response) => {
				const finalizadas = response.data.filter(
					(comp) => comp.estado === 'Finalizada'
				);
				setPrueba(finalizadas);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onClickTodas = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
			.then((response) => {
				setPrueba(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<NavbarVerticalUI />
					<div className='col-1'></div>
					<div className='col-8'>
						<h5 className='fw-bold text-center mt-4 pt-2 pb-3'>
							Consultar Ordenes Gestionadas
						</h5>
						<div className='row'>
							<div className='col'> </div>

							<div className='col-4'>
								<Buscador />
							</div>
						</div>

						<div className='row'>
							<TableOrdenes prueba={prueba} />
							<nav aria-label='Page navigation example'>
								<ul className='pagination'>
									<li className='page-item'>
										<a className='page-link' href='#/'>
											Previous
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#/'>
											1
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#/'>
											2
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#/'>
											3
										</a>
									</li>
									<li className='page-item'>
										<a className='page-link' href='#/'>
											Next
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div className='row'>
							<div className='col'></div>
							<div className='col-5'>
								<VectorOrden />
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

export default ConsultarOrden;
