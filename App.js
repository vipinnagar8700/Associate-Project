
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Header from './components/navbar/Header';
import { Admin } from './components/Admin/Admin';
import Station from './components/Station-admin/Station';
import MyStationDashboard from './components/Main-Dashboard/Station/MyStationDashboard';
import Profile from './components/AssociatesProfile/Profile';
import Login from './components/Authorization/Login';
import Cookies from 'js-cookie';
import Pages from './components/Pages/Pages';
import { Addpage } from './components/Pages/Addpage';
import { Editpage } from './components/Pages/Editpage';
import{Allgroups }from './Station/Allgroups';





function App() {
  
  
  
  
  return (
 <div>

    {/* <TextStyle/> */}
   <Header/>   
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/pages" element={<Pages/>}/>
        <Route path="/admin/Stations" element={<Allgroups/>}/>
        <Route path="/admin/pages/add" element={<Addpage/>}/>
        <Route path="/admin/pages/edit/:id" element={<Editpage/>}/>
        <Route path="/station" element={<Station/>}/>
        <Route path="/MyStationDashboard" element={<MyStationDashboard/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>        
      </Routes>
    </Router>
 </div>
  );
}

export default App;
