import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Twitter from './pages/Twitter';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
