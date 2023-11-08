import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./pages/Homepage"
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/DashboardPage';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/login/:userType' element={<LoginPage />}></Route>
          <Route path='/register/:userType' element={<RegisterPage />}></Route>
          <Route path='/register/:userType' element={<RegisterPage />}></Route>
          <Route path='/:userType/dashboard' element={<DashboardPage />}></Route>
          <Route path='/add-product' element={<AddProduct />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
