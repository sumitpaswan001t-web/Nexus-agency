import React from 'react';
import { TEAM } from '../constants';
import { SectionTitle } from '../components/UI';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
       {/* Hero / Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
         <div className="p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 font-display">
               Designed <br/> For <br/> Impact
            </h1>
         </div>
         <div className="p-6 md:p-12 flex items-center bg-gray-50">
            <p className="text-lg md:text-xl font-mono leading-relaxed max-w-xl">
               Nexus was founded on a simple premise: most digital agencies prioritize aesthetics over engineering. We flip the script. 
               <br/><br/>
               We are a collective of systems architects, interface engineers, and strategists who believe that the most beautiful product is one that works flawlessly at scale.
            </p>
         </div>
      </section>

      {/* Values */}
      <section className="bg-black text-white py-20 px-6 md:px-12 border-b-2 border-black">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
               { title: 'RADICAL TRUTH', desc: 'We do not sugarcoat technical debt. We expose it and fix it.' },
               { title: 'SYSTEMS THINKING', desc: 'We build factories, not just individual products.' },
               { title: 'SPEED IS A FEATURE', desc: 'Performance is the primary metric of user experience.' }
            ].map((val, i) => (
               <div key={i}>
                  <h3 className="text-2xl font-black uppercase mb-4 text-white border-l-4 border-white pl-4 font-display">{val.title}</h3>
                  <p className="font-mono text-gray-400">{val.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-12 border-b-2 border-black">
         <SectionTitle title="Leadership" subtitle="The architects behind the agency" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(member => (
               <div key={member.id} className="border-2 border-black p-0 bg-white group hover:bg-black hover:text-white transition-colors duration-300">
                  <div className="aspect-square border-b-2 border-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
                     <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                     <h3 className="text-xl font-black uppercase mb-1 font-display">{member.name}</h3>
                     <p className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-400 mb-4">{member.role}</p>
                     <p className="text-sm leading-relaxed mb-4 opacity-80">{member.bio}</p>
                     <div className="flex flex-wrap gap-2">
                        {member.expertise.map(exp => (
                           <span key={exp} className="text-[10px] font-bold border border-black group-hover:border-white px-2 py-1 uppercase font-mono">{exp}</span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
      
      {/* Office */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black min-h-[400px]">
         <div className="bg-gray-200 border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-12 flex flex-col justify-end">
             <h3 className="text-4xl font-black uppercase font-display">SOMA DISTRICT</h3>
             <p className="font-mono text-lg">San Francisco, CA</p>
         </div>
         <div className="p-6 md:p-12 flex flex-col justify-center">
            <h3 className="font-bold uppercase text-xl mb-4 font-display">Our Studio</h3>
            <p className="max-w-md mb-8">
               Located in a converted industrial warehouse, our space reflects our philosophy: exposed structure, open collaboration, and zero distractions.
            </p>
            <div className="font-mono text-sm space-y-1">
               <p>MON-FRI: 09:00 - 18:00</p>
               <p>VISITORS BY APPOINTMENT ONLY</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;