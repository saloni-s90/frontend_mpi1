
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Configuration from './Component/configuration/Configuration';
import AdminPanel from './Component/adminpanel/AdminPanel';
import DisplayContent from './Component/configuration/DisplayContent';
import Sidebar from './Component/menu/Sidebar';
import Setting from './Component/setting/Setting';
import Billing from './Component/billing/Billing';

function App() {
  return (
    <BrowserRouter>
     <Sidebar>
        <Routes>
          <Route path="/" element={<Configuration />}></Route>  
          <Route path="/display" element={<DisplayContent />}></Route>  
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/setting' element = {<Setting />}></Route>  
          <Route path='/billing' element = {<Billing />}></Route>   
        </Routes>
        </Sidebar>
    </BrowserRouter>
  );
}

export default App;
