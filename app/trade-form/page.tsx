/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import emailjs from '@emailjs/browser';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { 
  Building2, 
  UserCheck, 
  Globe, 
  Truck, 
  CheckCircle2, 
  Send,
  Calendar,
  ChevronDown,
  X,
  ShieldCheck,
  Check
} from 'lucide-react';

// --- Constants & Data ---

const SALES_CHANNELS_OPTIONS = [
  'Own Website', 'Physical Store', 'Amazon', 'Walmart', 
  'eBay', 'TikTok Shop', 'Facebook', 'Other'
];

const TERMS_AND_CONDITIONS = [
  { id: 1, title: "TITLE AND RISK OF LOSS", text: "Title transfers to Buyer upon shipment, Buyer assumes all risk of loss or damage once goods leave the Seller’s possession." },
  { id: 2, title: "PAYMENT TERMS", text: "Payment is due in full at the time of invoice issuance. No product shall ship until payment is received in full and cleared. All payments are final, non-refundable, and non-reversible. Buyer waives the right to initiate or request refunds, returns, cancellations or chargebacks through any financial institution, payment processor, or platform. Failure to pay in full constitutes immediate default and entitles the Seller to terminate this Agreement and pursue all legal remedies." },
  { id: 3, title: "DELIVERY", text: "Delivery dates are estimates only, Seller shall not be liable for any delays whether caused by supply chain issues, force majeure, carrier delays, or otherwise, Buyer agrees Seller has no liability for late delivery." },
  { id: 4, title: "TAXES", text: "Buyer shall pay all applicable federal, state, local, and international taxes, duties, tariffs, or fees related to the purchase." },
  { id: 5, title: "WARRANTIES AND LIMITATION OF LIABILITY", text: "Seller warrants that goods are free from Substantial manufacturing defects at the time of shipment. THIS LIMITED WARRANTY IS EXCLUSIVE AND IN LIEU OF ALL OTHER WARRANTIES. NO RETURNS OR REFUNDS are permitted under any circumstances. Seller shall not be liable for incidental, special, punitive, or consequential damages of any nature, and Buyer waives any claim for lost profits or business interruption." },
  { id: 6, title: "DEFAULT AND ENFORCEMENT", text: "Buyer’s failure to pay or comply with this Agreement constitutes immediate default. Upon default, Seller may terminate this Agreement, retain all payments received, and pursue Buyer for damages, fines up to $10,000, legal fees, and any other remedies available under law. Buyer acknowledges that attempts to reverse payment (including bank disputes, wire recalls, ACH recalls, or credit card chargebacks) constitute fraud and breach of this Agreement, Seller is entitled to immediate legal action." },
  { id: 7, title: "RETURNS, REFUNDS, AND CANCELLATIONS", text: "Absolutely NO refunds, NO returns, NO Cancellations, NO exchanges, and NO credits are permitted under any circumstances, Buyer Acknowledges this policy as binding and enforceable in courts, arbitration, and with financial institutions." },
  { id: 8, title: "FORCE MAJEURE", text: "Seller shall not be responsible for delays or failure to perform caused by events beyond its control including but not limited to acts of God, pandemics, epidemics, supply disruptions, strikes, government actions, or shipping failures." },
  { id: 9, title: "DISPUTE RESOLUTION", text: "All disputes shall be resolved exclusively by binding arbitration under the rules of the American Arbitration Association seated in California. The arbitrator shall not have authority to modify this Agreement or award punitive damages, Buyer agrees not to contest or dispute payments once made." },
  { id: 10, title: "CONFIDENTIALITY", text: "All terms of this Agreement are confidential, Buyer shall not disclose pricing, terms, or business practices without written consent from Seller." },
  { id: 11, title: "TERMINATION", text: "Seller reserves the right to cancel this Agreement and revoke authorization to sell its products immediately for non-compliance with any term herein." },
  { id: 12, title: "GOVERNING LAW", text: "This Agreement shall be governed exclusively by the laws of the State of California without reference to conflict of law provisions." },
  { id: 13, title: "ENTIRE AGREEMENT", text: "This document constitutes the entire Agreement between Buyer and Seller, No oral or written statements outside this Agreement shall be binding." },
  { id: 14, title: "SIGNATURES", text: "By signing below, Buyer expressly acknowledges that all payments are final and non-refundable, no refunds, chargebacks, or cancellations are permitted, and Buyer has read, understood, and voluntarily accepted this Agreement in full." }
];

