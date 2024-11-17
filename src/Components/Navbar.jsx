import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

const {user, logout} = useContext(AuthContext) ;

    return (
        <div className="grid grid-cols-3 justify-center items-center">
            <div className="font-bold text-xl">{user?.displayName}</div>
            <div className=" space-x-5 mx-auto text-gray-500 font-semibold">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
                <Link to='/'>Contact</Link>
            </div>
            <div className="flex justify-end items-center gap-5">
                <div>
                    <img className="w-14 border-2 border-gray-400 h-14 object-cover object-center rounded-full" src={user?.photoURL ? user.photoURL : userIcon} alt="" />
                </div>

{
    user && user?.email ?
    <button onClick={logout} className="btn btn-neutral rounded-sm px-6">Log out</button>
    : <Link to='/auth/login'><button className="btn btn-neutral rounded-sm px-6">Login</button>
</Link> 
}

            </div>
        </div>
    );
};

export default Navbar;