import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-4/6 flex justify-center">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="illustrations/hero-illustration.svg"
              alt="Digital professional illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full pt-12 lg:w-2/6 flex flex-col items-center">
          <p className="text-xl font-bold text-vanilla">Bridging Ideas Into</p>
          <p className="text-6xl lg:text-7xl font-bold text-orange">Digital</p>
          <p className="text-6xl lg:text-7xl font-bold text-orange">Success</p>
        </div>
      </div>
    </section>
  );
}
