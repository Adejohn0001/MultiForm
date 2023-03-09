import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Home from './Pages/Home';
import Select from './Pages/Select';
import Pick from './Pages/Pick';
import Summary from './Pages/Summary';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes >
         <Route exact path='/' element={< Home/>}></Route>
         <Route exact path='/selectplan' element={< Select/>}></Route>
         <Route exact path='/add-ons' element={< Pick/>}></Route>
         <Route exact path='/summary' element={< Summary/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
