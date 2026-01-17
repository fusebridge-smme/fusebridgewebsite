import Image from "next/image";

const projects = [
  {
    id: 1,
    src: "/projects/project-1.png",
    alt: "Project Image",
    brand: "CCC",
    centerAlignment: true,
  },
  {
    id: 2,
    src: "/projects/project-2.png",
    alt: "Project Image",
    brand: "Mom's Recipe",
  },
  {
    id: 3,
    src: "/projects/project-3.png",
    alt: "Project Image",
    brand: "Cosally",
  },
  {
    id: 4,
    src: "/projects/project-4.png",
    alt: "Project Image",
    brand: "Extra Mile Learning",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="pt-15">
      <h2 className="text-4xl font-extrabold ms-4 mb-2 text-vanilla">
        Recent Projects
      </h2>

      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                <div
                  className="w-full overflow-hidden rounded-lg shadow-xl 
                transition duration-300 ease-in-out transform hover:scale-[1.02]
                relative pt-[66.66%]"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill={true}
                    objectFit="cover"
                    className={`w-full h-full ${
                      project.centerAlignment ? "object-center" : "object-top"
                    }`}
                  />
                </div>

                <p className="mt-4 text-xl font-bold text-orange">
                  {project.brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
