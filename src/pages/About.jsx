import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaEye,
  FaHandshake,
  FaSearch,
  FaShieldAlt,
  FaTree,
} from "react-icons/fa";

import aboutImage from "../assets/images/about-preview.webp";

const values = [
  {
    icon: FaShieldAlt,
    title: "Safety First",
    description:
      "Every project is carefully planned and completed with safety as our highest priority.",
  },
  {
    icon: FaHandshake,
    title: "Honest Service",
    description:
      "We provide clear communication, dependable recommendations, and transparent pricing.",
  },
  {
    icon: FaTree,
    title: "Quality Workmanship",
    description:
      "Our experienced crew uses professional equipment to deliver clean and reliable results.",
  },
  {
    icon: FaCheckCircle,
    title: "Customer Satisfaction",
    description:
      "We treat every property with respect and work hard to exceed customer expectations.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: FaClipboardCheck,
    title: "Request an Estimate",
    description:
      "Contact our team and tell us about the tree service your property requires.",
  },
  {
    number: "02",
    icon: FaSearch,
    title: "Property Inspection",
    description:
      "We inspect the trees, surrounding area, access points, and potential safety risks.",
  },
  {
    number: "03",
    icon: FaTree,
    title: "Professional Service",
    description:
      "Our trained crew completes the work safely using suitable tools and equipment.",
  },
  {
    number: "04",
    icon: FaCheckCircle,
    title: "Complete Cleanup",
    description:
      "We remove branches and debris, leaving your property clean and ready to enjoy.",
  },
];

const storyBenefits = [
  "Residential and commercial tree care",
  "Trained and experienced professionals",
  "Safe and carefully planned operations",
  "Clean and respectful project completion",
];

