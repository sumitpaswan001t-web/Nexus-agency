import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, ArrowUpRight, Filter } from 'lucide-react';
import { SectionTitle, Select } from '../components/UI';

const Work: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['ALL', 'FINTECH', 'LOGISTICS', 'REAL ESTATE', 'HEALTHCARE'];

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.industry.toUpperCase() === filter);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup to ensure body is never locked after unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <section className="px-6 md:px-12 py-20 border-b-2 border-black">
        <SectionTitle title="Case Studies" subtitle="Engineering outcomes." accent />
      </section>

      <div className="flex flex-col md:flex-row border-b-2 border-black relative">
         {/* Sticky Sidebar Filter */}
         <div className="w-full md:w-64 border-b-2 md:border-b-0 md:border-r-2 border-black bg-[#F0F0F0] md:sticky md:top-24 md:h-[calc(100vh-6rem)] overflow-y-auto p-6 md:pl-12 md:pr-6 md:py-8 z-10">
            <div className="flex items-center gap-2 mb-6 font-mono font-bold text-xs uppercase tracking-widest text-[#FF3300]">
               <Filter size={14} /> Filter
            </div>
            
            {/* Desktop */}
            <div className="hidden md:flex flex-col gap-2">
               {filters.map(f => (
                  <button
                     key={f}
                     onClick={() => setFilter(f)}
                     className={`text-left font-bold text-sm py-3 px-4 border-2 transition-all uppercase tracking-wider ${
                        filter === f 
                        ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_#FF3300]' 
                        : 'bg-white border-transparent hover:border-black text-gray-500 hover:text-black'
                     }`}
                  >
                     {f}
                  </button>
               ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden">
               <Select 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
               >
                  {filters.map(f => (
                     <option key={f} value={f}>{f}</option>
                  ))}
               </Select>
            </div>
         </div>

         {/* Grid */}
         <div className="flex-1 bg-white min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               {filteredProjects.map((project, idx) => (
                  <div 
                     key={project.id} 
                     className={`group relative border-black bg-white cursor-pointer overflow-hidden min-h-[450px] md:min-h-[500px] flex flex-col hover:z-10 transition-all ${
                        'border-b-2 ' + (idx % 2 === 0 ? 'lg:border-r-2' : '')
                     }`}
                     onClick={() => setSelectedProject(project)}
                  >
                     <div className="h-[280px] md:h-[300px] overflow-hidden relative border-b-2 border-black">
                        <img 
                           src={`${project.thumbnailImage}&w=800`} 
                           alt={project.title} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 relative z-10"
                           loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#FF3300] mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-20"></div>
                        
                        <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <span className="bg-black text-white p-3 inline-block">
                              <ArrowUpRight size={24} />
                           </span>
                        </div>
                     </div>
                     
                     <div className="p-8 flex-1 flex flex-col justify-between bg-white relative z-10 group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
                        <div>
                           <div className="flex justify-between items-start mb-4">
                              <span className="font-mono text-[10px] md:text-xs font-bold border border-black group-hover:border-white px-2 py-1 uppercase">{project.industry}</span>
                              <span className="font-mono text-xs text-gray-500 group-hover:text-gray-400">{project.year}</span>
                           </div>
                           <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 leading-[0.9] font-display break-words">{project.title}</h3>
                           <p className="font-mono text-[10px] md:text-xs text-gray-500 group-hover:text-gray-400 uppercase tracking-widest">{project.client}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            {filteredProjects.length === 0 && (
               <div className="p-20 text-center">
                  <p className="font-mono text-xl text-gray-500">NO PROJECTS FOUND IN THIS SECTOR.</p>
               </div>
            )}
         </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FF3300]/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <div className="bg-[#F0F0F0] w-full max-w-7xl h-full md:h-[90vh] border-4 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative flex flex-col md:flex-row animate-in slide-in-from-bottom-10 duration-500 overflow-hidden">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-0 right-0 z-[60] bg-black text-white p-4 hover:bg-[#FF3300] hover:text-black transition-colors border-b-2 border-l-2 border-black"
              aria-label="Close Case Study"
            >
              <X size={28} md:size={32} />
            </button>

            {/* Left Col: Image Gallery */}
            <div className="w-full md:w-5/12 bg-black h-[40vh] md:h-full overflow-y-auto border-b-2 md:border-b-0 md:border-r-2 border-black">
               {selectedProject.gallery.map((img, i) => (
                  <div key={i} className="relative group border-b-2 border-gray-800 last:border-0">
                     <img src={`${img}&w=1000`} alt={`Gallery ${i}`} className="w-full grayscale group-hover:grayscale-0 transition-all" loading="lazy" />
                     <div className="absolute top-4 left-4 bg-black text-white font-mono text-xs px-2 py-1 border border-white/20">0{i+1}</div>
                  </div>
               ))}
            </div>

            {/* Right Col: Content */}
            <div className="w-full md:w-7/12 h-[60vh] md:h-full overflow-y-auto bg-white relative">
              <div className="p-8 md:p-20 pb-32">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#FF3300] block mb-6 border-l-4 border-[#FF3300] pl-3 py-1">CASE STUDY // {selectedProject.id}</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-12 leading-[0.85] font-display break-words">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="space-y-12 md:space-y-16">
                    <div>
                       <h3 className="text-xl md:text-2xl font-black border-b-4 border-black pb-3 mb-6 uppercase inline-block font-display">Challenge</h3>
                       <p className="text-lg md:text-xl leading-relaxed font-sans font-medium text-gray-800">{selectedProject.challenge}</p>
                    </div>
                    
                    <div>
                       <h3 className="text-xl md:text-2xl font-black border-b-4 border-black pb-3 mb-6 uppercase inline-block font-display">Solution</h3>
                       <p className="text-lg md:text-xl leading-relaxed font-sans font-medium text-gray-800">{selectedProject.solution}</p>
                    </div>

                    <div>
                       <h3 className="text-xl md:text-2xl font-black border-b-4 border-black pb-3 mb-6 uppercase inline-block font-display">Outcomes</h3>
                       <ul className="grid grid-cols-1 gap-4 font-mono text-xs md:text-sm">
                          {selectedProject.outcomes.map((o, i) => (
                            <li key={i} className="flex items-start bg-[#F0F0F0] border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                               <span className="mr-4 text-[#FF3300] font-black text-lg md:text-xl leading-none">➜</span> 
                               <span>{o}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    <div className="bg-black text-white p-6 md:p-8 border-2 border-black shadow-[8px_8px_0px_0px_#FF3300]">
                       <h3 className="text-lg md:text-xl font-black mb-6 uppercase font-display text-[#FF3300]">Tech Stack</h3>
                       <div className="flex flex-wrap gap-2 md:gap-3">
                          {selectedProject.services.map(s => (
                             <span key={s} className="border border-white px-3 md:px-4 py-1 md:py-2 text-[10px] md:text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors cursor-default font-mono">{s}</span>
                          ))}
                       </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;