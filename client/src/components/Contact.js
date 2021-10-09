import React, {useEffect, useState} from 'react'

const Contact = () => {
  
  const [userData, serUserData] = useState({name:"", email:"", phone:"", message:""});
      
      const   userContact = async () => {
        try {
              const res = await fetch('/getData', {
                method: "GET",
                headers: {
                  
                  "Content-Type": "application/json"
                },
                // we are not sending token or cookie so we dont need anymore of include
                // credentials: "include"
              });
    
              
             const data = await res.json();
             console.log(data);
            // serUserData(data);
            serUserData({...userData, name:data.name, email:data.email, phone:data.phone});
    
            
             if(!res.status === 200) {
               const error = new Error(res.error);
               throw error;
             }
    
    
        } catch (err) {
          console.log(err);
          
        }
    
      }
     useEffect(() => {
       
       userContact();
        
      }, []);

      //we are storing data 
      const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        serUserData({...userData, [name]:value });

      }

      // Send data to backend 

      const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userData;

         const res = await fetch('/contact', {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify({
            name, email, phone, message
           })

         });

         const data = await res.json();
         if(!data) {
           console.log("message not send");
         } else {
           alert("Message Send");
           serUserData({ ...userData, message: ""});
         }


      }

  
  
  return (
    <>
    <div className="contact_info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 display-flex justify-content-between">
            {/* phone number */}
          <div className="contact_info_item d-flex justify-content-start align-items-center">
           <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
          <div className="contact_info_content">
            <div className="contact_info_title">
            Phone  
            </div>
            <div className="contact_info_text">
            +91 9549723073
            </div>

          </div>
          </div>

           {/* email */}
           <div className="contact_info_item d-flex justify-content-start align-items-center">
           <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
          <div className="contact_info_content">
            <div className="contact_info_title">
            Email  
            </div>
            <div className="contact_info_text">
            lovishsethi079@gmail.com
            </div>

          </div>
          </div>

           {/* Adress */}
           <div className="contact_info_item d-flex justify-content-start align-items-center">
           <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
          <div className="contact_info_content">
            <div className="contact_info_title">
            Address 
            </div>
            <div className="contact_info_text">
            Mandi Dabwali,Punjab,India
            </div>

          </div>
          </div>

          </div>
        </div>
      </div>
</div>

{/* Contact us form */}
<div className="contact_form">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="contact_form_container py-5">
          <div className="contact_form_title">
            Get in Touch
          </div>
             <form method="POST" id="contact_form">
               <div className="contact_form_name Formabc d-flex justify-content-between align-items-between">
                 <input type="text" id="contact_form_name" className="contact_form_name input_field"
                  name="name"
                  onChange={handleInputs}
                  value={ userData.name } placeholder="Your Name"
                 required="true" />
                
                <input type="email" id="contact_form_email" className="contact_form_email input_field" 
                 name="email"
                 onChange={handleInputs}
                value={ userData.email } placeholder="Your Email"
                 required="true" />

                <input type="number" id="contact_form_phone" className="contact_form_phone input_field"
                 name="phone"
                 onChange={handleInputs}
                value={ userData.phone } placeholder="Your Phone Number"
                 required="true" />

               </div>
               <div className="contact_form_text mt-5">
                 <textarea className="text_field contact_form_message" placeholder="Message" 
                name="message"
                onChange={handleInputs}
                value={userData.message}
                 cols="30" rows="10">

                 </textarea>
               </div>
               <div className="contact_form_button">
                 <button type="submit" className="button contact_submit_button" onClick={contactForm}>Send Message</button>
               </div>

             </form>

        </div>
      </div>
    </div>
  </div>
</div>


      </>
  )
}
export default Contact