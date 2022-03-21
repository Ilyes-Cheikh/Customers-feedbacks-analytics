import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PieChart from '../Components/Pie';
import LineChart from '../Components/LineChart';
import BarChart from '../Components/BarChart';
import DoughnutChart from '../Components/DoughnutChart';
import "../Assets/CSS/stat.css";

function Stat() {
  return (
    <div>
      
      <div className="box">
      <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2}  >
      <Grid item md={4} >
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 30 }} align="center" color="text.secondary" gutterBottom>
        Revenue total
      </Typography>
      <Typography sx={{ fontSize: 80  }} align="center" color="var(--rouge)" component="div">
        10
      </Typography>
      
    </CardContent>
    <CardActions>
    </CardActions>
    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 30 }} align="center" color="text.secondary" gutterBottom>
        Nombre d'achats
      </Typography>
      <Typography sx={{ fontSize: 80  }} align="center" color="var(--blue-marine)" component="div">
        10
      </Typography>
      
    </CardContent>
    <CardActions>
    </CardActions>
    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined">
        <CardContent>
      <Typography sx={{ fontSize: 30 }} align="center" color="text.secondary" gutterBottom>
        Nombre d'abonnés
      </Typography>
      <Typography sx={{ fontSize: 80  }} align="center" color="var(--blue-ciel)" component="div">
        10
      </Typography>
      
    </CardContent>
    <CardActions>
    </CardActions>
    </Card>
        </Grid>
        <Grid item md={8}>
          <Card variant="outlined">
          <LineChart/>

    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined">
        <PieChart/>

    </Card>
        </Grid>
        <Grid item md={4}>
        <Card variant="outlined">
        <DoughnutChart/>
    </Card>
        </Grid>
        <Grid item md={8}>
        <Card variant="outlined">
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