import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABar() {
  return (
    <section className="text-vanilla pt-15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-1">
          <div className="mb-1">
            <h2 className="text-4xl font-bold tracking-tight mt-1">
              Let's Talk
            </h2>
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center h-12 px-4 rounded-xl border-2 border-white text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-gray-900 shadow-xl cursor-pointer"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>

        <p className="text-lg text-white pb-8">
          We'd love to hear from you! Send us a message using the form or email
          us.
        </p>

        <Link
          href="/contact"
          className="inline-flex md:hidden items-center justify-center h-12 px-4 rounded-xl border-2 border-white text-lg font-semibold text-white mb-8"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-3" />
        </Link>
      </div>
    </section>
  );
}
