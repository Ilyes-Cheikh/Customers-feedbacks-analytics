import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState,useEffect } from 'react';
import Axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Avis des clients',
    },
  },
};

export default function PieChart() {
  const [comments,setComments] = useState([])
  
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
        Axios.get("http://localhost:5000/comment/get").then(
            (data) => {
                console.log(data)
                setComments(data.data)
            }
        )
    }
    return () => { unmounted = true }
  }, [])
  const commen = {"positive":0,"negative":0}
  const key1 = comments.map(com => {

    commen[com.comment_label]+=1
    console.log(commen)
    
    });

  const data = {
    labels: ['negative', 'positive',],
    datasets: [
      {
        label: '# of Votes',
        data: [commen["negative"], commen["positive"]],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
         
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return <Pie data={data} options = {options} />;
}
