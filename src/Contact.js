const Contact=()=>
{
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

                  <input type="text" placeholder="Your name"
                  style={{
                    height:'40px',
                    width:'300px',
                    textAlign:'center'
                  }}
                  ></input>

                   <input type="text" placeholder="Your email"
                  style={{
                    height:'40px',
                    width:'300px',
                    textAlign:'center',
                    marginTop:'7%',
                  }}
                  ></input>
                   <input type="text" placeholder="Your message"
                  style={{
                    height:'210px',
                    width:'300px',
                    textAlign:'center',
                    marginTop:'7%',
                  }}
                  ></input>
                  <button class="button1">submit</button>
               
            </div>
            
        </div>
       </body>

      </>
    )
}
export default Contact;