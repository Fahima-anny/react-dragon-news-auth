import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins py-6 bg-gray-100 min-h-screen">
             <div className="w-11/12 mx-auto">
             <header className="">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
             </div>
        </div>
    );
};

export default AuthLayout;