import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              MAHI<span className="text-blue-500">ALAM</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Building digital experiences that matter. Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="https://dev-mahialam.vercel.app" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
            <a href="mailto:contact@mahialam.com" className="hover:text-blue-400 transition-colors">Hire Me</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {/* Facebook */}
            <a href="https://www.facebook.com/mahialam.rahat2/" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/mahialam-rahat/" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>

            {/* Portfolio / Globe */}
            <a href="https://dev-mahialam.vercel.app" target="_blank" rel="noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mahi Alam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 text-sm">♥</span> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;