import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import MyCard from './Components/MyCard';
import MyLogIn from './Components/Mylogin';
import MyNavbar from './Components/MyNavbar';
import { useSelector } from 'react-redux';


function App() {
  const themeMode = useSelector((state) => state.darkMode)
  return (
    <div className={`App ${themeMode ? 'dark' : 'light'}`}>
      <BrowserRouter>

        <MyNavbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/features' element={<Features />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/cart' element={<MyCard />}></Route>
          <Route path='/login' element={<MyLogIn />}></Route>
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
