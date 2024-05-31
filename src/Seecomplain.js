import { useState, useEffect } from "react";
import axios from "axios";
// import { stulogin } from "./stuloginSlice";
import { Link } from "react-router-dom";

let mysno=0;
const Seecomplain=()=>
{
  const [mydata, setMydata]= useState([]);
  const [newdata, setNewdata]=useState([]);

  const laodData=()=>
   {
    let url="http://localhost:4000/stucomplain";
    axios.get(url).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    });
    let url1="http://localhost:4000/students";
     axios.get(url1).then((res1)=>{
        setNewdata(res1.data);
        console.log(res1.data);
      });
  }
 useEffect(()=>{
    laodData();
   }, []);

  const ans=mydata.map((key)=>{
    const sttus=key.ans;
    mysno++;
       const myStu=newdata.find((mykey)=> mykey.id===key.stuid); 
       return(
           <>
        
             <tr>
                <td> {mysno} </td>
                <td> {key.complain} </td>
                <td> {myStu ? myStu.name : " " }</td>
                <td> {myStu ? myStu.email : " "} </td>
              <td className="seelog"> {
                sttus==" "?
                <Link to= {"/admindashboard/repans/" + key.id}>Reply to Student</Link>
               :<p>Already Replied</p> }
              </td>
              </tr>
              
           </>
       );
  });
    return(
        <>
        <center>
        <h2> Student Complain List</h2>
        <table >
            <tr>
                <td> S.no.</td>
                <td> Student Complain</td>
                <td> Name </td>
                <td> Email </td>
                <td> </td>
               
            </tr>
             {ans}

        </table>
        </center>
        </>
    );
}
 

export default Seecomplain;










