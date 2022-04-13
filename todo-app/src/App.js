import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Product from './components/Product'
import Nav from './components/Nav/Nav'
import Todo from './components/Todo'

function App() {
    return (
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/counter" element={<Counter/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/todo" element={<Todo/>}></Route>

      </Routes>
  </BrowserRouter>
    );
}

export default App;