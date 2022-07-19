import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import List from "./Components/List"
import Favorites from "./Components/Favorites"
import {BRowserRouter,Route, Switch} from "react-router-dom"
function App() {
  return (
    
    <>
    <Navbar/>
    {/* <Banner/>
    <List/> */}
    <Favorites/>
    </>
  );
}

export default App;
