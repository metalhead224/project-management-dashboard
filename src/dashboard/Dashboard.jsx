import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

const Dashboard = () => {


  const [title, setTitle] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
        <Sidebar />
        <Navbar title={title}/>
        <Outlet />
    </Grid>
  )
}

export default Dashboard