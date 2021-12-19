import { useEffect, useState } from 'react';
const OrdenesRow = (props) => {
	const { respuesta } = props;
	const [id, setId] = useState(0);

	// Conndicional para la tabla colores
	let estado = '';
	if (respuesta.estado === 'Pendiente') {
		estado = 'table-info';
	} else if (respuesta.estado === 'Despachada') {
		estado = 'table-success';
	} else if (respuesta.estado === 'Finalizada') {
		estado = 'table-warning';
	} else if (respuesta.estado === 'Cancelada') {
		estado = 'table-danger';
	}

	//Recorto la Id larga de mongo para hacerla, tomo los 4 primeros y 4 ultimos digitos

	const transformStringId = (stringId) => {
		const resultA = stringId.substring(0, 5);
		const resultB = stringId.substring(20, 24);
		return resultA + resultB;
	};

	return (
		<tr className={estado}>
			<th>{transformStringId(respuesta._id)}</th>
			<th>{respuesta.cliente}</th>
			<td>{respuesta.puerto_salida}</td>
			<td>{respuesta.puerto_destino}</td>
			<td>{respuesta.barco}</td>
			<td>{respuesta.contenedor.nombre}</td>
			<td>{respuesta.estado}</td>
		</tr>
	);
};

export default OrdenesRow;
