import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const ReplyAns=()=>
{
    const {id} = useParams();

    const [msg, setMsg ]= useState("");

  const sendReply=()=>
  {
    let url=`http://localhost:4000/stucomplain/${id}`;

    axios.patch(url, {ans:msg}).then(()=>{
        alert("Answer Reply Succesfull!!!");
    });
  }

    return(
        <>
        <center>
           <h1 className="replyh1"> Reply Student Answer {id} </h1>

           Enter Reply 

            <br />
        <textarea rows="7" value={msg} onChange={(e)=>{setMsg(e.target.value)}} cols="45" />
           <br />
           <button onClick={sendReply}> Send Reply</button>
           </center>
        </>
    );
}


export default ReplyAns;