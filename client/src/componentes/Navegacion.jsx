import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import homeIcon from "../assets/img/home.svg";
import loginIcon from "../assets/img/login.svg";
import logoSena from "../assets/img/logoSena.png";
import logoEmp from "../assets/img/Payroll.png";

function Navegacion() {
  const location = useLocation();
  const [currentComp, setCurrentComp] = useState();

  useEffect(() => {
    const componen = () => {
      switch (location.pathname) {
        case "/":
          return (
            <>
              <div className="logoEmp">
                <img
                  src={logoEmp}
                  alt="logoEmpresa"
                  height={"100px"}
                  width={"100px"}
                />
              </div>
              <div className="imagen">
                <Link to="/login">
                  Iniciar Sesión
                  <button>
                    <img
                      src={loginIcon}
                      alt="iconoLogin"
                      style={{
                        width: "35px",
                        height: "35px",
                        marginRight: "8px",
                      }}
                    />
                  </button>
                </Link>
              </div>
            </>
          );
        case "/login":
          return (
            <>
              <div className="logoEmp">
                <img
                  src={logoEmp}
                  alt="logoEmpresa"
                  height={"100px"}
                  width={"100px"}
                />
              </div>
              <div className="imagen">
                <Link to="/">
                  Inicio
                  <button>
                    <img
                      src={homeIcon}
                      alt="iconohome"
                      style={{
                        width: "35px",
                        height: "35px",
                        marginRight: "8px",
                      }}
                    />
                  </button>
                </Link>
              </div>
            </>
          );
        case "/empleado":
          return (
            <>
              <div class="search">
                <input
                  type="search"
                  class="search__input"
                  placeholder="Buscar"
                />
                <button type="submit" class="search__button">
                  <svg
                    class="search__icon"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="imagen">
                <label>Nombre Usuario</label>
                <div className="logo-imagen">
                  <a href="#">
                    <img src="../img/deku.jpg" alt="perfil" />
                  </a>
                </div>
              </div>
            </>
          );
        default:
          return null;
      }
    };

    setCurrentComp(componen);
  }, [location.pathname]);

  return (
    <header className="header" id="responsive">
      <div className="imagen">
        <div className="logo">
          <a href="#">
            <img src={logoSena} alt="logo" />
          </a>
        </div>
      </div>
      {currentComp}
    </header>
  );
}

export default Navegacion;
