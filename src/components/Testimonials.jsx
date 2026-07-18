import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Homeowner",
    review:
      "Red Hills Tree Service removed a large tree from our property quickly and safely. The crew was professional, friendly, and left everything spotless. Highly recommended!",
  },
  {
    name: "Sarah Wilson",
    role: "Property Owner",
    review:
      "Excellent service from start to finish. The team arrived on time, completed the tree trimming perfectly, and cleaned up every branch before leaving.",
  },
  {
    name: "David Miller",
    role: "Business Owner",
    review:
      "After a severe storm, Red Hills responded immediately and removed dangerous fallen trees. Their emergency service was fast, efficient, and affordable.",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-6 py-20 lg:py-24">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a30f18]">
            Testimonials
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-[#211d1d] sm:text-5xl lg:text-[56px]">
            What Our
            <span className="block text-[#a30f18]">
              Customers Say
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 bg-[#a30f18]" />

          <p className="mt-7 text-lg leading-8 text-gray-600">
            Customer satisfaction is our top priority. Here's what homeowners
            and businesses say about our tree services.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-[#a30f18]/10 bg-white p-8 shadow-[0_15px_45px_rgba(42,9,11,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#a30f18]/30 hover:shadow-[0_25px_60px_rgba(42,9,11,0.15)]"
            >
              <FaQuoteLeft
                size={34}
                className="text-[#a30f18]/20 transition duration-300 group-hover:text-[#a30f18]"
              />

              <div className="mt-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-serif text-2xl font-bold text-[#211d1d]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[#a30f18]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div className="mt-16 rounded-3xl bg-[#2a090b] px-8 py-10 text-white shadow-[0_25px_60px_rgba(42,9,11,0.25)]">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-5xl font-bold text-[#ef2b31]">
                500+
              </h3>
              <p className="mt-2 text-gray-300">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="font-serif text-5xl font-bold text-[#ef2b31]">
                15+
              </h3>
              <p className="mt-2 text-gray-300">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="font-serif text-5xl font-bold text-[#ef2b31]">
                24/7
              </h3>
              <p className="mt-2 text-gray-300">
                Emergency Service
              </p>
            </div>

            <div>
              <h3 className="font-serif text-5xl font-bold text-[#ef2b31]">
                ★★★★★
              </h3>
              <p className="mt-2 text-gray-300">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;