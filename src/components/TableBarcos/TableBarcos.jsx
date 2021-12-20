import BarcosRow from '../BarcosRow/BarcosRow';
const TableBarcos = (props) => {
	const { prueba } = props;
	console.log(prueba);
	return (
		<table className='table caption-top'>
			<thead>
				<tr>
					<th scope='col'>Código</th>
					<th scope='col'>Nombre</th>
					<th scope='col'>Fecha Inauguracion</th>
					<th scope='col'>Capacidad</th>
					<th scope='col'>Capitan</th>
					<th scope='col'>Mecanico</th>
					<th scope='col'>Ingeniero</th>
				</tr>
			</thead>
			<tbody>
				{prueba.map((respuesta) => {
					return <BarcosRow respuesta={respuesta} />;
				})}
			</tbody>
		</table>
	);
};

export default TableBarcos;
