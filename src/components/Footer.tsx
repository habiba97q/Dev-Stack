import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logoText} alt="Dev Stack" className="h-8 object-contain" />
            <p className="text-[#64748B] text-sm mt-3">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-4 mt-4 text-[#475569] text-sm font-medium">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">PRODUCT</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#64748B]">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">COMPANY</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#64748B]">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">LEGAL</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#64748B]">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between text-sm text-[#94A3B8]">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






