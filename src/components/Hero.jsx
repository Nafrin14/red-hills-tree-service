import heroImage from "../assets/images/hero.webp";
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Red Hills Tree Service"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120606]/90 via-[#120606]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-red-300">
            Welcome To
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            RED HILLS
            <br />

            <span className="text-[#c5171e]">
              TREE SERVICE
            </span>
          </h1>

          <div className="mt-7 h-1 w-20 bg-[#c5171e]" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Professional Tree Removal, Tree Trimming,
            Stump Grinding and Emergency Tree Services
            delivered safely, efficiently and affordably.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/contact"
              className="flex items-center gap-3 rounded-md bg-[#b11217] px-8 py-5 font-semibold text-white transition hover:bg-[#8f0f13]"
            >
              Get Free Estimate
              <FaArrowRight />
            </a>

            <a
              href="/services"
              className="rounded-md border border-white/30 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              Our Services
            </a>

          </div>

        </div>

      </div>

      {/* Floating Card */}

      <div className="absolute bottom-12 right-8 hidden rounded-2xl bg-white shadow-2xl lg:block">

        <div className="grid grid-cols-4">

          <div className="flex items-center gap-3 border-r p-6">

            <FaShieldAlt
              size={28}
              className="text-[#b11217]"
            />

            <div>

              <h3 className="font-bold">
                Licensed
              </h3>

              <p className="text-sm text-gray-500">
                & Insured
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 border-r p-6">

            <FaBolt
              size={28}
              className="text-[#b11217]"
            />

            <div>

              <h3 className="font-bold">
                24/7
              </h3>

              <p className="text-sm text-gray-500">
                Emergency
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 border-r p-6">

            <FaClipboardCheck
              size={28}
              className="text-[#b11217]"
            />

            <div>

              <h3 className="font-bold">
                Free
              </h3>

              <p className="text-sm text-gray-500">
                Estimates
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 p-6">

            <FaUsers
              size={28}
              className="text-[#b11217]"
            />

            <div>

              <h3 className="font-bold">
                500+
              </h3>

              <p className="text-sm text-gray-500">
                Happy Clients
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;