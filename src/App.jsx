import './App.css';
import { Login } from "./components/Login";
import { Account } from "./components/Account";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login titulo={"Login"}/>}/>
        <Route path="/account" element={ <Account titulo={"Create account"}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;