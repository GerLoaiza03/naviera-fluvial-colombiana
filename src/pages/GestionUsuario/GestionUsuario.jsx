import React from 'react';
import NavbarVerticalUI from '../../components/Navbar/NavbarVerticalUI';
import Buscador from '../../components/Buscador/Buscador';
import UserIcon from '../../components/Imagen/usericon';
import TableUsuarios from '../../components/TableUsuarios/TableUsuarios';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GestionUsuario = () => {
	const [prueba, setPrueba] = useState([]);
	const mostrarOrdenes = () => {
		axios
			.get('http://localhost:5000/api/naviera/obtener_clientes')
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
						<h5 className='fw-bold text-center mt-4 pt-2 pb-3'>
							Gestionar Usuarios{' '}
						</h5>
						<div className='row'>
							<TableUsuarios prueba={prueba} />
						</div>
						<div className='row'>
							<div className='col'></div>
							<div className='col-5'>
								<UserIcon />
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

export default GestionUsuario;
