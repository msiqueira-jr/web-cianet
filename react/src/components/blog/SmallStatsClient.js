import React from 'react'
//import SmallStats from "./../components/common/SmallStats";

import SmallStats from "../common/SmallStats"
import { Row, Col } from "shards-react";
import PropTypes from "prop-types";


const SmallStatsClient = ({ smallStats }) => (
                <Row>
                    {smallStats.map((stats, idx) => (
                        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                            <SmallStats
                                id={`small-stats-${idx}`}
                                variation="1"
                                chartData={stats.datasets}
                                chartLabels={stats.chartLabels}
                                label={stats.label}
                                value={stats.value}
                                //percentage={stats.percentage}
                                increase={stats.increase}
                                decrease={stats.decrease}
                            />
                        </Col>
                    ))}
                </Row>
        )

SmallStatsClient.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
  };
  
  SmallStatsClient.defaultProps = {
    smallStats: [
      {
        label: "CONTRATO",
        value: "000001",
        //percentage: "4.7%",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(0, 184, 216, 0.1)",
            borderColor: "rgb(0, 184, 216)",
            //data: [1, 2, 1, 3, 5, 4, 7]
          }
        ]
      },
      {
        label: "Nome Cliente",
        value: "Alexey da Silva",
        //percentage: "4.7%",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(0, 184, 216, 0.1)",
            borderColor: "rgb(0, 184, 216)",
            //data: [1, 2, 1, 3, 5, 4, 7]
          }
        ]
      },
      {
        label: "Endereço",
        value: "Rua da Pátria, 333",
        //percentage: "12.4",
        increase: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(23,198,113,0.1)",
            borderColor: "rgb(23,198,113)",
            //data: [1, 2, 3, 3, 3, 4, 4]
          }
        ]
      },
      {
        label: "Telefone",
        value: "11-9-9999-9999",
        //percentage: "3.8%",
        increase: false,
        decrease: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(255,180,0,0.1)",
            borderColor: "rgb(255,180,0)",
            //data: [2, 3, 3, 3, 4, 3, 3]
          }
        ]
      },
      {
        label: "Plano Contratado",
        value: "300/150",
        //percentage: "2.71%",
        increase: false,
        decrease: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(255,65,105,0.1)",
            borderColor: "rgb(255,65,105)",
            //data: [1, 7, 1, 3, 1, 4, 8]
          }
        ]
      },
      {
        label: "IP",
        value: "111.111.111.111",
        //percentage: "2.4%",
        increase: false,
        decrease: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgb(0,123,255,0.1)",
            borderColor: "rgb(0,123,255)",
            //data: [3, 2, 3, 2, 4, 5, 4]
          }
        ]
      },
      {
        label: "MAC",
        value: "DD:DD:DD::DD:DD",
        //percentage: "2.4%",
        increase: false,
        decrease: true,
        chartLabels: [null, null, null, null, null, null, null],
        attrs: { md: "4", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgb(0,123,255,0.1)",
            borderColor: "rgb(0,123,255)",
            //data: [3, 2, 3, 2, 4, 5, 4]
          }
        ]
      }
    ]
  };
  
export default SmallStatsClient;
//export default SmallStatsClient
