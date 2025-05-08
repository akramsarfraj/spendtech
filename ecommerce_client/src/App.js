import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import DetailView from './components/DetailView';
import ShopingCart from './components/ShopingCart';


function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/product/:id' element={<DetailView/>}></Route>
            <Route path='/carts' element={<ShopingCart/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
