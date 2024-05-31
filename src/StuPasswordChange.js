import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StuPasswordChange=()=>
{
    const [oldpass, setOldpass]=useState("");
    const [newpass, setNewpass]=useState("");
    const [renewpass, setReNewpass]=useState("");

    const stuid=useSelector((state)=>state.stulogin.stuid);

    const submitHandle=()=>{
		let url = `http://localhost:4000/student/${stuid}`;
        axios.get(url).then((res)=>{

            if(res.data.password==oldpass)
            {
                if(newpass==renewpass)
                {
                    axios.patch(url, {password:newpass}).then((res)=>{
                        alert("Password Succesfully Changed !! ");
                    });
                }
                else{
                    alert("Password Dose not Match!");
                }
            }
            else{
                alert("Your old Password is Incorrect!");
            }
        });
    }
    return(
        <>
        <div className="stupass">
            <div className="stupass2">
        <center>
        <h1>Change Your password</h1>
        Enter Old Password:
        <  input type="text" value={oldpass} name="oldpass" onChange={(e)=>{setOldpass(e.target.value)}}
          style={{ height: '25px',marginLeft:'10px'}}
        />
       <br></br>
        Enter New Password:
        <input type="text" value={newpass} name="newpass" onChange={(e)=>{setNewpass(e.target.value)}}
          style={{ height: '25px',marginLeft:'10px'}}
        />
        <br></br>

        Re-Enter New Password
        <input  type="password" value={renewpass} name="renewpass" onChange={(e)=>{setReNewpass(e.target.value)}}
         style={{ height: '25px',marginLeft:'15px'}}
        />
       <br></br><br></br>
        <button className="btnpass"onClick={submitHandle}>Reset Your Password</button>
        </center>
        </div>
        </div>
        
        </>
    )
}
export default StuPasswordChange;