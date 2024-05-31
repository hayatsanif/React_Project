import { useState } from "react";
import axios from "axios";
const Register = () => {


    const [input, setInput] = useState({});

        const handleInput = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            setInput(values => ({ ...values, [name]: value }));
        }
    
        const handleSubmit=()=>{
            let url="http://localhost:4000/student";
            axios.post(url,input).then(alert("data saved successfully !!!!!!"));
        }
    return (
 <>
 <body>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 
    <div className="image1">
       
        <div className="int">
            <div className="form">
      <form>
        <center>
    <h1>Register</h1>
    <i class="fa-regular fa-user"></i>
  <input type="text" placeholder="Enter name" name="name" onChange={handleInput} value={input.name}/><br></br><br></br>
  <i class="fa-solid fa-at"></i>
  <input type="text" placeholder="Enter Email" name="email"  onChange={handleInput} value={input.email}/><br></br><br></br>
  <i class="fa-solid fa-lock"></i>
 <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} value={input.password} /><br></br>
        <button onClick={handleSubmit}>Submit</button>
            </center>
                </form>
            </div>
        </div>
    </div>
    </body>
</>

    )
}
export default Register;