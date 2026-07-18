import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2a090b] px-6 pb-20 pt-36 text-white lg:pb-24 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,40,40,0.28),transparent_42%)]" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#a30f18]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-red-200 backdrop-blur-sm">
            <FaShieldAlt />
            Legal Information
          </span>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Privacy
            <span className="text-[#ef2b31]"> Policy</span>
          </h1>

          <div className="mx-auto mt-7 h-1 w-20 bg-[#ef2b31]" />

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-300">
            Learn how Red Hills Tree Service collects, uses, stores, and
            protects your personal information.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            <Link
              to="/"
              className="text-gray-300 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-[#ef2b31]">/</span>

            <span className="text-white">Privacy Policy</span>
          </div>

          <p className="mt-7 text-sm text-gray-400">
            Effective Date: January 19, 2025 | Last Updated: July 18, 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative overflow-hidden bg-[#fffaf6] px-6 py-16 lg:py-20">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#a30f18]/5 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#a30f18]/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          {/* Introduction Card */}
          <div className="mb-8 rounded-3xl border border-[#a30f18]/10 bg-[#2a090b] p-8 text-white shadow-[0_20px_55px_rgba(42,9,11,0.18)] sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#a30f18] text-2xl shadow-[0_12px_30px_rgba(163,15,24,0.3)]">
                <FaShieldAlt />
              </span>

              <div>
                <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                  Your Privacy Matters
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-gray-300">
                  Red Hills Tree Service is committed to protecting your privacy
                  and personal information. This Privacy Policy explains how we
                  collect, use, store, and protect your information when you use
                  our website, request an estimate, schedule a service, or
                  communicate with our team.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="rounded-3xl border border-[#a30f18]/10 bg-white p-7 shadow-[0_18px_55px_rgba(42,9,11,0.08)] sm:p-10 lg:p-14">
            <div className="space-y-12 text-gray-600">
              <PrivacySection
                number="01"
                title="Information We Collect"
              >
                <p>
                  We may collect personal information when you contact us,
                  submit an estimate request, schedule tree care services, or
                  communicate with our team.
                </p>

                <PolicyList
                  items={[
                    "Your name",
                    "Property or service address",
                    "Email address",
                    "Telephone or mobile phone number",
                    "Details about the tree care services requested",
                    "Appointment and estimate information",
                    "Messages and other communication details",
                    "Photographs or files submitted with a service request",
                  ]}
                />
              </PrivacySection>

              <PrivacySection
                number="02"
                title="SMS Privacy Notice"
              >
                <PolicySubheading>
                  Collection of Information
                </PolicySubheading>

                <p className="mt-4">
                  We collect your mobile phone number when you voluntarily opt
                  in to receive SMS communications from Red Hills Tree Service.
                  This may occur through website forms, phone calls, estimate
                  requests, or other direct communication methods.
                </p>

                <PolicySubheading className="mt-8">
                  Use of SMS Information
                </PolicySubheading>

                <p className="mt-4">
                  We may use your phone number to send appointment reminders,
                  service updates, estimate notifications, project status
                  updates, emergency service communications, customer support
                  messages, and tree care promotions.
                </p>

                <p className="mt-4">
                  Message frequency may vary depending on your service requests,
                  appointment activity, and communication preferences.
                </p>

                <PolicySubheading className="mt-8">
                  SMS Data Sharing
                </PolicySubheading>

                <p className="mt-4">
                  We do not sell, rent, or share mobile phone information or SMS
                  consent data with third parties or affiliates for their own
                  marketing or promotional purposes.
                </p>

                <p className="mt-4">
                  Text messaging originator opt-in data and consent will not be
                  shared with third parties, except service providers that help
                  us deliver messages or where disclosure is required by law.
                </p>
              </PrivacySection>

              <PrivacySection
                number="03"
                title="SMS Opt-In Information"
              >
                <p>
                  By providing your mobile phone number and selecting an
                  applicable consent option, you agree to receive SMS messages
                  from Red Hills Tree Service.
                </p>

                <p className="mt-4">
                  Messages may include service updates, estimate information,
                  appointment reminders, project notifications, customer support
                  communications, and promotional messages.
                </p>

                <HighlightBox>
                  <p>
                    Message and data rates may apply. Reply{" "}
                    <strong className="text-[#211d1d]">STOP</strong> at any time
                    to unsubscribe.
                  </p>

                  <p className="mt-3">
                    Reply <strong className="text-[#211d1d]">HELP</strong> for
                    assistance.
                  </p>

                  <p className="mt-3">
                    Consent is not a condition of purchasing any goods or
                    services.
                  </p>
                </HighlightBox>
              </PrivacySection>

              <PrivacySection
                number="04"
                title="How We Use Your Information"
              >
                <p>We may use your personal information to:</p>

                <PolicyList
                  items={[
                    "Respond to questions and service requests",
                    "Provide and manage free estimates",
                    "Schedule appointments and tree care services",
                    "Communicate service and project updates",
                    "Provide customer support",
                    "Improve our website and customer experience",
                    "Maintain business and service records",
                    "Send promotional messages when consent is provided",
                    "Comply with legal and regulatory obligations",
                  ]}
                />
              </PrivacySection>

              <PrivacySection
                number="05"
                title="Mobile Information Sharing Statement"
              >
                <p>
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </p>

                <p className="mt-4">
                  All categories of information described in this Privacy Policy
                  exclude text messaging originator opt-in data and consent.
                  This information will not be shared with third parties, except
                  where necessary to provide messaging services or comply with
                  applicable law.
                </p>
              </PrivacySection>

              <PrivacySection
                number="06"
                title="How We Share Information"
              >
                <p>
                  We do not sell or rent your personal information. We may share
                  limited information with trusted service providers that help
                  us operate the website, manage communications, schedule
                  services, process forms, or maintain business systems.
                </p>

                <p className="mt-4">
                  These providers may only use the information as necessary to
                  perform services on our behalf.
                </p>

                <p className="mt-4">
                  We may also disclose information where required by law, court
                  order, legal process, or to protect the safety, property, and
                  rights of Red Hills Tree Service, our customers, or others.
                </p>
              </PrivacySection>

              <PrivacySection
                number="07"
                title="Cookie and Tracking Practices"
              >
                <p>
                  We may use cookies and similar technologies to improve website
                  performance, understand how visitors use the website, remember
                  user preferences, and improve the customer experience.
                </p>

                <p className="mt-4">
                  Cookies generally do not store sensitive personal information.
                  You may adjust your browser settings to block or remove
                  cookies, although some website features may not work
                  correctly.
                </p>
              </PrivacySection>

              <PrivacySection
                number="08"
                title="Third-Party Services and Links"
              >
                <p>
                  Our website may use or link to third-party services such as
                  form providers, messaging platforms, map services, analytics
                  tools, or social media platforms.
                </p>

                <p className="mt-4">
                  Red Hills Tree Service is not responsible for the privacy
                  practices, security, or content of third-party websites and
                  services. You should review their privacy policies before
                  providing personal information.
                </p>
              </PrivacySection>

              <PrivacySection
                number="09"
                title="Data Security and Handling"
              >
                <p>
                  We use reasonable administrative, technical, and
                  organizational safeguards to protect personal information
                  from unauthorized access, disclosure, alteration, loss, or
                  misuse.
                </p>

                <p className="mt-4">
                  However, no internet transmission, electronic storage system,
                  or security method can be guaranteed to be completely secure.
                </p>
              </PrivacySection>

              <PrivacySection
                number="10"
                title="Data Retention"
              >
                <p>
                  We retain personal information only for as long as reasonably
                  necessary to provide services, manage customer relationships,
                  maintain records, resolve disputes, enforce agreements, or
                  comply with legal obligations.
                </p>

                <p className="mt-4">
                  SMS consent records may be retained as needed to demonstrate
                  compliance with applicable messaging requirements.
                </p>
              </PrivacySection>

              <PrivacySection
                number="11"
                title="Your Privacy Rights"
              >
                <p>
                  Depending on your location and applicable law, you may have
                  the right to:
                </p>

                <PolicyList
                  items={[
                    "Request access to your personal information",
                    "Request correction of inaccurate information",
                    "Request deletion of your personal information",
                    "Request a copy of certain personal information",
                    "Withdraw consent for certain communications",
                    "Opt out of SMS or promotional messages",
                  ]}
                />

                <p className="mt-5">
                  To exercise an applicable privacy right, contact us using the
                  details listed at the bottom of this page. We may need to
                  verify your identity before completing the request.
                </p>
              </PrivacySection>

              <PrivacySection
                number="12"
                title="California Privacy Rights"
              >
                <p>
                  California residents may have additional rights under the
                  California Consumer Privacy Act and related privacy laws,
                  including rights to know, correct, delete, and limit certain
                  uses of personal information where applicable.
                </p>

                <p className="mt-4">
                  Red Hills Tree Service does not sell personal information as
                  that term is commonly defined under the CCPA.
                </p>
              </PrivacySection>

              <PrivacySection
                number="13"
                title="International Privacy Rights"
              >
                <p>
                  Where the General Data Protection Regulation or similar laws
                  apply, personal information may be processed based on your
                  consent, the need to provide requested services, compliance
                  with legal obligations, or our legitimate business interests.
                </p>
              </PrivacySection>

              <PrivacySection
                number="14"
                title="Children's Privacy"
              >
                <p>
                  This website and our services are intended for adults. We do
                  not knowingly collect personal information from children under
                  13 years of age.
                </p>

                <p className="mt-4">
                  Our SMS messaging program is only available to individuals who
                  are at least 18 years old.
                </p>
              </PrivacySection>

              <PrivacySection
                number="15"
                title="Changes to This Privacy Policy"
              >
                <p>
                  We may update this Privacy Policy to reflect changes in our
                  practices, services, technologies, or legal requirements.
                </p>

                <p className="mt-4">
                  Updates will be published on this page with a revised “Last
                  Updated” date. We encourage users to review this page
                  periodically.
                </p>
              </PrivacySection>

              <PrivacySection
                number="16"
                title="Contact Information"
              >
                <p>
                  For privacy questions, SMS support, or requests relating to
                  your personal information, contact us using the information
                  below.
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
                    href="mailto:"
                  />

                  <ContactItem
                    icon={FaMapMarkerAlt}
                    label="Service Area"
                    value="Residential and commercial properties"
                  />
                </div>
              </PrivacySection>
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

function PrivacySection({ number, title, children }) {
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

function PolicySubheading({ children, className = "" }) {
  return (
    <h3
      className={`font-serif text-2xl font-bold text-[#211d1d] ${className}`}
    >
      {children}
    </h3>
  );
}

function PolicyList({ items }) {
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

export default Privacy;