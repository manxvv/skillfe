// import { color } from "html2canvas/dist/types/css/types/color";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const ProjectColumnChart = () => {

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

  const chartData = {
    series: [
     
      {
        name: 'Courses',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 91, 114, 94],
        color: '#00cabf' // Custom color for Revenue series
      },
      
    ],
    options: {
      chart: {
        type: 'bar',
        height: 320
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
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
        title: {
          text: 'Projects'
        },
        labels: {
          style: {
            colors: 'var(--mainsec)', // Set the color of X-axis labels to green
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
          }
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: "",
        y: {
          formatter: function (val) {
            return " " + val + " Projects"
          }
        }
      }
    }
  };

  return (
    <div>
      <div id="chart" className= {`rounded-lg shadow-md  ${!mode ? "bg-gray-900 text-white" : " bg-white"}`}>
      <h1 className="font-oxygen font-semibold text-center text-md pt-4">Total Number of courses</h1>
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ProjectColumnChart;
