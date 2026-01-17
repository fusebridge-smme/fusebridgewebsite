import Image from "next/image";

const clients = [
  {
    id: 1,
    src: "/clients/client-1.png",
    alt: "Client Logo",
  },
  {
    id: 2,
    src: "/clients/client-2.png",
    alt: "Client Logo",
  },
  {
    id: 3,
    src: "/clients/client-3.png",
    alt: "Client Logo",
  },
  {
    id: 4,
    src: "/clients/client-4.png",
    alt: "Client Logo",
  },
  {
    id: 5,
    src: "/clients/client-5.png",
    alt: "Client Logo",
  },
  {
    id: 6,
    src: "/clients/client-6.png",
    alt: "Client Logo",
  },
  {
    id: 7,
    src: "/clients/client-7.png",
    alt: "Client Logo",
  },
];

const logosToDisplay = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="pt-15">
      <h2 className="text-4xl font-extrabold ms-4 mb-2 text-vanilla">
        Our Clients
      </h2>

      <section className="pt-4">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="flex w-fit logo-scroll-animation">
            {logosToDisplay.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-4"
                style={{ minWidth: "180px", maxWidth: "180px" }}
              >
                <div className="relative w-full pt-[66.66%] bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill={true}
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
