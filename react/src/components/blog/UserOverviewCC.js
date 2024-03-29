import React from "react";
import PropTypes from "prop-types";
import {   Card, CardHeader, CardBody } from "shards-react";

import Chart from "../../utils/chart";

class UsersOverviewCC extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      },
      ...this.props.chartOptions
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.props.chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}

UsersOverviewCC.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverviewCC.defaultProps = {
  title: "Download e Upload",
  chartData: {
    labels: Array.from(new Array(3), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "Download",
        fill: "start",
        data: [300,300,300,300,300,280,300,300,300,300,230,300,299,300,300,301,300,300,300,300,300,300,300,300],
        backgroundColor: "rgba(0,123,255,0.0)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Plano Download",
        fill: "start",
        data: [300,300,300,300,300,280,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
        backgroundColor: "rgba(0,123,255,0.0)",
        borderColor: "rgba(0,0,0,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,0,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Upload",
        fill: "start",
        data: [150,150,150,145,150,150,150,150,150,149,150,150,144,150,150,151,150,150,150,150,150,151,150,150,],
        backgroundColor: "rgba(255,65,105,0.0)",
        borderColor: "rgba(255,65,105,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      },
      {
        label: "Plano Upload",
        fill: "start",
        data: [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,151,150,150,150,150,150,150,150,150,],
        backgroundColor: "rgba(255,65,105,0.0)",
        borderColor: "rgba(0,0,0,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      }
    ]
  }
};

export default UsersOverviewCC;
