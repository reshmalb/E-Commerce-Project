import React,{useEffect, useState} from "react";
import { useCallback } from "react";

const AuthContext=React.createContext({
    token:'',
    email:'',
    userId:'',
    isLoggedin:false,
    setUserId:(userId)=>{},
   userLogin:(email,token,expiretime)=>{},
    logout:()=>{}
})

const calculateRemainningTime=(expireTime)=>{
   const currentTime=new Date().getTime();
   const adjustTime=new Date(expireTime).getTime();
   const remainingDuration=adjustTime-currentTime;
   return remainingDuration;

}
 let logoutTimer;
 const retrieveStoredToken=()=>{
   const storedExpireTime=localStorage.getItem('expirationTime');
   const storedToken=localStorage.getItem('token')
   const remainingTime=calculateRemainningTime(storedExpireTime);

   if(remainingTime<=5000){

      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime')
      return null;

   }
   return{
      token:storedToken,
      duration:remainingTime
   }
 }



export const AuthorizationProvider=(props)=>{
   const tokenData=retrieveStoredToken();
   const [email,setEmail]=useState(null);
   const [userId,setUserId]=useState(null)
   let initialToken;
   if(tokenData){
      initialToken=tokenData.token;
   }
 //  const initial_state=localStorage.getItem('token')
   const [token,setToken]=useState(initialToken);
    
    const userIsLoggedin = !!token;//return true if token is string

     const loginHandler=(email,token,expireTime)=>{
        setToken(token);        
        setEmail(email)
        localStorage.setItem('token',token);
        localStorage.setItem('exipirationTime',expireTime)
        const remainingTime=calculateRemainningTime(expireTime);
        logoutTimer=  setTimeout(logoutHandler,remainingTime);


        

     }     
     const logoutHandler=useCallback(()=>{
        setToken(null)
        setEmail(null);
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        if(logoutTimer){

         clearTimeout(logoutTimer);
        }
     },[]);    
     useEffect(()=>{
      if(tokenData){
         logoutTimer=setTimeout(logoutHandler,tokenData.duration)
      }
     },[tokenData,logoutHandler])
  
     const userIdHandler=(userId)=>{
        setUserId(userId);
     }
     const contextValue={
        token:token,
        email:email,
        userId:userId,
        isLoggedin:userIsLoggedin,
        userLogin:loginHandler,
        logout:logoutHandler,
        setUserId:userIdHandler
     }



  return(
    <AuthContext.Provider value={contextValue}>
    {props.children}
    </AuthContext.Provider>

  ) 
}

export default AuthContext;