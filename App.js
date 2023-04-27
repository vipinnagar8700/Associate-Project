
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
import ProjectForm from './SecurityBoard/TestFile/ProjectForm';
import AssociateSearch from './SecurityBoard/TestFile/AssociateSearch';
import Addphotos from './SecurityBoard/TestFile/Addphotos';
import Linktittle from './SecurityBoard/TestFile/Linktittle';
import SelectAlbum from './SecurityBoard/TestFile/SelectAlbum';
import Filetittle from './SecurityBoard/TestFile/Filetittle';
import Actionlist from './SecurityBoard/TestFile/Actionlist';
import ProjectTime from './SecurityBoard/TestFile/ProjectTime';
import CommentsField from './SecurityBoard/TestFile/CommentsField';
import ProjectDes from './SecurityBoard/TestFile/ProjectDes';
import Addassign from './SecurityBoard/TestFile/Addassign';
import Video from './SecurityBoard/TestFile/Video';
import ProjectAssignments from './SecurityBoard/TestFile/ProjectAssignments';
import Sts from './SecurityBoard/TestFile/Sts';
import EB from './SecurityBoard/TestFile/EB';
import ProjectRoleAdd from './SecurityBoard/TestFile/ProjectRoleAdd';
import Sendboard from './SecurityBoard/SB/Sendboard';
import BoardDetails from './SecurityBoard/SB/BoardDetails';
import SetColor from './SecurityBoard/SB/SetColor';
import Camera from './SecurityBoard/SB/Camera';
import Workshop from './SecurityBoard/SB/Workshop';
import NewSession from '../src/GroupPage/GroupPage/Pages/NewSession'
import Group from '../src/GroupPage/GroupPage/Index'
import Index from './ProjectTask/Index';
// import SelectAssociateEmails from './SecurityBoard/SB/SelectAssociateEmails';





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
          <Route path="/ProjectAssociate" element={<ProjectAssociate />} />
          <Route path="/ProjectPhotos" element={<ProjectPhotos />} />
          <Route path="/ProjectDescription" element={<ProjectDescription />} />
          <Route path="/Assignments" element={<Assignments />} />
          <Route path="/LinkAssociate" element={<LinkAssociate />} />
          <Route path="/SendBoard" element={<Sendboard />} />
          <Route path="/BoardDetails" element={<BoardDetails />} />
          <Route path="/SaveColor" element={<SetColor />} />
          <Route path="/Camera" element={<Camera />} />
          <Route path="/Workshop" element={<Workshop />} />
          {/* SB */}
          {/* <Route path="/SelectEmails" element={<SelectAssociateEmails />} /> */}

          {/* TestFile */}
          <Route path="/ProjectForm" element={<ProjectForm />} />
          <Route path="/AssociateSearch" element={<AssociateSearch />} />
          <Route path="/Addphotos" element={<Addphotos />} />
          <Route path="/Linktittle" element={<Linktittle />} />
          <Route path="/Selectalbum" element={<SelectAlbum />} />
          <Route path="/Filetittle" element={<Filetittle />} />
          <Route path="/Actionlist" element={<Actionlist />} />
          <Route path="/ProjectTime" element={<ProjectTime />} />
          <Route path="/CommentField" element={<CommentsField />} />
          <Route path="/ProjectDes" element={<ProjectDes />} />
          <Route path="/Addassign" element={<Addassign />} />
          <Route path="/Videolink" element={<Video />} />
          <Route path="/ProjectAssignment" element={<ProjectAssignments />} />
          <Route path="/sts" element={<Sts/>} />
          <Route path="/EB" element={<EB/>} />
          <Route path="/ProjectroleAdd" element={<ProjectRoleAdd/>} />

          {/* Project Task */}

          <Route path="/Project-task" element={<Index/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
