import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Home = () => {
    return (
        <div className="font-poppins">

<header className="w-11/12 mx-auto">
    <Header></Header>
    <Latest></Latest>
</header>

<nav className="w-11/12 mx-auto py-4">
<Navbar></Navbar>
</nav>

<main className="w-11/12 mx-auto py-4 grid grid-cols-4 gap-4">
<aside className="">
    <LeftNavbar></LeftNavbar>
</aside>
<section className="col-span-2">
    <Outlet></Outlet>
</section>
<aside className=''>
    <RightNavbar></RightNavbar>
</aside>
</main>

        </div>
    );
};

export default Home;