import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

const {createUser, setUser, updateUser} = useContext(AuthContext) ;
const [error, setError] = useState({})
const navigate = useNavigate() ;

const handleSubmit = e => {
  e.preventDefault() ;
  const form = new FormData(e.target) ;
  const name = form.get("name") ;
  if(name.length<5){
    setError({...error, name: "name must contain 5 or more characters"})
  }
  const email = form.get("email") ;
  const photo = form.get("photo") ;
  const pass = form.get("pass") ;

  console.log({name, photo, email, pass}) ;
createUser(email,pass)
.then( res => {
  setUser(res.user)
  console.log(res.user)
  updateUser({displayName: name, photoURL: photo})
  .then( () => {
    navigate('/')
  })
  .catch(er=> console.log(er))
})
.catch(er => console.error(er))
 
}

    return (
        <div className="flex justify-center items-center mt-5">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none px-10 py-5">
       <h2 className="text-center font-semibold text-2xl">Create Your Account</h2>
 <form onSubmit={handleSubmit} className="card-body">

    {/* name */}
   <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input name="name" type="text" placeholder="name" className="input input-bordered" required />
   </div>
   {
              error.name &&
                <label className="label text-center mx-auto text-red-500">
{error.name}
                </label>
          }

    {/* email */}
   <div className="form-control">
     <label className="label">
       <span className="label-text">Photo URL</span>
     </label>
     <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
   </div>

    {/* email */}
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input name="email" type="email" placeholder="email" className="input input-bordered" required />
   </div>

   {/* password  */}
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input name="pass" type="password" placeholder="password" className="input input-bordered" required />
   </div>

   <div className="form-control mt-6">
     <button className="btn btn-neutral rounded-md">Register</button>
   </div>
 </form>
 <p className="text-center">Already have an account? <Link to='/auth/login'><span className="font-semibold text-blue-500 underline">Login</span></Link></p>
</div>
   </div>
    );
};

export default Register;