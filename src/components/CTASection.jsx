import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 lg:py-20">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#a30f18]/5 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#a30f18]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[30px] bg-[#2a090b] px-7 py-12 shadow-[0_25px_70px_rgba(42,9,11,0.25)] sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-[#d62828]/10 blur-2xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">
                Need Professional Tree Care?
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[54px]">
                Let’s Make Your Property
                <span className="block text-[#ef2b31]">
                  Safer and Cleaner.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Contact Red Hills Tree Service today for dependable tree
                removal, trimming, stump grinding, emergency service, and
                complete property cleanup.
              </p>

              <div className="mt-7 flex flex-col gap-3 text-gray-200 sm:flex-row sm:flex-wrap sm:gap-6">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-[#ef2b31]" />
                  <span>Free Estimates</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-[#ef2b31]" />
                  <span>Licensed & Insured</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-[#ef2b31]" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#b11217] px-7 py-5 font-bold uppercase tracking-[0.08em] text-white shadow-[0_15px_35px_rgba(177,18,23,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#8d0d11] sm:w-auto"
              >
                Get Free Estimate
                <FaArrowRight />
              </Link>

              <a
                href="tel:+13155550198"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/5 px-7 py-5 font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <p className="text-sm text-gray-400">
                Available for emergency tree service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;