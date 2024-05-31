import { useSelector, useDispatch } from "react-redux";
import { stulogout } from "./stuloginSlice";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment, faReply, faKey, faSignOutAlt, faPenToSquare, faRectangleList, faLock } from "@fortawesome/free-solid-svg-icons";


const StudentDashboard=()=>
{
 const stuName=useSelector((state)=>state.stulogin.stuuser);
 const myDispatch= useDispatch();
 const myNav= useNavigate();

 


  const stuLogout=()=>
  {
    myDispatch(stulogout());
    myNav("/home");
    
  }
 return(
        <>
          
         <div id="stuinfo">
           welcome {stuName} !
         </div>
        
        
  <div class="sidebar">
  
  <Link to="Stuprofile">
  < FontAwesomeIcon icon={faUser} className="Faicon"/> 
     Student Profile </Link>
  <Link to="Seecomplain">
  <FontAwesomeIcon icon={faPenToSquare} className="Faicon"/> 
     Write Your Complain </Link>
  <Link to="sturesponse"> 
  <FontAwesomeIcon icon={faRectangleList} className="Faicon"/> 
  Display Response </Link>
  <Link to="stupassword">
  <FontAwesomeIcon icon={faLock}className="Faicon" /> 
     Change Password</Link>
  <button className="logout-button" onClick={stuLogout}>Logout</button>
  
</div>

<div class="content1">
 

 <Outlet/>


</div>


        </>
    );
}


export default StudentDashboard;