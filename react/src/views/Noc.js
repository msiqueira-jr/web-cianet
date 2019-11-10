import React from "react";
//import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
//import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import QualidadeBandaLarga from "./../components/blog/QualidadeBandaLarga";
import Devices from "./../components/blog/Devices";

import QtdDevices from "../components/blog/QtdDevices";
import BarChartWifi from "../components/blog/BarChartWifi";
import DevicesSNR from "../components/blog/DevicesSNR";
import QualidadeCanalWifi from "../components/blog/QualidadeCanalWifi";
import BotoesRe from "../components/blog/BotoesRe";
import BDUse from "../components/blog/BDUse";
import DownUpTest from "../components/blog/DownUpTest";
import WifiSSIDPass from "../components/blog/WifiSSIDPass";
import WifiInfo from "../components/blog/WifiInfo";
import QtdRedesVizinhas from "../components/blog/QtdRedesVizinhas";
import SmallStatsClient from "../components/blog/SmallStatsClient";
//import CardsDadosCliente from "../components/blog/CardsDadosCliente";

const Noc = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Cliente" subtitle="Dados do" className="text-sm-left mb-3" />
    </Row>


    {/* Small Stats Blocks */}
    <SmallStatsClient></SmallStatsClient>

    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Cliente" subtitle="Informações do" className="text-sm-left mb-3" />
    </Row>

    <Row>
    {/* Users by Speed */}
    <Col lg="4" md="6" sm="12" className="mb-4">
      <QualidadeBandaLarga />
    </Col>

    {/* QualidadeBandaLarga Wifi */}
    <Col lg="4" md="6" sm="12" className="mb-4">
      <BDUse />
    </Col>

    {/* QualidadeBandaLarga Wifi */}
    <Col lg="4" md="6" sm="12" className="mb-4">
      <QualidadeCanalWifi />
    </Col>

     {/* Botoes */}
     <Col lg="3" md="12" sm="12" className="mb-4">
        <BotoesRe />
      </Col>

    {/* Users by Device */}
    <Col lg="4" md="6" sm="12" className="mb-4">
      <UsersByDevice />
    </Col>


    {/* Users by SNR */}
    <Col lg="5" md="6" sm="12" className="mb-4">
      <DevicesSNR />
    </Col>

      {/* Users by Devices */}
      <Col lg="6" md="6" sm="12" className="mb-4">
        <Devices />
      </Col>

      {/* Users by Devices */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <QtdDevices />
      </Col>

     {/* Canal Wifi */}
     <Col lg="5" md="12" sm="12" className="mb-4">
        <BarChartWifi />
      </Col>

     {/* Canal Wifi */}
     <Col lg="5" md="12" sm="12" className="mb-4">
        <WifiSSIDPass />
      </Col>

     {/* WIFIInfo */}
     <Col lg="7" md="12" sm="12" className="mb-4">
        <WifiInfo />
      </Col>

     {/* redes vizinhas quantidade */}
     <Col lg="4" md="6" sm="12" className="mb-4">
        <QtdRedesVizinhas />
      </Col>

      {/* Users Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      {/* reboot */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <DownUpTest />
      </Col>

    </Row>
    


  </Container>
);



export default Noc;
