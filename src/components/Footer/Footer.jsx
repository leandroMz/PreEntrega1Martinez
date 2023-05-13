import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ValidateName, ValidateMail } from '../FormValidate/ValidateFunctions';
import swal from 'sweetalert';
import './Footer.css';

export const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let nameErrors = ValidateName({ name });
    let emailErrors = ValidateMail({ email });
    let acc = (nameErrors.length + emailErrors.length);
    let errores = [...nameErrors, ...emailErrors];
    borrarErrores()
    if (acc > 0) {
      e.preventDefault()
      let ulErrores = document.querySelector("div.errores ul")
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    } else {
      swal({
        title: "Gracias!",
        text: "Su solicitud ah sido recibida!",
        icon: "success",
        timer: 2000
      });
    }
  };
  let ele = document.getElementById('parent');
  function borrarErrores() {
    while (ele.lastChild) {
      ele.lastChild.remove();
    }
  }
  return (
    <footer>
      <div className="container">
        <div className="contact">
          <div className="form-contact">
            <h4>Trabaja con Nosotros</h4>
            <form onSubmit={handleSubmit} className="reservation">
              <div className='OrderValidation'>
                <div className="form-start">
                  <div>
                    <label htmlFor="Name"></label>
                    <input
                      className="form-name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <input
                      className="form-email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Ingresa un Correo valido"
                    />
                  </div>
                  <div className="form-send">
                    <button id="button-sub" className="send-newsLetter" type="submit">
                      Contactar
                    </button>
                  </div>
                </div>
                <div className="verify">
                  <div className="errores">
                    <ul id="parent">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="footerRedes">
            <h4>Síguenos en redes sociales</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/leomz2" target='_blank'>
                <FaInstagram className='social-image' />
              </a>
              <a className='git' href="https://github.com/leandroMz" target='_blank'>
                <FaGithub className='social-image' />
              </a>
              <a className='linked' href="https://www.linkedin.com/in/leandromz" target='_blank'>
                <FaLinkedin className='social-image' />
              </a>
            </div>
          </div>
        </div>
        <div className="footerUbication">
          <h4>Donde Estamos</h4>
          <div className="ubication-box">
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1351806560733!2d-58.849784624617264!3d-27.465050576322312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456cb759536285%3A0x9405d9e6bbb5b145!2sCostanera%20Corrientes!5e0!3m2!1ses-419!2sar!4v1683836907480!5m2!1ses-419!2sar"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; Leandro Martinez - Desafio de Proyecto Final de React - CoderHouse 2023</p>
      </div>
    </footer>
  )
}