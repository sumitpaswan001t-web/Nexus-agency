import React from 'react';
import { SectionTitle } from '../components/UI';

const Legal: React.FC = () => {
  return (
    <div className="px-6 md:px-12 py-20 min-h-screen">
       <SectionTitle title="Legal / Privacy" />
       
       <div className="max-w-4xl space-y-12">
          <section>
             <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-black inline-block font-display">01. Terms of Use</h3>
             <p className="text-lg leading-relaxed text-gray-700">
                By accessing this website, you agree to be bound by these terms. This site is provided "as is" without warranties. 
                Nexus Agency reserves the right to modify content or terminate services at any time.
             </p>
          </section>

          <section>
             <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-black inline-block font-display">02. Data Collection</h3>
             <p className="text-lg leading-relaxed text-gray-700 mb-4">
                We collect minimal data necessary for operational purposes. When you submit an inquiry, we store your contact details solely for communication regarding your project.
             </p>
             <ul className="list-disc pl-5 font-mono text-sm space-y-2">
                <li>We do not sell data to third parties.</li>
                <li>Cookies are used strictly for analytics and session management.</li>
                <li>You may request deletion of your data at any time via hello@nexus.agency.</li>
             </ul>
          </section>

          <section>
             <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-black inline-block font-display">03. Intellectual Property</h3>
             <p className="text-lg leading-relaxed text-gray-700">
                All content, code, and design assets on this domain are the intellectual property of Nexus Agency unless otherwise stated. 
                Unauthorized reproduction is strictly prohibited.
             </p>
          </section>
       </div>
    </div>
  );
};

export default Legal;