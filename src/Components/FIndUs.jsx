
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FIndUs = () => {
    return (
        <div>
            <h2 className='font-semibold py-6'>Find us on</h2>
            <div className="*:bg-white *:border-gray-300 join flex join-vertical">
  <button className="btn join-item justify-start"><FaFacebook className='mr-1 text-xl'></FaFacebook> Facebook</button>
  <button className="btn join-item justify-start"><FaInstagram className='mr-1 text-xl'></FaInstagram> Instagram</button>
  <button className="btn join-item justify-start"><FaTwitter className='mr-1 text-xl'></FaTwitter> Twitter</button>
</div>
        </div>
    );
};

export default FIndUs;