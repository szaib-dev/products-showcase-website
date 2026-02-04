'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  Building2, 
  UserCheck, 
  Globe, 
  Truck, 
  CheckCircle2, 
  Send,
  Calendar,
  ChevronDown
} from 'lucide-react';

export default function TradeFormPage() {
  // --- State Management ---
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    companyName: '',
    dba: '',
    contactName: '',
    whatsapp: '',
    regYear: '',
    regAddress: '',
    shipAddress: '',
    businessType: '',
    monthlyVolume: '',
    businessNature: '',
    salesChannels: [] as string[],
    websiteUrl: '',
    storeName: '',
    shippingType: '',
    declarations: {
      accurate: false,
      policies: false,
      verification: false,
      backgroundCheck: false
    },
    additionalComments: '',
    date: ''
  });

  // --- Handlers ---
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxGroup = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const channels = prev.salesChannels;
      if (checked) return { ...prev, salesChannels: [...channels, value] };
      return { ...prev, salesChannels: channels.filter(c => c !== value) };
    });
  };

  const handleDeclaration = (field: keyof typeof formData.declarations) => {
    setFormData(prev => ({
      ...prev,
      declarations: { ...prev.declarations, [field]: !prev.declarations[field] }
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('--- Form Submission Data ---');
    console.log(JSON.stringify(formData, null, 2));
    alert('Application Submitted! Check console for data.');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0c4a6e] text-white py-16 relative overflow-hidden shadow-lg">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Trade Account Application
          </h1>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto font-medium">
            Partner with MegaMart. Apply for wholesale pricing and exclusive distributor benefits.
          </p>
        </div>
      </section>

      {/* --- MAIN FORM --- */}
      <main className="container mx-auto px-4 -mt-10 pb-20 relative z-20">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* 1. CONTACT VERIFICATION */}
          <div className="p-8 lg:p-10 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0EA5E9] border border-sky-200 shadow-sm">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0c4a6e]">Contact Verification</h2>
                <p className="text-gray-500 text-sm font-medium">Primary contact details for your account.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  onChange={handleChange}
                  placeholder="business@company.com"
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                  required
                />
              </div>
            </div>
          </div>

          {/* 2. BUSINESS INFORMATION */}
          <div className="p-8 lg:p-10 border-b border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0EA5E9] border border-sky-200 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0c4a6e]">Business Information</h2>
                <p className="text-gray-500 text-sm font-medium">Legal details of your entity.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Registered Company Name *</label>
                <input type="text" name="companyName" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" required />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Doing Business As (DBA)</label>
                <input type="text" name="dba" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Contact Name *</label>
                <input type="text" name="contactName" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">WhatsApp Number</label>
                <input type="tel" name="whatsapp" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Year of Registration *</label>
                <input type="number" name="regYear" onChange={handleChange} placeholder="YYYY" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Company Registered Address *</label>
                <input type="text" name="regAddress" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 mb-2">Shipping Address *</label>
                <input type="text" name="shipAddress" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all" required />
              </div>
            </div>
          </div>

          {/* 3. OPERATIONS */}
          <div className="p-8 lg:p-10 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0EA5E9] border border-sky-200 shadow-sm">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0c4a6e]">Business Operations</h2>
                <p className="text-gray-500 text-sm font-medium">How you operate and sell.</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Type of Business Radio Group */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-4">Type of Business *</label>
                <div className="flex flex-wrap gap-4">
                  {['Online Seller', 'Retail Store', 'Wholesaler', 'Distributor', 'Importer/Exporter'].map((type) => (
                    <label key={type} className="relative cursor-pointer group">
                      <input 
                        type="radio" 
                        name="businessType" 
                        value={type} 
                        onChange={handleChange}
                        className="peer sr-only" 
                        required
                      />
                      <div className="px-5 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-600 font-medium peer-checked:border-[#0EA5E9] peer-checked:bg-sky-50 peer-checked:text-[#0c4a6e] hover:border-gray-300 transition-all shadow-sm">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Custom Dropdown for Buying Volume */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Estimated Monthly Purchasing Volume (USD) *</label>
                <div className="relative">
                  <select 
                    name="monthlyVolume"
                    onChange={handleChange}
                    className="w-full md:w-1/2 px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none appearance-none font-medium cursor-pointer"
                    required
                  >
                    <option value="">Select volume...</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                  <ChevronDown className="absolute left-[calc(50%-2rem)] md:left-[calc(50%-3rem)] right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none md:translate-x-0 translate-x-[calc(50vw-2rem)]" />
                  {/* Note: In a real responsive layout without fixed width logic, simply place icon 'right-4' of parent relative container. 
                      Since the select is w-full md:w-1/2, the icon needs to be positioned relative to that width. 
                      Simpler approach below: wrap select in div matching width.
                  */}
                </div>
                {/* Re-doing the structure for proper icon placement */}
                <div className="relative w-full md:w-1/2 mt-2">
                   <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Nature of Business *</label>
                <textarea 
                  name="businessNature"
                  onChange={handleChange}
                  rows={3} 
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none resize-none" 
                  placeholder="Briefly describe what you sell..."
                  required
                />
              </div>
            </div>
          </div>

          {/* 4. SALES CHANNELS */}
          <div className="p-8 lg:p-10 border-b border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0EA5E9] border border-sky-200 shadow-sm">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0c4a6e]">Sales Channels</h2>
                <p className="text-gray-500 text-sm font-medium">Where your products are sold.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-4">Where do you sell? (Select all that apply) *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Own Website', 'Physical Store', 'Amazon', 'Walmart', 'eBay', 'TikTok Shop', 'Facebook', 'Other'].map((channel) => (
                    <label key={channel} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-[#0EA5E9] transition-colors cursor-pointer">
                      <input 
                        type="checkbox" 
                        value={channel}
                        onChange={handleCheckboxGroup}
                        className="w-5 h-5 rounded border-gray-300 text-[#0EA5E9] focus:ring-[#0EA5E9] cursor-pointer" 
                      />
                      <span className="text-sm font-medium text-gray-800">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Website URL</label>
                  <input type="url" name="websiteUrl" onChange={handleChange} placeholder="https://" className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Store Name</label>
                  <input type="text" name="storeName" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none" />
                </div>
              </div>

              {/* Shipping Preference */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-4">Shipping Destination Type *</label>
                <div className="flex flex-col sm:flex-row gap-6">
                  {['Commercial Address', 'Residential Address'].map((shipType) => (
                    <label key={shipType} className="flex items-center gap-3 cursor-pointer">
                      <div className="relative flex items-center">
                        <input 
                          type="radio" 
                          name="shippingType" 
                          value={shipType}
                          onChange={handleChange}
                          className="peer w-5 h-5 border-2 border-gray-400 rounded-full text-[#0EA5E9] focus:ring-[#0EA5E9] checked:border-[#0EA5E9]" 
                          required
                        />
                      </div>
                      <span className="text-gray-900 font-semibold">{shipType}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. DECLARATIONS & SUBMIT */}
          <div className="p-8 lg:p-10 bg-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-[#0EA5E9] border border-sky-200 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0c4a6e]">Declarations & Compliance</h2>
                <p className="text-gray-500 text-sm font-medium">Finalizing your application.</p>
              </div>
            </div>

            <div className="space-y-5 mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input type="checkbox" onChange={() => handleDeclaration('accurate')} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#0EA5E9] focus:ring-[#0EA5E9]" required />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 leading-relaxed">I verify that the information provided above is accurate and true to the best of my knowledge.</span>
              </label>
              <label className="flex items-start gap-4 cursor-pointer group">
                <input type="checkbox" onChange={() => handleDeclaration('policies')} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#0EA5E9] focus:ring-[#0EA5E9]" required />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 leading-relaxed">I acknowledge reading and agree to comply with the wholesale policies of MegaMart.</span>
              </label>
              <label className="flex items-start gap-4 cursor-pointer group">
                <input type="checkbox" onChange={() => handleDeclaration('verification')} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#0EA5E9] focus:ring-[#0EA5E9]" required />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 leading-relaxed">I understand that MegaMart reserves the right to request additional verification documentation.</span>
              </label>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-bold text-gray-900 mb-2">Additional Comments</label>
              <textarea 
                name="additionalComments"
                onChange={handleChange}
                rows={3} 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none resize-none" 
                placeholder="Any other details..." 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div>
                 <label className="block text-sm font-bold text-gray-900 mb-2">Application Date</label>
                 <div className="relative">
                   <input 
                    type="date" 
                    name="date"
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-[#0EA5E9] focus:ring-4 focus:ring-sky-500/10 outline-none" 
                    required 
                  />
                   <Calendar className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                 </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#0EA5E9] hover:bg-sky-500 text-white font-bold text-lg py-4 rounded-lg shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}