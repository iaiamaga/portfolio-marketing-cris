import React from 'react';
import { socialLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021827] py-8">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group"
            >
             {/* FIX: Use `group-hover` for consistent hover effect behavior on the link.
                 This resolves the TypeScript error by allowing className to be passed to the icon components
                 and improves UI by triggering the hover effect on the entire link area. */}
             {React.cloneElement(link.icon as React.ReactElement, { className: "text-slate-500 group-hover:text-sky-600 transition-colors duration-300" })}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Cristiane Magalhães. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;