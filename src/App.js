
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';
import Footer from './pages/footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
