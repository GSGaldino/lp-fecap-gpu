import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import logoImg from '../../../assets/logo.png';

import './styles.css';
import './responsive.css';

export default function Header(){
  const $ = document.querySelector.bind(document);

  const flexButton = {
    display: "flex",
    aligmItems: "center"
  }

  function toggleMenu(){
    const nav = $(".menu")
    nav.classList.toggle('active');
  }

  function toggleSubMenu(e){
    e.preventDefault();
    const ul = $(".menu ul li ul")
    ul.classList.toggle('active-submenu');
  }

  return (
    <div className="container-header">
      <div className="section-menu">

        <div className="container-img">
          <img 
            src={logoImg} 
            alt="FECAP" 
            title="FECAP" 
          />
        </div>

          <div className="container-sandwich" onClick={toggleMenu}>
            <span className="sandwich" >

            </span>
          </div>
        
      </div>

      <nav className="menu">
        <ul>
          <li><a style={flexButton} href="/" onClick={toggleSubMenu}>Cursos Rápidos <MdArrowDropDown /></a>
            <ul>
              <li><a href="/">Contabilidade Pública</a></li>
              <li><a href="/">Finanças Públicas</a></li>
              <li><a href="/">Padrões Internacionais de Contabilidade Pública – IPSAS</a></li>
              <li><a href="/">Gestão de Riscos e Controles Internos</a></li>
              <li><a href="/">Análise das Demonstrações Contábeis do Setor Público</a></li>
              <li><a href="/">Planejamento Orçamentário Governamental</a></li>
              <li><a href="/">Liderança e Gestão de Pessoas</a></li>
              <li><a href="/">Planejamento Estratégico Público</a></li>
              <li><a href="/">Contabilidade dos Regimes Próprios de Previdência Social</a></li>
              <li><a href="/">Sustentabilidade e Desempenho na Gestão Pública</a></li>
            </ul>
          </li>
          <li><a href="/">Gestão Pública</a></li>
          <li><a href="/">Auditoria Pública</a></li>
          <li><a href="/">Controladoria Pública</a></li>
        </ul>
      </nav>
    </div>
  )
}
