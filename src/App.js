import './App.css';
import Home from './Home';
import HomeB from './HomeB';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Form from './Form';
import Form1 from './Form1';
import Login from './Login';
import Login1 from './Loginn';
import Login2 from './LoginnBack';
import TransferList from './TransferList';
import Servir from './Servir';
import TransferListB from './TransferListB';
import Block from './Block';


function App() {
  return (
    <div className="App">
     
        
        <Routes>
        
          <Route path="/form1" element={<Form/>} />
          <Route path="/form2" element={<Form1/>} />
                 
          <Route path="/" element={<Home/>} />
          
          <Route path="/backOffice" element={<HomeB/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginn" element={<Login1 />} />
          <Route path="/loginb" element={<Login2 />} />
          <Route path="/transferList" element={<TransferList />} />
          <Route path="/transferListB" element={<TransferListB />} />
          <Route path="/servir/:reference" element={<Servir />} />
          <Route path="/block/:reference" element={<Block />} />

          
          
          

        </Routes>
      
      
    </div>
  );
}

export default App;
