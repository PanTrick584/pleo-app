import React, {useEffect} from 'react'
import AppProvider from './provider/AppProvider';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux'
import { storeDeclaration } from './redux/initialStore'

function App() {

  let initialStore = storeDeclaration.getState()
    
  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(initialStore));
  },[])
  const saveState = (store) => {
    try {
      localStorage.setItem("store", JSON.stringify(store));
    }
    catch {
      //error
    }
  }
  storeDeclaration.subscribe(() => {
    saveState({
        store: initialStore
    })
  })

  const BASENAME = "/"
  
  return (
    <ReduxProvider store={ storeDeclaration }>
      <Router  basename={BASENAME}>
        <Navbar />
        <AppProvider />
      </Router>
    </ReduxProvider>
  );
}

export default App;
