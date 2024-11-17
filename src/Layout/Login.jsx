/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const { login, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    console.log(email, pass);

    login(email, pass)
      .then(res => {
        setUser(res.user)
        navigate(location?.state ? location.state : '/')
        console.log(res.user)
      })
      .catch(re => {
        setError({ ...error, login: re.code })
      })
  }

  return (
    <div className="flex justify-center items-center lg:h-[85vh] ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none mt-16 p-10">
        <h2 className="text-center font-semibold text-2xl">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="pass" type="password" placeholder="password" className="input input-bordered" required />
            {
              error.login &&
                <label className="label text-center mx-auto text-red-500">
{error.login}
                </label>
          }

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-md">Login</button>
          </div>
        </form>
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-center">Don't have an account? <Link to='/auth/register'><span className="font-semibold text-red-500 underline">Register</span></Link></p>
      </div>
    </div>
  );
};

export default Login;