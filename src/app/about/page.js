import Image from "next/image";
import CTABar from "@/components/sections/CTABar";
import { Target, Link, Zap, Heart, TrendingUp, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="flex ">
        <div className="w-full flex justify-center lg:m-4">
          <div className="relative w-full aspect-[2500/798]">
            <Image
              src="illustrations/about-t.svg"
              alt="about illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="text-white min-h-screen">
        {/* 1. Hero Section: Our Story & Mission */}
        <section className="py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-vanilla">
                Fusing Strategy, Bridging Success.
              </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Our Story */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-vanilla">Our Story</h2>
                <p className="text-white leading-relaxed">
                  Fuse Bridge was founded on the belief that disconnected
                  digital efforts lead to fractured results. We started with a
                  simple idea, unite the analytical precision of data science
                  with the dynamic creativity of social engagement. Our journey
                  began small, helping local businesses see the clear connection
                  between their strategy and their bottom line, and has grown
                  into a mission to redefine digital marketing as a unified,
                  measurable process.
                </p>
                <div className="h-0.5 w-16 bg-orange mt-6"></div>
              </div>

              {/* Mission */}
              <div className="p-8 bg-gray-800 rounded-xl shadow-xl space-y-4 border border-orange/90">
                <Target className="w-8 h-8 text-orange" />
                <h2 className="text-3xl font-bold text-orange">Our Mission</h2>
                <p className="text-white">
                  To empower businesses to achieve exponential growth by fusing
                  intelligent data insights with authentic, high-impact digital
                  experiences.
                </p>
                <p className="text-sm text-vanilla pt-2">
                  — The Fuse Bridge Core Tenet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Approach Section: Timeline/Process Layout */}
        <section className="py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-vanilla mb-16">
              Our <span className="text-orange">Approach</span>
            </h2>

            <div className="relative">
              {/* Vertical Connector Line (The "Bridge") */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>

              <div className="space-y-20">
                {/* Step 1: Discover (Left) */}
                <div className="flex md:justify-start justify-center md:flex-row-reverse">
                  <div className="md:w-1/2 p-4 md:pl-16">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-l-orange">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-orange">
                          01
                        </span>
                        <h3 className="text-2xl font-semibold text-vanilla">
                          Discovery & Data Mapping
                        </h3>
                      </div>
                      <p className="text-white">
                        We begin by mapping your current ecosystem, identifying
                        core business KPIs, and establishing a baseline for all
                        digital metrics. This ensures every future action is
                        measurable.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-end">
                    <Sparkles className="w-10 h-10 text-white bg-orange me-2 p-2 rounded-full ring-4 ring-gray-950" />
                  </div>
                </div>

                {/* Step 2: Strategize (Right) */}
                <div className="flex md:justify-end justify-center">
                  <div className="md:w-1/2 p-4 md:pr-16">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-r-4 border-r-orange">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-orange">
                          02
                        </span>
                        <h3 className="text-2xl font-semibold text-vanilla">
                          Strategic Fusion
                        </h3>
                      </div>
                      <p className="text-white">
                        We fuse creative concepts with analytical insights,
                        building a cross-channel strategy where every piece of
                        content and every ad spend reinforces the overall
                        business objective.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-start">
                    <Link className="w-10 h-10 text-white bg-orange ms-2 p-2 rounded-full ring-4 ring-gray-950" />
                  </div>
                </div>

                {/* Step 3: Impact (Left) */}
                <div className="flex md:justify-start justify-center md:flex-row-reverse">
                  <div className="md:w-1/2 p-4 md:pl-16">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-l-orange">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-orange">
                          03
                        </span>
                        <h3 className="text-2xl font-semibold text-vanilla">
                          Execution & Impact
                        </h3>
                      </div>
                      <p className="text-white">
                        Execution is agile, focused on rapid iteration and
                        optimization. We monitor real-time performance to ensure
                        campaigns are hitting key conversion milestones and
                        generating maximum ROI.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-end">
                    <Zap className="w-10 h-10 text-white bg-orange me-2 p-2 rounded-full ring-4 ring-gray-950" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Values Section: Grid Layout with Icons */}
        <section className="py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-vanilla mb-4">
                Our Core <span className="text-orange">Values</span>
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                These principles guide every strategy, every interaction, and
                every result we deliver.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1: Transparency */}
              <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]">
                <Heart className="w-10 h-10 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-vanilla mb-2">
                  Integrity & Transparency
                </h3>
                <p className="text-white">
                  We provide clear reports, honest feedback, and total clarity
                  on budgets and performance. No black boxes, ever.
                </p>
              </div>

              {/* Value 2: Innovation */}
              <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]">
                <Sparkles className="w-10 h-10 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-vanilla mb-2">
                  Data-Driven Innovation
                </h3>
                <p className="text-white">
                  Our strategies are dynamic, informed by real-time analytics,
                  and always leverage the latest platforms and technology.
                </p>
              </div>

              {/* Value 3: Partnership */}
              <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition duration-300 transform hover:scale-[1.02]">
                <Link className="w-10 h-10 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-vanilla mb-2">
                  True Partnership
                </h3>
                <p className="text-white">
                  We integrate with your team, acting as an extension of your
                  brand to ensure shared vision and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Impact & Why Choose Us Section: Split Block */}
        <section className="pt-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Block: Measurable Impact */}
              <div className="bg-gray-800 p-10 rounded-xl shadow-2xl space-y-8">
                <TrendingUp className="w-12 h-12 text-orange" />
                <h2 className="text-4xl font-extrabold text-white">
                  Driving <span className="text-orange">Measurable Impact</span>
                </h2>
                <p className="text-white text-lg">
                  We don't chase vanity metrics. Our focus is on the metrics
                  that truly matter to your bottom line: qualified leads,
                  conversion rates, and lifetime customer value. We translate
                  digital performance into tangible business growth, ensuring
                  every dollar spent works towards your long-term success.
                </p>
              </div>

              {/* Right Block: Why Choose Fuse Bridge */}
              <div className="p-10 space-y-6">
                <h2 className="text-4xl font-extrabold text-vanilla mb-4">
                  Why <span className="text-orange">Choose Us</span>?
                </h2>
                <ul className="space-y-4 text-lg text-white">
                  <li className="flex flex-col items-start space-x-3">
                    <span className="text-orange font-bold text-xl">
                      Deep Integration:
                    </span>
                    <span>
                      We don't just advise; we embed within your team, ensuring
                      seamless execution.
                    </span>
                  </li>
                  <li className="flex flex-col items-start space-x-3">
                    <span className="text-orange font-bold text-xl">
                      Technology Agnostic:
                    </span>
                    <span>
                      We use the best tool for your challenge, not just the one
                      we know best.
                    </span>
                  </li>
                  <li className="flex flex-col items-start space-x-3">
                    <span className="text-orange font-bold text-xl">
                      Future-Proof Strategies:
                    </span>
                    <span>
                      Our plans are built to adapt to tomorrow's digital
                      landscape, not yesterday's trends.
                    </span>
                  </li>
                  <li className="flex flex-col items-start space-x-3">
                    <span className="text-orange font-bold text-xl">
                      Dedicated Ownership:
                    </span>
                    <span>
                      You get senior-level attention from day one to deliver
                      true business transformation.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTABar />
      </div>
    </>
  );
}
