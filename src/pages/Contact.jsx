import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  useEffect(() => {
    if (!document.getElementById("ghl-form-script")) {
      const script = document.createElement("script");
      script.src = "https://link.kdlead.com/js/form_embed.js";
      script.async = true;
      script.id = "ghl-form-script";

      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a090b] px-6 pb-20 pt-36 text-white lg:pb-24 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,40,40,0.28),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
            Contact Us
          </p>

          <h1 className="mt-5 font-serif text-5xl font-bold sm:text-6xl lg:text-7xl">
            Let's Talk About
            <span className="block text-[#ef2b31]">
              Your Project
            </span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 bg-[#ef2b31]" />

          <div className="mt-8 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            <Link
              to="/"
              className="text-gray-300 hover:text-white"
            >
              Home
            </Link>

            <span className="text-[#ef2b31]">/</span>

            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#fffaf6] px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr]">

          {/* Left */}
          <div className="rounded-3xl bg-[#2a090b] p-8 text-white shadow-xl">

            <h2 className="font-serif text-4xl font-bold">
              Contact Information
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Contact Red Hills Tree Service for professional tree care,
              free estimates, and emergency assistance.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18]">
                  <FaPhoneAlt />
                </span>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="mt-1 text-gray-300">
                    (229) 701-8733
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18]">
                  <FaEnvelope />
                </span>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="mt-1 text-gray-300">
                    
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18]">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <h3 className="font-semibold">
                    Service Area
                  </h3>

                  <p className="mt-1 text-gray-300">
                    Serving Residential & Commercial Properties
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18]">
                  <FaClock />
                </span>

                <div>
                  <h3 className="font-semibold">
                    Working Hours
                  </h3>

                  <p className="mt-1 text-gray-300">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-300">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-xl">

            <iframe
              src="https://link.kdlead.com/widget/form/ieezGzh7ZbMVDBzYrOtM"
              style={{
                width: "100%",
                height: "1193px",
                border: "none",
                borderRadius: "16px",
              }}
              id="inline-ieezGzh7ZbMVDBzYrOtM"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Form 0"
              data-height="1193"
              data-layout-iframe-id="inline-ieezGzh7ZbMVDBzYrOtM"
              data-form-id="ieezGzh7ZbMVDBzYrOtM"
              title="Contact Form"
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;