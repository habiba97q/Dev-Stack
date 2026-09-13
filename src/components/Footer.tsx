import logoText from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-30">
            <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-4 gap-10">

                    <div>
                        <div>
                            <img src={logoText} alt="Dev Stack" />
                        </div>

                        <p className="text-[#64748B] mt-3">Curated tools, technologies, and resources for developers building <br /> modern software.</p>

                        <div className="flex gap-4 mt-4 text-[#475569] font-medium">
                            <a href="">GitHub</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>

                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4">PRODUCT</h3>

                        <div className="flex flex-col gap-3  text-[#64748B]">
                            <a href="">Home</a>
                            <a href="">Technologies</a>
                            <a href="">Projects</a>

                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4">COMPANY</h3>

                        <div className="flex flex-col gap-3  text-[#64748B]">
                            <a href="">About</a>
                            <a href="">Contact</a>
                            <a href="">Careers</a>

                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4">LEGAL</h3>

                        <div className="flex flex-col gap-3 text-[#64748B]">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Service</a>

                        </div>
                    </div>

                </div>


                <div className="border-t  border-gray-200 mt-10 pt-6 flex justify-between text-sm 
                text-[#94A3B8]">
                    <p>© 2026 Dev Stack. All rights reserved. </p>

                    <div className="flex gap-5">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>

                    </div>


                </div>



            </div>
        </footer>
    );
};

export default Footer;




