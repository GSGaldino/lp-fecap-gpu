import React, { useState } from 'react';
import FAQList from '../FAQList';

import './styles.css';
import './responsive.css';


export default function FAQSection() {
  const [faqs, setFaqs] = useState([
    {
      question: '1. Os Cursos de gestão pública são reconhecidos pelo MEC',
      answer: 'A FECAP é uma instituição reconhecida pelo MEC (Ministério da Educação) e portanto, está apta a ofertar cursos de graduação e pós-graduação como o caso dos cursos de gestão pública.',
      open: false
    },
    {
      question: '2. Como é feito o processo de inscrição no MBA em gestão pública',
      answer: 'Para obter mais informações sobre o curso, o interessado deverá preencher o formulário que se encontra no topo da página. Também é possível através do número (11) 3375-0044 (Telefone) ou pelo número (11) 97121-1053 (Whatsapp). Depois de receber o contato, o interessado poderá analisar a proposta e optar pelo ingresso. Por fim, deverá enviar seus dados pessoais para que o boleto seja gerado e possa efetuar o pagamento.',
      open: false
    },
    {
      question: '3. No curso de gestão pública, quais são as formas de pagamento disponíveis? ',
      answer: ' A forma de pagamento disponível para a o curso de gestão pública é no boleto. Para gerar o boleto, é necessário que o interessado encaminhe ao consultor: nome completo, RG, CPF, Data de nascimento, Telefone e Endereço.',
      open: false
    },
    {
      question: '4. Quais os documentos necessários para realizar a matrícula no curso de gestão pública?',
      answer: ' É necessário o envio dos seguintes documentos digitalizados: RG, CPF, Comprovante de Residência, Diploma ou Certificado de Conclusão de Curso e Currículo atualizado.',
      open: false
    },
    {
      question: '5. Como são realizadas as avaliações?',
      answer: ' As avaliações da pós-graduação em gestão pública acontecem a cada 4 meses, de forma presencial, no polo da FECAP (localizado no bairro da Liberdade) ou em um dos polos parceiros da FECAP espalhados pelo Brasil.',
      open: false
    },
    {
      question: '6. Aluno ou ex-aluno da FECAP possui desconto no valor do curso?',
      answer: ' Sim, alunos ou ex-alunos de graduação ou pós-graduação da FECAP possuem 20% de desconto no valor do curso.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {

      if (i === index){
        faq.open = !faq.open
      }else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (

    <div className="container-faq-section">
      <h2>FAQ</h2>
      <div className="container-faqs">
        {faqs.map((faq, index) => (
            
            <FAQList 
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
            />

          ))}
      </div>
    </div>

  )
}
