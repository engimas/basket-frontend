import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex">
      <div className="left w-2/5 flex flex-col mx-20 px-10 text-center prose">
        <div className="area bg-white">
        <h3 className="mt-10">Login</h3>
          <form className="flex flex-col gap-5">
            <div className="input-area">
              <input className="w-full input input-bordered" type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input-area">
              <input className="input input-bordered w-full" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input className="checkbox" type="checkbox" id="signed"  />
                <label htmlFor="signed">Keep me signed in</label>
              </div>
              <Link to={""}>Forget Password</Link>
            </div>
            <button type="submit" className="bg-accent btn text-primary hover:bg-accent ">Login</button>
            <div>
            <hr className="my-5"/>
            <div className="flex gap-3">
              <span>Don't have an account?</span>
              <Link to={""}>Register</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Login