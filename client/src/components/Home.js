import React, {useEffect, useState} from 'react'

const Home = () => {
  
  const [userName, serUserData] = useState('');
  const [show, setShow] = useState(false);
 
      
      const userHomePage = async () => {
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
            serUserData(data.name);
            setShow(true);
    
            
             if(!res.status === 200) {
               const error = new Error(res.error);
               throw error;
             }
    
    
        } catch (err) {
          console.log(err);
          
        }
    
      }
     useEffect(() => {
       
       userHomePage();
        
      }, []);

  
  
  
  
  return (
    <>
    <div className="home-page">
      <div className="home-div">
      <p className="pt-5">WELCOME</p>
      <h1>{ userName }</h1>
    <h2>{ show? ' to instagram' : ' Please Sign Up/ Sign In' }</h2>

      </div>

    </div>
    
      </>
  )
}
export default Home