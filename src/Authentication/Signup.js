import React, { useRef, useState } from "react";
import { signup, useAuth} from "./authfuncs";



  export const Signup=()=>{
  const [ loading, setLoading ] = useState(false);
  
  // const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  // const nameRef=useRef();

  async function handleSignup() {
    setLoading(true);
    try {
    await signup(emailRef.current.value, passwordRef.current.value);
    // await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
    }catch(e){
      alert(e);
    }
    setLoading(false);
  }
  
  return (
    <div className="form">
      <h2> New User</h2>
      <form >
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button onClick={handleSignup} type="submit">
          Create Account
          </button>
      </form>
    </div>
  )
}
