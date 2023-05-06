import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import HomePage from './components/homePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <HomePage /> */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
