import { useState } from "react";
import axios from "axios";

const Contact = () => {


  const [input, setInput] = useState({});

      const handleInput = (e) => {
          let name = e.target.name;
          let value = e.target.value;
          setInput(values => ({ ...values, [name]: value }));
      }
  
      const handleSubmit=()=>{
          let url="http://localhost:4000/contact";
          axios.post(url,input).then(alert("Thank you! Your message has been sent successfully."));
      }
    return(

        <>
    
       <body>
        <div class="hey" >
            <div class="hey1" >
            </div>
                <div class="hey2"  style={{
                    backgroundColor:"white",height:"100px",width:"200px",
                    paddingLeft:'70px',
                    paddingTop:'20px'}}>

                  <input type="text" name="name" placeholder="Your name"
                  style={{
                    height:'40px',
                    width:'300px',
                    textAlign:'center',
                  }}
                  value={input.name}
                        onChange={handleInput}
                  ></input>

                   <input type="text" name="email" placeholder="Your email"
                  style={{
                    height:'40px',
                    width:'300px',
                    textAlign:'center',
                    marginTop:'7%',
                  }}
                  value={input.email}
                        onChange={handleInput}
                  ></input>
                   <input type="text" name="message" placeholder="Your message"
                  style={{
                    height:'210px',
                    width:'300px',
                    textAlign:'center',
                    marginTop:'7%',
                  }}
                  value={input.message}
                        onChange={handleInput}
                  ></input>
                  <button class="button1" onClick={handleSubmit}>submit</button>
               
            </div>
            
        </div>
       </body>

      </>
    )
}
export default Contact;