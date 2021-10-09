import React, {useEffect, useState} from 'react'
import aboutpic from "../images/aboutimage.PNG";
import lovishpic from "../images/lovish.jpeg";
import {useHistory} from "react-router-dom";


const About = () => {

//we can't use directly useHistory that's why we need history
const history = useHistory();

const [userData, serUserData] = useState({});
  
  const  callAboutPage = async () => {
    try {
          const res = await fetch('/about', {

            //we are using get method that,s we have to add extra field like credential, accept etc.
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });

          //we verifying the data it comes or not
         const data = await res.json();
         console.log(data);

         //saving the data in userData by the help of set user. because we can't use data.name directly in react
         serUserData(data);

        //we verifying the data it comes or not
         if(!res.status === 200) {
           const error = new Error(res.error);
           throw error;
         }


    } catch (err) {
      console.log(err);
      // we are pushing the page to login .js
      history.push('/login');
    }

  }



  // it directly call the function inside him after reloading the page or any data changed in that page
  useEffect(() => {
   
    callAboutPage();
    
  },[] );
  
  
  
  return (
    <>
    <div className="container emp-profile">
      < form method="GET">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
            <img src={userData.name === "lovish" ? lovishpic : aboutpic} alt="lovish" />
            </div>
            
          </div>
           <div className="col-md-6">
             <div className="profile-head">
               <h5>{ userData.name }</h5>
               
               <ul className="nav nav-tabs" role="tablist">
                 <li className="nav-item">
                   <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                 </li>
               </ul>
               </div>
           </div>

           {/* <div className="col-md-2">
             <input type="submit" className="profile-edit-btn" name="btnAddmore" value="edit Profile" />

           </div> */}
          </div>

          {/* down-portion */}
          <div className="row">
            {/* left-side-part */}
            <div className="col-md-4">
            <div className="profile-work">
             
              


            </div>
            </div>

               {/* right side part */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div className="row">
                      <div className="col-md-6">
                         <label>USER ID</label>
                      </div>
                      <div className="col-md-6">
                      <p>81364646466</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                         <label>Name</label>
                      </div>
                      <div className="col-md-6">
                      <p>{ userData.name }</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                         <label>Email</label>
                      </div>
                      <div className="col-md-6">
                      <p>{ userData.email }</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                         <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                      <p>{ userData.phone }</p>
                      </div>
                    </div>
                    


                    </div>


                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <div className="row">
                      <div className="col-md-6">
                         <label>USER ID</label>
                      </div>
                      <div className="col-md-6">
                      <p>81364646466</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                         <label>name</label>
                      </div>
                      <div className="col-md-6">
                      <p>{ userData.name }</p>
                      </div>
                    </div>
                    </div>
              



              </div>
            </div>
                
          </div>

      </form>
    </div>
      </>
  )
}
export default About