function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="about-page-heading"
        className="relative overflow-hidden bg-[#2a090b] px-6 pb-20 pt-36 text-white lg:pb-24 lg:pt-44"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,40,40,0.25),transparent_42%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#a30f18]/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
            About Us
          </p>

          <h1
            id="about-page-heading"
            className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            Professional Tree Care
            <span className="block text-[#ef2b31]">You Can Trust</span>
          </h1>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-20 bg-[#ef2b31]"
          />

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300">
            Red Hills Tree Service delivers safe, dependable, and professional
            tree care for residential and commercial properties.
          </p>

          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]"
          >
            <Link
              to="/"
              className="text-gray-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#2a090b]"
            >
              Home
            </Link>

            <span aria-hidden="true" className="text-[#ef2b31]">
              /
            </span>

            <span aria-current="page" className="text-white">
              About
            </span>
          </nav>
        </div>
      </section>

      {/* Company Story */}
      <section
        aria-labelledby="company-story-heading"
        className="relative overflow-hidden bg-[#fffaf6] px-6 py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative pb-10">
            <div className="overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(42,9,11,0.16)]">
              <img
                src={aboutImage}
                alt="Red Hills Tree Service professional crew providing tree care"
                width="500"
                height="333"
                loading="lazy"
                decoding="async"
                className="h-[280px] w-full object-cover sm:h-[333px]"
              />
            </div>

            <div className="absolute bottom-0 left-5 rounded-2xl bg-[#a30f18] px-7 py-6 text-white shadow-[0_18px_45px_rgba(163,15,24,0.35)] sm:left-9">
              <p className="font-serif text-5xl font-bold">15+</p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">
                Years of Experience
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#a30f18]">
              Our Story
            </p>

            <h2
              id="company-story-heading"
              className="mt-4 font-serif text-4xl font-bold leading-tight text-[#211d1d] sm:text-5xl lg:text-[56px]"
            >
              Built on Safety,
              <span className="block text-[#a30f18]">
                Quality and Trust.
              </span>
            </h2>

            <div
              aria-hidden="true"
              className="mt-6 h-1 w-20 bg-[#a30f18]"
            />

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Red Hills Tree Service was built with one clear goal: to provide
              property owners with dependable tree care delivered by skilled
              professionals.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              From routine trimming to hazardous tree removal and emergency
              storm cleanup, we approach every project with careful planning,
              modern equipment, and respect for the customer&apos;s property.
            </p>

            <div className="mt-8 space-y-4">
              {storyBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="shrink-0 text-[#a30f18]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section
        aria-labelledby="mission-vision-heading"
        className="bg-white px-6 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#a30f18]">
              Our Purpose
            </p>

            <h2
              id="mission-vision-heading"
              className="mt-4 font-serif text-4xl font-bold text-[#211d1d] sm:text-5xl"
            >
              Mission and Vision
            </h2>

            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-1 w-20 bg-[#a30f18]"
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#a30f18]/10 bg-[#fffaf6] p-8 shadow-[0_16px_45px_rgba(42,9,11,0.08)] sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18]/10 text-2xl text-[#a30f18]">
                <FaTree aria-hidden="true" />
              </span>

              <h3 className="mt-6 font-serif text-4xl font-bold text-[#211d1d]">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                To deliver safe, reliable, and affordable tree care while
                protecting properties, improving landscapes, and providing an
                excellent customer experience.
              </p>
            </article>

            <article className="rounded-3xl bg-[#2a090b] p-8 text-white shadow-[0_20px_55px_rgba(42,9,11,0.22)] sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-[#ef2b31]">
                <FaEye aria-hidden="true" />
              </span>

              <h3 className="mt-6 font-serif text-4xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                To become a trusted name in professional tree care through
                consistent workmanship, honest communication, and long-term
                relationships with our customers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        aria-labelledby="core-values-heading"
        className="relative overflow-hidden bg-[#fffaf6] px-6 py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#a30f18]">
              What Guides Us
            </p>

            <h2
              id="core-values-heading"
              className="mt-4 font-serif text-4xl font-bold text-[#211d1d] sm:text-5xl"
            >
              Our Core Values
            </h2>

            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-1 w-20 bg-[#a30f18]"
            />
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#a30f18]/10 bg-white p-7 shadow-[0_14px_40px_rgba(42,9,11,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(42,9,11,0.13)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18]/10 text-xl text-[#a30f18]">
                  <Icon aria-hidden="true" />
                </span>

                <h3 className="mt-6 font-serif text-2xl font-bold text-[#211d1d]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section
        aria-labelledby="work-process-heading"
        className="bg-white px-6 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#a30f18]">
              How We Work
            </p>

            <h2
              id="work-process-heading"
              className="mt-4 font-serif text-4xl font-bold text-[#211d1d] sm:text-5xl"
            >
              Our Simple Work Process
            </h2>

            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-1 w-20 bg-[#a30f18]"
            />

            <p className="mt-7 text-lg leading-8 text-gray-600">
              We make professional tree care simple, clear, and convenient from
              the first call to final cleanup.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(
              ({ number, icon: Icon, title, description }) => (
                <article
                  key={number}
                  className="relative rounded-2xl border border-gray-100 bg-[#fffaf6] p-7 shadow-[0_14px_40px_rgba(42,9,11,0.07)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-5 font-serif text-4xl font-bold text-[#a30f18]/10"
                  >
                    {number}
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18] text-xl text-white shadow-[0_12px_28px_rgba(163,15,24,0.25)]">
                    <Icon aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 font-serif text-2xl font-bold text-[#211d1d]">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section
        aria-labelledby="about-contact-heading"
        className="bg-[#fffaf6] px-6 py-14"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-[#a30f18] px-8 py-10 text-white shadow-[0_20px_55px_rgba(163,15,24,0.28)] md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-100">
              Need Reliable Tree Care?
            </p>

            <h2
              id="about-contact-heading"
              className="mt-3 font-serif text-3xl font-bold sm:text-4xl"
            >
              Let&apos;s discuss your property.
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold uppercase tracking-[0.07em] text-[#a30f18] transition duration-300 hover:-translate-y-1 hover:bg-[#fff4f4] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#a30f18]"
          >
            Get Free Estimate

            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;