import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import FlowsList from './components/content/flows/Flows-list';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Flow } from './shared/interfaces/flow';

function App() {
  const apiUrl = 'https://orchestrationflowapp.azurewebsites.net/flow';

  const [flows, setFlows] = useState<Flow[]>([]);
  
  useEffect(() => {
    axios.get<Flow[]>(apiUrl).then(response => {
      return setFlows(response.data)
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container-fluid p-3">
        <FlowsList flows={flows} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
