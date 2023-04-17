
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
import { Allgroups } from './Station/Allgroups';
import Discussion from './Station_Discussion/Discussion';
import Singlediscuss from './Station_Discussion/Singlediscuss';
import AllAssociates from './Associate/AllAssociates';
import Count from './components/Context/Count';
import { Checking } from './components/Testing/Checking';
import Discussrecent from './Station_Discussion/Discussrecent';
import { Searchd } from './Station_Discussion/Searchd';
import AddDiscussion from './Station_Discussion/AddDiscussion';
import Stations from './Station_Discussion/Stations';
import { DashboardBoard } from './SecurityBoard/DashboardBoard';
// import projectAssociate from './SecurityBoard/projectAssociate'
import ProjectAssociate from './SecurityBoard/ProjectAssociate';
import ProjectDescription from './SecurityBoard/ProjectDescription';
import Assignments from './SecurityBoard/Assignments';
import ProjectPhotos from './SecurityBoard/ProjectPhotos';
import LinkAssociate from './SecurityBoard/LinkAssociate';





function App() {

  return (
    <div>

      {/* <TextStyle/> */}
      <Header />


      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/pages" element={<Pages />} />
          <Route path="/admin/Stations" element={<Allgroups />} />
          <Route path="/admin/pages/add" element={<Addpage />} />
          <Route path="/admin/pages/edit/:id" element={<Editpage />} />
          <Route path="/station" element={<Station />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/discussion/:id" element={<Singlediscuss />} />
          <Route path="/MyStationDashboard" element={<MyStationDashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Associate" element={<AllAssociates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addDiscussion" element={<AddDiscussion />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/Dashboad-Board" element={<DashboardBoard />} />
          {/* <Route path="/projectAssociate" element={<projectAssociate/>} /> */}
          <Route path="/ProjectAssociate" element={<ProjectAssociate/>} />
          <Route path="/ProjectPhotos" element={<ProjectPhotos/>} />
          <Route path="/ProjectDescription" element={<ProjectDescription/>} />
          <Route path="/Assignments" element={<Assignments/>} />
          <Route path="/LinkAssociate" element={<LinkAssociate/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
