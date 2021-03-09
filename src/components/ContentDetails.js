import React from 'react'
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CardForDetails from './CardForDetails';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(130),
        height: theme.spacing(8),
        backgroundColor: "#F0BB01",
        
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 12,
      },
      pos: {
        marginBottom: 2,
      },
      alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      },
      backroundPic: {
        backgroundColor: '#A655D9',

      },
    },
  }));


const ContentDetails = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container>
            <Grid item xs={12}>
            <div className={classes.root} >
                <Paper className={classes.alignItemsAndJustifyContent} elevation={5} >
                    Name des Rezeptes
                    {/* <Typography >
                        Zauberrezepte des Tages
                    </Typography> */}
                </Paper>
            </div>
            </Grid>
            
        </Grid>
        
        <Grid container spacing={4}>
            
            <Grid item xs={12} sm={4}>
                <CardForDetails/>
            </Grid>
            {/* <Grid item xs={12} sm={4}>
                <Cards2/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Cards2/>
            </Grid> */}
            {/* <Grid item xs={12} sm={4}>
                <Cards2/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Cards2/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Cards2/>
            </Grid> */}

        </Grid>
        </>
    )
}


export default ContentDetails;
