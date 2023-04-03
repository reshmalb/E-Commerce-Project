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
    
   const autoLogoutHandler=(timer)=>{
      const interval= setTimeout(() => {
        alert("Please Login .")
        logoutHandler();
        
     }, timer);
     return(()=>{
        clearTimeout(interval)
     })
    }
    if(initial_state){
      autoLogoutHandler(5000)
    }   
    const userIsLoggedin = !!istoken;//return true if token is string
                                  // and not empty

     const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token)
       autoLogoutHandler(5000)
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