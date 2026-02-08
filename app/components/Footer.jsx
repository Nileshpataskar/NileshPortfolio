import React from 'react';

export const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#1A1A1A] text-[#F5F3EE] px-6 md:px-12 lg:px-20 py-12"
      data-testid="footer-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Masthead style footer */}
        <div className="border-t-2 border-b border-[#F5F3EE] py-6 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-center">
            {data.name}
          </h3>
          <p className="text-center text-sm font-['Inter'] mt-2">
            {data.title}
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-['Inter'] mb-2">
              Email
            </h4>
            <a 
              href={`mailto:${data.email}`}
              className="text-sm font-['Inter'] hover:underline"
              data-testid="footer-email"
            >
              {data.email}
            </a>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-['Inter'] mb-2">
              Phone
            </h4>
            <a 
              href={`tel:${data.phone}`}
              className="text-sm font-['Inter'] hover:underline"
              data-testid="footer-phone"
            >
              {data.phone}
            </a>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-['Inter'] mb-2">
              Location
            </h4>
            <p className="text-sm font-['Inter']">
              {data.location}
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-['Inter'] mb-2">
              LinkedIn
            </h4>
            <a 
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-['Inter'] hover:underline"
              data-testid="footer-linkedin"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Copyright - small print */}
        <div className="border-t border-[#F5F3EE] pt-6 text-center">
          <p className="text-xs font-['Inter']">
            © {currentYear} {data.name}. All rights reserved.
          </p>
          <p className="text-xs font-['Inter'] mt-1 opacity-70">
            Designed with editorial precision · Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};
