import logo from './logo.svg';
import './App.css';
import Site from './Site';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>hiii this is react project</h1>
        
        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
        </BrowserRouter>

        
        
       
      
      </header>
    </div>
  );
}

export default App;
