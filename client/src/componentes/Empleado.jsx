import { useState } from "react";
import EmpleadoModal from "./EmpleadoModal";
import Table from "./Tables";

function Empleado() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [empleados, setEmpleados] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const employees = [
    {
      id: '1232123213',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-1234'
    },
    {
      id: '4567891234',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '555-5678'
    },
    {
      id: '7894561230',
      firstName: 'Jim',
      lastName: 'Brown',
      email: 'jim.brown@example.com',
      phone: '555-9012'
    }
  ];
  return (
    <>
    <section className="containerTable">
      <div className="button-Emp">
        <h1>Empleados</h1>
        <button id="open-modal-btn" className="botton-1"  onClick={openModal}>
          Registrar Empleado
        </button>
        <EmpleadoModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <Table employees={employees}></Table>
    </section>
    </>
  );
}

export default Empleado