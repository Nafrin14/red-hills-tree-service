import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaTools,
} from "react-icons/fa";

import whyChooseImage from "../assets/images/why-choose-us.webp";

const features = [
  "Licensed & Fully Insured",
  "15+ Years of Experience",
  "Modern Professional Equipment",
  "Affordable & Honest Pricing",
  "24/7 Emergency Response",
  "Complete Property Cleanup",
];

const stats = [
  {
    icon: FaAward,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: FaShieldAlt,
    value: "100%",
    label: "Safety Focused",
  },
  {
    icon: FaClock,
    value: "24/7",
    label: "Emergency Service",
  },
  {
    icon: FaTools,
    value: "500+",
    label: "Projects Completed",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#2a090b] px-6 py-16 lg:py-20">
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#d62828]/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#d62828]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2">
        {/* Left image */}
        <div className="relative pb-10 lg:mt-12">
          <div className="overflow-hidden rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <img
              src={whyChooseImage}
              alt="Red Hills Tree Service professional team"
              className="h-[460px] w-full object-cover sm:h-[520px] lg:h-[560px]"
            />
          </div>

          <div className="absolute bottom-0 left-5 rounded-2xl bg-[#b11217] px-7 py-6 text-white shadow-[0_20px_50px_rgba(177,18,23,0.4)] sm:left-8 sm:px-8 sm:py-7">
            <p className="font-serif text-4xl font-bold sm:text-5xl">
              500+
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
              Happy Customers
            </p>
          </div>
        </div>

        {/* Right content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">
            Why Choose Us
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[58px]">
            Trusted Tree Care
            <span className="block text-[#d62828]">
              Experts
            </span>
          </h2>

          <div className="mt-6 h-1 w-20 bg-[#d62828]" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Red Hills Tree Service is committed to delivering safe, reliable,
            and affordable tree care solutions with experienced professionals
            and industry-leading equipment.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="flex min-h-[74px] items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:bg-white/10"
              >
                <FaCheckCircle className="shrink-0 text-[#ef2b31]" />

                <span className="font-medium leading-6 text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

         
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#b11217] px-7 py-5 font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_35px_rgba(177,18,23,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#8d0d11]"
          >
            Get Free Estimate
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;