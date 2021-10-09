import React, {useEffect, useContext} from 'react'

import {useHistory} from "react-router-dom";

import {UserContext} from "../App";

const Logout = () => {//login-logout game
    const {state, dispatch} = useContext(UserContext);
   
    //using promises
const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
        //login-logout game
      dispatch({type: "USER", payload:false})

          history.push('/login', { replace: true});
          if(!res.status === 200) {
              const error = new Error(res.error);
              throw error;
          }
        }).catch((err) => {
            console.log(err);

        })

    });
    
    
    
    return (
        <>
<h1>logout ka page</h1>
        </>
    )
}

export default Logout