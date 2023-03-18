
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homescreen />} />
          <Route path='/product/:id' element={<ProductDetailScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
