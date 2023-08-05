import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Allproducts from './Components/Allproducts';
import Viewproduct from './Components/Viewproduct';
import Readmore from './Components/Readmore';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Allproducts/>}></Route>
        <Route path='view-product/:id' element={<Viewproduct/>}></Route>
        <Route path='readmore' element={<Readmore/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
