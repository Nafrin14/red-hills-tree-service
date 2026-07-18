import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaFileContract,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const serviceItems = [
  "Tree removal",
  "Tree trimming",
  "Stump grinding",
  "Emergency tree services",
  "Land clearing",
  "Storm cleanup",
];

const messageItems = [
  "Estimate updates",
  "Appointment confirmations",
  "Service reminders",
  "Project status notifications",
  "Emergency service updates",
  "Customer support messages",
  "Promotional offers related to our tree care services",
];

function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2a090b] px-6 pb-20 pt-36 text-white lg:pb-24 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,40,40,0.28),transparent_42%)]" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#a30f18]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-red-200 backdrop-blur-sm">
            <FaFileContract />
            Legal Information
          </span>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Terms &
            <span className="text-[#ef2b31]"> Conditions</span>
          </h1>

          <div className="mx-auto mt-7 h-1 w-20 bg-[#ef2b31]" />

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-300">
            Please review the terms that apply when using the Red Hills Tree
            Service website or requesting our tree care services.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            <Link
              to="/"
              className="text-gray-300 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-[#ef2b31]">/</span>

            <span className="text-white">Terms & Conditions</span>
          </div>

          <p className="mt-7 text-sm text-gray-400">
            Effective Date: January 19, 2025 | Last Updated: July 18, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative overflow-hidden bg-[#fffaf6] px-6 py-16 lg:py-20">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#a30f18]/5 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#a30f18]/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          {/* Intro Card */}
          <div className="mb-8 rounded-3xl border border-[#a30f18]/10 bg-[#2a090b] p-8 text-white shadow-[0_20px_55px_rgba(42,9,11,0.18)] sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#a30f18] text-2xl shadow-[0_12px_30px_rgba(163,15,24,0.3)]">
                <FaFileContract />
              </span>

              <div>
                <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                  Agreement to Our Terms
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-gray-300">
                  Welcome to Red Hills Tree Service. By accessing this website,
                  submitting a request for an estimate, or using our tree care
                  services, you agree to these Terms and Conditions. If you do
                  not agree with any part of these terms, please do not use our
                  website or services.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="rounded-3xl border border-[#a30f18]/10 bg-white p-7 shadow-[0_18px_55px_rgba(42,9,11,0.08)] sm:p-10 lg:p-14">
            <div className="space-y-12 text-gray-600">
              <TermsSection number="01" title="Age Requirement">
                <p>
                  By using this website, submitting a contact form, or enrolling
                  in our SMS messaging program, you confirm that you are at
                  least 18 years of age.
                </p>
              </TermsSection>

              <TermsSection number="02" title="Terminology">
                <p>
                  “Client,” “You,” and “Your” refer to the individual using this
                  website or requesting our services.
                </p>

                <p className="mt-4">
                  “Red Hills Tree Service,” “The Company,” “We,” “Our,” and “Us”
                  refer to Red Hills Tree Service.
                </p>
              </TermsSection>

              <TermsSection number="03" title="Services">
                <p>
                  Red Hills Tree Service provides professional tree care
                  services, which may include:
                </p>

                <TermsList items={serviceItems} />

                <p className="mt-5">
                  Service availability may depend on location, weather
                  conditions, property access, equipment requirements, and the
                  condition of the trees involved.
                </p>
              </TermsSection>

              <TermsSection number="04" title="Estimates and Pricing">
                <p>
                  We may provide free estimates based on the information
                  available at the time of inspection.
                </p>

                <p className="mt-4">
                  Final pricing may change if additional hazards, hidden damage,
                  access restrictions, utility concerns, or other unexpected
                  conditions are discovered during the project.
                </p>

                <p className="mt-4">
                  Any changes to the original estimate will be discussed with
                  the client before additional work is completed.
                </p>
              </TermsSection>

              <TermsSection number="05" title="Property Access">
                <p>
                  By scheduling a service, you confirm that you have permission
                  to authorize tree work at the property.
                </p>

                <p className="mt-4">
                  The client is responsible for identifying property boundaries,
                  underground utilities, irrigation systems, septic systems,
                  invisible fences, and other concealed structures that may
                  affect the work.
                </p>
              </TermsSection>

              <TermsSection
                number="06"
                title="Safety and Weather Conditions"
              >
                <p>
                  Tree care work may be delayed, rescheduled, or cancelled
                  because of severe weather, unsafe working conditions,
                  equipment issues, utility hazards, or other circumstances
                  beyond our control.
                </p>

                <p className="mt-4">
                  Red Hills Tree Service reserves the right to stop or postpone
                  work that may place employees, customers, surrounding
                  property, or the public at risk.
                </p>
              </TermsSection>

              <TermsSection number="07" title="Emergency Tree Services">
                <p>
                  Emergency response times may vary depending on weather
                  conditions, road access, service demand, crew availability,
                  and the severity of the emergency.
                </p>

                <p className="mt-4">
                  Submitting an emergency service request does not guarantee
                  immediate arrival.
                </p>

                <HighlightBox>
                  <p>
                    If a fallen tree or branch is touching a power line, stay
                    away from the area and contact the appropriate utility
                    provider or emergency service immediately.
                  </p>
                </HighlightBox>
              </TermsSection>

              <TermsSection number="08" title="Cookies">
                <p>
                  We may use cookies and similar technologies to improve website
                  performance, understand website usage, and provide a better
                  user experience.
                </p>

                <p className="mt-4">
                  Additional information about how we collect and use information
                  is available in our Privacy Policy.
                </p>

                <Link
                  to="/privacy"
                  className="mt-5 inline-flex font-bold text-[#a30f18] transition hover:text-[#750910]"
                >
                  View Privacy Policy
                </Link>
              </TermsSection>

              <TermsSection
                number="09"
                title="Intellectual Property License"
              >
                <p>
                  Unless otherwise stated, Red Hills Tree Service owns or has
                  permission to use the text, graphics, logos, photographs,
                  website design, and other content displayed on this website.
                </p>

                <p className="mt-4">
                  You may not copy, reproduce, publish, sell, distribute, modify,
                  or reuse website content without prior written permission.
                </p>
              </TermsSection>

              <TermsSection
                number="10"
                title="SMS Messaging Terms of Service"
              >
                <TermsSubheading>Program Description</TermsSubheading>

                <p className="mt-4">
                  By providing your mobile phone number and consenting to
                  receive messages, you agree to receive recurring automated or
                  manually sent text messages from Red Hills Tree Service.
                </p>

                <TermsList items={messageItems} />

                <p className="mt-5">
                  Consent to receive SMS messages is not required as a condition
                  of purchasing services.
                </p>

                <TermsSubheading className="mt-8">
                  Opt-Out
                </TermsSubheading>

                <p className="mt-4">
                  You may stop receiving SMS messages at any time by replying{" "}
                  <strong className="text-[#211d1d]">STOP</strong> to any
                  message. After opting out, you may receive one final
                  confirmation message.
                </p>

                <TermsSubheading className="mt-8">
                  Support
                </TermsSubheading>

                <p className="mt-4">
                  For assistance, reply{" "}
                  <strong className="text-[#211d1d]">HELP</strong> to any SMS
                  message or contact us directly using the information at the
                  bottom of this page.
                </p>

                <TermsSubheading className="mt-8">
                  Message Frequency
                </TermsSubheading>

                <p className="mt-4">
                  Message frequency may vary depending on your service request,
                  appointment status, and communication preferences.
                </p>

                <TermsSubheading className="mt-8">
                  Message and Data Rates
                </TermsSubheading>

                <p className="mt-4">
                  Standard message and data rates may apply depending on your
                  wireless carrier and mobile service plan.
                </p>

                <TermsSubheading className="mt-8">
                  Carrier Liability
                </TermsSubheading>

                <p className="mt-4">
                  Mobile carriers are not responsible for delayed or undelivered
                  messages. Red Hills Tree Service cannot guarantee delivery
                  because it depends on carrier availability, network coverage,
                  and device compatibility.
                </p>
              </TermsSection>

              <TermsSection
                number="11"
                title="User-Submitted Information"
              >
                <p>
                  When submitting a contact form, estimate request, review,
                  photograph, or other information, you agree that the
                  information provided is accurate and does not violate
                  applicable laws or another person’s rights.
                </p>

                <p className="mt-4">
                  Red Hills Tree Service may remove content that is offensive,
                  misleading, unlawful, inappropriate, or in violation of these
                  Terms and Conditions.
                </p>
              </TermsSection>

              <TermsSection
                number="12"
                title="Links to External Websites"
              >
                <p>
                  Our website may contain links to third-party websites or
                  services. Red Hills Tree Service does not control and is not
                  responsible for their content, privacy practices,
                  availability, or security.
                </p>
              </TermsSection>

              <TermsSection
                number="13"
                title="Hyperlinking to Our Content"
              >
                <p>
                  Organizations may link to our website provided that the link
                  is not misleading, does not falsely imply sponsorship or
                  endorsement, does not damage our reputation, and is relevant
                  to the linking website.
                </p>
              </TermsSection>

              <TermsSection number="14" title="Content Liability">
                <p>
                  We are not responsible for content appearing on external
                  websites that link to our website. You agree to protect and
                  defend Red Hills Tree Service against claims resulting from
                  unlawful or misleading content published on a website under
                  your control.
                </p>
              </TermsSection>

              <TermsSection number="15" title="Limitation of Liability">
                <p>
                  To the fullest extent permitted by law, Red Hills Tree Service
                  is not liable for indirect, incidental, special, or
                  consequential damages arising from use of this website,
                  delays, third-party services, weather conditions, or
                  information submitted through online forms.
                </p>
              </TermsSection>

              <TermsSection number="16" title="Disclaimer">
                <p>
                  Website information is provided for general informational
                  purposes and is not a substitute for an on-site professional
                  inspection.
                </p>

                <p className="mt-4">
                  Red Hills Tree Service does not guarantee that all website
                  information will always be complete, accurate, or up to date.
                </p>
              </TermsSection>

              <TermsSection number="17" title="Changes to These Terms">
                <p>
                  Red Hills Tree Service may update these Terms and Conditions
                  when necessary. Changes will be published on this page with an
                  updated “Last Updated” date.
                </p>
              </TermsSection>

              <TermsSection number="18" title="Governing Law">
                <p>
                  These Terms and Conditions are governed by the applicable laws
                  of the state and jurisdiction in which Red Hills Tree Service
                  operates, together with applicable United States federal laws.
                </p>
              </TermsSection>

              <TermsSection number="19" title="Contact Information">
                <p>
                  For questions regarding these Terms and Conditions, SMS
                  support, or our services, contact Red Hills Tree Service using
                  the information below.
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <ContactItem
                    icon={FaPhoneAlt}
                    label="Phone"
                    value="(229) 701-8733"
                    href="tel:+12297018733"
                  />

                  <ContactItem
                    icon={FaEnvelope}
                    label="Email"
                    value=""
                    href=""
                  />

                  <ContactItem
                    icon={FaMapMarkerAlt}
                    label="Service Area"
                    value="Residential and commercial properties"
                  />
                </div>
              </TermsSection>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg bg-[#a30f18] px-7 py-4 font-bold uppercase tracking-[0.07em] text-white shadow-[0_14px_35px_rgba(163,15,24,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#850b12]"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsSection({ number, title, children }) {
  return (
    <section className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a30f18]/10 font-serif text-sm font-bold text-[#a30f18]">
          {number}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#211d1d] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-5 leading-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function TermsSubheading({ children, className = "" }) {
  return (
    <h3
      className={`font-serif text-2xl font-bold text-[#211d1d] ${className}`}
    >
      {children}
    </h3>
  );
}

function TermsList({ items }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl bg-[#fffaf6] px-4 py-3"
        >
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#a30f18]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightBox({ children }) {
  return (
    <div className="mt-6 rounded-2xl border border-[#a30f18]/10 bg-[#fff4f4] p-6">
      {children}
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a30f18] text-white">
        <Icon />
      </span>

      <div className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#a30f18]">
          {label}
        </p>

        <p className="mt-1 break-words font-semibold text-[#211d1d]">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-4 rounded-2xl border border-[#a30f18]/10 bg-[#fffaf6] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#a30f18]/10 bg-[#fffaf6] p-5">
      {content}
    </div>
  );
}

export default Terms;