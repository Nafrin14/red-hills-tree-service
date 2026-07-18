import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree-service.webp";
import landClearing from "../assets/images/land-clearing.webp";
import stormCleanup from "../assets/images/storm-cleanup.webp";

const services = [
  {
    image: treeRemoval,
    title: "Tree Removal",
    description:
      "Safe and efficient removal of damaged, dangerous, dead, or unwanted trees.",
  },
  {
    image: treeTrimming,
    title: "Tree Trimming",
    description:
      "Professional pruning to improve tree health, safety, shape, and appearance.",
  },
  {
    image: stumpGrinding,
    title: "Stump Grinding",
    description:
      "Remove hazardous and unsightly stumps while reclaiming usable yard space.",
  },
  {
    image: emergencyTree,
    title: "Emergency Tree Service",
    description:
      "Fast response for fallen, storm-damaged, or hazardous trees on your property.",
  },
  {
    image: landClearing,
    title: "Land Clearing",
    description:
      "Professional lot and brush clearing for construction and property improvements.",
  },
  {
    image: stormCleanup,
    title: "Storm Cleanup",
    description:
      "Complete removal of broken limbs, fallen trees, and storm-related debris.",
  },
];

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 lg:py-24">
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#a30f18]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#a30f18]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a30f18]">
              Our Services
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#211d1d] sm:text-5xl lg:text-[56px]">
              Complete Tree Care
              <span className="block text-[#a30f18]">
                Solutions
              </span>
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#a30f18]" />
          </div>

          <div className="max-w-xl">
            <p className="leading-8 text-gray-600">
              From routine trimming to emergency tree removal, our experienced
              team provides safe, efficient, and dependable tree care for
              residential and commercial properties.
            </p>

            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-3 font-bold uppercase tracking-[0.06em] text-[#a30f18]"
            >
              View All Services
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-[#fffaf6] shadow-[0_14px_45px_rgba(42,9,11,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(42,9,11,0.15)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#a30f18] text-sm font-bold text-white shadow-lg">
                  0{index + 1}
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-3xl font-bold text-[#211d1d]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-3 font-bold uppercase tracking-[0.05em] text-[#a30f18]"
                >
                  Request Service
                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;