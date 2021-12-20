import React from 'react';
import { useState, useEffect } from 'react';
// import Buscador from '../../components/Buscador/Buscador';
import Imagen2 from '../../components/Imagen/image2';
import NavbarVertical from '../../components/Navbar/NavbarVertical';
import TableOrdenes from '../../components/TableOrdenes/TableOrdenes';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

// import swal from 'sweetalert';
const HistorialCliente = () => {
	// const [id, setId] = useState('');
	// const [puerto_salida, setPuerto_salida] = useState('');
	// const [puerto_destino, setPuerto_destino] = useState('');
	// const [barco, setBarco] = useState('');
	// const [estado, setEstado] = useState('');

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
	const varglobal = prueba;
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

	//barra de busqueda on submit
	const [respuestaApi, setResputaApi] = useState([]);
	const [busqueda, setBusqueda] = useState('');
	const [isItIn, setIsItIn] = useState(false);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.get('http://localhost:5000/api/naviera/obtener_envios')
			.then((response) => {
				setResputaApi(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<NavbarVertical />
					<div className='col-1'></div>
					<div className='col-8'>
						<h5 className='fw-bold text-center mt-4 pt-2 pb-3'>
							Historial de órdenes de envío{' '}
						</h5>
						<div className='container'>
							<div className='d-flex justify-content-start mb-2 pr-4'>
								<div
									className='p-2 bd-highlight bg-info'
									onClick={onClickPendientes}
								>
									Pendientes
								</div>
								<div
									className='p-2 bd-highlight bg-danger'
									onClick={onClickCanceladas}
								>
									Canceladas
								</div>
								<div
									className='p-2 bd-highlight bg-success '
									onClick={onClickDespachadas}
								>
									Despachadas
								</div>
								<div
									className='p-2 bd-highlight bg-warning'
									onClick={onClickFinalizadas}
								>
									Finalizadas
								</div>
								<div
									className='p-2 bd-highlight bg-primary text-white'
									onClick={onClickTodas}
								>
									Todas
								</div>
								<div className='d-flex justify-content-end pl-5'>
									<div className='d-flex justify-content-end'>
										<form
											className='form-inline my-2 my-lg-0'
											onSubmit={onSubmitHandler}
										>
											<input
												className='form-control mr-sm-2'
												type='search'
												placeholder='Buscar...'
												aria-label='Search'
												value={busqueda}
												onChange={(e) => setBusqueda(e.target.value)}
											/>
											<button
												className='btn btn-outline-success my-2 my-sm-0'
												type='submit'
											>
												Buscar
											</button>
										</form>
									</div>
								</div>
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
								<Imagen2 />
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

export default HistorialCliente;
