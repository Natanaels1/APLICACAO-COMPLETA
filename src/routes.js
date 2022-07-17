import { Routes, Route } from 'react-router-dom';

import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

function RoutesApp() {

  return (

      <Routes>
        <Route path="" exact element={ <Home /> } />
        <Route path="/Cadastro" exact element={ <Registration />} />
        <Route path="/Login" exact element={ <Login /> } />
      </Routes>

  )

}

export default RoutesApp;