import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import StudentDashboard from "./StudentDashboard";
import LoaderDashboard from "./LoaderDashboard";
import Studentcomplain from "./Studentcomplain";
import AdminDashboard from "./AdminDashboard";
import Seecomplain from "./Seecomplain";
import AdminPasswordChange from "./AdminPasswordChange";
import ReplyAns from "./ReplyAns";
import SeeStuAnswer from "./SeeStuAnswer";
import StuPasswordChange from "./StuPasswordChange";
import StuProfile from "./StuProfile";
import Contact from "./Contact";

const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/studashboard" element={<LoaderDashboard/>}>
            <Route exact path="Seecomplain" element={<Studentcomplain/>} />
            <Route exact path="sturesponse" element={<SeeStuAnswer/>}/>
            <Route exact path="stupassword" element={<StuPasswordChange/>}/>
            <Route exact path="Stuprofile" element={<StuProfile/>}/>
          </Route>

        <Route path="admindashboard" element={<AdminDashboard/>} >
             <Route path="Seecomp" element={<Seecomplain/>}/>
            <Route path="adminchnagepass" element={<AdminPasswordChange/>}/>
             <Route path="repans/:id" element={<ReplyAns/>} />
        </Route>  
         
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;