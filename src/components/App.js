import React from 'react';
import SideBar from './SideBar';
import Wrapper from './Wrapper';
import '../assets/css/app.css'

import Footer from './Footer/Footer';
import Categorias from './Cards/categorias';
import Chart from './Tablas/Chart';
import Datos from './Cards/Datos';
import TopBar from './TopBar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Error404 from './Error404';
import Cards from './Data/Cards';

function App() {
  return (
   
     <React.Fragment>
       
      <div id="wrapper" width="100%">
       
      <SideBar /> 
      <div className="divmaldito">
      <TopBar />
      <Routes >
      <Route path='*' element={<Error404 />} />
      <Route exact path="/" element= {<Wrapper />}> </Route>
      <Route path="last" element= {<Datos />}> </Route>
      <Route path="resumen" element= {<Cards />}> </Route>
      <Route path="categorias" element= {<Categorias />}> </Route>
      <Route path="list" element= {<Chart />}> </Route>
      
      
     </Routes>
     </div>
     </div>
     
     <Footer />
    </React.Fragment>
    
  );
}

export default App;
