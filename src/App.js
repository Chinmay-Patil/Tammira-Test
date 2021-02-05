import './App.css';
import React from 'react'
import { Provider } from "react-redux";
import store from "./store"

import Posts from './Posts'
import Postform from './postform'






function App() {
  return (

    <Provider store = {store} >
    <div className="App">
    <Postform/>
    <Posts/>
    

    
    </div>
    </Provider>
  );
}

export default App;





