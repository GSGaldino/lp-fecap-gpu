import React from 'react';

import Header from '../components/Header';
import ContainerGoal from '../components/ContainerGoal';
import WhyMakeCourseSection from '../components/WhyMakeCourseSection';
import ContainerDiferencial from '../components/ContainerDiferencial';
import FAQSection from '../components/FAQSection';
import ReadMoreComponent from '../components/ReadMoreComponent';
import Footer from '../components/Footer';

import abedImg from '../../assets/abed.png';
import timeImg from '../../assets/time-img.png';
import chargeImg from '../../assets/charge-img.png';
import infraImg from '../../assets/infra-img.png';
import dateImg from '../../assets/date-img.png';
import firstImg from '../../assets/professores-alto-nivel.png';
import secondImg from '../../assets/suporte-vitalicio.png';
import thirdImg from '../../assets/excelencia-e-tradicao.png';
import fourthImg from '../../assets/beneficios-aos-familiares.png';
import fecapImg from '../../assets/FECAP.jpg';
import fecap2Img from '../../assets/FECAP-2.jpg';


import HubspotForm from 'react-hubspot-form';



import './styles.css';
import './responsive.css';

export default function GPUHomepage() {
  return (
    <div className="container-gpu">
      <Header />
      <div className="section-top">
        <div className="container-text">
          <div className="container">
            <h1>Pós-graduação on-line em
            Gestão Pública</h1>
            <p>A pós-graduação em Gestão Pública da FECAP lhe dará as ferramentas necessárias para atuar no setor público com conhecimento profundo dos seus processos e uma qualificação adicional.</p>
            <p>Com essa pós em Gestão Pública, você terá os meios para aumentar a sua produtividade e fazer a diferença no primeiro setor. Dessa forma, você terá maior possibilidade de evolução no cargo escolhido.</p>
            <div className="container-logo-abed">
              <img src={abedImg} alt="ABED Logo" title="ABED Logo" />
            </div>
          </div>
        </div>

        <div className="container-form" id="form">
          <div className="background-form">
          <h3>Quer saber mais informações?</h3>
            <HubspotForm 
              portalId="6331207"
              formId="51e56306-d8cc-4376-bde6-e3e96c0228d9"
              loading={<p>Loading form ...</p>}
            />
          </div>
        </div>
      </div>

      {/* Seção com os 4 containers com as informações do curso */}      
      
      <section className="section-goals">
        <div className="goals">
          <div className="goal">
            <ContainerGoal
              img={timeImg}
              imgText={"Tempo de duração"}
              firstText={"Tempo de duração"}
              secondText={"12 meses"}
            />
          </div>
          <div className="goal">
            <ContainerGoal
              img={dateImg}
              imgText={"Data de início"}
              firstText={"Data de início"}
              secondText={"Início imediato"}
            />
          </div>
        </div>

        <div className="goals">
          <div className="goal">
            <ContainerGoal
              img={chargeImg}
              imgText={"Carga horária"}
              firstText={"Carga horária"}
              secondText={"360 horas"}
              shadowed={true}
            />
          </div>

          <div className="goal">
            <ContainerGoal
              img={infraImg}
              imgText={"Infraestrutura"}
              firstText={"Infraestrutura"}
              secondText={"Tenha acesso a toda infraestrutura da FECAP"}
              shadowed={true}
            />
          </div>
        </div>        
      </section>

      {/* Lista com os "porquês" de fazer o curso */}

      <WhyMakeCourseSection />

      <div className="container-action">
        <a href="#form">Mais informações</a>
      </div>

      {/* Aqui começa a seção com os diferenciais */}

      <div className="container-diferenciais">
        <h2>Diferenciais FECAP</h2>
        <div className="diferenciais">
          <div className="diferencial">
            <ContainerDiferencial
              img={firstImg}
              imgTitle={"Professores de alto nível"}
              firstText={"Professores de Alto Nível"}
              secondText={"O corpo docente da FECAP alia formação acadêmica de excelência e relevante experiência profissional – 98% do corpo docente é formado por mestres ou doutores e, anualmente, são oferecidos inúmeros cursos através do Programa de Qualificação Docente para capacitação dos professores."}
            />
          </div>
          <div className="diferencial">
            <ContainerDiferencial
                img={secondImg}
                imgTitle={"Suporte Vitalício"}
                firstText={"Suporte Vitalício"}
                secondText={"Na FECAP a parceria é para a vida toda. Ex-alunos podem utilizar a infraestrutura da instituição e obter descontos especiais em outras especializações."}
            />
          </div>
          <div className="diferencial">
            <ContainerDiferencial
              img={thirdImg}
              imgTitle={"Excelência e Tradição"}
              firstText={"Excelência e Tradição"}
              secondText={"Tradição e excelência educacional são as expressões que definem a FECAP. São 110 anos de atuação na área de negócios com os melhores profissionais do mercado. No setor público, a FECAP também tem uma tradição de destaque, oferecendo pós-graduações há mais de 20 anos."}
            />
          </div>
          <div className="diferencial">
            <ContainerDiferencial
              img={fourthImg}
              imgTitle={"Benefícios aos Familiares"}
              firstText={"Benefícios aos Familiares"}
              secondText={"Familiares dos alunos da FECAP têm acesso a bolsas de estudo, a biblioteca, a palestras e a eventos culturais promovidos pela fundação."}
            />
          </div>
        </div>
      </div>

      <div className="digital-ambient">
        <h2>Ambiente Digital</h2>
        <p>Conheça o Ambiente Virtual de Ensino da FECAP abaixo:</p>
      </div>

      <FAQSection />

      <div className="more-fecap">
        <h2>Conheça mais sobre a FECAP</h2>
      </div>
      <div className="more-fecap">
        <div className="section">
          <div className="container-img">
            <img
              src={fecapImg}
              title="FECAP"
              alt="FECAP"
            />
          </div>
          <div className="container-text">
            <p>Com 116 anos de história, a Fundação Escola de Comércio Álvares Penteado (FECAP) é reconhecida como referência nacional em educação na área de negócios.</p>
            <p>A instituição proporciona formação de alta qualidade em todos os seus cursos, estando presente nas mais diferentes etapas do desenvolvimento profissional de um indivíduo – iniciando pelo ensino médio (tradicional, técnico e bilíngue) e passando pela oferta de cursos de graduação, Pós-Graduação, MBA, mestrado, extensão e cursos corporativos.</p>
          </div>
        </div>
      </div>

      <div className="more-fecap">
        <div className="section">
          <div className="container-text">
              <p>As atividades presenciais ocorrem na cidade de São Paulo, nos campi de Pinheiros, Largo São Francisco e Liberdade. A partir de 2018, a FECAP passou a também disponibilizar na versão online um dos seus programas de formação executiva mais concorridos, o de controladoria.</p>
              <p>Com vocação inclusiva e de desenvolvimento humano, a instituição se propõe a transformar a sociedade por meio do desenvolvimento de profissionais competentes e conscientes, colaborando de forma direta para um Brasil melhor.</p>
              <p>Em 2015, comprovou novamente a qualidade superior de seus cursos com os resultados do ENADE (Exame Nacional de Desempenho de Estudantes) e do IGC (Índice Geral de Cursos), no qual conquistou o primeiro lugar entre os Centros Universitários do Estado de São Paulo e, em âmbito nacional, considerando todos os tipos de instituição de ensino superior de todo o País, ficou entre as 5,5% instituições privadas mais bem classificadas.</p>
          </div>

          <div className="container-img">
            <img
              src={fecap2Img}
              title="FECAP"
              alt="FECAP"
            />
          </div>
        </div>
      </div>

      <div className="what-is">
        <div className="container-what-is">
          <h2>O que é Gestão Pública</h2>
        </div>
        <div className="text-what-is">
          <p>É a gestão voltada para a administração de instituições governamentais federais, estaduais e municipais. Durante a sua formação, um gestor público desenvolverá suas habilidades e conhecimentos específicos de gerência de recursos e projetos, aprenderá a coordenar os órgãos e entidades públicas e prezar sempre pelos interesses e benefícios para com a sociedade.</p>
          <p>Sabendo disso, é fato que toda organização, privada ou pública, precisa de um profissional com esse gabarito. Alguém que não só coordene, mas também defina estratégias dentro da organização. Em órgãos públicos, quem faz isso é o Gestor Público. Seu trabalho consiste na aplicação de teorias administrativas no gerenciamento das instituições do governo, levando em contas as legislações especificas e as técnicas modernas de gestão pública.</p>
        </div>
      </div>
      <ReadMoreComponent />
      <Footer />
    </div>
  )
}
