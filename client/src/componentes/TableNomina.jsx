import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import MUIDataTable from 'mui-datatables';
import axios from "axios";

const TableNomina = ({ isOpen, onClose })=>{
    const [empleados, setEmpleados] = useState([]);
    const [documento, setDocumento] = useState('');
    const url = 'http://127.0.0.1:8000/empleado/empleado/';
    const [resultados, setResultados] = useState();
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
      name: "nombre",
      label: "Nombre"
    },
    {
      name: "apellidos",
      label: "Apellidos"
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
    const handleCalcularNomina = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/empleado/nomina/', { 
            total: null,
            periodo:null,
            documento: rowData[0],
            codDeducciones: null,
            codDevengado: null
         });
          setResultados(response.data.resultados);
          console.log(resultados)
          window.location.reload();
        } catch (error) {
          console.error('Error al calcular la nómina en masa:', error);
        }
    };
    handleCalcularNomina()
  };
  const options = {
    selectableRows: "none",
    responsive:'scroll'
  }
    return(
        <>
        <div id="modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-content">
              <span id="close-modal-btn" onClick={onClose}>&times;</span>
              <h1>Lista Empleados</h1>
              <div className="container-table-modal">
              <MUIDataTable
                title={"Lista de Empleados"}
                data={empleados}
                columns={columns}
                options={options}
              />
              </div>
              
            </div>
        </div>
        </>
    )
}

export default TableNomina