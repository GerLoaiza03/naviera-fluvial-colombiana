import { useState } from 'react';
// import axios from 'axios';
const SearchBar = (props) => {
	const { onSubmitHandler, busqueda } = props;
	const [busquedabar, setBusquedabar] = useState(busqueda);
	return (
		<div className='d-flex justify-content-end'>
			<form className='form-inline my-2 my-lg-0' onSubmit={onSubmitHandler}>
				<input
					className='form-control mr-sm-2'
					type='search'
					placeholder='Buscar...'
					aria-label='Search'
					value={busquedabar}
					onChange={(e) => setBusquedabar(e.target.value)}
				/>
				<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
					Buscar
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
