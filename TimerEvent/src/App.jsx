import './App.css';
import Home from './pages/Home.jsx';
import Quizz from './pages/Quizz.jsx'; // Assurez-vous de créer cette page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/marches/" element={<Home />} />
        <Route path="/marches/quizz/" element={<Quizz />} />
      </Routes>
    </Router>
  );
}

export default App;