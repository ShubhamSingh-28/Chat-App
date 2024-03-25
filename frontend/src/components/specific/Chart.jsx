import { ArcElement, CategoryScale, Chart as ChartJs, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import {  orange, purple, purpleLight } from "../../constants/color";
import { getLast7days } from "../../lib/features";

ChartJs.register(
    Tooltip,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
    );

    const labels = getLast7days();


    const linechartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
        },

        scales: {
            x: {
                grid:{
                    display:false
                }
            },
            y: {
                grid:{
                    display:false
                }
            }
        }
    };
    
const LineChart = ({value=[]}) => {
    const data = {
        labels,
        datasets:[
            {
            data:value,
            label:"Revenue",
            fill:true,
            backgroundColor: purpleLight,
            borderColor: purple
        }
    ],
    };
  return (
    <Line data={data} options={linechartOptions} />
  )
};

const doughnutChartOptions = {
    responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        cutout:120
}

const DoughnutChart = ({value=[], labels=[]}) => {
    const data = {
        labels,
        datasets:[
            {
            data:value,
            fill:true,
            backgroundColor: [purpleLight, orange],
            borderColor: [purple, orange],
            offset:30
        }
    ],
    }
    return (
      <Doughnut data={data} options={doughnutChartOptions}/>
    )
  }

export {LineChart, DoughnutChart}