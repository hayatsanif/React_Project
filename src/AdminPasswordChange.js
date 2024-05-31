import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminPasswordChange = () => {
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [renewpass, setReNewpass] = useState("");

    const adminid = useSelector((state) => state.adminuser.adminid);
    console.log(adminid)

    const submitHandle = () => {
      // e.preventdefault();
        let url = ` http://localhost:4000/adminuser/${adminid}`;
        axios.get(url).then((res) => {
          

            if (res.data.password == oldpass) {
                if (newpass == renewpass) {
                    axios.patch(url, { "password": newpass }).then((res) => {
                      console.log(res.data.password)
                        alert("Password Succesfully Changed !! ");
                    });
                }
                else {
                    alert("Password Dose not Match!");
                }
            }
            else {
                alert("Your old Password is Incorrect!");
            }
        });
    }
    return (
        <>
        <body>
        <div class="sector5">
        
        <div class="sector">
            <div class="sector2">
                <div class="sector4">
                {/* <h1 className="help" style={{marginLeft:"10px"}}>Change Your password</h1> */}
                <form >
                    

                    Enter Current Password:
                    <input type="text" className="password" value={oldpass} name="oldpass" onChange={(e) => { setOldpass(e.target.value) }}
                    style={{ height: '25px',marginLeft:'10px'}}
                    />
                    <br /><br /><br />
                    Enter New Password:
                    <input type="text" className="password"   value={newpass} name="newpass" onChange={(e) => { setNewpass(e.target.value) }} 
                    style={{ height: '25px',marginLeft:'29px'}}
                    />
                    <br /><br /><br />
                    Re-Enter New Password:
                    <input type="password" className="password"  value={renewpass} name="renewpass" onChange={(e) => { setReNewpass(e.target.value) }} 
                    style={{ height: '25px',marginLeft:'10px'}}
                    />
                  <br></br>
                    <button className="btn-stu-pass" onClick={submitHandle}>Submit</button>
                </form>
                </div>
                </div>
               
                </div>
                </div>
                </body>
        </>
    )
}
export default AdminPasswordChange;