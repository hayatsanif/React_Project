
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { stulogin } from "./stuloginSlice";
import { adminlogin } from "./adminSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("student");
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  
  const submitHandle = (e) => {
    if (usertype == "student") {
      e.preventDefault();
      let url =`http://localhost:4000/student/?email=${email}`
      axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.length == 1) {
          if (res.data[0].password == password) {
            let stunm = res.data[0].name;
            let stuid = res.data[0].id;
            myDispatch(stulogin({ stunm, stuid }));
            myNav("/studashboard");
          }
          else {
            alert("Invalid Password");
          }
        }
        else {
          alert("Invalid email!")
        }
      });

    }
    else {
      e.preventDefault();
      let url =`http://localhost:4000/adminuser/?email=${email}`;
      axios.get(url).then((res) => {
        if (res.data.length == 1) {
          if (res.data[0].password == password) {

            let adminname = res.data[0].name;
            let adminid=res.data[0].id;
            myDispatch(adminlogin({"adname":adminname,"adid":adminid}));

            myNav("/admindashboard");
          }
          else {
            alert("Password dose not Match!!!");
          }
        }
        else {
          alert("Invalid Email!!!");
        }
      });
    }
  }

  return (
    <>
    <body className="root">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="bg-login">
          <div className="dabba-log">
            <div className="main2">
              <h1>LOG IN</h1>
              <br></br>
              <form action="./StudentDashboard">
              <i class="fa-solid fa-at"></i>
                <input type="email" name="email" placeholder="Email" className="input-log" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                <br></br>
                <i class="fa-solid fa-lock"></i>
                <input type="password" name="password" placeholder="Password" className="input-log" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <br></br><br></br>
                <select name="userRoll"
                  value={usertype} onChange={(e) => { setUsertype(e.target.value) }}>
                  <option>student</option>
                  <option>admin</option>
                </select>
                <br></br><br></br><br></br>
                <button className="submit-log" onClick={submitHandle}>Sign In</button>
              </form>
              <br></br><br></br>
              <div className="dabba-log-2">
                <h2>Don't have an account?</h2>
                {/* <a href="./Registration"> <h2 className="reg-h2">Register now</h2></a> */}
                <a href="./Registration">Register now</a>
              </div>
            </div>
          </div>
          </div>
    
    </body>
    </>
  )
}
export default Login;
