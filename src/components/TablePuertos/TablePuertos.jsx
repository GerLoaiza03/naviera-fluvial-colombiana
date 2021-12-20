import PuertoRow from '../PuertoRow/PuertoRow';
const TablePuertos = (props) => {
	const { prueba } = props;
	return (
		<table className='table caption-top'>
			<thead>
				<tr>
					<th scope='col'>Código</th>
					<th scope='col'>Nombre</th>
					<th scope='col'>Pais</th>
					<th scope='col'>Latitud</th>
					<th scope='col'>Longitud</th>
				</tr>
			</thead>
			<tbody>
				{prueba.map((respuesta) => {
					return <PuertoRow respuesta={respuesta} />;
				})}
			</tbody>
		</table>
	);
};

export default TablePuertos;
