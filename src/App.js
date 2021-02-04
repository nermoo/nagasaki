import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-bar';
import { Grid } from '@material-ui/core';
import Content from './components/content';
import Navigation from './components/bottomNav';

function App() {
  return (
  <Grid container direction='column' >
  <Grid item xs={12}><Navbar/></Grid>
  <Grid item container>
  <Grid item xs={1} sm={2}/>
  <Grid item xs={10} sm={8}>
  
     <Content/>
   
  </Grid>
  <Grid  item xs={1} sm={2}/>
  </Grid>
    <Navigation/>
  </Grid>
   
   
  );
}

export default App;
