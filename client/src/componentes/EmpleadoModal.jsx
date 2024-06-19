import { React,useState } from 'react';
import '../assets/CSS/empleadoModal.css'; 

const EmpleadoModal = ({ isOpen, onClose }) => {
  
  return (
    <div id="modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <span id="close-modal-btn" onClick={onClose}>&times;</span>
        <h1>Registro Empleado</h1>
        <form action="controladorEmpleado.php?empresa=<?=$objEmpresa?>" id="registration-form" className="form" method="POST" enctype="multipart/form-data">
          <h3>Informacion Basica</h3>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="identificacion" className="heading">N° Identificacion</label>
              <input type="number" id="identificacion" name="identificacion" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="nombre" className="heading">Nombre</label>
              <input type="text" id="nombre" name="nombre" className="form-input" required />
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="apellido" className="heading">Apellido</label>
              <input type="text" id="apellido" name="apellido" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="tipoDocumento" className="heading">Tipo de Documento</label>
              <input type="text" id="tipoDocumento" name="tipoDocumento" className="form-input" required />
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="genero" className="heading">Genero</label>
              <input type="text" id="genero" name="genero" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="ciudad" className="heading">Ciudad</label>
              <input type="text" id="ciudad" name="ciudad" className="form-input" required />
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="correo" className="heading">Correo</label>
              <input type="email" id="correo" name="correo" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="fechaNacimiento" className="logo">Fecha Nacimiento</label>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="form-input" required />
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="fechaExpedicion" className="logo">Fecha Expedicion</label>
              <input type="date" id="fechaExpedicion" name="fechaExpedicion" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono" className="heading">Telefono</label>
              <input type="number" id="telefono" name="telefono" className="form-input" required />
            </div>
          </div>
          <div className="flex">
            <div className="form-group">
              <label htmlFor="direccion" className="heading">Dirección</label>
              <input type="text" id="direccion" name="direccion" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="estadoCivil" className="heading">Estado Civil</label>
              <input type="text" id="estadoCivil" name="estadoCivil" className="form-input" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="nivelEstudio" className="heading">Nivel de Estudio</label>
            <input type="text" id="nivelEstudio" name="nivelEstudio" className="form-input" required />
          </div>
          <input type="submit" value="Registrar" className="Boton" name="boton" />
        </form>
      </div>
    </div>
  );
};

export default EmpleadoModal;