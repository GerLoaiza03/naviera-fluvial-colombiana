import { useEffect, useState } from 'react';
// Para arreglar el formato de la fecha que viene del servidor
import moment from 'moment';
const UsuarioRow = (props) => {
	const { respuesta } = props;
	const [id, setId] = useState(0);

	//Recorto la Id larga de mongo para hacerla, tomo los 4 primeros y 4 ultimos digitos

	const transformStringId = (stringId) => {
		const resultA = stringId.substring(0, 5);
		const resultB = stringId.substring(20, 24);
		return resultA + resultB;
	};

	return (
		<tr>
			<th>{transformStringId(respuesta._id)}</th>
			<th>{respuesta.name + ' ' + respuesta.last_name}</th>
			<td>{respuesta.numId}</td>
			<td>{respuesta.email}</td>
			<td>{respuesta.telefono}</td>
		</tr>
	);
};

export default UsuarioRow;
