import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="pt-20">
      <h2 className="text-4xl font-extrabold ms-4 mb-16 text-vanilla">About</h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0">
            <div className="relative w-full max-w-xs h-72 flex items-center justify-center">
              <Image
                src="illustrations/about-us.svg"
                alt="Digital professional in a hoodie"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 pt-4">
            <p className="text-2xl font-bold uppercase tracking-wider text-orange mb-2">
              Who We Are
            </p>

            <p className="text-lg leading-relaxed text-white mb-8 max-w-2xl">
              Fuse Bridge is a digital branding and growth agency founded by
              <span className="font-bold text-orange"> Mohan.</span> We
              specialize in empowering small businesses and ambitious startups
              with smart, modern, and affordable digital solutions. From
              strategic branding and robust website design to captivating
              content creation and daily social media management, we provide the
              full stack you need to thrive.
            </p>

            <p className="text-lg leading-relaxed text-vanilla font-bold max-w-2xl">
              Our goal is simple:
            </p>

            <p className="text-lg leading-relaxed text-orange mb-8 max-w-2xl">
              We turn your business potential into measurable digital impact.
            </p>

            <Link
              href="/about"
              className="btn-slide-hover relative group overflow-hidden"
            >
              <span className="btn-slide-hover-effect"></span>
              <span className="btn-slide-hover-text">Explore More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
