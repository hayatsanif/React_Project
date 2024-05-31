import { useSelector } from "react-redux"

const StuProfile=()=>
{
    const stuName=useSelector((state)=>state.stulogin.stuuser);
    return(
        <>
       <center>
        <div className="profile">
            <h1>Name:{stuName}</h1>
            
        </div>
        
        </center> 
        
        </>
    )
}
export default StuProfile;