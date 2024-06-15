import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useState } from "react";
import AuthImg from "../components/authImg";


function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if(email && password){
      if(email == "evod@gmail.com" && password == "123"){
        login({name:"",email: email, password: password, type: "Consumer"});
      }else{
        login({name:"",email: email, password: password, type: "Producer"});

      }
      navigate('/');
      return
    }
    alert("Please fill the form");
  }

  return (
    <div className="flex items-center h-screen">
      <div className="left w-2/5 flex flex-col mx-20 px-10 text-center prose">
        <div className="area bg-base-100 p-5">
        <h2 className="mt-10">Login</h2>
          <form className="flex flex-col gap-5">
            <div className="input-area">
              <input className="w-full input input-bordered" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-area">
              <input className="input input-bordered w-full" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input className="checkbox" type="checkbox" id="signed"  />
                <label htmlFor="signed">Keep me signed in</label>
              </div>
              <Link to={""}>Forget Password</Link>
            </div>
            <button type="button" onClick={handleLogin} className="bg-accent btn text-primary hover:bg-accent ">Login</button>
            <div>
            <hr className="my-5"/>
            <div className="flex gap-3">
              <span>Don't have an account?</span>
              <Link to={"/auth/register"}>Register</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
      <div className="right flex prose items-center prose-h2:text-3xl prose-h2:mb-3 prose-p:font-medium">
        <AuthImg/>
      </div>
    </div>
  )
}

export default Login