import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Fabrics from './pages/Fabrics'
import Contacts from './pages/Contacts'
import HowOrder from './pages/HowOrder'
import Catalog from './pages/Catalog'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us/brand" element={<Brand/>}></Route>
          <Route path="/about-us/fabrics" element={<Fabrics/>}></Route>
          <Route path="/about-us/contacts" element={<Contacts/>}></Route>
          <Route path="/how-to-order" element={<HowOrder/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          {/* <Route path="/catalog/blouse" element={<Blouse/>}></Route>
          <Route path="/catalog/Tro" element={<Contacts/>}></Route>
          <Route path="/how-to-order" element={<HowOrder/>}></Route> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
