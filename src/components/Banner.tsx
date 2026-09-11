import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className='container mx-auto flex justify-between items-center py-5' >
            <div>

                <h1 className="text-5xl font-bold">Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-600 via-[#c2226a] via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span> </h1>

                <p className="text-[#334155] text-sm w-[500px] mt-4">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>

                <div  className="mt-6">
                    <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none mr-2">Explore Technologies</button>
                    <button  className="btn bg-white text-[#475569] border border-[#E2E8F0]">Learn More</button>
                </div>


            </div>

            <div>
                <img src={bannerImage} alt=""/>

            </div>



        </section>


    );
};

export default Banner;