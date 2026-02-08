import React from "react";

export const Projects = ({ data }) => {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <section
      className="newspaper-page min-h-screen bg-[#F5F3EE] px-6 md:px-12 lg:px-20 py-20"
      style={{ perspective: "1200px" }}
      data-testid="projects-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="border-t-2 border-b border-[#1A1A1A] py-4 mb-12">
          <h2
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-[#1A1A1A]"
            data-testid="projects-headline"
          >
            Featured Work
          </h2>
          <div className="text-xs tracking-[0.2em] uppercase font-['Inter'] text-[#1A1A1A] mt-2">
            Portfolio · Featured Stories
          </div>
        </div>

        {/* Featured projects as large feature stories */}
        <div className="space-y-16 mb-16 animate-content">
          {featuredProjects.map((project, index) => (
            <article
              key={index}
              className="border-b-2 border-[#1A1A1A] pb-12"
              data-testid={`project-featured-${index}`}
            >
              <div className="grid md:grid-cols-12 gap-8">
                {/* Image placeholder */}
                <div className="md:col-span-5">
                  <div className="animate-image aspect-[4/3] bg-gradient-to-br from-[#D4D2CC] to-[#C9C7C1] flex items-center justify-center border border-[#1A1A1A]">
                    <span className="text-4xl font-['Playfair_Display'] text-[#1A1A1A]">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs italic font-['Inter'] text-[#1A1A1A] mt-2">
                    {project.category}
                  </p>
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <h3 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1A1A1A] mb-4">
                    {project.name}
                  </h3>
                  <p className="text-base md:text-lg font-['Inter'] text-[#1A1A1A] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs tracking-[0.15em] uppercase font-['Inter'] text-[#1A1A1A] mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 border border-[#1A1A1A] text-xs font-['Inter'] text-[#1A1A1A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects as smaller entries */}
        {otherProjects.length > 0 && (
          <div className="border-t border-[#1A1A1A] pt-12">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1A1A1A] mb-8">
              Additional Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8 animate-content">
              {otherProjects.map((project, index) => (
                <article
                  key={index}
                  className="border border-[#1A1A1A] p-6"
                  data-testid={`project-other-${index}`}
                >
                  <h4 className="text-xl font-bold font-['Playfair_Display'] text-[#1A1A1A] mb-2">
                    {project.name}
                  </h4>
                  <p className="text-xs italic font-['Inter'] text-[#1A1A1A] mb-3">
                    {project.category}
                  </p>
                  <p className="text-sm font-['Inter'] text-[#1A1A1A] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 border border-[#1A1A1A] text-xs font-['Inter'] text-[#1A1A1A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
