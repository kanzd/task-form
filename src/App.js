import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./component/home/index";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home />} >
       
        </Route>
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
