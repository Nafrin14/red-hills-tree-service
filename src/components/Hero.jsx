import { Link } from "react-router-dom";
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
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroImage}
        alt="Tree care professionals working at a residential property"
        width="1920"
        height="1080"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#120606]/90 via-[#120606]/70 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-red-300">
            Welcome To
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-black leading-tight text-white md:text-7xl"
          >
            RED HILLS
            <br />

            <span className="text-[#c5171e]">TREE SERVICE</span>
          </h1>

          <div
            aria-hidden="true"
            className="mt-7 h-1 w-20 bg-[#c5171e]"
          />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Professional tree removal, tree trimming, stump grinding, and
            emergency tree services delivered safely, efficiently, and
            affordably.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="flex items-center gap-3 rounded-md bg-[#b11217] px-8 py-5 font-semibold text-white transition hover:bg-[#8f0f13] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#120606]"
            >
              Get Free Estimate
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link
              to="/services"
              className="rounded-md border border-white/30 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#120606]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Benefits Card */}
      <div className="absolute bottom-12 right-8 hidden rounded-2xl bg-white shadow-2xl lg:block">
        <div className="grid grid-cols-4">
          <div className="flex items-center gap-3 border-r border-gray-200 p-6">
            <FaShieldAlt
              aria-hidden="true"
              size={28}
              className="shrink-0 text-[#b11217]"
            />

            <div>
              <p className="font-bold text-gray-900">Licensed</p>

              <p className="text-sm text-gray-500">&amp; Insured</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-gray-200 p-6">
            <FaBolt
              aria-hidden="true"
              size={28}
              className="shrink-0 text-[#b11217]"
            />

            <div>
              <p className="font-bold text-gray-900">24/7</p>

              <p className="text-sm text-gray-500">Emergency</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-gray-200 p-6">
            <FaClipboardCheck
              aria-hidden="true"
              size={28}
              className="shrink-0 text-[#b11217]"
            />

            <div>
              <p className="font-bold text-gray-900">Free</p>

              <p className="text-sm text-gray-500">Estimates</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-6">
            <FaUsers
              aria-hidden="true"
              size={28}
              className="shrink-0 text-[#b11217]"
            />

            <div>
              <p className="font-bold text-gray-900">500+</p>

              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;