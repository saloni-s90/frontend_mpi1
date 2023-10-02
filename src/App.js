import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Configuration from './Component/configuration/Configuration';
import AdminPanel from './Component/adminpanel/AdminPanel';
import DisplayContent from './Component/configuration/DisplayContent';
import Setting from './Component/setting/Setting';
import Billing from './Component/billing/Billing';
import Navigation from './Component/menu/Navigation';

function App() {
  return (
    <BrowserRouter>
<Navigation />
        <Routes>
          <Route path="/" element={<Configuration />}></Route>  
          <Route path="/display" element={<DisplayContent />}></Route>  
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/setting' element = {<Setting />}></Route>  
          <Route path='/billing' element = {<Billing />}></Route>   
        </Routes>

    </BrowserRouter>
  );
}

export default App;
