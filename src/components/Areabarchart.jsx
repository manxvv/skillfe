import React from "react";
import ReactApexChart from "react-apexcharts";

const Areabarchart = () => {
  const seriesData = [
    {
      name: "ABC",
      data: [120, 60, 5, 150, 100, 150]
    },
    {
      name: "XYZ",
      data: [95, 45, 125, 100, 100, 50]
    },
    {
      name: "PQR",
      data: [40, 30, 90, 50, 100, 100]
    }
  ];

  const optionsData = {
    chart: {
      type: 'line', // Changed type to 'line'
      height: 400, // Adjust the height here
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2, // Set the width of the lines
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left'
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left'
    },
    labels: ["15NOv", "16NOV", "17NOV", "18NOv", "19NOv"],
    xaxis: {
      type: 'category'
    },
    yaxis: {
      min: 0,
      max: 150,
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return value.toFixed(0); // To remove decimal points from labels
        }
      }
    },
    markers: { // Adding markers for data points
      size: 5, // Set the size of the markers
    },
    legend: {
      horizontalAlign: 'left'
    },
    fill: {
      type: 'solid', // No fill
    },
    colors: ['#0090ff', '#8c52ff', '#00bcff'], // Set line colors
  };

  return (
    <div>
      <div id="chart" className="rounded-lg shadow-md bg-white">
        <ReactApexChart options={optionsData} series={seriesData} type="line" height={300} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Areabarchart;
