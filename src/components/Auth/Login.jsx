import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  
  const [email, setemail] = useState("");  
  const [password, setpassword] = useState("");
  

  function submitHandler(e) {
    e.preventDefault();
    handleLogin(email,password)
    setemail("");
    setpassword("");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center  ">
      <div className="bg-gray-800 border-2 border-white py-10 px-4 rounded-lg ">
        <h3 className="text-center text-xl text-white py-2">Login </h3>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
            required
            type="email"
            placeholder="Enter Email"
            className=" text-white border-2 border-gray-400 m-2 py-2 px-20 rounded-full outline-none"
          />
          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
            type="password"
            placeholder="Enter Password"
            className="text-white border-2 border-gray-400 m-2 py-2 px-20 rounded-full outline-none"
          />
          <button className="bg-blue-500 text-white px-8 py-2 mt-4 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
