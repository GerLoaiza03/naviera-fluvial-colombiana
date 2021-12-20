import { useEffect, useState } from 'react';
// Para arreglar el formato de la fecha que viene del servidor

const PuertoRow = (props) => {
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
			<th>{respuesta.name}</th>
			<th>{respuesta.country}</th>
			<td>{respuesta.location.coordinates[0]}</td>
			<td>{respuesta.location.coordinates[1]}</td>
		</tr>
	);
};

export default PuertoRow;
