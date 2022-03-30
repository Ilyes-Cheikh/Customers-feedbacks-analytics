import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  plugins: {
    legend: {
        display:false
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    
    
  },
  scales: {
    x: {
      display:false
    },
    y: {
        display:false
      }},
      
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "#ec407944",
        borderColor: "#ec4079",
        data: [1, 2, 3, 3, 3, 4, 4.2],
        tension: 0.3,
        pointRadius:0
      
    }
  ],
};

export default function StatCard(props) {
  return (
  
      <Line options={options} data={props.dd } height="90px"  />
  );
}

