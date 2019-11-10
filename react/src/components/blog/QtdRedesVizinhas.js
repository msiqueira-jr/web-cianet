import React, { Component } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  } from "shards-react";

import PropTypes from "prop-types";

import Chart from "../../utils/chart";

export class QtdRedesVizinhas extends Component {
    constructor(props) {
        super(props);
    
        this.canvasRef = React.createRef();
      }
    
      componentDidMount() {
        const chartConfig = {
          type: "pie",
          data: this.props.chartData,
          options: {
            ...{
              legend: {
                position: "bottom",
                labels: {
                  padding: 25,
                  boxWidth: 20
                }
              },
              cutoutPercentage: 0,
              tooltips: {
                custom: false,
                mode: "index",
                position: "nearest"
              }
            },
            ...this.props.chartOptions
          }
        };
    
        new Chart(this.canvasRef.current, chartConfig);
      }
    
      render() {
        const { title } = this.props;
        return (
          <Card small className="h-100">
            <CardHeader className="border-bottom">
              <h6 className="m-0">{title}</h6>
            </CardHeader>
            <CardBody className="d-flex py-0">
              <canvas
                height="220"
                ref={this.canvasRef}
                className="blog-users-by-device m-auto"
              />
            </CardBody>
            <CardFooter className="border-top">
            </CardFooter>
          </Card>
        );
      }
    }

    QtdRedesVizinhas.propTypes = {
        /**
         * The component's title.
         */
        title: PropTypes.string,
        /**
         * The chart config object.
         */
        chartConfig: PropTypes.object,
        /**
         * The Chart.js options.
         */
        chartOptions: PropTypes.object,
        /**
         * The chart data.
         */
        chartData: PropTypes.object
      };
      
      QtdRedesVizinhas.defaultProps = {
        title: "Quantidade de Redes Vizinhas 2.4G e 5G",
        chartData: {
          datasets: [
            {
              hoverBorderColor: "#ffffff",
              data: [57, 15],
              backgroundColor: [
                "#e600e6",
                "orange",
              ]
            }
          ],
          labels: ["2.4G", "5G"]
        }
      };

export default QtdRedesVizinhas
