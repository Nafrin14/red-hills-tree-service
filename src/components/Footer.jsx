import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#150708] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold tracking-wide text-[#c81b22]">
              RED HILLS
            </h2>

            <p className="mt-1 text-sm uppercase tracking-[4px] text-gray-400">
              Tree Service
            </p>

            <p className="mt-6 leading-8 text-gray-300">
              Professional tree removal, trimming, stump grinding,
              emergency tree services and land clearing for residential
              and commercial properties.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link
                to="/"
                className="flex items-center gap-3 text-gray-300 hover:text-[#c81b22]"
              >
                <FaArrowRight size={12} />
                Home
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-3 text-gray-300 hover:text-[#c81b22]"
              >
                <FaArrowRight size={12} />
                About Us
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-3 text-gray-300 hover:text-[#c81b22]"
              >
                <FaArrowRight size={12} />
                Services
              </Link>

              <Link
                to="/blog"
                className="flex items-center gap-3 text-gray-300 hover:text-[#c81b22]"
              >
                <FaArrowRight size={12} />
                Blog
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-3 text-gray-300 hover:text-[#c81b22]"
              >
                <FaArrowRight size={12} />
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Our Services
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>Tree Removal</p>

              <p>Tree Trimming</p>

              <p>Stump Grinding</p>

              <p>Emergency Tree Service</p>

              <p>Land Clearing</p>

              <p>Storm Cleanup</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaPhoneAlt
                  className="mt-1 text-[#c81b22]"
                />

                <span className="text-gray-300">
                  (229) 701-8733
                </span>

              </div>

              <div className="flex gap-4">

                <FaEnvelope
                  className="mt-1 text-[#c81b22]"
                />

                <span className="text-gray-300">
                  
                </span>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt
                  className="mt-1 text-[#c81b22]"
                />

                <span className="text-gray-300">
                  Serving Your Local Area
                </span>

              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c81b22] transition hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c81b22] transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c81b22] transition hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-gray-400">
              © {new Date().getFullYear()} Red Hills Tree Service.
              All Rights Reserved.
            </p>

            <div className="flex gap-6">

              <Link
                to="/privacy"
                className="text-gray-400 hover:text-[#c81b22]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-400 hover:text-[#c81b22]"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;