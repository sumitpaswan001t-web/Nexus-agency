import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Github, Linkedin, Twitter, Square } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: 'https://nexus-agency.pages.dev/', label: 'HOME', external: true },
    { path: '/services', label: 'SERVICES' },
    { path: '/work', label: 'WORK' },
    { path: '/about', label: 'ABOUT' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <div className="noise-overlay"></div>
      <header className="fixed top-0 left-0 w-full z-[100] bg-[#F0F0F0]/90 backdrop-blur-sm border-b-2 border-black">
        <div className="flex justify-between items-center h-24 px-6 md:px-12 max-w-[1920px] mx-auto">
          <Link to="/" className="text-3xl font-black tracking-tighter font-display flex items-center gap-2 group" onClick={closeMenu}>
            <Square className="fill-black group-hover:fill-[#FF3300] transition-colors" size={24} />
            NEXUS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-xs font-bold font-mono tracking-widest px-5 py-2 transition-all border border-transparent hover:border-black uppercase text-gray-500 hover:text-black"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold font-mono tracking-widest px-5 py-2 transition-all border border-transparent hover:border-black uppercase ${
                    location.pathname === link.path 
                      ? 'bg-black text-white' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 hover:bg-[#FF3300] hover:text-black transition-colors border-2 border-transparent hover:border-black" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed left-0 w-full bg-[#FF3300] z-[70] flex flex-col p-6 animate-fade-up overflow-y-auto pb-12 overscroll-contain"
            style={{ 
              top: '6rem', 
              height: 'calc(100svh - 6rem)' 
            }}
          >
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    className="text-5xl md:text-6xl font-black tracking-tighter uppercase font-display hover:translate-x-4 transition-transform text-black opacity-70 hover:opacity-100 break-words"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`text-5xl md:text-6xl font-black tracking-tighter uppercase font-display hover:translate-x-4 transition-transform break-words ${
                      location.pathname === link.path ? 'text-white' : 'text-black opacity-70 hover:opacity-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
            <div className="mt-12 pt-8 border-t-4 border-black">
              <Link to="/contact" onClick={closeMenu} className="flex items-center gap-4 text-xl md:text-2xl font-bold font-mono tracking-widest bg-black text-white p-6 justify-between group">
                START PROJECT <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 px-6 md:px-12 mt-auto relative overflow-hidden">
      {/* Decorative massive text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
        <h1 className="text-[20vw] font-black leading-none font-display whitespace-nowrap">AUTHORITY</h1>
      </div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 relative z-10">
        <div className="md:col-span-5 pr-8">
          <Link to="/" className="text-4xl font-black tracking-tighter font-display mb-8 block hover:text-[#FF3300] transition-colors w-max">
            NEXUS / AGENCY
          </Link>
          <p className="max-w-md text-gray-500 font-mono text-sm leading-relaxed mb-8">
            We engineer digital dominance. A collective of systems architects and interface designers building infrastructure for the next generation of industry leaders.
          </p>
          <div className="font-mono text-xs text-[#FF3300] border border-[#FF3300] inline-block px-3 py-1 uppercase tracking-widest">
            San Francisco, CA
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase font-mono border-b border-gray-800 pb-2">Directory</h3>
          <ul className="space-y-4 font-bold font-display text-2xl">
            <li><Link to="/services" className="hover:text-[#FF3300] hover:pl-2 transition-all">SERVICES</Link></li>
            <li><Link to="/work" className="hover:text-[#FF3300] hover:pl-2 transition-all">WORK</Link></li>
            <li><Link to="/about" className="hover:text-[#FF3300] hover:pl-2 transition-all">ABOUT</Link></li>
            <li><Link to="/blog" className="hover:text-[#FF3300] hover:pl-2 transition-all">INSIGHTS</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase font-mono border-b border-gray-800 pb-2">Transmission</h3>
          <div className="flex gap-4 mb-12">
            <a href="#" className="hover:bg-[#FF3300] hover:text-black hover:border-[#FF3300] p-4 border border-gray-700 transition-all"><Twitter size={20} /></a>
            <a href="#" className="hover:bg-[#FF3300] hover:text-black hover:border-[#FF3300] p-4 border border-gray-700 transition-all"><Linkedin size={20} /></a>
            <a href="#" className="hover:bg-[#FF3300] hover:text-black hover:border-[#FF3300] p-4 border border-gray-700 transition-all"><Github size={20} /></a>
          </div>
          <Link to="/contact" className="group block w-full bg-white text-black text-center py-6 font-black font-mono uppercase tracking-widest hover:bg-[#FF3300] transition-colors">
            Initiate Project <ArrowUpRight className="inline ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between text-[10px] font-mono text-gray-600 uppercase tracking-widest">
        <p>© 2024 NEXUS AGENCY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link to="/legal" className="hover:text-[#FF3300]">PRIVACY POLICY</Link>
          <Link to="/legal" className="hover:text-[#FF3300]">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] text-[#111] font-sans selection:bg-[#FF3300] selection:text-white">
      <Header />
      <main className="flex-grow mt-24">
        <div key={location.pathname} className="animate-fade-up">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
