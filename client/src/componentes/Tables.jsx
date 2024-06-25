import '../assets/CSS/table.css';
import MUIDataTable from 'mui-datatables';
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import Button from '@mui/material/Button';

function Table() {
  const [empleados, setEmpleados] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const url = 'http://127.0.0.1:8000/empleado/empleado/';

  const getData = async () => {
    await axios.get(url).then((response) => {
      const data = response.data;
      console.log(data);
      setEmpleados(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "documento",
      label: "ID"
    },
    {
      name: "tipoDocumento",
      label: "Tipo Documento"
    },
    {
      name: "nombre",
      label: "Nombre"
    },
    {
      name: "apellidos",
      label: "Apellidos"
    },
    {
      name: "correo",
      label: "Correo"
    },
    {
      name: "telefono",
      label: "Telefono"
    },
    {
      name: "direccion",
      label: "Direccion"
    },
    {
      name: "ciudad",
      label: "Ciudad"
    },
    {
      name: "departamento",
      label: "Departamento"
    },
    {
      name: "salarioBasico",
      label: "Salario"
    },
    {
      name: "button",
      label: "ACTION",
      options: {
        
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick(tableMeta.rowData)}
            >
              Click Me
            </Button>
          );
        }
      }
    }
  ];

  const handleButtonClick = (rowData) => {
    setDocumento(rowData[0]);
    setTipoDocumento(rowData[1]);
    setNombre(rowData[2]);
    setApellido(rowData[3]);
    setCorreo(rowData[4]);
    setTelefono(rowData[5]);
    setDireccion(rowData[6]);
    setCiudad(rowData[7]);
    setDepartamento(rowData[8]);
    setsalario(rowData[9]);
    openModal();
  };
  const options = {
    selectableRows: "none",
    responsive:'scroll'
  }
  return (
    <>
    <MUIDataTable
      title={"Lista de Empleados"}
      data={empleados}
      columns={columns}
      options={options}
    />
    <div id="modal" className={`modal ${isModalOpen? 'modal-open' : ''}`}>
      <div className="modal-content">
        <span id="close-modal-btn" onClick={closeModal}>&times;</span>
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
    </>
  );
}

export default Table;