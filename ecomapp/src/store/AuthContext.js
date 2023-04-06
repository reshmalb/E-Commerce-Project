import React,{useState} from "react";  


const AuthContext=React.createContext({
    token:'',
    isLoggedin:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthorizationProvider=(props)=>{
   const initial_state=localStorage.getItem('token')
   const [istoken,setToken]=useState(initial_state)
    
    console.log("istoken",istoken)
    const userIsLoggedin = !!istoken;//return true if token is string
           console.log("context login value",userIsLoggedin)                       // and not empty

     const loginHandler=(token)=>{
        setToken(token);
        
        localStorage.setItem('token',token)
    //    autoLogoutHandler(5000)
     }     
     const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
     }    
  
     
     const context={
        token:istoken,
        isLoggedin:userIsLoggedin,
        login:loginHandler,
        logout:logoutHandler
     }



  return(
    <AuthContext.Provider value={context}>
    {props.children}
    </AuthContext.Provider>

  ) 
}

export default AuthContext;