
import './App.css';
import SearchForm from './components/form.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contribuitors from '../src/modulos/contribuitors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchForm/>}/>
          <Route path='contribuitors' element={<Contribuitors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
