import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(username.length > 0 && password.length > 0){
      alert("Login Successful");
      navigate('/admin/start')
      return
    }else{
        alert("Please fill the form");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" w-72">
        <h2 className="text-2xl font-bold bg-accent text-white rounded-t-lg text-center py-3">Login</h2>
        <div className="card shadow-lg w-72 flex flex-col px-5 py-7">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="username" className="block">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
