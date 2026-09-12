import logoText from "../assets/logo-text.png";


const Nav = () => {
  return (

    <nav className=" sticky top-0 z-50 bg-white  py-6">
      <div className="container mx-auto flex justify-between">
        <img src={logoText} alt="" />

        <ul className="flex gap-8 items-center font-medium text-[#475569]">
          <li className="Etext-[#D91B7]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div>
          <button className="btn btn-active btn-error bg-white text-[#334155] font-medium rounded-2xl border-none">Sign In</button>
          <button className="btn btn-active btn-error px-7 rounded-full bg-[#D91B7E] text-white">Sign Up</button>
        </div>


      </div>


    </nav>

  );
};

export default Nav;