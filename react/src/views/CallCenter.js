import React from "react";
//import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
//import SmallStats from "./../components/common/SmallStats";
import QualidadeBandaLargaVG from "../components/blog/QualidadeBandaLargaVG";
import QualidadeWifi from "../components/blog/QualidadeWifi";

//import QualidadeWifi5G from "./../components/blog/QualidadeWifi5G";
import QualidadeCanalWifi from "../components/blog/QualidadeCanalWifi";
import QualidadeCanalWifi5G from "../components/blog/QualidadeCanalWifi5G";
//import BDUse from "../components/blog/BDUse";
import Devices from "../components/blog/Devices";
import DevicesSNR from "../components/blog/DevicesSNR";
import BotoesRe from "../components/blog/BotoesRe";
import WifiSSIDPass from "../components/blog/WifiSSIDPass";
import DownUpTest from "../components/blog/DownUpTest";
import UsersOverview from "../components/blog/UsersOverview";
import Problema from "../components/blog/Problema";
import Metrics from "../components/blog/Metrics";

import SmallStatsClient from "../components/blog/SmallStatsClient";

//Tabs

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


const CallCenter = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Cliente" subtitle="Dados do" className="text-sm-left mb-3" />
    </Row>


    {/* Small Stats Blocks */}
    <SmallStatsClient></SmallStatsClient>

    <Tabs>
      <TabList>
        <Tab>VISÃO GERAL</Tab>
        <Tab>GESTÃO WIFI</Tab>
        <Tab>BANDA LARGA</Tab>
        <Tab>DISPOSITIVOS</Tab>
        <Tab>CONFIGURAÇÕES</Tab>

      </TabList>


      {/*Visao Geral*/}
      <TabPanel>
         <Row>
          {/* Problema */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Problema />
          </Col>

          {/* Users by Speed */}
          <Col lg="4" md="6" sm="12" className="mb-4">
            <QualidadeBandaLargaVG />
          </Col>

          {/* QoE QualidadeWifi */}
          <Col lg="4" md="6" sm="12" className="mb-4">
            <QualidadeWifi />
          </Col>
    
        </Row>
      </TabPanel>
    
      {/*Gestao Wifi*/}
      <TabPanel>
        <Tabs>
          <TabList>
            <Tab>2.4G</Tab>
            <Tab>5G</Tab>
          </TabList>

          <TabPanel>
            <Row>
            {/* QoE Wifi */}
            <Col lg="4" md="6" sm="12" className="mb-4">
              <QualidadeCanalWifi />
            </Col>

            {/* Alterar Configuracao Modem */}
            <Col lg="5" md="12" sm="12" className="mb-4">
                <WifiSSIDPass />
            </Col>
            
          </Row>

          </TabPanel>

          <TabPanel>
            <Row>
              {/* QoE Wifi */}
            <Col lg="4" md="6" sm="12" className="mb-4">
              <QualidadeCanalWifi5G />
            </Col>
            
              {/* Alterar Configuracao Modem */}
              <Col lg="5" md="12" sm="12" className="mb-4">
                  <WifiSSIDPass />
              </Col>
            </Row>

          </TabPanel>
        </Tabs>

        
      </TabPanel>

      {/*Banda Larga*/}
      <TabPanel>
        <Row>
          {/* Download e Upload */}
          <Col lg="8" md="12" sm="12" className="mb-4">
            <UsersOverview />
          </Col>

          {/* Teste de down e up */}
          <Col lg="4" md="12" sm="12" className="mb-4">
            <DownUpTest />
          </Col>

          {/* latencia, jitter e perda de pacote */}
          <Col lg="5" md="12" sm="12" className="mb-4">
            <Metrics />
          </Col>

        </Row>
      </TabPanel>

      {/*Dispositivos*/}
      <TabPanel>
        <Row>
          {/* Quantidade de Devices */}
          <Col lg="5" md="6" sm="12" className="mb-4">
            <DevicesSNR />
          </Col>  

          {/* Informacoes sobre os Devices */}
          <Col lg="8" md="6" sm="12" className="mb-4">
            <Devices />
          </Col> 
        </Row>

      </TabPanel>



      {/*Configurações*/}
      <TabPanel>
        <Row>
           {/* Alterar Configuracao Modem */}
          <Col lg="5" md="12" sm="12" className="mb-4">
              <BotoesRe />
          </Col>
        </Row>

      </TabPanel>
    
    </Tabs>
  </Container>
);


export default CallCenter;
