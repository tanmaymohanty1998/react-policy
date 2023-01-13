// -=-=-==-=-=-=-=-=- Css Section -=-=-=-=-=-=-=-=-=-=
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontawesome-4.7/css/font-awesome.min.css';





// -=-=-==-=-=-=-=-=- Js Section -=-=-=-=-=-=-=-=-=-=
import 'bootstrap/dist/js/bootstrap.bundle.js'


// -=-=-==-=-=-=-=-=- Component Section -=-=-=-=-=-=-=-=-=-=
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/CRMLoginPage';
import Dashboard from './Pages/Dashboard';
//import AddRoles from './Pages/AddRoles';


function App() {
  return (
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<LoginPage/>} />
                        <Route exact path="/login" element={<LoginPage/>} />
                        <Route exact path="/home" element={<Dashboard/>} />
                    </Routes>
                </BrowserRouter>
  );  
}

export default App;
