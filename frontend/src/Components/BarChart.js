import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Feedback mensuel',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Negatif',
      data: [10,4,8,13,5,6,2],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
    {
      label: 'Positif',
      data:  [20,15,6,17,10,15,17],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