export default function TradeFormPage() {
  // --- State Management ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    },
    additionalComments: '',
    date: ''
  });

  // --- Handlers ---
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Logic for Sales Channels (Select All)
  const handleCheckboxGroup = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const channels = prev.salesChannels;
      if (checked) return { ...prev, salesChannels: [...channels, value] };
      return { ...prev, salesChannels: channels.filter(c => c !== value) };
    });
  };

  const toggleAllChannels = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData(prev => ({ ...prev, salesChannels: SALES_CHANNELS_OPTIONS }));
    } else {
      setFormData(prev => ({ ...prev, salesChannels: [] }));
    }
  };

  const handleDeclaration = (field: keyof typeof formData.declarations) => {
    setFormData(prev => ({
      ...prev,
      declarations: { ...prev.declarations, [field]: !prev.declarations[field] }
    }));
  };

  // Logic for Terms Modal
  const handleInitialSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const toggleTermAgreement = (id: number) => {
    setAgreedTerms(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleAgreeAllTerms = () => {
    if (agreedTerms.length === TERMS_AND_CONDITIONS.length) {
      setAgreedTerms([]); // Toggle off if all are selected
    } else {
      setAgreedTerms(TERMS_AND_CONDITIONS.map(t => t.id)); // Select all
    }
  };

 
const handleFinalConfirm = async () => {
  setIsSubmitting(true);
  
  try {
    // Prepare email data matching your template variables
    const emailData = {
      companyName: formData.companyName,
      dba: formData.dba || 'N/A',
      storeName: formData.storeName || 'N/A',
      businessType: formData.businessType,
      businessNature: formData.businessNature,
      regYear: formData.regYear,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp || 'N/A',
      websiteUrl: formData.websiteUrl || 'N/A',
      regAddress: formData.regAddress,
      shipAddress: formData.shipAddress,
      shippingType: formData.shippingType,
      monthlyVolume: formData.monthlyVolume,
      salesChannels: formData.salesChannels.join(', '),
      additionalComments: formData.additionalComments || 'None',
      date: formData.date,
      'declarations.accurate': formData.declarations.accurate ? 'Yes' : 'No',
      'declarations.policies': formData.declarations.policies ? 'Yes' : 'No',
      'declarations.verification': formData.declarations.verification ? 'Yes' : 'No',
      termsAccepted: 'Yes',
      termsTimestamp: new Date().toISOString()
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    alert('Application submitted successfully! Check your email.');
    setIsModalOpen(false);
    
    // Reset form if needed
    // setFormData({ initial state });
    
  } catch (error) {
    console.error('Email send failed:', error);
    alert('Failed to submit. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const isAllChannelsSelected = formData.salesChannels.length === SALES_CHANNELS_OPTIONS.length;
  const isAllTermsAgreed = agreedTerms.length === TERMS_AND_CONDITIONS.length;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6">
            B2B Application
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Trade Account <span className="text-indigo-400">Application</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Join our wholesale network. Secure pricing, bulk volume, and exclusive distributor benefits await.
          </p>
        </div>
      </section>

      {/* --- MAIN FORM --- */}
      <main className="container mx-auto px-4 -mt-20 pb-20 relative z-20">
        <form onSubmit={handleInitialSubmit} className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
          
          {/* 1. CONTACT VERIFICATION */}
          <div className="p-8 lg:p-12 border-b border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm shrink-0">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Verification</h2>
                <p className="text-slate-500 mt-1">Primary contact details for account management.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-indigo-600 transition-colors">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  onChange={handleChange}
                  placeholder="business@company.com"
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-indigo-600 transition-colors">Phone Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* 2. BUSINESS INFORMATION */}
          <div className="p-8 lg:p-12 border-b border-slate-100 bg-slate-50/30">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Business Information</h2>
                <p className="text-slate-500 mt-1">Legal entity details and registration.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Registered Company Name <span className="text-red-500">*</span></label>
                <input type="text" name="companyName" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" required />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Doing Business As (DBA)</label>
                <input type="text" name="dba" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Person Name <span className="text-red-500">*</span></label>
                <input type="text" name="contactName" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Number</label>
                <input type="tel" name="whatsapp" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Year of Registration <span className="text-red-500">*</span></label>
                <input type="number" name="regYear" onChange={handleChange} placeholder="YYYY" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Registered Address <span className="text-red-500">*</span></label>
                <input type="text" name="regAddress" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" required />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Shipping Address <span className="text-red-500">*</span></label>
                <input type="text" name="shipAddress" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" required />
              </div>
            </div>
          </div>

          {/* 3. OPERATIONS */}
          <div className="p-8 lg:p-12 border-b border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Business Operations</h2>
                <p className="text-slate-500 mt-1">Operational details and volume estimates.</p>
              </div>
            </div>

            <div className="space-y-10">
              {/* Type of Business */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">Type of Business <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-3">
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
                      <div className="px-6 py-3 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-700 hover:border-indigo-300 transition-all shadow-sm">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Volume */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Purchasing Volume (USD) <span className="text-red-500">*</span></label>
                <div className="relative max-w-md">
                  <select 
                    name="monthlyVolume"
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 pr-10 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select volume tier...</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Business Nature */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nature of Business <span className="text-red-500">*</span></label>
                <textarea 
                  name="businessNature"
                  onChange={handleChange}
                  rows={3} 
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none" 
                  placeholder="Briefly describe your main product lines and customer base..."
                  required
                />
              </div>
            </div>
          </div>

          {/* 4. SALES CHANNELS */}
          <div className="p-8 lg:p-12 border-b border-slate-100 bg-slate-50/30">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm shrink-0">
                <Truck className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Sales Channels</h2>
                <p className="text-slate-500 mt-1">Platforms and venues where you sell.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-semibold text-slate-700">Select Active Channels <span className="text-red-500">*</span></label>
                    
                    {/* --- SELECT ALL BUTTON --- */}
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                        <input 
                            type="checkbox" 
                            checked={isAllChannelsSelected}
                            onChange={toggleAllChannels}
                            className="w-4 h-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        Select All Channels
                    </label>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {SALES_CHANNELS_OPTIONS.map((channel) => (
                    <label key={channel} className={`
                        flex items-center gap-3 p-3 rounded-lg border bg-white transition-all cursor-pointer hover:shadow-md
                        ${formData.salesChannels.includes(channel) 
                            ? 'border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50/30' 
                            : 'border-slate-200 hover:border-indigo-300'}
                    `}>
                      <input 
                        type="checkbox" 
                        value={channel}
                        checked={formData.salesChannels.includes(channel)}
                        onChange={handleCheckboxGroup}
                        className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
                      />
                      <span className="text-sm font-medium text-slate-700">{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Website URL</label>
                  <input type="url" name="websiteUrl" onChange={handleChange} placeholder="https://" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Store Name</label>
                  <input type="text" name="storeName" onChange={handleChange} className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none" />
                </div>
              </div>

              {/* Shipping Preference */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">Shipping Destination Type <span className="text-red-500">*</span></label>
                <div className="flex flex-col sm:flex-row gap-4">
                  {['Commercial Address', 'Residential Address'].map((shipType) => (
                    <label key={shipType} className="flex-1 flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 cursor-pointer transition-all">
                      <div className="relative flex items-center">
                        <input 
                          type="radio" 
                          name="shippingType" 
                          value={shipType}
                          onChange={handleChange}
                          className="peer w-5 h-5 border-2 border-slate-400 rounded-full text-indigo-600 focus:ring-indigo-500 checked:border-indigo-600" 
                          required
                        />
                      </div>
                      <span className="text-slate-900 font-semibold">{shipType}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. PRE-DECLARATIONS */}
          <div className="p-8 lg:p-12 bg-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Final Declarations</h2>
                <p className="text-slate-500 mt-1">Please confirm the following before reviewing terms.</p>
              </div>
            </div>

            <div className="space-y-4 mb-10 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
              {[
                { key: 'accurate', text: 'I verify that the information provided above is accurate and true.' },
                { key: 'policies', text: 'I acknowledge reading and agree to comply with wholesale policies.' },
                { key: 'verification', text: 'I understand that Avelon MFG LLC may request additional verification.' }
              ].map((item) => (
                <label key={item.key} className="flex items-start gap-4 cursor-pointer group p-2 hover:bg-white/60 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    // @ts-expect-error
                    onChange={() => handleDeclaration(item.key)} 
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" 
                    required 
                  />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed pt-0.5">{item.text}</span>
                </label>
              ))}
            </div>

            <div className="mb-10">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Comments</label>
              <textarea 
                name="additionalComments"
                onChange={handleChange}
                rows={3} 
                className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none resize-none" 
                placeholder="Any specific requirements or questions?" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Application Date</label>
                  <div className="relative">
                    <input 
                    type="date" 
                    name="date"
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none" 
                    required 
                  />
                    <Calendar className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                Review Terms & Submit
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* --- TERMS & CONDITIONS MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Terms & Conditions</h3>
                        <p className="text-sm text-slate-500">Please review and accept to proceed.</p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
                <div className="space-y-6">
                    {TERMS_AND_CONDITIONS.map((term) => (
                        <div 
                            key={term.id} 
                            onClick={() => toggleTermAgreement(term.id)}
                            className={`p-4 rounded-xl border transition-all cursor-pointer select-none group
                                ${agreedTerms.includes(term.id) 
                                    ? 'bg-white border-indigo-500 shadow-sm ring-1 ring-indigo-500' 
                                    : 'bg-white border-slate-200 hover:border-indigo-300'
                                }
                            `}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`
                                    mt-1 w-6 h-6 rounded border flex items-center justify-center shrink-0 transition-colors
                                    ${agreedTerms.includes(term.id)
                                        ? 'bg-indigo-600 border-indigo-600 text-white'
                                        : 'bg-white border-slate-300 text-transparent group-hover:border-indigo-400'
                                    }
                                `}>
                                    <Check className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">
                                        {term.id}. {term.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {term.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer with Actions */}
            <div className="p-6 border-t border-slate-100 bg-white rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <button 
                    type="button"
                    onClick={handleAgreeAllTerms}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-2 px-2"
                >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center
                        ${isAllTermsAgreed ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-indigo-300'}
                    `}>
                        {isAllTermsAgreed && <Check className="w-3 h-3" />}
                    </div>
                    Agree to All Terms
                </button>

                <div className="flex gap-3 w-full sm:w-auto">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="flex-1 sm:flex-none px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleFinalConfirm}
                        disabled={!isAllTermsAgreed}
                        className={`
                            flex-1 sm:flex-none px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2
                            ${isAllTermsAgreed 
                                ? 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 shadow-indigo-200' 
                                : 'bg-slate-300 cursor-not-allowed shadow-none'
                            }
                        `}
                    >
                        Confirm & Submit Application
                    </button>
                </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}