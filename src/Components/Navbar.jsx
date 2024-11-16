import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="grid grid-cols-3 justify-center items-center">
            <div className=""> </div>
            <div className=" space-x-5 mx-auto text-gray-400">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="flex justify-end items-center gap-2">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className="btn btn-neutral rounded-sm px-6">Login</button>
            </div>
        </div>
    );
};

export default Navbar;