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
import Axios from 'axios';

import { useState,useEffect } from 'react';

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
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Variation de nombre de commandes mensuel',
    },
  },
};



export default function LineChart() {
  const [detailachats,setDetailachats] = useState([])
  
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
        Axios.get("http://localhost:5000/detailachat/getall").then(
            (data) => {
                console.log(data)
                setDetailachats(data.data)
            }
        )
    }
    return () => { unmounted = true }
  }, [])
  const detail = {"01":0,"02":0,"03":0,"04":0,"05":0}
  const key1 = detailachats.map(detailachat => {

    detail[detailachat.date_Achat.substring(5, 7)]+=detailachat.prix_produit
    console.log(detail)
    
    });

   const labels = ["janvier","fevrier","mars","avril","mai"];

  const data = {
    labels,
    datasets: [
      {
        label: 'Commande',
        data: [detail['01'],detail['02'],detail['03'],detail['04'],detail['05']],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.3
        
      }
     
    ],
  };
  return <Line options={options} data={data} />;
}
