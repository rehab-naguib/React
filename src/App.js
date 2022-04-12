import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Product from './components/Product';

function App() {
    return ( 
      <BrowserRouter>
      <Nav></Nav>
      <Routes >
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/counter' element={<Counter></Counter>}></Route>
      <Route path='/shop/:id' element={<Product></Product>}></Route>
        
        </Routes>
        </BrowserRouter>
    );
}
export default App;
