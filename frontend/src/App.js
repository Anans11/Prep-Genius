/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import AboutSection from './component/Aboutsection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './component/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';
import Top from './component/Top';
import Level from './component/Level'
import MCQPage from './component/MCQPage';
import CodeZone from './component/CodeZone';
import IntermediatePuzzles from './component/IntermediatePuzzles';



const App = () => {
  return (
    <div>
    <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutSection/>}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='/top' element={<Top />} />
        <Route path='/level' element={<Level />} />
        <Route path='/mcq' element={<MCQPage />} />
        <Route path='/codezone' element={<CodeZone />} />
        <Route path='/intermediate' element={<IntermediatePuzzles />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
};

export default App;