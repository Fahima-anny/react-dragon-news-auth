import FIndUs from "../Components/FIndUs";
import SocialLogin from "../Components/SocialLogin";


const RightNavbar = () => {
    return (
        <div >
                    <h2 className="font-semibold mb-6">Login with</h2>
<SocialLogin></SocialLogin>
<FIndUs></FIndUs>
        </div>
    );
};

export default RightNavbar;