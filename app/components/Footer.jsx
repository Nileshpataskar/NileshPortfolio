import React from "react";

export const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden"
      data-testid="footer-section"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-background via-transparent to-background opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-serif mb-8 leading-none tracking-tighter mix-blend-difference">
              Ready to create
              <br />
              the future?
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                href={`mailto:${data.email}`}
                className="text-xl md:text-2xl font-mono hover:text-muted-foreground transition-colors underline underline-offset-8 decoration-1"
              >
                {data.email}
              </a>
              <div className="flex gap-4 text-sm font-mono uppercase tracking-widest text-background/60">
                <span>Response time: &lt; 24h</span>
                <span>Status: Online</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-4 text-background/50">
                  Coordinates
                </h3>
                <p className="font-sans text-lg">{data.location}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-4 text-background/50">
                  Social Channel
                </h3>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-lg hover:underline underline-offset-4"
                >
                  LinkedIn Output
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 border border-background/20 bg-background/5 backdrop-blur-sm">
              <div className="text-xs font-mono uppercase tracking-widest mb-2 text-background/50">
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
            © {currentYear} {data.name} · All signal rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Index</span>
            <span>Archive</span>
            <span>Term</span>
          </div>
          <div className="md:text-right">End of Issue · Vol. {currentYear}</div>
        </div>
      </div>
    </footer>
  );
};
