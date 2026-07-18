import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";

import aboutImage from "../assets/images/about-preview.webp";

const highlights = [
  {
    icon: FaShieldAlt,
    title: "Licensed & Insured",
  },
  {
    icon: FaClock,
    title: "Fast Response",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Pricing",
  },
  {
    icon: FaUsers,
    title: "Experienced Team",
  },
];

function AboutSection() {
  return (
   <section className="relative overflow-hidden bg-[#fffaf6] px-6 py-16 lg:py-20">
      <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
       <div className="relative pb-10 lg:-mt-12">
          <div className="overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(42,9,11,0.16)]">
            <img
              src={aboutImage}
              alt="Red Hills Tree Service team working at a residential property"
             className="h-[520px] w-full object-cover"
            />
          </div>

         <div className="absolute bottom-0 left-6 rounded-2xl bg-[#a30f18] px-7 py-6 text-white shadow-[0_18px_45px_rgba(163,15,24,0.35)] sm:left-10">
            <p className="font-serif text-5xl font-bold">15+</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em]">
              Years of Experience
            </p>
          </div>
        </div>

       <div className="lg:-mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a30f18]">
            About Red Hills
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#211d1d] sm:text-5xl lg:text-[56px]">
            We Care for Trees,
            <span className="block text-[#a30f18]">
              You Enjoy the View.
            </span>
          </h2>

          <div className="mt-6 h-1 w-20 bg-[#a30f18]" />

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Red Hills Tree Service provides professional tree removal,
            trimming, stump grinding, storm cleanup, and land clearing for
            residential and commercial properties.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Our experienced crew combines modern equipment, careful planning,
            and a safety-first approach to protect your property and deliver
            clean, reliable results.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-[#a30f18]/10 bg-white p-4 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a30f18]/10 text-[#a30f18]">
                  <Icon />
                </span>

                <p className="font-semibold text-[#211d1d]">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {[
              "Professional residential and commercial tree care",
              "Modern equipment and trained professionals",
              "Complete cleanup after every project",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-gray-700"
              >
                <FaCheckCircle className="shrink-0 text-[#a30f18]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#a30f18] px-8 py-5 font-bold uppercase tracking-[0.05em] text-white shadow-[0_14px_35px_rgba(163,15,24,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#850b12]"
          >
            Learn More About Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;