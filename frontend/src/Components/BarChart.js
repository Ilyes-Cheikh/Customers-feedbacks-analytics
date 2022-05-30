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
import Axios from 'axios';

import { useState,useEffect } from 'react';
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



export default function BarChart() {
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
  const commpos = {"01":0,"02":0,"03":0,"04":0,"05":0}
  const comneg = {"01":0,"02":0,"03":0,"04":0,"05":0}
  const key1 = comments.map(com => {
    if (com.comment_label=="positive"){
      commpos[com.comment_date.substring(5, 7)]+=1
    console.log(commpos)
  }
  else{
    comneg[com.comment_date.substring(5, 7)]+=1
    console.log(comneg)
  }
    
    });
    const labels = ["janvier","fevrier","mars","avril","mai"];

    const data = {
      labels,
      datasets: [
        {
          label: 'Negatif',
          data: [comneg["01"],comneg["02"],comneg["03"],comneg["04"],comneg["05"]],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
        {
          label: 'Positif',
          data:  [commpos["01"],commpos["02"],commpos["03"],commpos["04"],commpos["05"]],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };

  return <Bar options={options} data={data} />;
}
