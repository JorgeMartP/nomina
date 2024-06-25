import { useState } from "react";
import EmpleadoModal from "./EmpleadoModal";
import Table from "./Tables";
import { Link, useLocation } from "react-router-dom";


function Empleado() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [empleados, setEmpleados] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
    <section className="containerTable">
      <div className="container-flex">
      <div className="button-Emp">
        <h1>Empleados</h1>
        <button id="open-modal-btn" className="botton-1"  onClick={openModal}>
          Registrar Empleado
        </button>
        <EmpleadoModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="button-Emp">
        <Link to="/nomina" className="botton-1">Crear Nomina</Link>
      </div>
      </div>
      <Table></Table>
    </section>
    </>
  );
}

export default Empleado