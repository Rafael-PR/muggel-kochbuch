import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Footer from './components/Footer';
import ContentDetails from './components/ContentDetails';
import Main from './components/Main';
import './App.css';
import {Grid} from '@material-ui/core';


function App() {

  return (

    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
          {/* HUFFLEPUFF */}
        <Route exact path="/Content1">
          <Grid item container>
            <Grid item xs={0} sm={2}/>

              <Grid item xs={12} sm={8}>
                <Content1 />
          
              </Grid>

            <Grid item xs={0} sm={2} />
      
          </Grid>
        </Route>
          {/* GRYFFINDOR */}
        <Route exact path="/Content2">
          <Grid item container>
            <Grid item xs={0} sm={2}/>

              <Grid item xs={12} sm={8}>
                <Content2 />
          
              </Grid>

            <Grid item xs={0} sm={2} />
      
          </Grid>
        </Route>
        {/* RAVENCLAW */}
        <Route exact path="/Content3">
          <Grid item container>
            <Grid item xs={0} sm={2}/>

              <Grid item xs={12} sm={8}>
                <Content3 />
          
              </Grid>

            <Grid item xs={0} sm={2} />
      
          </Grid>
        </Route>
        {/* SLYTHERIN */}
        <Route exact path="/Content4">
          <Grid item container>
            <Grid item xs={0} sm={2}/>

              <Grid item xs={12} sm={8}>
                <Content4 />
          
              </Grid>

            <Grid item xs={0} sm={2} />
      
          </Grid>
        </Route>
        {/* Details */}
        <Route exact path="/ContentDetails">
          <Grid item container>
            <Grid item xs={0} sm={2}/>

              <Grid item xs={12} sm={8}>
                <ContentDetails />
              </Grid>

            <Grid item xs={0} sm={2} />
      
          </Grid>
        </Route>


      
      
        </Switch>
        <Grid item>
          
        <Footer />
        </Grid>

        </Grid>

  );
}

export default App;
