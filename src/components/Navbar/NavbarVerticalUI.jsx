import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarVerticalUI = () => {
	return (
		<>
			<div className='col color1 pt-3'>
				<ul className='nav flex-column '>
					<li className='nav-item'>
						<NavLink
							className='nav-link  text-white'
							to='/dashboard'
							activeClassName='active'
							exact='true'
						>
							DashBoard
						</NavLink>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='drowt'
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
							style={{ color: 'white' }}
						>
							Modulo de Puertos
						</a>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							<li>
								<NavLink
									className='dropdown-item'
									to='/crearpuerto'
									activeClassName='active'
									exact='true'
								>
									Crear Puertos
								</NavLink>
							</li>
							<li>
								<NavLink
									className='dropdown-item'
									to='/gestionpuerto'
									activeClassName='active'
									exact='true'
								>
									Consultar puertos
								</NavLink>
							</li>
						</ul>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='drowt'
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
							style={{ color: 'white' }}
						>
							Modulo de Usuarios
						</a>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							<li>
								<NavLink
									className='dropdown-item'
									to='/gestionusuario'
									activeClassName='active'
									exact='true'
								>
									Consultar Usuarios
								</NavLink>
							</li>
							<li>
								<NavLink
									className='dropdown-item'
									to='/crearusuario'
									activeClassName='active'
									exact='true'
								>
									Crear Usuario Interno
								</NavLink>
							</li>
						</ul>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='drowt'
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
							style={{ color: 'white' }}
						>
							Modulo de Ordenes
						</a>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							<li>
								<NavLink
									className='dropdown-item'
									to='/gestionorden'
									activeClassName='active'
									exact='true'
								>
									Gestionar Ordenes
								</NavLink>
							</li>
							<li>
								<NavLink
									className='dropdown-item'
									to='/consultarorden'
									activeClassName='active'
									exact='true'
								>
									Consultar Ordenes
								</NavLink>
							</li>
						</ul>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='drowt'
							id='navbarDropdownMenuLink'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
							style={{ color: 'white' }}
						>
							Modulo de Barcos
						</a>
						<ul
							className='dropdown-menu'
							aria-labelledby='navbarDropdownMenuLink'
						>
							<li>
								<NavLink
									className='dropdown-item'
									to='/crearbarco'
									activeClassName='active'
									exact='true'
								>
									Crear Barcos
								</NavLink>
							</li>
							<li>
								<NavLink
									className='dropdown-item'
									to='/gestionbarco'
									activeClassName='active'
									exact='true'
								>
									Consultar Barcos
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavbarVerticalUI;
