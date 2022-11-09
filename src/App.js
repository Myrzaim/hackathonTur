import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import TurList from './Components/TurList/TurList';
import MainRoutes from './MainRoutes';
import TurContextProvider from './Context/TurContextProvider';
import TurView from './Components/TurCard/TurView/TurView';
import TurBasketProvider from './Context/TurBasketProvider';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (<>
    <TurBasketProvider>
      <TurContextProvider>
      <Navbar />
        <MainRoutes />
        <Footer/>
      </TurContextProvider> 
      </TurBasketProvider>
    </>
  );
};

export default App;