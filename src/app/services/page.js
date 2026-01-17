import Image from "next/image";
import {
  Code,
  Activity,
  Feather,
  Shield,
  TrendingUp,
  Target,
} from "lucide-react";

const ServicePillar = ({ icon: Icon, title, description, features }) => (
  <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700 hover:border-orange transition duration-300 h-full flex flex-col">
    <Icon className="w-10 h-10 text-orange mb-4" />
    <h3 className="text-2xl font-bold text-vanilla mb-3">{title}</h3>
    <p className="text-white mb-6 flex-grow">{description}</p>

    <ul className="space-y-2 text-sm text-white border-t border-orange pt-4 mt-auto">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <span className="text-vanilla mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Code,
      title: "Data & Strategy Fusion",
      description:
        "We start with a deep dive into your market and metrics, creating a unified strategy where every decision is backed by intelligence, not guesswork.",
      features: [
        "Market & Audience Analysis",
        "KPI Mapping & Goal Setting",
        "Cross-Channel Strategy",
        "Attribution Modeling",
      ],
    },
    {
      icon: Feather,
      title: "Creative Acceleration",
      description:
        "From video production to copy, we craft content that cuts through the noise and resonates authentically with your target audience on every platform.",
      features: [
        "High-Impact Content Creation",
        "Social Media Management",
        "Brand Voice & Messaging",
        "Iterative A/B Testing",
      ],
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description:
        "Targeted advertising and continuous campaign monitoring ensure maximum ROI, turning clicks into qualified leads and sales.",
      features: [
        "Paid Social Campaigns (Meta, LinkedIn)",
        "Search Engine Marketing (SEM)",
        "Conversion Rate Optimization (CRO)",
        "Real-Time Budget Allocation",
      ],
    },
    {
      icon: Shield,
      title: "Full Digital Governance",
      description:
        "Comprehensive support and governance over your entire digital footprint, ensuring brand safety, compliance, and technological alignment.",
      features: [
        "Digital Audit & Compliance",
        "Technology Stack Integration",
        "Executive Reporting Dashboards",
        "Team Training & Enablement",
      ],
    },
  ];

  return (
    <>
      <section className="flex ">
        <div className="w-full flex justify-center lg:m-4">
          <div className="relative w-full aspect-[1000/300]">
            <Image
              src="illustrations/services-t.svg"
              alt="about illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="text-white min-h-screen pt-10">
        {/* 1. Hero Section: Services Overview */}
        <section className="pt-10 px-4 md:px-8 ">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-lg font-semibold text-[#ff8200] uppercase tracking-wider mb-3">
              Our Core Offerings
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-vanilla mb-6">
              Services That <span className="text-orange">Bridge</span> Ideas to
              Revenue.
            </h1>
            <p className="text-xl text-white max-w-4xl mx-auto">
              We don't offer isolated solutions. We provide a fused service
              model that strategically connects data, creative execution, and
              performance optimization to deliver unified, predictable growth.
            </p>
          </div>
        </section>

        {/* 2. Core Service Pillars: 4-Column Grid */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-vanilla mb-3">
                The Fuse Bridge Service Pillars
              </h2>
              <p className="text-lg text-white">
                Choose a single pillar or integrate them all for maximum
                momentum.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreServices.map((service, index) => (
                <ServicePillar key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Methodology Deep Dive: Staggered Feature List */}
        <section className="py-10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-vanilla mb-4">
                How We Work: Precision and{" "}
                <span className="text-orange">Impact</span>
              </h2>
              <p className="text-lg text-white">
                Our proprietary 3-stage process ensures efficiency and
                accountability from concept to conversion.
              </p>
            </header>

            <div className="space-y-12">
              {/* Stage 1: Assessment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="lg:order-1 order-2">
                  <span className="text-5xl font-extrabold text-orange">
                    01.
                  </span>
                  <h3 className="text-3xl font-bold text-vanilla mt-2 mb-4">
                    Diagnostic Assessment
                  </h3>
                  <p className="text-white leading-relaxed">
                    We start with a comprehensive audit, analyzing current
                    performance, identifying gaps, and defining the exact
                    success metrics required to meet your business objectives.
                    This step establishes the foundation for the entire
                    partnership.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl lg:order-2 order-1 shadow-lg">
                  <Target className="w-16 h-16 text-orange mb-4 mx-auto lg:mx-0" />
                  <p className="text-sm text-vanilla">
                    Inputs: Market Research, KPI Benchmarking, Technical Audit.
                  </p>
                </div>
              </div>

              {/* Stage 2: Synthesis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="lg:order-2 order-2">
                  <span className="text-5xl font-extrabold text-orange">
                    02.
                  </span>
                  <h3 className="text-3xl font-bold text-vanilla mt-2 mb-4">
                    Integrated Synthesis
                  </h3>
                  <p className="text-white leading-relaxed">
                    The strategy comes to life. Our creative and performance
                    teams synthesize data-backed concepts, launching integrated
                    campaigns designed for simultaneous brand lift and direct
                    response efficiency.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl lg:order-1 order-1 shadow-lg">
                  <TrendingUp className="w-16 h-16 text-orange mb-4 mx-auto lg:mx-0" />
                  <p className="text-sm text-vanilla">
                    Outputs: Unified Campaign Roadmap, Content Calendar, Ad
                    Platform Setup.
                  </p>
                </div>
              </div>

              {/* Stage 3: Optimization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="lg:order-1 order-2">
                  <span className="text-5xl font-extrabold text-orange">
                    03.
                  </span>
                  <h3 className="text-3xl font-bold text-vanilla mt-2 mb-4">
                    Continuous Optimization
                  </h3>
                  <p className="text-white leading-relaxed">
                    We are always learning. Campaigns are never 'set and
                    forget.' We leverage automated systems and expert oversight
                    for real-time adjustments, maximizing spend efficiency and
                    scaling successful initiatives.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl lg:order-2 order-1 shadow-lg">
                  <Activity className="w-16 h-16 text-orange mb-4 mx-auto lg:mx-0" />
                  <p className="text-sm text-vanilla">
                    Focus: Weekly Reporting, A/B Test Cycling, Scale Planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Call to Action (CTA) */}
        <section className="py-10 px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center p-10 rounded-xl bg-gray-800 border border-orange/90 shadow-2xl">
            <h2 className="text-4xl font-extrabold text-vanilla mb-4">
              Ready to Transform Your Digital Strategy?
            </h2>
            <p className="text-lg text-white mb-8">
              Schedule a free consultation to discuss your goals and see our
              methodology in action.
            </p>
            {/* Link to Contact Page (adjust href as needed) */}
            <a
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-bold rounded-lg bg-orange text-black shadow-xl"
            >
              Book Your Strategy Session
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
