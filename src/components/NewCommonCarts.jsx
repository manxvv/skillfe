import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const NewCommoncarts = ({ heading, data, color, icon, barColor }) => {
    const seriesData = [
        {
            name: "Data",
            data: [120, 60, 5, 150, 100, 150],
            classes: "rounded-lg shadow-md",
        }
    ];

    const optionsData = {
        chart: {
            type: 'area',
            height: 200,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        labels: [],
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        markers: {
            size: 5,
        },
        legend: {
            show: false
        },
        fill: {
            type: 'gradient', // Set fill type to gradient
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            }
        },
        grid: {
            show: false // Disable grid lines
        },
        colors: [color], // Set line color
        tooltip: {
            theme: '', // Set the theme to dark
            style: {
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
            },
            onDatasetHover: {
              highlightDataSeries: true,
            },
          },
    };

    // Dynamically adjust the gradient background
    // optionsData.fill.gradient.colors = [color, color];

      //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

    return (
        <div>
            <div id="chart" className={`rounded-lg shadow-md ${!mode? "bg-gray-900 text-white":" bg-white text-black"}`}>
                <div className="flex justify-between pt-4">
                    <div className="flex">
                        {icon}
                        <p className="font-semibold font-oxygen">{heading}</p>
                    </div>
                    <p className="font-semibold font-oxygen pe-5">{data}</p>
                </div>
                <ReactApexChart options={optionsData} series={seriesData} type="area" height={120} />
                {/* Adding the gradient bar */}
                <div className={`chart-card-wrapper pb-2 px-2 ${seriesData[0].classes}`}>
                    <div className="mb-2 border-gray-300 border-[0.5px] w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                        <div className={`bg-gradient-to-r h-2.5 rounded-full w-1/3`} style={{ background: `linear-gradient(to right, ${barColor}, ${barColor})` }} ></div>
                    </div>
                </div>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default NewCommoncarts;

