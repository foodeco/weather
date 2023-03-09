import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrentLocation from './components/CurrentLocation';
import Headers from './components/Headers';
import Map from './components/Map';
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
      <Map />
      </BrowserRouter>
    </div>
  );
}

export default App;
