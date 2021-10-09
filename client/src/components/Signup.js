import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import signpic from "../images/signup.svg";



const Signup = () => {

  //we cant use directly push so
const history = useHistory();

  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value  = e.target.value;

    setUser({ ...user, [name]:value});

  }

  const PostData = async (e) => {
    //we don't wannapage to reload
     e.preventDefault();

     const { name, email, phone, work, password, cpassword } = user;

     const res = await fetch('/register', {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },

       //// When sending data to a web server, the data has to be a string.
       body: JSON.stringify({
        //name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword
        name, email, phone, work, password, cpassword
      
       })
     });
     
   const data = await res.json();
if (res.status === 422 || !data) {
  window.alert("Invalid Registeration");
  console.log("Invalid resgiteration");
} else {
  window.alert("Registeration Sucessful");
  console.log("Registeration Sucess");
  
  
  history.push("/login");
}

  }



return (
    <>
    <section className="signup">
     <div className="container mt-5">
    <div className="signup-content">
<div className="signup-form">
<h2 className="form-title">Sign up</h2>
<form method="POST" className="register-form" id="register-form">

<div className="form-group">
<label htmlFor="name">
  <i className="zmdi zmdi-account material-icons-name"></i>
</label>
<input type="text" name="name" id="name" autoComplete="off" 
value={user.name} onChange={handleInputs} 
placeholder="Your Name" />
</div>

<div className="form-group">
<label htmlFor="email">
  <i className="zmdi zmdi-email material-icons-name"></i>
</label>
<input type="email" name="email" id="email" autoComplete="off" 
value={user.email} onChange={handleInputs} placeholder="Your Email" />
</div>

<div className="form-group">
<label htmlFor="phone">
  <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
</label>
<input type="number" name="phone" id="phone" autoComplete="off" 
value={user.phone} onChange={handleInputs} placeholder="Your Mobile Number" />
</div>

<div className="form-group">
<label htmlFor="work">
  <i className="zmdi zmdi-slideshow material-icons-name"></i>
</label>
<input type="text" name="work" id="work" autoComplete="off" 
value={user.work} onChange={handleInputs} placeholder="Your Profession" />
</div>

<div className="form-group">
<label htmlFor="password">
  <i className="zmdi zmdi-lock material-icons-name"></i>
</label>
<input type="password" name="password" id="password" autoComplete="off"
 value={user.password} onChange={handleInputs} placeholder="Your Password" />
</div>

<div className="form-group">
<label htmlFor="cpassword">
  <i className="zmdi zmdi-lock material-icons-name"></i>
</label>
<input type="password" name="cpassword" id="cpassword" autoComplete="off" 
value={user.cpassword} onChange={handleInputs} placeholder="Confirm Your Password" />
</div>

<div className="form-group form-button">
  <input type="submit" name="signup" id="signup" className="form-submit" 
  value="register" onClick={PostData} />
</div>


</form> 
{/* form end */}
</div>
{/* signup-form div end */}

<div className="signup-image">
  <figure>
    <img src={signpic} alt="Registeration pic" />
  </figure>
  <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
</div>
{/* signup-div-image-end */}
</div> 
     {/* signup div end  */}
     </div>
      {/* container div end */}
      </section>
       {/* signup section div end */}
  
      </>
  )
}
export default Signup