import { useEffect, useState } from 'react';
// Para arreglar el formato de la fecha que viene del servidor
import moment from 'moment';
const OrdenesRow = (props) => {
	const { respuesta } = props;
	const [id, setId] = useState(0);

	//Recorto la Id larga de mongo para hacerla, tomo los 4 primeros y 4 ultimos digitos

	const transformStringId = (stringId) => {
		const resultA = stringId.substring(0, 5);
		const resultB = stringId.substring(20, 24);
		return resultA + resultB;
	};

	const fixingdate = (date) => {
		const d = new Date(date);
		return d.getUTCMonth() + d.getUTCFullYear();
	};
	return (
		<tr>
			<th>{transformStringId(respuesta._id)}</th>
			<th>{respuesta.name}</th>
			<td>{fixingdate(respuesta.inauguration_date)}</td>
			<td>{respuesta.capacity}</td>
			<td>{respuesta.crew.capitan}</td>
			<td>{respuesta.crew.mechanic}</td>
			<td>{respuesta.crew.engineer}</td>
		</tr>
	);
};

export default OrdenesRow;
