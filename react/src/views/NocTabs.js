import React from "react";
//import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
//import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
//import UsersByDevice from "./../components/blog/UsersByDevice";
//import SpeedMeter from "./../components/blog/SpeedMeter";
import Devices from "./../components/blog/Devices";

//import QtdDevices from "../components/blog/QtdDevices";
import BarChartWifi from "../components/blog/BarChartWifi";
import DevicesSNR from "../components/blog/DevicesSNR";
import QualidadeCanalWifi from "../components/blog/QualidadeCanalWifi";
//import BotoesRe from "../components/blog/BotoesRe";
//import BDUse from "../components/blog/BDUse";
import DownUpTest from "../components/blog/DownUpTest";
import WifiSSIDPass from "../components/blog/WifiSSIDPass";
import WifiInfo from "../components/blog/WifiInfo";
import QtdRedesVizinhas from "../components/blog/QtdRedesVizinhas";
import QualidadeBandaLargaVG from "./../components/blog/QualidadeBandaLargaVG";
import BotoesRe from "../components/blog/BotoesRe";
//import QualidadeWifi from "./../components/blog/QualidadeWifi";
//import QualidadeWifi5G from "./../components/blog/QualidadeWifi5G";
import UsersByDevice from "./../components/blog/UsersByDevice";
import TableDinamic from "./../components/blog/TableDinamic";


//Tabs

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import SmallStatsClient from "../components/blog/SmallStatsClient";
import Problema from "../components/blog/Problema";
import WifiInfo5G from "../components/blog/WifiInfo5G";
import QualidadeCanalWifi5G from "../components/blog/QualidadeCanalWifi5G";
import QualidadeWifi from "../components/blog/QualidadeWifi";
import Metrics from "../components/blog/Metrics";

const NocTabs = ({ smallStats }) => (
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
        <Tab>HISTORICO</Tab>
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

          {/* QualidadeWifi Wifi */}
          <Col lg="4" md="6" sm="12" className="mb-4">
            <QualidadeWifi />
          </Col>

        </Row>
      </TabPanel>

      {/*Gestão Wifi*/}
      <TabPanel>
        <Tabs>
          <TabList>
            <Tab>2.4G</Tab>
            <Tab>5G</Tab>
            <Tab>REDES VIZINHAS</Tab>
          </TabList>

          <TabPanel>
            {/* 2.4G Wifi */}
            <Row>
              <Col lg="4" md="6" sm="12" className="mb-4">
                <QualidadeCanalWifi />
              </Col>:
    
          {/* WIFIInfo */}
              <Col lg="7" md="12" sm="12" className="mb-4">
                <WifiInfo />
              </Col>

          {/* Alterar Configuracao Modem */}
          <Col lg="5" md="12" sm="12" className="mb-4">
              <WifiSSIDPass />
          </Col>

            </Row>
          </TabPanel>
          <TabPanel>
            {/* 5G Wifi */}
            <Row>
              <Col lg="4" md="6" sm="12" className="mb-4">
                <QualidadeCanalWifi5G />
              </Col>:
    
          {/* WIFIInfo */}
              <Col lg="7" md="12" sm="12" className="mb-4">
                <WifiInfo5G />
              </Col>
            </Row>

          {/* Alterar Configuracao Modem */}
          <Col lg="5" md="12" sm="12" className="mb-4">
              <WifiSSIDPass />
          </Col>

          </TabPanel>

          <TabPanel>
            <Row>
            {/* redes vizinhas quantidade */}
            <Col lg="4" md="6" sm="12" className="mb-4">
              <QtdRedesVizinhas />
            </Col>

            {/* Canal Wifi */}
            <Col lg="5" md="12" sm="12" className="mb-4">
              <BarChartWifi />
            </Col>
            </Row>
          </TabPanel>

        </Tabs>
        <Row>

        </Row>
      </TabPanel>

      {/*Banda Larga*/}
      <TabPanel>
        <Row>

          {/* Users Overview */}
          <Col lg="8" md="12" sm="12" className="mb-4">
            <UsersOverview />
          </Col>

          {/*Teste de down e up  */}
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
          {/* Users by SNR */}
          <Col lg="5" md="6" sm="12" className="mb-4">
            <DevicesSNR />
          </Col>


          {/* Users by Devices */}
          <Col lg="3" md="6" sm="12" className="mb-4">
            <UsersByDevice />
          </Col>      

          {/* Users by Devices */}
          <Col lg="8" md="6" sm="12" className="mb-4">
            <Devices />
          </Col>

        </Row>
      </TabPanel>

      {/*Timeline*/}
      <TabPanel>
      <h1>GRAFICO DE MEDICOES AO LONGO DO TEMPO</h1>
      </TabPanel>

      {/*Configurações*/}
      <TabPanel>
        <Row>
          {/* Alterar Configuracao Modem */}
          <Col lg="5" md="12" sm="12" className="mb-4">
              <BotoesRe />
          </Col>
          {/* Alterar Configuracao Modem */}
          <Col lg="5" md="12" sm="12" className="mb-4">
              <TableDinamic />
          </Col>
        </Row>

      </TabPanel>

    </Tabs>

  </Container>
);

export default NocTabs;
