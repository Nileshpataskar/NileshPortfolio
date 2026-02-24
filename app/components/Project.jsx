import React from "react";

export const Projects = ({ data }) => {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <section
      className="newspaper-page min-h-screen bg-background px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden"
      data-testid="projects-section"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="text-9xl font-serif font-black tracking-tighter text-foreground">
          04
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="border-t-2 border-b border-foreground py-4 mb-16">
          <h2
            className="animate-headline text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground uppercase tracking-tight"
            data-testid="projects-headline"
          >
            Featured Work
          </h2>
          <div className="flex justify-between items-center mt-2 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            <span>Portfolio · Featured Stories</span>
            <span>Vol. {new Date().getMonth() + 1}</span>
          </div>
        </div>

        {/* Featured projects as large feature stories */}
        <div className="space-y-20 mb-20 animate-content">
          {featuredProjects.map((project, index) => (
            <article
              key={index}
              className="border-b-2 border-foreground pb-12 last:border-0"
              data-testid={`project-featured-${index}`}
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Image placeholder / Visual */}
                <div className="md:col-span-5 order-2 md:order-1">
                  {/* Newspaper photo frame */}
                  <div className="newspaper-photo group">
                    <div className="newspaper-photo-inner relative overflow-hidden border border-foreground/30 shadow-sm transition-all duration-700 group-hover:border-foreground group-hover:shadow-2xl">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="newspaper-photo-img w-full h-full object-cover transition-all duration-1000"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                          <div className="text-center">
                            <span className="text-6xl font-serif font-black text-foreground/20 block mb-2">
                              {project.name.charAt(0)}
                            </span>
                            <div className="px-3 py-1 bg-background border border-foreground/20 text-[10px] uppercase font-mono tracking-widest text-muted-foreground">
                              Image Signal Lost
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Layer 1: The Halftone Dot Pattern (The Print Effect) */}
                      <div className="newspaper-halftone absolute inset-0 pointer-events-none z-10 opacity-60 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000"></div>

                      {/* Layer 2: Organic Paper Grain */}
                      <div className="newspaper-grain absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-soft-light transition-opacity duration-700"></div>

                      {/* Layer 3: Magical Reveal Glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-30 pointer-events-none"></div>
                    </div>

                    {/* Caption area */}
                    <div className="flex justify-between items-center mt-4 border-t border-foreground/10 pt-2 group-hover:border-foreground/30 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-600/50 animate-pulse group-hover:bg-amber-500"></span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                          FIG. {index + 1}.0 // LIVE FEED
                        </span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-tighter px-2 py-0.5 border border-foreground/10 text-muted-foreground group-hover:text-foreground group-hover:border-foreground/50 transition-all">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-7 order-1 md:order-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-none">
                      {project.name}
                    </h3>
                    <div className="w-20 h-1 bg-foreground mb-6"></div>
                    <p className="text-lg md:text-xl font-sans text-foreground/80 leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer of the card */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-foreground mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 border border-foreground text-xs font-mono text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group hover:underline underline-offset-4 decoration-2"
                    >
                      View Case Study
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects as smaller entries (Newspaper Shorts) */}
        {otherProjects.length > 0 && (
          <div className="border-t-4 border-foreground pt-12">
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="text-3xl font-bold font-serif text-foreground">
                In Brief
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Additional Works
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-content">
              {otherProjects.map((project, index) => (
                <article
                  key={index}
                  className="border border-foreground/20 p-6 hover:border-foreground transition-colors duration-300 bg-background"
                  data-testid={`project-other-${index}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold font-serif text-foreground leading-tight">
                      {project.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase border border-foreground px-1 py-0.5 rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm font-sans text-foreground/70 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-foreground/10">
                    {project.technologies.slice(0, 3).map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[10px] font-mono text-muted-foreground uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-muted-foreground">
                        +
                      </span>
                    )}
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
