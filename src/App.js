import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import List from "./Components/List"
import Favorites from "./Components/Favorites"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    
    <BrowserRouter>

    <Navbar/>
    
    <Routes>

    {/* <Route path="/" element={<Banner/>}/> */}
    <Route path="/" element={<><Banner/><List/></>}/>
    <Route path="/fav" element={<Favorites/>}/>
    
    
    </Routes>

    </BrowserRouter>
  );
}

export default App;
