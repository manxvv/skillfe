import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import { useSelector } from 'react-redux';
class Linechart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      series: [44, 55],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          // colors: '#eef3f7',
          borderRadius:'100%'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '16px',
              },
              value: {
                fontSize: '10px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  return 249;
                },
              },
            },
          },
        },
        // labels: ['Investors', 'Fundseekers', 'Charitable\nOraganizations'],
        // colors: ['#07beaa', '#5470de', '#ffc246'] // Set custom colors here
        labels: ['Mentors', ' Users'],
        colors: ['#07beaa', '#5470de'] // Set custom colors here
      },
    };
  }

    

  render() {
  
    return (
      <div>
        <div id="chart" className={`rounded-lg shadow-md ${!this.props.mode? "bg-gray-900 text-white":" bg-white text-black"}`}>
          <h1 className="font-oxygen font-semibold text-center text-md pt-4">Total Number of Mentors/Users</h1>
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Linechart;
