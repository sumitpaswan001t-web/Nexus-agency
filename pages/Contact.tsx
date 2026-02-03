import React, { useState } from 'react';
import { SectionTitle, Button, Input, Checkbox, TextArea } from '../components/UI';
import { CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '',
    services: [] as string[],
    budget: '', timeline: '', description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    // Simple validation
    const newErrors: Record<string, string> = {};
    if (step === 1) {
       if (!formData.name) newErrors.name = 'Name is required';
       if (!formData.email) newErrors.email = 'Email is required';
    }
    if (step === 2 && formData.services.length === 0) {
       newErrors.services = 'Select at least one service';
    }
    
    if (Object.keys(newErrors).length > 0) {
       setErrors(newErrors);
       return;
    }
    setErrors({});
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (!formData.description) {
        setErrors({ description: 'Please describe your project' });
        return;
     }
     // Mock API call
     setTimeout(() => setIsSubmitted(true), 1000);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
       ...prev,
       services: prev.services.includes(service) 
         ? prev.services.filter(s => s !== service)
         : [...prev.services, service]
    }));
  };

  if (isSubmitted) {
     return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 md:px-12">
           <CheckCircle size={80} className="mb-8" />
           <h1 className="text-5xl font-black uppercase mb-4 font-display">Transmission Received</h1>
           <p className="font-mono text-xl max-w-lg mb-8">
              We have received your project dossier. Our team will review the requirements and establish contact within 24 hours.
           </p>
           <Button onClick={() => window.location.href='/'}>RETURN TO BASE</Button>
        </div>
     );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
       {/* Info Side */}
       <div className="bg-black text-white p-6 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 font-display">Initiate <br/> Protocol</h1>
          <p className="font-mono text-lg text-gray-400 mb-12 max-w-md">
             Use this secure channel to brief us on your requirements. Precision in your description allows for precision in our response.
          </p>
          
          <div className="space-y-8 font-mono text-sm">
             <div>
                <span className="block text-gray-500 mb-2">DIRECT LINE</span>
                <a href="mailto:hello@nexus.agency" className="text-xl underline hover:text-gray-300">hello@nexus.agency</a>
             </div>
             <div>
                <span className="block text-gray-500 mb-2">HEADQUARTERS</span>
                <p>840 Battery St, San Francisco<br/>CA 94111, United States</p>
             </div>
          </div>
       </div>

       {/* Form Side */}
       <div className="bg-white p-6 md:p-12 flex flex-col justify-center">
          <div className="mb-8 flex items-center gap-4 font-mono text-xs tracking-widest">
             <span className={step >= 1 ? 'bg-black text-white px-2 py-1' : 'bg-gray-200 px-2 py-1'}>01 ID</span>
             <span className="text-gray-300">/</span>
             <span className={step >= 2 ? 'bg-black text-white px-2 py-1' : 'bg-gray-200 px-2 py-1'}>02 SCOPE</span>
             <span className="text-gray-300">/</span>
             <span className={step >= 3 ? 'bg-black text-white px-2 py-1' : 'bg-gray-200 px-2 py-1'}>03 DETAILS</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 max-w-lg w-full">
             {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                   <h2 className="text-3xl font-black uppercase font-display">Identification</h2>
                   <div>
                      <label className="block font-bold mb-2 font-mono text-sm">FULL NAME *</label>
                      <Input 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        placeholder="John Doe"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-red-500 font-mono text-xs mt-1">{errors.name}</p>}
                   </div>
                   <div>
                      <label className="block font-bold mb-2 font-mono text-sm">EMAIL ADDRESS *</label>
                      <Input 
                        type="email"
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        placeholder="john@company.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-red-500 font-mono text-xs mt-1">{errors.email}</p>}
                   </div>
                   <div>
                      <label className="block font-bold mb-2 font-mono text-sm">COMPANY</label>
                      <Input 
                        value={formData.company} 
                        onChange={e => setFormData({...formData, company: e.target.value})} 
                        placeholder="Acme Corp"
                      />
                   </div>
                   <Button type="button" onClick={handleNext} fullWidth>PROCEED TO SCOPE</Button>
                </div>
             )}

             {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                   <h2 className="text-3xl font-black uppercase font-display">Scope Definition</h2>
                   <p className="font-mono text-sm text-gray-500 mb-4">Select all required capabilities.</p>
                   <div className="space-y-4">
                      {['Digital Architecture', 'Interface Engineering', 'Brand Positioning', 'Audit & Strategy'].map(s => (
                         <Checkbox 
                            key={s} 
                            label={s} 
                            checked={formData.services.includes(s)}
                            onChange={() => toggleService(s)}
                         />
                      ))}
                   </div>
                   {errors.services && <p className="text-red-500 font-mono text-xs">{errors.services}</p>}
                   <div className="flex gap-4 pt-4">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">BACK</Button>
                      <Button type="button" onClick={handleNext} className="flex-1">PROCEED TO DETAILS</Button>
                   </div>
                </div>
             )}

             {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                   <h2 className="text-3xl font-black uppercase font-display">Project Parameters</h2>
                   <div>
                      <label className="block font-bold mb-2 font-mono text-sm">BUDGET RANGE</label>
                      <select 
                        className="w-full bg-[#F0F0F0] border-b-2 border-black p-4 font-mono focus:outline-none"
                        value={formData.budget}
                        onChange={e => setFormData({...formData, budget: e.target.value})}
                      >
                         <option value="">Select Range...</option>
                         <option value="50-100k">$50k - $100k</option>
                         <option value="100-250k">$100k - $250k</option>
                         <option value="250k+">$250k+</option>
                      </select>
                   </div>
                   <div>
                      <label className="block font-bold mb-2 font-mono text-sm">PROJECT BRIEF *</label>
                      <TextArea 
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        placeholder="Describe the challenge and desired outcomes..."
                        className={errors.description ? 'border-red-500' : ''}
                      />
                      {errors.description && <p className="text-red-500 font-mono text-xs mt-1">{errors.description}</p>}
                   </div>
                   <div className="flex gap-4 pt-4">
                      <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">BACK</Button>
                      <Button type="submit" className="flex-[2]">TRANSMIT</Button>
                   </div>
                </div>
             )}
          </form>
       </div>
    </div>
  );
};

export default Contact;