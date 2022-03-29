import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-cyan-600 px-10 py-6'>
      <h1 className=' text-4xl text-amber-200 font-bold'>A counts</h1>
      <nav className='flex'>
        <CustomLink className=' px-5 text-xl text-amber-200' to='/'>Home</CustomLink>
        <CustomLink className=' px-5 text-xl text-amber-200' to='/profiles'>Profiles</CustomLink>
        <CustomLink className=' px-5 text-xl text-amber-200' to='/about'>About</CustomLink>
        <CustomLink className=' px-5 text-xl text-amber-200' to='/signup'>Sign Up</CustomLink>
      </nav>
    </div>
  );
};

export default Navbar;