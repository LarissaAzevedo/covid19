import React from 'react';
import './App.css';
import Timeline from './Timeline';
import Welcome from './resources/Header/';
import Map from './resources/map';
import DataTable from './DataTable';
import Container from '@material-ui/core/Container';
import Abas from './Abas';
import Footer from './resources/Footer/Footer';
import Teste from './teste';


function App() {
  return (
    <div className="App">
      <Welcome />
      <Container >
        <Map />
        <br />
        <br />
        <div className="timeline">
          <Timeline />
        </div>
        <br />
        <br />
        <DataTable />
        <br />
        <br />
        <Abas />
        <br />
        <br />
        <Teste />
        <br />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
