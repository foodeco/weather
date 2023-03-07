
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrentLocation from './components/CurrentLocation';
import Headers from './components/Headers';
import SearchLocation from './components/SearchLocation';


function App() {




  return (
    <div>
      <BrowserRouter>
      <Headers />
        <Routes>
          <Route path="/" element={<CurrentLocation />} />
          <Route path="/search/:city" element={<SearchLocation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
