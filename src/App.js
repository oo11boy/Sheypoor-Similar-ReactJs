
import { useRoutes } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes';
import AdsBodyContaxtProvider from './Contaxt/AdsBodyContaxt';
import { HeartContextProvider } from './Contaxt/HeartContext';

function App() {
  let myroute=useRoutes(Routes)
  return (

    <div className="App">
      <AdsBodyContaxtProvider>

        <HeartContextProvider>
    {myroute}
    </HeartContextProvider>
    </AdsBodyContaxtProvider>
    
    </div>
  );
}

export default App;
