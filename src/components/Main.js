import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
    mainPic: {
        backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
        height: "900px",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
        fontSize:"4rem",


    }
  }));

const Main = () => {

    const classes = useStyles();

    return (
        <Box className={classes.mainPic}>
          

            MUGGEL KOCHBUCH 2.0
        </Box>
    )
}

export default Main;
