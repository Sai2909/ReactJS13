
import './App.css';
import HeaderComponent from './app/HeaderComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeComponent from './app/HomeComponent';
import RegisterComponent from './app/RegisterComponent';
import ProductComponent from './app/ProductComponent';
import CalcComponent from './app/CalcComponent';
//import RunningImage from '../src/app/images/running1.jpg';
function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "black",
    height:'60px'
  
  };


  return (
    <>

 <div className='container-fluid'> 
    <BrowserRouter>
    <h1 style={mystyle} >heyy SPA</h1>
      <HeaderComponent />
      
      <Routes>
        <Route exact path='/' element={<HeaderComponent />} />
        <Route exact path='/home' element={<HomeComponent />} />
        <Route exact path='/register' element={<RegisterComponent />} />
        <Route exact path='/product' element={<ProductComponent />} />
        <Route exact path='/calc' element={<CalcComponent />} />
      </Routes>
    </BrowserRouter>
    
</div>
</>
  );
}

export default App;
