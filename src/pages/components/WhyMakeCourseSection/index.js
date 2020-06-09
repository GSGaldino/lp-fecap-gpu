import React, { useState, Fragment } from 'react';
import FAQList from '../FAQList';

import { FaAngleDown } from 'react-icons/fa';

import './styles.css';
import './responsive.css';


export default function WhyMakeCourseSection() {
  const firstAnswer = () => (
    <Fragment>
      <p>O estado brasileiro, em todo o seu escopo, oferece cada vez mais complexidades que exigem soluções ágeis e contemporâneas. Questões como acesso à moradia, saneamento, saúde, transporte e outras necessidades humanas não podem esperar, pois todos merecem e necessitam desses serviços.</p>
      <p>Você, na cadeira de servidor público ou pessoa jurídica que atenda ao primeiro setor, precisa estar preparado para lidar com todos esses desafios, sem perder de vista os processos exigidos dentro do sistema público.</p>
      <p>Pensando nisso a FECAP reuniu os melhores profissionais do mercado para lhe ajudar a desenvolver as principais práticas de Gestão Pública.</p>
    </Fragment>
  )
  const [list, setList] = useState([
    {
      question: 'Por que fazer este curso?',
      answer: firstAnswer(),
      open: false
    },
    {
      question: 'Objetivo do curso',
      answer: 'Garantir ao servidor público a excelência em suas atividades diárias que demandam tomadas de decisões, tendo como base aspectos de ética, governança, finanças, contabilidade e orçamento das instituições do primeiro setor.',
      open: false
    },
    {
      question: 'Disciplinas',
      open: false
    }
  ])

  const toggleList = index => {
    setList(list.map((faq, i) => {

      if (i === index){
        faq.open = !faq.open
      }else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="container-why-make-course">
      {list.map((item, index) => {
        if (index === 2){
          return (
            <div 
              className={`faq ${item.open ? 'open' : ''}`}
              key={index}
              onClick={() => toggleList(index)}
            >
              <div className="faq-question">
                {item.question}
              </div>
      
              <div className="faq-answer">
                {(
                  <div className="faq-list">
                    <ul>
                      <li> 1 - Direito Administrativo Direito Constitucional e Ética.</li>
                      <li> 2 - Planejamento Orçamentário Governamental.</li>
                      <li> 3 - Planejamento Estratégico Público.</li>
                      <li> 4 - Processos Licitatórios.</li>
                      <li> 5 - Transparência e Governança na Gestão Pública.</li>
                      <li> 6 - Finanças Públicas.</li>
                    </ul>
      
                    <ul>
                      <li> 7 - Contabilidade Pública.</li>
                      <li> 8 - Sustentabilidade e Desempenho na Gestão Pública.</li>
                      <li> 9 - Gestão de Riscos e Controles Internos.</li>
                      <li> 10 - Governança em Regimes Próprios de Previdência Social.</li>
                      <li> 11 - Liderança e Gestão de Pessoas.</li>
                      <li> 12 - Gestão de Projetos.</li>
                    </ul>
                  </div>
                )}
              </div>
      
              <FaAngleDown />
            </div>
          )
        }
        return (
          <FAQList
            key={index}
            faq={item}
            index={index}
            toggleFAQ={toggleList}
          />
        )
      })}
    </div>
  )
}
