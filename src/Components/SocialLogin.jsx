import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="flex flex-col gap-3">
            <button className="btn btn-outline btn-info"><FaGoogle className="mr-2 text-xl"></FaGoogle> Login with Google</button>
            <button className="btn btn-outline"><FaGithub className="mr-2 text-xl "></FaGithub> Login with Google</button>

        </div>
    );
};

export default SocialLogin;