import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-6 '>
          <div>
            <img src={logo} alt="" />
          </div>
<h2 className='text-gray-400 text-xl '>Journalism without Fear or Favour</h2>
<p className='text-gray-500 font-semibold text-xl'>
    {moment().format("dddd, MMMM Do YYYY")}
</p>
        </div>
    );
};

export default Header;