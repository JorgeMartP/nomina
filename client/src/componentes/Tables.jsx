import '../assets/CSS/table.css';

function Table({employees}) {
    
  return (
      <table>
        <thead>
          <tr>
            <th scope="col">Identificación</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope='col'>Salario</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td data-label="Identificación">{employee.id}</td>
              <td data-label="Nombre">{employee.firstName}</td>
              <td data-label="Apellido">{employee.lastName}</td>
              <td data-label="Correo">{employee.email}</td>
              <td data-label="Teléfono">{employee.phone}</td>
              <td data-label="Teléfono">1300000</td>
              <td data-label="Editar">Edit</td>
              <td data-label="Eliminar">Delete</td>
              <td data-label="Mirar">Mirar</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
export default Table;