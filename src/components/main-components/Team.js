import Image from "next/image";

export default function Team() {
  return (
    <section className="pt-15">
      <h2 className="text-4xl font-extrabold ms-4 mb-2 text-vanilla">
        Our Team
      </h2>

      {/* Mohan */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 pt-4">
            <p className="text-2xl font-bold tracking-wider text-orange mb-2">
              Mohan - Founder
            </p>

            <p className="text-lg leading-relaxed text-white mb-8 max-w-2xl">
              Mohan is the Founder and the operational backbone of Fuse Bridge.
              He spearheads client acquisition and relationship building,
              ensuring every new partnership is grounded in a clear strategy. He
              rigorously manages all project operations, guaranteeing that every
              deliverable is completed flawlessly and on schedule.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0">
            <div className="relative w-full max-w-xs h-64  flex items-center justify-center">
              <Image
                src="team/mohan.svg"
                alt="Digital professional in a hoodie"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mvlprem */}
      {/* <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="order-2 lg:order-1 w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0">
            <div className="relative w-full max-w-xs h-64 flex items-center justify-center">
              <Image
                src="team/mvl.svg"
                alt="Digital professional in a hoodie"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 pt-4 order-1 lg:order-2">
            <p className="text-2xl font-bold tracking-wider text-orange mb-2">
              Mvl prem
            </p>

            <p className="text-lg leading-relaxed text-white mb-8 max-w-2xl">
              Mvl leads all technical initiatives at Fuse Bridge. He is the
              technical expert responsible for building high-performance
              websites and custom applications. His focus is on integrating the
              right software and digital tools to ensure our solutions are
              scalable, secure, and deliver tangible results for our clients.
            </p>
          </div>
        </div>
      </div> */}

      {/* Vishnu */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 pt-4 lg:order-2">
            <p className="text-2xl font-bold tracking-wider text-orange mb-2">
              Vishnu
            </p>

            <p className="text-lg leading-relaxed text-white mb-8 max-w-2xl">
              Vishnu is the design specialist who shapes the visual identity of
              every client and project. He is responsible for all creative
              output, including logo design, client product visualization, and
              compelling social media graphics. He ensures that Fuse Bridge's
              work is always modern, impactful, and clearly communicates the
              client's brand message.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0 lg:order-1">
            <div className="relative w-full max-w-xs h-64  flex items-center justify-center">
              <Image
                src="team/vishnu.svg"
                alt="Digital professional in a hoodie"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
