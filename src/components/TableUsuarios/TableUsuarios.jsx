import UsuarioRow from '../UsuarioRow/UsuarioRow';
const TableUsuarios = (props) => {
	const { prueba } = props;
	return (
		<table className='table caption-top'>
			<thead>
				<tr>
					<th scope='col'>Código</th>
					<th scope='col'>Cliente</th>
					<th scope='col'>Identificacion</th>
					<th scope='col'>Email</th>
					<th scope='col'>Telefono</th>
				</tr>
			</thead>
			<tbody>
				{prueba.map((respuesta) => {
					return <UsuarioRow respuesta={respuesta} />;
				})}
			</tbody>
		</table>
	);
};

export default TableUsuarios;
