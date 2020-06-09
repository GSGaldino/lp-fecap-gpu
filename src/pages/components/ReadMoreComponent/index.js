import React, { useState } from 'react';

import './styles.css';
import './responsive.css';

export default function ReadMoreComponent() {

  const [moreOrLessVariable, setValueOfVariableState] = useState('invisible')
  const [moreOrLessText, setValueOfTextState] = useState('Ver mais ...')

  function toggleMoreVisible(){

    setValueOfTextState(
      moreOrLessText === 'Ver mais ...' 
      ? 'Ver menos ...'
      : 'Ver mais ...'
    )

    setValueOfVariableState(
      moreOrLessVariable === 'visible'
      ? 'invisible'
      : 'visible'
    )
  }

  return (
    <div className="read-more-container">
      <div className="container">
        <h2>Quais são os temas tratados na pós de gestão pública?</h2>
        <p>Antes de ingressar em um curso de pós-graduação, é preciso conhecer os conteúdos abordados durante o programa e ver quais são as opções que se encaixam no seus objetivos profissionais.</p>
        <p>O público-alvo das instituições são os servidores públicos e pessoas jurídicas que fizeram graduação de áreas correlatas em Gestão Pública, como Direito, Administração, Ciência Política, Economia. Veja abaixo:</p>
      </div>

      <div className="container">
        <h2>Liderança e gestão de pessoas</h2>
        <p>Na gestão pública, ser um bom líder é conseguir enfrentar as adversidades que as organizações sofrem e ainda prestar à sociedade serviços de qualidade. Nesse âmbito, a qualificação dos profissionais dirigentes é o caminho a ser tomado.</p>
        <p>Os profissionais precisam ter qualidades de liderança e conseguir atender toda a demanda administrativa, além de serem bons comunicadores, proativos e motivadores.</p>
      </div>

      <div className="container">
        <h2>Gestão de projeto</h2>
        <p>A necessidade de criar processos capazes de atender as demandas de uma instituição pública consiste na busca por ferramentas adequadas para melhorar os resultados. O gerenciamento de projetos no setor público tem que estar alinhado com a ideia de oferecer serviços de qualidade, independente da instância governamental.</p>
      </div>
      <div className={moreOrLessVariable}>
        <div className="container">
          <h2>Gestão de riscos e controles internos</h2>
          <p>Os controles internos são conjuntos de atividades, planos, métodos, indicadores e procedimentos interligados para assegurar a conformidade dos atos de gestão e para que os objetivos e metas estabelecidos sejam alcançados. Alguns órgãos de controle interno são: Auditoria Interna, Controladoria, Secretaria de Controle Interno, Órgão Central do Sistema de Controle Interno, Secretaria Federal de Controle.</p>
        </div>

        <div className="container">
          <h2>Direito administrativo, Direito Constitucional e Ética</h2>
          <p>Direito administrativo: ramo do direito público, responsável pelos princípios e normas que regulam a administração pública e abrange entes, órgãos, agentes e atividades desempenhadas na obtenção dos interesses públicos. Tem como objeto a análise dos procedimentos para o cumprimento das tarefas do Poder Público.</p>
          <p>Direito constitucional: é o ramo que se dedica a analisar e interpretar as normas constitucionais, consideradas Leis Supremas de um Estado soberano. O profissional vai estar em contato direto com as questões de interesse público e conhecer as leis permite a execução das tarefas da melhor maneira.</p>
          <p>Ética: compreender os fundamentos básicos éticos e morais do ser humano, ter noções do que é senso comum e como contextualizá-lo são alguns dos conteúdos apresentados no decorrer da pós-graduação.</p>
        </div>

        <div className="container">
          <h2>Sustentabilidade e Desempenho na Gestão Pública</h2>
          <p>Prover ao servidor o senso crítico, a partir da utilização de práticas sustentáveis, na gestão das organizações públicas. Medir o desempenho da eficiência operacional é fundamental para que os gestores sejam capazes de fazer planejamentos, além de monitorar a execução dos contratos.</p>
        </div>

        <div className="container">
          <h2>Transparência e Governança na Gestão Pública</h2>
          <p>A governança se consolidou como o estabelecimento de estratégias e o aperfeiçoamento constante dos meios de controle. Cabe ao gestor a busca pelo interesse público, pela racionalização dos gastos, pelo equilíbrio fiscal e pela eficiente aplicação dos recursos públicos em benefício dos cidadãos.</p>
          <p>A transparência pública ganhou um incentivo com a criação da Lei de Acesso à Informação (LAI) em 2011. Os órgãos passaram a publicar os dados de forma clara e organizada em portais onlines com acesso garantido a todos os cidadãos.</p>
        </div>

        <div className="container">
          <h2>Planejamento Estratégico Público</h2>
          <p>A natureza do planejamento estratégico é permitir a qualquer organização, seja ela pública ou privada, a realização de escolhas, enfocando esforços e recursos para sua implementação. No setor público, algumas dessas escolhas são previamente estabelecidas na definição da missão – a razão de ser da organização. Isso garante foco na prestação de serviços à sociedade.</p>
        </div>

        <div className="container">
          <h2>Planejamento Orçamentário Governamental</h2>
          <p>O planejamento orçamentário brasileiro foi definido na Constituição Federal de 1988 e é composto por três instrumentos: o Plano Plurianual – PPA, a Lei de Diretrizes Orçamentárias – LDO e a Lei Orçamentária Anual – LOA. Na pós-graduação, você irá conhecer sobre como funciona cada um desses instrumentos</p>
        </div>

        <div className="container">
          <h2>Processos Licitatórios</h2>
          <p>É um processo administrativo, no qual a administração seleciona a proposta mais vantajosa, e com a melhor qualidade possível para a contratação de uma obra, de um serviço, da compra de um produto ou locação. Podem ser contratadas pelo governo federal, estadual e municipal.</p>
        </div>

        <div className="container">
          <h2>Finanças Públicas</h2>
          <p>Compreende as informações sobre execução orçamentária das administrações públicas federal, estadual, municipal e os resultados das empresas públicas, com detalhamento de contas de receita e despesa, fluxos de caixa, ativo e passivo, entre outros aspectos.</p>
        </div>

        <div className="container">
          <h2>Contabilidade Pública</h2>
          <p>Corresponde a uma especialidade da contabilidade, que baseada em normas próprias está voltada ao registro, controle e à avaliação do patrimônio público e suas respectivas variações. Sua área de ação corresponde aos três níveis de governo: federal, estadual e municipal.</p>
        </div>
      </div>
      <h3 onClick={toggleMoreVisible}>{ moreOrLessText }</h3>

    </div>
  )
}
