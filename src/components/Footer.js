import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';


const useStyles = makeStyles((theme)=>({
    typographyStyles: {
        flex:1,
        color: "#ffffff",
    },
    buttoncolor:{
        color:"#ffffff",
        marginRight: "30px",
        marginLeft:"10px"
    }

}));


const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar >
                
                
                <Typography href="./" className={classes.typographyStyles}>
                    I bims der Footer !
                </Typography>
                <FastfoodIcon className={classes.buttoncolor}/>
               

                
            </Toolbar>
        </AppBar>
    )
}

export default Footer;
