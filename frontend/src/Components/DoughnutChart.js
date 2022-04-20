import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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
      text: 'Les 3 produits les plus vendus ',
    },
  },
};


export default function DoughnutChart() {
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
  var id = []
  const key1 = detailachats.map(detailachat => id.push(detailachat.nom_produit.substring(11, 50) ));
  var quantite = []
  const key2 = detailachats.map(detailachat => quantite.push(detailachat.quantite ));
  let group = detailachats.reduce((r, a) => {

    r[a.id_produit] = [...r[a.id_produit] || [], a];
    return r;
   }, {});
   console.log("group", group);

  const data = {
    labels: id,
    datasets: [
      {
        label: '# of Votes',
        data: quantite,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
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


console.log(id);
  return <Doughnut data={data}  options = {options}/>;
}
