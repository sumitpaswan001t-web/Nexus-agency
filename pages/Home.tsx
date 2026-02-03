import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe, Zap, Box } from 'lucide-react';
import { SERVICES, PROJECTS, STATS } from '../constants';
import { Button, SectionTitle, Marquee } from '../components/UI';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 py-20 relative border-b-2 border-black overflow-hidden">
        <div className="max-w-[1920px] mx-auto w-full z-10">
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
             <div className="h-[2px] w-12 bg-[#FF3300]"></div>
             <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#FF3300]">
                System Architecture // Interface Engineering
             </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[11vw] leading-[0.9] font-black tracking-tighter mb-12 font-display animate-fade-up break-words w-full" style={{ animationDelay: '0.1s' }}>
            BUILDING <br/>
            <span className="stroke-text">DIGITAL</span> <br/>
            MONUMENTS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
             <p className="md:col-span-5 text-xl md:text-2xl font-sans font-medium leading-tight max-w-2xl">
               We engineer <span className="bg-black text-white px-2">brutalist systems</span> for enterprises that value substance over decoration.
             </p>
             <div className="md:col-span-7 flex flex-col md:flex-row gap-4 justify-end">
                <Link to="/work">
                  <Button variant="primary" withIcon className="md:text-lg px-12 py-6">VIEW WORK</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="md:text-lg px-12 py-6">START PROJECT</Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Marquee Stats */}
      <section className="border-b-2 border-black w-full overflow-hidden">
         <Marquee>
            {STATS.map((stat, i) => (
               <span key={i} className="mx-12 font-mono text-3xl md:text-5xl font-bold uppercase flex items-center gap-4 shrink-0">
                  <span className="text-[#FF3300]">{stat.value}{stat.suffix}</span>
                  <span className="text-white opacity-50 text-base tracking-widest">{stat.label}</span>
                  <Star size={24} className="text-[#FF3300] fill-[#FF3300]" />
               </span>
            ))}
         </Marquee>
      </section>

      {/* Services Preview - Asymmetrical Grid */}
      <section className="px-6 md:px-12 py-32 border-b-2 border-black bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <SectionTitle title="Capabilities" subtitle="Our operational stack" accent />
             <div className="hidden md:block pb-6">
                <Globe size={64} strokeWidth={1} className="animate-spin-slow opacity-20" />
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {SERVICES.map((service, idx) => (
              <Link 
                key={service.id} 
                to="/services" 
                className={`group block border-2 border-black p-8 hover:bg-black hover:text-white transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#FF3300] bg-[#F0F0F0] ${
                   idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4' : 'md:col-span-12'
                }`}
              >
                <div className="flex justify-between items-start mb-12">
                   <div className="p-4 bg-white border-2 border-black group-hover:bg-[#FF3300] transition-colors">
                      {idx === 0 ? <Box size={32} /> : idx === 1 ? <Zap size={32} /> : <Globe size={32} />}
                   </div>
                   <span className="font-mono text-xs font-bold border border-black px-2 py-1 rounded-full group-hover:border-white group-hover:bg-white group-hover:text-black">0{idx + 1}</span>
                </div>
                
                <h3 className={`font-black mb-6 group-hover:text-[#FF3300] uppercase leading-none font-display break-words ${idx === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                   {service.title}
                </h3>
                
                <p className={`font-sans font-medium mb-12 opacity-80 max-w-xl ${idx === 0 ? 'text-lg md:text-xl' : 'text-base'}`}>
                   {service.shortDescription}
                </p>
                
                <div className="flex items-center gap-4 font-bold text-sm tracking-widest uppercase group-hover:text-[#FF3300] font-mono">
                  EXPLORE <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Full Width */}
      <section className="featured-work-container bg-[#111] text-white py-32 border-b-2 border-black overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3300] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-gray-800 pb-8">
              <div>
                 <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4 font-display">Work <span className="text-[#FF3300]">.</span></h2>
              </div>
              <Link to="/work" className="hidden md:flex items-center gap-2 text-white hover:text-[#FF3300] font-mono text-lg transition-colors">
                 VIEW ALL PROJECTS <ArrowRight size={20} />
              </Link>
           </div>

          <div className="flex flex-col gap-32">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <Link key={project.id} to="/work" className={`group flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-20 items-center`}>
                
                {/* Image */}
                <div className="w-full md:w-3/5 relative">
                   <div className={`absolute top-0 left-0 w-full h-full border-2 border-[#FF3300] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 ${idx % 2 !== 0 ? '-translate-x-4' : ''}`}></div>
                   <div className="aspect-[16/9] bg-gray-800 border-2 border-white overflow-hidden relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700">
                     <img 
                       src={`${project.thumbnailImage}&w=1200`} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       loading="lazy"
                     />
                     <div className="absolute inset-0 bg-[#FF3300] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                   </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-2/5">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-[#FF3300] text-xs border border-[#FF3300] px-2 py-1 uppercase">{project.industry}</span>
                      <span className="h-[1px] bg-gray-700 flex-grow"></span>
                      <span className="font-mono text-gray-500">{project.year}</span>
                   </div>
                   <h3 className="text-4xl md:text-7xl font-black uppercase mb-6 font-display leading-[0.9] group-hover:text-[#FF3300] transition-colors break-words">
                      {project.title}
                   </h3>
                   <p className="text-gray-400 text-lg mb-8 line-clamp-3 font-sans">
                      {project.challenge}
                   </p>
                   <span className="inline-flex items-center gap-2 font-mono text-sm border-b border-[#FF3300] pb-1 uppercase tracking-widest">
                      View Case Study <ArrowRight size={14} />
                   </span>
                </div>
              </Link>
            ))}
          </div>
          
          <Link to="/work" className="md:hidden mt-24 block w-full text-center border-2 border-white py-6 font-bold uppercase hover:bg-white hover:text-black transition-colors font-mono">
              VIEW ALL PROJECTS
          </Link>
         </div>
      </section>
      
      {/* Logos / Trust - Running Text */}
      <section className="py-24 border-b-2 border-black bg-[#F0F0F0] overflow-hidden">
        <div className="mb-12 text-center">
            <p className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Trusted By Industry Leaders</p>
        </div>
        <div className="whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-all duration-500 flex">
           <div className="inline-block animate-marquee shrink-0">
              {['APEX', 'VANTAGE', 'GLOBAL', 'QUANTUM', 'NEXUS', 'STRATA', 'HELIOS', 'OMEGA'].map((logo, i) => (
                 <span key={i} className="text-6xl md:text-8xl font-black tracking-tighter text-black mx-12 font-display">{logo}</span>
              ))}
           </div>
           <div className="inline-block animate-marquee shrink-0" aria-hidden="true">
              {['APEX', 'VANTAGE', 'GLOBAL', 'QUANTUM', 'NEXUS', 'STRATA', 'HELIOS', 'OMEGA'].map((logo, i) => (
                 <span key={i} className="text-6xl md:text-8xl font-black tracking-tighter text-black mx-12 font-display">{logo}</span>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 text-center bg-[#FF3300] text-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10 mix-blend-multiply"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-[10vw] font-black uppercase mb-12 tracking-tighter leading-[0.85] font-display break-words">Ready to <br/>Scale?</h2>
          <p className="font-mono text-lg md:text-xl max-w-2xl mx-auto mb-16 font-bold">We only work with clients prepared to make radical improvements.</p>
          <div className="flex justify-center">
             <Link to="/contact">
               <Button className="text-xl md:text-2xl py-6 md:py-8 px-12 md:px-20 border-4 bg-black text-white hover:bg-white hover:text-black hover:border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]" withIcon>INITIATE PROJECT</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;