import React from 'react';
import './about.css';

function About() {
  return (
    <div className='default-section two-column-section'>
      <div className='left-column'>
        <h1>About</h1>

        <h2>Ezequiel Sousa Silva, 29y</h2>
        <span>Bibliotecário de Sistemas | Analista e desenvolvedor de sistemas</span>

        <p>My focus of interest has been data persistence, integration via API, requirements gathering, data analysis, integrations, and metadata analysis. I also have a slight flirtation with UX. I am proactive in identifying and resolving problems, always looking for new ways to improve routines and operations.</p>

        <h2>Educação</h2>

        Tecnólogo em Análise e Desenvolvimento de Sistemas, Universidade de Fortaleza, 2021 - 2023
        Mestrado em Ciência da Informação, Universidade Federal do Ceará, 2018 - 2020
        Graduação em Biblioteconomia, Universidade Federal do Ceará, 2013 - 2017

        <h2>Carreira</h2>

        Desenvolvedor Android - set/2023 - Atual
        Nulamar
        <ul>
          <li> Construção de interface utilizando Compose (kotlin)</li>
          <li>Construção de models com Java</li>
          <li> Prototipagem de interface no figma</li>
          <li> Conexão com o Firebase para escrita e leitura de dados</li>
        </ul>
        Bibliotecário de sistemas - jan/2021 - set/2023
        Universidade de Fortaleza (Unifor)
        <ul>
          <li> Auxiliar de mapeamento de processos; </li>
          <li> Levantamento de requisitos para desenvolvimento de software;</li>
          <li> Responsável por conduzir as comunicações, acordos e prazos sobre alterações em qualquer software utilizado pela biblioteca.</li>
          <li> Alinhamento de expectativas entre a biblioteca, a empresa de software e a TI da Unifor.</li>
          <li> Contratação, avaliação e organização de estratégias para correção de problemas em bases de livros e periódicos;</li>
          <li> Planejamento estratégico e orçamento geral da biblioteca;</li>
          <li> Requisições e acompanhamento de compras no EBS.</li>
        </ul>

        Estagiário - nov/2022 - jan/2023
        DD Solutions Design e desenvolvimento
        <ul>
          <li> Desenvolvimento e análise de gráficos</li>
          <li> Implementação de funcionalidades utilizando Spring Boot, Grafana e React</li>
          <li> Utilização do banco de dados PostgreSQL para análise de dados</li>
          <li> Sugestão de melhorias para otimizar o desempenho do sistema</li>
        </ul>


        Bolsista de produtividade FUNCAP - jan/2018 - mar/2020
        Universidade Federal do Ceará (UFC)
        <ul>
          <li>Comparação entre padrões de metadados;</li>
          <li> Estudo da indexação como processo basilar para recuperação de dados;</li>
          <li> Discussão sobre o papel do Bibliotecário/Arquivista no processo de cadeia de custódia e perícia científica;</li>
        </ul>
      </div>
      <div className='right-column'>
        <div className='background_perfil'>
          <img className='perfil' src="./images/perfil.png" alt="null" />
          <span className='losango1'></span>
          <span className='losango2'></span>
        </div>
      </div>

    </div>
  );
}

export default About;
