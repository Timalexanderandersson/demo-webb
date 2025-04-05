
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Gallery from './pages/galleri';
import Contact from './pages/contact';
import TackFörDittMeddelande from './pages/thxformessage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/galleri" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/tackfördittmeddelande" element={<TackFörDittMeddelande />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
