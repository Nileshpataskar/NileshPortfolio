import React from "react";

export const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden"
      data-testid="footer-section"
    >
      {/* Magical top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600/50 via-amber-500/80 to-amber-600/50"></div>

      {/* Decorative particles for footer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animation: `float-particle ${10 + i * 2}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-serif mb-8 leading-none tracking-tighter magical-headline">
              Ready to create
              <br />
              <span className="shimmer-text">the future?</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                href={`mailto:${data.email}`}
                className="magical-link text-xl md:text-2xl font-mono hover:text-amber-400 transition-colors"
              >
                {data.email}
              </a>
              <div className="flex gap-4 text-sm font-mono uppercase tracking-widest text-background/60">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Response: &lt; 24h
                </span>
                <span>Status: Online</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div className="float-gentle">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-4 text-background/50">
                  ✦ Based
                </h3>
                <p className="font-sans text-lg">{data.location}</p>
              </div>
              <div className="float-gentle">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-4 text-background/50">
                  ✦ Social Channel
                </h3>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magical-link font-sans text-lg"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 border border-background/20 bg-background/5 backdrop-blur-sm magical-border">
              <div className="text-xs font-mono uppercase tracking-widest mb-2 text-background/50 shimmer-text">
                System Notice
              </div>
              <p className="font-sans text-sm leading-relaxed text-background/80">
                This portfolio was architected using Next.js 15 and Tailwind CSS
                v4. Optimized for editorial excellence and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-background/40">
          <div>
            © {currentYear} {data.name} · All Rights Reserved
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            <span>Crafted with Magic</span>
            <span className="text-amber-500">✦</span>
          </div>
          <div className="md:text-right">End of Issue · Vol. {currentYear}</div>
        </div>
      </div>
    </footer>
  );
};
