import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/Adminscreen';
import Userlist from './screens/Userlist';
import Orderslist from './screens/Orderslist';
import Addvcds from './screens/Addvcds';
import Vcdslist from './screens/Vcdslist';
import Editvcd from './screens/Editvcd';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Homescreen} />
          <Route path='/cart' exact Component={Cartscreen} />
          <Route path='/register' exact Component={Registerscreen} />
          <Route path='/login' exact Component={Loginscreen} />

          {/* <Route path='/admin' exact Component={Adminscreen} /> */}


          <Route path='/admin/userslist' Component={Userlist} />
          <Route exact path='/admin' Component={Vcdslist} />

          <Route exact path='/admin/vcdslist' Component={Vcdslist} />
          <Route exact path='/admin/addvcds' Component={Addvcds} />
          <Route exact path='/admin/orderslist' Component={Orderslist} />

          <Route path='/admin/editvcd/:vcdid' Component={Editvcd} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
