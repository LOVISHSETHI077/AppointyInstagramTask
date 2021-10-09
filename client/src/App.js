import React, { useReducer, createContext } from 'react'
import {Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Logout from "./components/logout";

import {initialState, reducer} from "../src/reducer/useReducer";

//1: Ccontext API
 // with the help of createcontext we created a new contex and we have to export
 export const UserContext = createContext();

const Routing = () => {
  return (
   <Switch>
   <Route exact path="/"><Home/></Route>
   <Route path="/about"><About/></Route>
   <Route path="/contact"><Contact/></Route>
   <Route path="/login"><Login/></Route>
   <Route path="/signup"><Signup/></Route>
   <Route path="/logout"><Logout/></Route>
   <Route ><ErrorPage /></Route>
   </Switch>
  )
} 




const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (

  //dispatch always triger the part in reducer. if anything happen in dispatch it will call action method in reducer.
 // through tat action we can change the value of state
    <>
  
   <UserContext.Provider value= {{state, dispatch}}>

    <Navbar/>
    <Routing/>
    </UserContext.Provider>
    </>
  )
}
export default App