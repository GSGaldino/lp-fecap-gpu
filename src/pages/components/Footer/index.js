import React, { Fragment } from 'react';

import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './styles.css';
import './responsive.css';

export default function Footer(){
  
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-menu">
          <a href="/">Gestão Pública</a>
          <a href="/">Auditoria Pública</a>
          <a href="/">Controladoria Pública</a>
        </div>
        <div className="footer-contacts">
          <a href="/"><FaPhone/> Telefone: (11) 3375-0044</a>
          <a href="/"><FaEnvelope/> E-mail: gestaopublica@fecap.br</a>
          <a href="/"><FaWhatsapp/> Whatsapp: (11) 97121-1053</a>          
        </div>
        <div className="footer-links">
          <FaFacebookF/>
          <FaInstagram />
          <FaTwitter/>          
        </div>
      </footer>
    </Fragment>
  )
}
