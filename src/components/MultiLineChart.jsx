// import { colors } from "@material-ui/core";
// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { MdPadding } from "react-icons/md";
// import { useSelector } from "react-redux";

// const MultiLineChart = () => {

//   //rounak changes
//   let mode = useSelector(state=>{
//     console.log('adasfdsafasfasfasdfadsf',state);
//     let viewMode = state?.auth?.mode;
//     return viewMode;
//   })
  
//   const seriesData = [
//     {
//       // name: "ABC",rounak change
//       name: "Number of Projects",
//       data: [80, 0, 70, 100, 20, 100],
//       colors:['green']
//       //your task add color green
//     },
    
//   ];

//   const optionsData = {
//     chart: {
//       type: 'line', // Changed type to 'line'
//       height: 200, // Adjust the height here
//       zoom: {
//         enabled: false
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'straight', // Changed curve type to 'straight'
//       width: 2, // Set the width of the lines
//     },
   
//     subtitle: {
//       //text: 'Price Movements', rounak change
//       text: 'Number of Projects',
//       align: 'top'     //rounak change
//     },
//     labels: ["15NOv", "16NOV", "17NOV", "18NOv", "19NOv"],
//     xaxis: {
//       type: 'category'
//     },
//     yaxis: {
//       min: 0,
//       max: 100,
//       tickAmount: 10,
//       labels: {
//         formatter: function (value) {
//           return value.toFixed(0); // To remove decimal points from labels
//         }
//       }
//     },
//     markers: { // Adding markers for data points
//       size: 4, // Set the size of the markers
//       shape: 'square' // Change marker shape to square
//     },
//     legend: {
//       horizontalAlign: 'left'
//     },
//     fill: {
//       type: 'solid', // No fill
//     },
//     colors: ['#3b367c', '#00004d', '#eb5436', '#e30b21'], // Set line colors
//   };
  

//   return (
//     <div>
//       <div id="chart" className={`rounded-lg shadow-md  ${!mode? "bg-darkBg text-white":" bg-white"}`}>
//         <h1 className="font-oxygen font-semibold text-center text-md pt-4">Number of Deals Closed</h1>
//         <ReactApexChart options={optionsData} series={seriesData} type="line" height={282} /> 
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default MultiLineChart;

import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const MultiLineChart = () => {
  let mode = useSelector((state) => {
    console.log('adasfdsafasfasfasdfadsf', state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  });

  const seriesData = [
    {
      name: "Number of Projects",
      data: [80, 0, 70, 100, 20, 100]
    },
  ];

  const optionsData = {
    chart: {
      type: 'line',
      height: 200,
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    subtitle: {
      text: 'Number of Projects',
      align: 'top'
    },
    labels: ["2023", "2024", "2025", "2026", "2027"],
    xaxis: {
      type: 'category',
      labels: {
        style: {
          colors: 'var(--mainsec)', // Set the color of X-axis labels to green
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return value.toFixed(0);
        },
        style: {
          colors: 'var(--mainsec)', // Set the color of X-axis labels to green
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
        }
      }
    },
    markers: {
      size: 4,
      shape: 'square'
    },
    legend: {
      horizontalAlign: 'left'
    },
    fill: {
      type: 'solid',
    },
    colors: ['#3b367c', '#00004d', '#eb5436', '#e30b21'],

    tooltip: {
      theme: '', // Set the theme to dark
      style: {
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
      },
      // onDatasetHover: {
      //   highlightDataSeries: true,
      // },
    },
    
  };

  return (
    <div>
      <div id="chart" className={`rounded-lg shadow-md  ${!mode ? "bg-gray-900 " : " bg-white"}`}>
        <h1 className="font-oxygen font-semibold text-center text-md pt-4">Number of Deals Closed</h1>
        <ReactApexChart options={optionsData} series={seriesData} type="line" height={282} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default MultiLineChart;
