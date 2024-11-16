import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Latest = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-100 p-3">
<button className="bg-rose-600 text-white py-2 px-5">Latest</button>   
<Marquee
 pauseOnHover={true}
 speed={100}
  className="space-x-16 "
  >
    <Link to='/news'>
    <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Link>
    <Link to='/news'>
    <p className="font-semibold">Lorem ipsum dolor nemo hic cupiditate odio ratione?</p>
    </Link>
    <Link to='/news'>
    <p className="font-semibold">L quaerat dolor sit reprehenderit, repellat nemo hic cupiditate odio ratione?</p>
    </Link>
</Marquee>
        </div>
    );
};

export default Latest;