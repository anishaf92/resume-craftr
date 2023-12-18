import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddResume from './pages/AddResume';
import ViewResume from './pages/ViewResume';

function App () {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addResume" element={<AddResume />} />
          <Route path="/:id" element={<ViewResume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
