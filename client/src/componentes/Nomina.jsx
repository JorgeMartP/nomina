import { useEffect, useState} from "react"
import MUIDataTable from 'mui-datatables';
import axios from 'axios';
import TableNomina from './TableNomina'
import Button from '@mui/material/Button';


const Nomina = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [empleados, setEmpleados] = useState([]);

    const url = 'http://127.0.0.1:8000/empleado/nomina/';
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
        name: "periodo",
        label: "Periodo"
      },
      {
        name: "total",
        label: "TotalNomina"
      },
      {
        name: "button",
        label: "Horas Extra",
        options: {
          
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(tableMeta.rowData)}
              >
                Agregar
              </Button>
            );
          }
        }
      },
      {
        name: "button",
        label: "Novedad Deducciones",
        options: {
          
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(tableMeta.rowData)}
              >
                Agregar
              </Button>
            );
          }
        }
      },
      {
        name: "button",
        label: "Novedad Devengado",
        options: {
          
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(tableMeta.rowData)}
              >
                Agregar
              </Button>
            );
          }
        }
      }
    ];
    const options = {
        selectableRows: "none",
        responsive:'scroll'
      }
    return(
        <>
        <section className="containerTable">
            <div className="container-button">
              <h1>Empleados</h1>
              <button id="open-modal-btn" className="botton-1"  onClick={openModal}>
                Agregar Empleado
              </button>
              <TableNomina isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <MUIDataTable
            title={"Lista de Empleados"}
            data={empleados}
            columns={columns}
            options={options}
            />
        </section>
        
        </>
    )
}

export default Nomina;