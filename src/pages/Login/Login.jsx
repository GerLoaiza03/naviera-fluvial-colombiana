import Imagen4 from '../../components/Imagen/imagen4';
import Logo from '../../components/Imagen/Logo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import swal from 'sweetalert';
const Login = () => {
	//Creación de estados
	const [values, setValues] = useState({ email: '', password: '' });
	const [error, setError] = useState({ email: '', password: '' }); //Objeto para manejo errores
	const [clientesBackEnd, setClientesBackEnd] = useState([]);

	const onChngeHandler = (e) => {
		//Identifica dinamicamente id del campo y actualiza estado
		setValues({
			...values,
			[e.target.id]: e.target.value,
		});
		//Validaciones

		if (e.target.id === 'email') {
			const isValidEmail = validator.isEmail(e.target.value); //Validación email
			if (!isValidEmail) {
				//Si hay errores
				setError((error) => {
					//Actualiza objeto de errores
					return { ...error, email: 'Correo no válido' };
				});
			} else {
				setError((error) => {
					//Devuelve objeto de errores sin actualizar
					return { ...error, email: '' };
				});
			}
		}
		if (e.target.id === 'password') {
			//Verifica tamano de la contraseña
			const isValidPassword = validator.isLength(e.target.value, {
				min: 6,
				max: 20,
			});
			if (!isValidPassword) {
				setError((error) => {
					return {
						...error,
						password: 'La contraseña debe tener de 6 a 20 caracteres',
					};
				});
			} else {
				setError((error) => {
					return { ...error, password: '' };
				});
			}
		}
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.get('http://localhost:5000/api/naviera/obtener_clientes')
			.then((response) => {
				setClientesBackEnd(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		if (values.email === '' || values.password === '') {
			//Evita que se vayan campos vacios
			if (values.email === '') {
				setError((error) => {
					return { ...error, email: 'Este campo es obligatorio' };
				});
			}
			if (values.password === '') {
				setError((error) => {
					return { ...error, password: 'Este campo es obligatorio' };
				});
			}
		} else if (!error.password && !error.email) {
			//Verifica que no haya errores
			clientesBackEnd.map((cliente) => {
				if (
					values.email === cliente.email &&
					values.password === cliente.password &&
					cliente.rol === 1
				) {
					window.location.href = './usuarioexterno';
					setValues({ email: '', password: '' });
					console.log('entro');
				} else if (
					values.email === cliente.email &&
					values.password === cliente.password &&
					cliente.rol === 2
				) {
					window.location.href = './dashboard';
				} else {
					swal(
						'Lo sentimos!',
						'Parece que el usuario o la contraseña no estan registrados, intenta nuevamente',
						'error'
					);
					setValues({ email: '', password: '' });
				}
			});
			//Limpia los valores de los campos
		}
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<Imagen4 />
					<div className='col-6 border border-0 border-2 mt-2'>
						<Logo />

						<h2 className='fw-bold text-center pb-5'>Bienvenido</h2>

						<form onSubmit={onSubmitHandler} className='ms-5 me-5' noValidate>
							<div className='mb-3'>
								<label htmlFor='correo' className='form-label'>
									{' '}
									Cuenta de correo electrónico
								</label>
								<input
									type='email'
									className={
										error.email ? 'form-control is-invalid' : 'form-control'
									}
									id='email'
									value={values.email}
									onChange={onChngeHandler}
								/>
								<div className='text-danger'>{error.email}</div>
							</div>
							<div className='mb-5'>
								<label htmlFor='password' className='form-label'>
									Contraseña
								</label>
								<input
									type='password'
									className={
										error.password ? 'form-control is-invalid' : 'form-control'
									}
									name='password'
									id='password'
									value={values.password}
									onChange={onChngeHandler}
								/>
								<div className='text-danger'>{error.password}</div>
							</div>
							<div className='d-grid gap-2 col-10 mx-auto'>
								<button type='submit' className='btn btn-danger fw-bold p-2'>
									Iniciar sesión
								</button>
							</div>
						</form>

						<div className='my-3 ms-5 fw-bold'>
							<Link to='/recuperarpassword'>
								{' '}
								<a href='#/'>¿Olvidaste tu contraseña?</a>
							</Link>
						</div>

						<div className='d-grid gap-2 col-7 mx-auto mt-4'>
							<Link to='/registro' className='btn btn-primary fw-bold p-2'>
								{' '}
								Crea tu cuenta
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
