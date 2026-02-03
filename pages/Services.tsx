import React from 'react';
import { SERVICES } from '../constants';
import { SectionTitle, Button } from '../components/UI';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-black text-white py-32 px-6 md:px-12 border-b-2 border-black relative overflow-hidden">
        <div className="absolute right-0 top-0 text-[30vw] font-black text-gray-900 leading-none -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none font-display">
           SERV
        </div>
        <div className="max-w-5xl relative z-10">
          <div className="font-mono text-[#FF3300] text-sm tracking-widest mb-4">CAPABILITIES INDEX</div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 font-display leading-[0.85]">
             Total <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Engineering</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans font-medium text-gray-400 max-w-2xl leading-relaxed">
            We provide full-cycle digital engineering. From architectural strategy to high-fidelity interface design, our services are integrated for maximum impact.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-12">
          {SERVICES.map((service, idx) => (
            <section key={service.id} className={`flex flex-col md:flex-row border-b-2 border-black ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F0F0F0]'}`}>
              <div className="p-6 md:p-12 md:w-4/12 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
                <div>
                   <span className="text-8xl font-black text-transparent block mb-4 font-display" style={{ WebkitTextStroke: '2px black' }}>0{idx + 1}</span>
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 font-display leading-[0.9]">{service.title}</h2>
                </div>
                <Link to="/contact">
                  <Button variant="outline" className="mt-4 w-full">INQUIRE ABOUT THIS</Button>
                </Link>
              </div>
              <div className="p-6 md:p-12 md:w-8/12">
                <h3 className="font-mono font-bold text-xs mb-6 uppercase tracking-widest text-[#FF3300] border-b border-black pb-2 inline-block">Philosophy</h3>
                <p className="text-2xl md:text-3xl font-display font-bold leading-tight mb-16 max-w-3xl">
                  {service.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="bg-black text-white p-8 shadow-[8px_8px_0px_0px_#FF3300]">
                      <h4 className="font-mono font-bold text-sm mb-6 uppercase text-[#FF3300]">Deliverables</h4>
                      <ul className="space-y-4">
                        {service.deliverables.map(item => (
                            <li key={item} className="flex items-start font-bold font-sans text-lg">
                                <span className="mr-3 text-[#FF3300]">■</span> {item}
                            </li>
                        ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-mono font-bold text-sm mb-6 uppercase text-gray-500">Methodology</h4>
                      <p className="text-lg leading-relaxed font-sans">{service.methodology}</p>
                   </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      
      <section className="py-32 px-6 md:px-12 border-b-2 border-black bg-[#FF3300] text-black">
        <SectionTitle title="The Process" subtitle="Linear progression to launch" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {[
                { step: '01', title: 'AUDIT', desc: 'Rigorous analysis of current infrastructure and market position.' },
                { step: '02', title: 'STRATEGY', desc: 'Defining the architectural roadmap and visual direction.' },
                { step: '03', title: 'EXECUTION', desc: 'Agile development cycles with bi-weekly deliverables.' },
                { step: '04', title: 'SCALE', desc: 'Deployment, monitoring, and iterative optimization.' }
            ].map((p, i) => (
                <div key={p.step} className="border-4 border-black bg-white p-8 hover:-translate-y-4 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300 group">
                    <div className="flex justify-between mb-8 border-b-2 border-black pb-4">
                       <span className="text-4xl font-black font-display">{p.step}</span>
                       <ArrowDown className="group-hover:translate-y-2 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-4 font-display">{p.title}</h3>
                    <p className="font-sans font-medium text-lg leading-tight">{p.desc}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Services;