
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './pages/navbar';

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
      </Router>
    </div>
  );
}
export default App;
