import { useState } from "react";
import EmailIcon from "../assets/img/email.svg";
import LockIcon from "../assets/img/lock.svg";
import '../assets/CSS/InicioSesion.css';

function InicioSesion() {
    const [correo, setCorreo] = useState('');
    const [error, setError] = useState('');
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(correo)) {
            setError('Por favor, ingresa un correo electrónico válido');
        } else {
            console.log('Correo electrónico válido:', correo);
        }
    };

    const handleChange = (e) => {
        setCorreo(e.target.value);
        console.log(correo);
        if (correo === '' ){
            let correo = document.getElementById('correo');
            correo.style.borderBottomColor  = '#333';
        }else{
            if (!validateEmail(e.target.value)) {
                let correo = document.getElementById('correo');
                correo.style.borderBottomColor  = 'red';
                setError('Correo electrónico no válido');
            } else {
                let correo = document.getElementById('correo');
                correo.style.borderBottomColor = '#4197d1';
                setError('');
            }
        }
    };
  return (
    <>
    <div className="container">
        <div className="forms">
            <div className="form login">
                <span className="title">Iniciar Sesión</span>
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <img src={EmailIcon} alt="email" className="input-icon"/>
                        <input type="email" id="correo" placeholder="Correo Electronico" name="emailU" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <img src={LockIcon} alt="lock" className="input-icon"/>
                        <input type="password" placeholder="Contraseña" name="contraseña_Login" className="password" required/>
                    </div>
                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" name="recordar" id="logCheck"/>
                            <label className="text">¿Recordar Usuario?</label>
                        </div>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <div className="input-field button">
                        <input type="submit" value="Iniciar Sesión" name="login"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
);
}

export default InicioSesion;
