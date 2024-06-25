import { React,useState } from 'react';
import '../assets/CSS/empleadoModal.css'; 

const EmpleadoModal = ({ isOpen, onClose }) => {
  const [documento, setDocumento] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [salario, setsalario] = useState('');
  return (
    <div id="modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <span id="close-modal-btn" onClick={onClose}>&times;</span>
        <h1>Registro Empleado</h1>
        <form  id="registration-form" className="form">
          <h3>Informacion Basica</h3>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="identificacion" className="heading">N° Identificacion</label>
              <input type="number" id="identificacion" value={documento} className="form-input" required onChange={e=>setDocumento(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="tipoDocumento" className="heading">Tipo de Documento</label>
              <select value={tipoDocumento} id="tipoDocumento" required onChange={e=>setTipoDocumento(e.target.value)} >
                <option value="CC">CC</option>
                <option value="TI">TI</option>
                <option value="CE">CE</option>
                <option value="CD">CD</option>
              </select>
            </div>
            
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="nombre" className="heading">Nombre</label>
              <input type="text" id="nombre" value={nombre} className="form-input" required onChange={e=>setNombre(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="apellido" className="heading">Apellido</label>
              <input type="text" id="apellido" value={apellido} className="form-input" required onChange={e=>setApellido(e.target.value)} />
            </div>
            
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="correo" className="heading">Correo</label>
              <input type="email" id="correo" value={correo} className="form-input" required onChange={e=>setCorreo(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className="heading">Telefono</label>
              <input type="number" id="Telefono" value={telefono} className="form-input" required onChange={e=>setTelefono(e.target.value)}/>
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="direccion" className="heading">Dirección</label>
              <input type="text" id="direccion" value={direccion} className="form-input" required onChange={e=>setDireccion(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="ciudad" className="ciudad">Ciudad</label>
              <input type="text" id="ciudad" value={ciudad} className="form-input" required onChange={e=>setCiudad(e.target.value)}/>
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="departamento" className="departamento">Departamento</label>
              <input type="text" id="departamento" value={departamento} className="form-input" required onChange={e=>setDepartamento(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="Salario" className="heading">Salario</label>
              <input type="number" id="salario" value={salario} className="form-input" required onChange={e=>setsalario(e.target.value)}/>
            </div>
          </div>
          <input type="submit" value="Registrar" className="Boton" name="boton" />
        </form>
      </div>
    </div>
  );
};

export default EmpleadoModal;