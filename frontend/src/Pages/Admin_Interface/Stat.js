import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PieChart from '../../Components/Pie';
import LineChart from '../../Components/LineChart';
import BarChart from '../../Components/BarChart';
import DoughnutChart from '../../Components/DoughnutChart';
import StatCard from '../../Components/StatCard';
import "../../Assets/CSS/stat.css";
import { useState,useEffect } from 'react';
import Axios from 'axios';


function Stat() {
  const [detailachats,setDetailachats] = useState([])
  const [achats,setAchats] = useState([])
  const [users,setUsers] = useState([])


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
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
        Axios.get("http://localhost:5000/achat/get").then(
            (data) => {
                console.log(data)
                setAchats(data.data)
            }
        )
    }
    return () => { unmounted = true }
  }, [])
  useEffect(() => {
    let unmounted = false
    if (!unmounted) {
        Axios.get("http://localhost:5000/user/get").then(
            (data) => {
                console.log(data)
                setUsers(data.data)
            }
        )
    }
    return () => { unmounted = true }
  }, [])
  var nombreusers=users.length
  var totalrevenue = 0
  var nombreachat=achats.length
  const key1 = detailachats.map(detailachat => totalrevenue+=detailachat.prix_produit);
  console.log("total",nombreachat)
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = {
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
const data2 = {
  labels,
  datasets: [
    {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "#02968844",
        borderColor: "#029688",
        data: [1, 4, 6, 2, 4, 6, 4.2],
        tension: 0.3,
        pointRadius:0
      
    }
  ],
};
const data3 = {
  labels,
  datasets: [
    {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "#06a9f844",
        borderColor: "#06a9f8",
        data: [0, 2, 3, 6, 3, 4, 6],
        tension: 0.3,
        pointRadius:0
      
    }
  ],
};

  
return (
    <div>
      
      <div className="box">
      <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2}  >
      <Grid item md={4} >
        <Card variant="outlined" sx={{ borderRadius: '20px',display:"block", }} >
        
        <Typography sx={{ fontSize: 30 }} align="center" color="text.secondary" marginTop={2} >
          Revenue total
          </Typography>
          
          <Typography sx={{ fontSize: 60  }} align="center" color="var(--rouge)" component="div" >
        {totalrevenue.toString()} DT
        
      </Typography>
      <Typography sx={{ fontSize: 15  }} align="center" color="#029688" component="div" >
        <i className="bi bi-arrow-up-circle-fill">{"25"}%</i>
        </Typography>
        
      
      
      
          <div className="statcard" >
          <StatCard dd={data1}/>
          </div>
    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined" sx={{ borderRadius: '20px' }}>
        
      <Typography sx={{ fontSize: 30 }} align="center" color="text.secondary" marginTop={2} >
        Nombre d'achats
      </Typography>

      <Typography sx={{ fontSize: 60  }} align="center" color="var(--vert)" component="div">

        {nombreachat}
      </Typography>
      <Typography sx={{ fontSize: 15  }} align="center" color="var(--rouge)" component="div" >
        <i className="bi bi-arrow-down-circle-fill">{"20"}%</i>
        </Typography>
    
    <StatCard dd={data2}/>
    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined" sx={{ borderRadius: '20px' }}>
        
      <Typography sx={{ fontSize: 30 }} align="center" color="text.secondary" marginTop={2} >
        Nombre d'abonnés
      </Typography>
      <Typography sx={{ fontSize: 60  }} align="center" color="var(--blue-ciel)" component="div">
        {nombreusers}
      </Typography>
      <Typography sx={{ fontSize: 15  }} align="center" color="#029688" component="div" >
        <i className="bi bi-arrow-up-circle-fill">{"50"}%</i>
        </Typography>
      
    
    <StatCard dd={data3}/>
    </Card>
        </Grid>
        <Grid item md={8}>
          <Card variant="outlined" sx={{ borderRadius: '20px' }}>
          <LineChart/>

    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined" sx={{ borderRadius: '20px' }}>
        <PieChart/>

    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined" sx={{ borderRadius: '20px' }}>
        <DoughnutChart/>
    </Card>
        </Grid>
        <Grid item md={8}>
        <Card variant="outlined" sx={{ borderRadius: '20px' }}>
        <BarChart/>
    </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
    </div>
  )
}

export default Stat