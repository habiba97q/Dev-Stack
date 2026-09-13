import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="text-[#334155] text-sm md:text-base mt-4 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="#technologies"
              className="btn bg-brand-gradient text-white border-none rounded-full px-6"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="btn btn-outline border-gray-300 text-[#475569] rounded-full px-6"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center max-w-md w-full">
          <img
            src={bannerImage}
            alt="Dev Stack illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
