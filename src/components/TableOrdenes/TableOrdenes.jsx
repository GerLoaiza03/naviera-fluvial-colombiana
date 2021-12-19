import OrdenesRow from '../OrdenesRow/OrdenesRow';
const TableOrdenes = (props) => {
	const { prueba } = props;
	return (
		<table className='table caption-top'>
			<thead>
				<tr>
					<th scope='col'>Código</th>
					<th scope='col'>Cliente</th>
					<th scope='col'>Puerto de origen</th>
					<th scope='col'>Puerto destino</th>
					<th scope='col'>Barco</th>
					<th scope='col'>Descripcion</th>
					<th scope='col'>Estado</th>
				</tr>
			</thead>
			<tbody>
				{prueba.map((respuesta) => {
					return <OrdenesRow respuesta={respuesta} />;
				})}
			</tbody>
		</table>
	);
};

export default TableOrdenes;
