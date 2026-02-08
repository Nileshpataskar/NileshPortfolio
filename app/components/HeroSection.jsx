import React, { useEffect, useState } from "react";

const HeroSection = ({ data }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="newspaper-page relative min-h-screen flex flex-col items-center justify-center bg-background px-6 md:px-12 lg:px-20 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-[0.03] pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="border-r border-foreground h-full"></div>
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Top Meta Bar */}
        <div className="flex justify-between items-center border-b border-foreground/20 pb-4 mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-2">
          </div>
          <div className="hidden md:block">
            VOL. 01 — {new Date().getFullYear()}
          </div>
          <div>{time} UTC+05:30</div>
        </div>

        {/* Main Content */}
        <div className="border-y-4 border-foreground py-16 md:py-24 relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-foreground -translate-x-1 -translate-y-1"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-foreground translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-foreground -translate-x-1 translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-foreground translate-x-1 translate-y-1"></div>

          <div className="space-y-8 text-left">
            <div className="inline-block px-4 py-1 border border-foreground font-mono text-xs font-bold uppercase tracking-widest bg-foreground text-background mb-4 hover:bg-background hover:text-foreground transition-colors duration-300">
              Breaking News: Open for Work
            </div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-black font-serif text-foreground leading-[0.8] tracking-tight mix-blend-multiply dark:mix-blend-normal"
              data-testid="hero-name"
            >
              {data.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="block hover:italic transition-all duration-500 cursor-default"
                >
                  {word}
                </span>
              ))}
            </h1>

            <div className="w-32 h-1 bg-foreground my-6"></div>

            <p className="text-xl md:text-2xl font-sans text-foreground/80 max-w-2xl leading-relaxed mb-6">
              {data.tagline}
            </p>

            {/* Prominent Email CTA */}
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-foreground font-mono text-sm font-bold  tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {data.email}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="relative aspect-3/4 md:aspect-square lg:aspect-4/5 bg-muted overflow-hidden border border-foreground group">
            <img
              src="/hero/hero2.png"
              alt="Developer at work"
              className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 transition-all duration-500"
            />

            {/* Overlay Glitch Effect */}
            <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mix-blend-difference">
              <span>Fig. 01</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Bottom Columns */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-foreground/20 bg-background/50 backdrop-blur-sm">
          <div className="space-y-2 border-l-2 border-foreground pl-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Current Role
            </h3>
            <p className="font-serif text-2xl font-bold">{data.title}</p>
          </div>

          <div className="space-y-2 border-l-2 border-foreground pl-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Base of Ops
            </h3>
            <p className="font-serif text-2xl font-bold">{data.location}</p>
          </div>

          <div className="space-y-2 border-l-2 border-foreground pl-6 group cursor-pointer">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
              Contact Protocol
            </h3>
            <p className="font-sans text-sm font-medium hover:underline underline-offset-4 decoration-1">
              {data.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
