import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
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





const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position='static'>
            <Toolbar >
                <FastfoodIcon className={classes.buttoncolor}/>
                
                <Typography href="./" className={classes.typographyStyles}>
                    Muggel Kochbuch 2.0
                </Typography>
                
                <Button href="./"color="secondary">HOME</Button>
                <Button href="./Content1" color="secondary">Hufflepuff</Button>
                <Button href="./Content2" color="secondary">Gryffindor</Button>
                <Button href="./Content3" color="secondary">Ravenclaw</Button>
                <Button href="./Content4" color="secondary">Slytherin</Button>
                <Button href="./ContentDetails" color="secondary">Details</Button>

                <MenuIcon className={classes.buttoncolor}/>
            </Toolbar>
        </AppBar>
    )
}


export default Header;
