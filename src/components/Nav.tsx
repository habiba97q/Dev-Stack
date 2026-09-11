import logoText from "../assets/logo-text.png";


const Nav = () => {
  return (

    <nav className=" bg-red-100 py-6">
      <div className="container mx-auto flex justify-between">
        <img src={logoText} alt="" />

        <ul className="flex gap-4 items-center font-medium text-[#475569]">
          <li className="text-[#D91B7E]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div>
          <button className="btn btn-active btn-error bg-red-100 text-[#334155] font-medium rounded-2xl border-none">Sign In</button>
          <button className="btn btn-active btn-error px-7 rounded-full bg-[#D91B7E] text-white">Sign Up</button>
        </div>


      </div>


    </nav>

  );
};

export default Nav;