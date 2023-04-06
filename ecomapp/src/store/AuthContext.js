import React,{useState} from "react";  


const AuthContext=React.createContext({
    token:'',
    isLoggedin:false,
   userLogin:(token)=>{},
    logout:()=>{}
})

export const AuthorizationProvider=(props)=>{
   const initial_state=localStorage.getItem('token')
   const [token,setToken]=useState(initial_state)
    
    console.log("istoken",token)
    const userIsLoggedin = !!token;//return true if token is string
           console.log("context login value",userIsLoggedin)                       // and not empty

     const loginHandler=(token)=>{
        localStorage.setItem('token',token)
        console.log("token in handler",token)
        setToken(token);        
     }     
     const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
     }    
  
     
     const contextValue={
        token:token,
        isLoggedin:userIsLoggedin,
        userLogin:loginHandler,
        logout:logoutHandler
     }



  return(
    <AuthContext.Provider value={contextValue}>
    {props.children}
    </AuthContext.Provider>

  ) 
}

export default AuthContext;