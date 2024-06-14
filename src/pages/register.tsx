import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import AuthImg from "../components/authImg";

function Register() {
  const { register } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        register({ email, password, name: username, type: "Consumer" });
        navigate("/");
        return;
      }
      alert("Password does not match");
      return;
    }
    alert("Please fill the form");
  };

  return (
    <div className="flex items-center h-screen">
      <div className="left w-2/5 flex flex-col mx-20 px-10 text-center prose">
        <div className="area bg-base-100 p-5">
          <h2 className="mt-10">Register As Consumer</h2>
          <form className="flex flex-col gap-5">
            <div className="input-area">
              <input
                className="w-full input input-bordered"
                type="name"
                name="name"
                id="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-area">
              <input
                className="w-full input input-bordered"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-area">
              <input
                className="input input-bordered w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-area">
              <input
                className="input input-bordered w-full"
                type="password"
                name="Confirm-Password"
                id="Confirm-Password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input className="checkbox" type="checkbox" id="signed" />
                <label htmlFor="signed">Keep me signed in</label>
              </div>
              <Link to={""}>Forget Password</Link>
            </div>
            <button
              type="button"
              onClick={handleRegister}
              className="bg-accent btn text-primary hover:bg-accent "
            >
              Register
            </button>
            <div>
              <hr className="my-5" />
              <div className="flex gap-3">
                <span>Already have an account?</span>
                <Link to={"/auth/login"}>Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="right flex prose items-center prose-h2:text-3xl prose-h2:mb-3 prose-p:font-medium">
        <AuthImg />
      </div>{" "}
    </div>
  );
}

export default Register;
