import React, {useEffect, useState} from 'react'
import aboutpic from "../images/aboutimage.PNG";
import lovishpic from "../images/lovish.jpeg";
import {useHistory} from "react-router-dom";





const post = () => {

//we can't use directly useHistory that's why we need history
const history = useHistory();

const [userData, serUserData] = useState({});


  
  const  callpostPage = async () => {
    try {
          const res = await fetch('/post', {

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
   
    callpostPage();
    
  },[] );
  
  
  
  return (
    <>
    <div className="container emp-profile">
      < form method="GET">
        <div className="post">
            <div className="post__header">
           
            {/* header name */}
        <h3>{userData.name}</h3>

                
                </div>
            
           
           {/* image */}
        <img  className="post__image " src={userData.name === "lovish" ? lovishpic : aboutpic}/>


           {/* username caption */}
           <h4 className="post__text"><strong>l{userData.name} </strong> {userData.name}</h4>

        </div>

          
          

      </form>
    </div>
      </>
  )
}
export default post