import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaLeaf,
  FaShieldAlt,
  FaTree,
} from "react-icons/fa";

import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree-service.webp";
import landClearing from "../assets/images/land-clearing.webp";
import stormCleanup from "../assets/images/storm-cleanup.webp";

const blogPosts = [
  {
    image: treeRemoval,
    category: "Tree Removal",
    title: "5 Signs a Tree May Need to Be Removed",
    excerpt:
      "Learn how to identify dangerous, damaged, or unhealthy trees before they become a serious risk to your property.",
    date: "July 12, 2026",
    readTime: "5 min read",
  },
  {
    image: treeTrimming,
    category: "Tree Care",
    title: "Why Regular Tree Trimming Matters",
    excerpt:
      "Professional trimming can improve tree health, reduce hazards, and enhance the appearance of your landscape.",
    date: "July 5, 2026",
    readTime: "4 min read",
  },
  {
    image: emergencyTree,
    category: "Emergency Service",
    title: "What to Do After Storm Damage",
    excerpt:
      "Follow these important steps when fallen branches or damaged trees create a hazard around your home or business.",
    date: "June 28, 2026",
    readTime: "6 min read",
  },
  {
    image: stumpGrinding,
    category: "Stump Grinding",
    title: "Why You Should Remove Old Tree Stumps",
    excerpt:
      "Old stumps can attract pests, create trip hazards, and make lawn maintenance more difficult.",
    date: "June 20, 2026",
    readTime: "4 min read",
  },
  {
    image: landClearing,
    category: "Land Clearing",
    title: "How Land Clearing Prepares Your Property",
    excerpt:
      "Discover how professional clearing creates safe, usable space for construction, landscaping, and property improvements.",
    date: "June 12, 2026",
    readTime: "5 min read",
  },
  {
    image: stormCleanup,
    category: "Storm Cleanup",
    title: "How to Keep Your Property Safer During Storm Season",
    excerpt:
      "Simple preparation and regular tree maintenance can reduce the risk of fallen limbs and property damage.",
    date: "June 4, 2026",
    readTime: "5 min read",
  },
];

const tips = [
  {
    icon: FaTree,
    title: "Inspect Trees Regularly",
    description:
      "Look for cracks, dead branches, leaning trunks, and signs of decay.",
  },
  {
    icon: FaLeaf,
    title: "Trim at the Right Time",
    description:
      "Routine pruning supports healthier growth and reduces potential hazards.",
  },
  {
    icon: FaShieldAlt,
    title: "Call a Professional",
    description:
      "Hazardous trees and large branches should always be handled by trained professionals.",
  },
];

function Blog() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2a090b] px-6 pb-20 pt-36 text-white lg:pb-24 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,40,40,0.28),transparent_42%)]" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#a30f18]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
            Tree Care Blog
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Helpful Tree Care
            <span className="block text-[#ef2b31]">
              Tips and Advice
            </span>
          </h1>

          <div className="mx-auto mt-7 h-1 w-20 bg-[#ef2b31]" />

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300">
            Explore practical advice about tree health, safety, trimming,
            removal, storm preparation, and property maintenance.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
            <Link
              to="/"
              className="text-gray-300 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-[#ef2b31]">/</span>

            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative overflow-hidden bg-[#fffaf6] px-6 py-16 lg:py-20">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#a30f18]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#a30f18]">
              Featured Article
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#211d1d] sm:text-5xl">
              Latest Tree Care Insight
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#a30f18]" />
          </div>

          <article className="grid overflow-hidden rounded-[28px] border border-[#a30f18]/10 bg-white shadow-[0_20px_60px_rgba(42,9,11,0.11)] lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <span className="absolute left-6 top-6 rounded-full bg-[#a30f18] px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white">
                {featuredPost.category}
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#a30f18]" />
                  {featuredPost.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaClock className="text-[#a30f18]" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#211d1d] sm:text-5xl">
                {featuredPost.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {featuredPost.excerpt}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-[#a30f18] px-7 py-4 font-bold uppercase tracking-[0.07em] text-white shadow-[0_14px_35px_rgba(163,15,24,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#850b12]"
              >
                Ask Our Experts
                <FaArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#a30f18]">
              More Articles
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#211d1d] sm:text-5xl">
              Expert Tips for Safer,
              <span className="block text-[#a30f18]">
                Healthier Trees
              </span>
            </h2>

            <div className="mx-auto mt-6 h-1 w-20 bg-[#a30f18]" />

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Practical information to help you care for your trees and protect
              your property throughout the year.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-[#a30f18]/10 bg-[#fffaf6] shadow-[0_14px_45px_rgba(42,9,11,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(42,9,11,0.15)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#a30f18] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#a30f18]" />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaClock className="text-[#a30f18]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#211d1d]">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {post.excerpt}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-3 font-bold uppercase tracking-[0.06em] text-[#a30f18]"
                  >
                    Learn More
                    <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Care Tips */}
      <section className="relative overflow-hidden bg-[#2a090b] px-6 py-16 text-white lg:py-20">
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#d62828]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-300">
              Quick Tips
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Simple Ways to Protect
              <span className="block text-[#ef2b31]">
                Your Trees and Property
              </span>
            </h2>

            <div className="mx-auto mt-6 h-1 w-20 bg-[#ef2b31]" />
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {tips.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a30f18] text-xl text-white">
                  <Icon />
                </span>

                <h3 className="mt-6 font-serif text-3xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Small Contact Banner */}
      <section className="bg-[#fffaf6] px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-[#a30f18] px-8 py-10 text-white shadow-[0_20px_55px_rgba(163,15,24,0.28)] md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-100">
              Need Professional Advice?
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Talk to our tree care team.
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold uppercase tracking-[0.07em] text-[#a30f18] transition duration-300 hover:-translate-y-1 hover:bg-[#fff4f4]"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Blog;