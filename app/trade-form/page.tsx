/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import emailjs from "@emailjs/browser";
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import {
  Building2, UserCheck, Globe, Truck, CheckCircle2, Send,
  Calendar, ChevronDown, X, ShieldCheck, Check,
  ArrowRight, ArrowLeft, Store, Phone, Mail, MapPin,
  MessageSquare, Link2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const SALES_CHANNELS_OPTIONS = [
  "Own Website", "Physical Store", "Amazon", "Walmart",
  "eBay", "TikTok Shop", "Facebook", "Other",
];

const TERMS_AND_CONDITIONS = [
  { id: 1, title: "TITLE AND RISK OF LOSS", text: "Title transfers to Buyer upon shipment. Buyer assumes all risk of loss or damage once goods leave the Seller's possession." },
  { id: 2, title: "PAYMENT TERMS", text: "Payment is due in full at the time of invoice issuance. No product shall ship until payment is received in full and cleared. All payments are final, non-refundable, and non-reversible. Buyer waives the right to initiate or request refunds, returns, cancellations or chargebacks through any financial institution, payment processor, or platform." },
  { id: 3, title: "DELIVERY", text: "Delivery dates are estimates only. Seller shall not be liable for any delays whether caused by supply chain issues, force majeure, carrier delays, or otherwise." },
  { id: 4, title: "TAXES", text: "Buyer shall pay all applicable federal, state, local, and international taxes, duties, tariffs, or fees related to the purchase." },
  { id: 5, title: "WARRANTIES AND LIMITATION OF LIABILITY", text: "Seller warrants that goods are free from substantial manufacturing defects at the time of shipment. NO RETURNS OR REFUNDS are permitted under any circumstances. Seller shall not be liable for incidental, special, punitive, or consequential damages." },
  { id: 6, title: "DEFAULT AND ENFORCEMENT", text: "Buyer's failure to pay or comply with this Agreement constitutes immediate default. Upon default, Seller may terminate this Agreement, retain all payments received, and pursue Buyer for damages and legal fees." },
  { id: 7, title: "RETURNS, REFUNDS, AND CANCELLATIONS", text: "Absolutely NO refunds, NO returns, NO cancellations, NO exchanges, and NO credits are permitted under any circumstances." },
  { id: 8, title: "FORCE MAJEURE", text: "Seller shall not be responsible for delays or failure to perform caused by events beyond its control including acts of God, pandemics, supply disruptions, or shipping failures." },
  { id: 9, title: "DISPUTE RESOLUTION", text: "All disputes shall be resolved exclusively by binding arbitration under the rules of the American Arbitration Association seated in California." },
  { id: 10, title: "CONFIDENTIALITY", text: "All terms of this Agreement are confidential. Buyer shall not disclose pricing, terms, or business practices without written consent from Seller." },
  { id: 11, title: "TERMINATION", text: "Seller reserves the right to cancel this Agreement and revoke authorization to sell its products immediately for non-compliance." },
  { id: 12, title: "GOVERNING LAW", text: "This Agreement shall be governed exclusively by the laws of the State of California." },
  { id: 13, title: "ENTIRE AGREEMENT", text: "This document constitutes the entire Agreement between Buyer and Seller. No oral or written statements outside this Agreement shall be binding." },
  { id: 14, title: "SIGNATURES", text: "By signing below, Buyer expressly acknowledges that all payments are final and non-refundable, and Buyer has read, understood, and voluntarily accepted this Agreement in full." },
];

const STEPS = [
  { label: "Contact", icon: UserCheck },
  { label: "Business", icon: Building2 },
  { label: "Operations", icon: Globe },
  { label: "Channels", icon: Store },
  { label: "Confirm", icon: CheckCircle2 },
];

// Required fields per step
const REQUIRED_PER_STEP: Record<number, { field: string; label: string }[]> = {
  0: [
    { field: "email", label: "Email Address" },
    { field: "phone", label: "Phone Number" },
  ],
  1: [
    { field: "companyName", label: "Company Name" },
    { field: "contactName", label: "Contact Person Name" },
    { field: "regYear", label: "Year of Registration" },
    { field: "regAddress", label: "Registered Address" },
    { field: "shipAddress", label: "Shipping Address" },
  ],
  2: [
    { field: "businessType", label: "Type of Business" },
    { field: "monthlyVolume", label: "Monthly Volume" },
    { field: "businessNature", label: "Nature of Business" },
  ],
  3: [
    { field: "shippingType", label: "Shipping Destination" },
  ],
  4: [
    { field: "date", label: "Application Date" },
  ],
};

// ─── Reusable input ──────────────────────────────────────
function FormInput({
  label, required, icon: Icon, error, ...props
}: {
  label: string;
  required?: boolean;
  icon?: React.ElementType;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase" style={{ fontFamily: "monospace" }}>
        {label} {required && <span className="text-[#C4A378]">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/20 pointer-events-none" />
        )}
        <input
          {...props}
          className={`w-full ${Icon ? "pl-11" : "px-4"} pr-4 py-3.5 bg-white/[0.04] border text-white placeholder:text-white/10 text-[13px] outline-none transition-colors duration-200 ${
            error
              ? "border-red-500/50 focus:border-red-400"
              : "border-white/[0.08] focus:border-[#C4A378]/60 focus:bg-white/[0.06]"
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
      </div>
      {error && (
        <p className="text-[11px] text-red-400/80 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span className="size-1 rounded-full bg-red-400/80 inline-block" /> {error}
        </p>
      )}
    </div>
  );
}

// ─── Step header ─────────────────────────────────────────
function StepHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="size-11 border border-[#C4A378]/30 bg-[#C4A378]/[0.08] flex items-center justify-center shrink-0">
        <Icon className="size-5 text-[#C4A378]" />
      </div>
      <div>
        <h2 className="text-[20px] md:text-[24px] font-black text-white leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h2>
        <p className="text-[12px] text-white/25 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{subtitle}</p>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────
export default function TradeFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const stepContentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    email: "", phone: "", companyName: "", dba: "",
    contactName: "", whatsapp: "", regYear: "",
    regAddress: "", shipAddress: "", businessType: "",
    monthlyVolume: "", businessNature: "",
    salesChannels: [] as string[],
    websiteUrl: "", storeName: "", shippingType: "",
    declarations: { accurate: false, policies: false, verification: false },
    additionalComments: "", date: "",
  });

  useEffect(() => {
    if (!heroRef.current) return;
    gsap.fromTo(
      heroRef.current.querySelectorAll(".hero-el"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (!stepContentRef.current) return;
    gsap.fromTo(stepContentRef.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [currentStep]);

  // ─── Field handlers ──────────────────────────────────
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleCheckboxGroup = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      salesChannels: checked
        ? [...prev.salesChannels, value]
        : prev.salesChannels.filter(c => c !== value),
    }));
    if (errors.salesChannels) setErrors(prev => { const n = { ...prev }; delete n.salesChannels; return n; });
  };

  const toggleAllChannels = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      salesChannels: e.target.checked ? SALES_CHANNELS_OPTIONS : [],
    }));
  };

  const handleDeclaration = (field: keyof typeof formData.declarations) => {
    setFormData(prev => ({
      ...prev,
      declarations: { ...prev.declarations, [field]: !prev.declarations[field] },
    }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  // ─── Validation ───────────────────────────────────────
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    const required = REQUIRED_PER_STEP[step] || [];

    required.forEach(({ field, label }) => {
      const val = (formData as Record<string, unknown>)[field];
      if (!val || (typeof val === "string" && !val.trim())) {
        newErrors[field] = `${label} is required`;
      }
    });

    if (step === 3 && formData.salesChannels.length === 0) {
      newErrors.salesChannels = "Select at least one sales channel";
    }

    if (step === 4) {
      if (!formData.declarations.accurate) newErrors.accurate = "Required";
      if (!formData.declarations.policies) newErrors.policies = "Required";
      if (!formData.declarations.verification) newErrors.verification = "Required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const missing = Object.values(newErrors).join(", ");
      toast.error(`Please complete: ${missing}`);
      return false;
    }
    return true;
  };

  // ─── Navigation ───────────────────────────────────────
  const nextStep = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep(s => s - 1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInitialSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;
    setIsModalOpen(true);
  };

  // ─── Terms ────────────────────────────────────────────
  const toggleTermAgreement = (id: number) => {
    setAgreedTerms(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const handleAgreeAllTerms = () => {
    setAgreedTerms(agreedTerms.length === TERMS_AND_CONDITIONS.length
      ? [] : TERMS_AND_CONDITIONS.map(t => t.id));
  };

  // ─── Submit ───────────────────────────────────────────
  const handleFinalConfirm = async () => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          companyName: formData.companyName,
          dba: formData.dba || "N/A",
          storeName: formData.storeName || "N/A",
          businessType: formData.businessType,
          businessNature: formData.businessNature,
          regYear: formData.regYear,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp || "N/A",
          websiteUrl: formData.websiteUrl || "N/A",
          regAddress: formData.regAddress,
          shipAddress: formData.shipAddress,
          shippingType: formData.shippingType,
          monthlyVolume: formData.monthlyVolume,
          salesChannels: formData.salesChannels.join(", "),
          additionalComments: formData.additionalComments || "None",
          date: formData.date,
          termsAccepted: "Yes",
          termsTimestamp: new Date().toISOString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsModalOpen(false);
      toast.success("Application submitted! We will review and respond within 24 hours.", {
        duration: 6000,
      });

      // Reset
      setFormData({
        email: "", phone: "", companyName: "", dba: "",
        contactName: "", whatsapp: "", regYear: "",
        regAddress: "", shipAddress: "", businessType: "",
        monthlyVolume: "", businessNature: "",
        salesChannels: [],
        websiteUrl: "", storeName: "", shippingType: "",
        declarations: { accurate: false, policies: false, verification: false },
        additionalComments: "", date: "",
      });
      setCurrentStep(0);
      setAgreedTerms([]);

    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAllChannelsSelected = formData.salesChannels.length === SALES_CHANNELS_OPTIONS.length;
  const isAllTermsAgreed = agreedTerms.length === TERMS_AND_CONDITIONS.length;
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  const inputBase = "w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/10 text-[13px] px-4 py-3.5 outline-none focus:border-[#C4A378]/60 focus:bg-white/[0.06] transition-colors duration-200";

  return (
    <div className="min-h-screen bg-[#0E0C0A] mt-13">

      {/* ── Hero ── */}
      <div className="relative bg-[#0A0806] border-b border-white/[0.06] py-14 md:py-20 overflow-hidden">
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] leading-none"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "14vw", fontWeight: 900, color: "#fff" }}
        >
          TRADE
        </div>
        <div ref={heroRef} className="max-w-[900px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="hero-el flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              B2B Application
            </span>
          </div>
          <h1
            className="hero-el text-[38px] md:text-[58px] font-black leading-none tracking-[-0.025em] text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Trade Account{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>
              Application
            </span>
          </h1>
          <p
            className="hero-el text-[14px] text-white/30 max-w-md leading-[1.75]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Join our wholesale network. Secure pricing, bulk volume, and exclusive distributor benefits.
          </p>
        </div>
      </div>

      {/* ── Form ── */}
      <main className="max-w-[900px] mx-auto px-6 md:px-10 py-12 md:py-16">

        {/* Progress bar */}
        <div className="mb-8 h-px bg-white/[0.06] relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#C4A378] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-between mb-10">
          {STEPS.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => idx < currentStep && setCurrentStep(idx)}
              disabled={idx > currentStep}
              className="flex flex-col items-center gap-2"
            >
              <div className={`size-10 border flex items-center justify-center transition-all duration-300 ${
                idx === currentStep
                  ? "border-[#C4A378] bg-[#C4A378]/10 text-[#C4A378]"
                  : idx < currentStep
                  ? "border-white/15 bg-white/[0.04] text-white/50"
                  : "border-white/[0.05] text-white/10"
              }`}>
                {idx < currentStep
                  ? <Check className="size-4" />
                  : <step.icon className="size-4" />
                }
              </div>
              <span
                className={`text-[9px] tracking-[0.15em] uppercase hidden sm:block transition-colors ${
                  idx === currentStep ? "text-[#C4A378]" : idx < currentStep ? "text-white/25" : "text-white/10"
                }`}
                style={{ fontFamily: "monospace" }}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {/* Card */}
        <form onSubmit={handleInitialSubmit}>
          <div className="border border-white/[0.06] bg-[#0A0806]">
            <div ref={stepContentRef} className="p-6 md:p-10">

              {/* ── Step 0: Contact ── */}
              {currentStep === 0 && (
                <div>
                  <StepHeader icon={UserCheck} title="Contact Verification" subtitle="Primary contact details for account management." />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput label="Email Address" required icon={Mail} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="business@company.com" error={errors.email} />
                    <FormInput label="Phone Number" required icon={Phone} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" error={errors.phone} />
                  </div>
                </div>
              )}

              {/* ── Step 1: Business ── */}
              {currentStep === 1 && (
                <div>
                  <StepHeader icon={Building2} title="Business Information" subtitle="Legal entity details and registration." />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <FormInput label="Registered Company Name" required icon={Building2} type="text" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} />
                    </div>
                    <FormInput label="Doing Business As (DBA)" icon={Store} type="text" name="dba" value={formData.dba} onChange={handleChange} />
                    <FormInput label="Contact Person Name" required icon={UserCheck} type="text" name="contactName" value={formData.contactName} onChange={handleChange} error={errors.contactName} />
                    <FormInput label="WhatsApp Number" icon={MessageSquare} type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                    <FormInput label="Year of Registration" required icon={Calendar} type="number" name="regYear" value={formData.regYear} onChange={handleChange} placeholder="YYYY" error={errors.regYear} />
                    <div className="md:col-span-2">
                      <FormInput label="Company Registered Address" required icon={MapPin} type="text" name="regAddress" value={formData.regAddress} onChange={handleChange} error={errors.regAddress} />
                    </div>
                    <div className="md:col-span-2">
                      <FormInput label="Shipping Address" required icon={Truck} type="text" name="shipAddress" value={formData.shipAddress} onChange={handleChange} error={errors.shipAddress} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 2: Operations ── */}
              {currentStep === 2 && (
                <div>
                  <StepHeader icon={Globe} title="Business Operations" subtitle="Operational details and volume estimates." />
                  <div className="flex flex-col gap-7">

                    {/* Business type */}
                    <div>
                      <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-3 block" style={{ fontFamily: "monospace" }}>
                        Type of Business <span className="text-[#C4A378]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["Online Seller", "Retail Store", "Wholesaler", "Distributor", "Importer/Exporter"].map(type => (
                          <label key={type} className="cursor-pointer">
                            <input type="radio" name="businessType" value={type} checked={formData.businessType === type} onChange={handleChange} className="sr-only" />
                            <div className={`px-5 py-2.5 border text-[12px] cursor-pointer transition-all duration-200 ${
                              formData.businessType === type
                                ? "border-[#C4A378] bg-[#C4A378]/10 text-[#C4A378]"
                                : "border-white/[0.08] text-white/25 hover:border-white/20 hover:text-white/50"
                            }`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              {type}
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.businessType && <p className="text-[11px] text-red-400/80 mt-2 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="size-1 rounded-full bg-red-400/80 inline-block" /> {errors.businessType}</p>}
                    </div>

                    {/* Volume */}
                    <div>
                      <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "monospace" }}>
                        Monthly Purchasing Volume (USD) <span className="text-[#C4A378]">*</span>
                      </label>
                      <div className="relative max-w-sm">
                        <select
                          name="monthlyVolume"
                          value={formData.monthlyVolume}
                          onChange={handleChange}
                          className={`${inputBase} pr-10 appearance-none cursor-pointer`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <option value="" className="bg-[#0A0806]">Select volume tier...</option>
                          <option value="<5k" className="bg-[#0A0806]">Less than $5,000</option>
                          <option value="5k-10k" className="bg-[#0A0806]">$5,000 – $10,000</option>
                          <option value="10k-50k" className="bg-[#0A0806]">$10,000 – $50,000</option>
                          <option value="50k+" className="bg-[#0A0806]">$50,000+</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-white/20 pointer-events-none" />
                      </div>
                      {errors.monthlyVolume && <p className="text-[11px] text-red-400/80 mt-2 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="size-1 rounded-full bg-red-400/80 inline-block" /> {errors.monthlyVolume}</p>}
                    </div>

                    {/* Nature of business */}
                    <div>
                      <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "monospace" }}>
                        Nature of Business <span className="text-[#C4A378]">*</span>
                      </label>
                      <textarea
                        name="businessNature"
                        value={formData.businessNature}
                        onChange={handleChange}
                        rows={4}
                        className={`${inputBase} resize-none`}
                        placeholder="Describe your main product lines and customer base..."
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                      {errors.businessNature && <p className="text-[11px] text-red-400/80 mt-2 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="size-1 rounded-full bg-red-400/80 inline-block" /> {errors.businessNature}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 3: Channels ── */}
              {currentStep === 3 && (
                <div>
                  <StepHeader icon={Store} title="Sales Channels" subtitle="Platforms and venues where you sell." />
                  <div className="flex flex-col gap-7">

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase" style={{ fontFamily: "monospace" }}>
                          Active Channels <span className="text-[#C4A378]">*</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={isAllChannelsSelected} onChange={toggleAllChannels} className="sr-only" />
                          <div className={`size-4 border flex items-center justify-center transition-all ${isAllChannelsSelected ? "bg-[#C4A378] border-[#C4A378]" : "border-white/20"}`}>
                            {isAllChannelsSelected && <Check className="size-2.5 text-[#0A0806]" />}
                          </div>
                          <span className="text-[11px] text-[#C4A378] tracking-[0.1em] uppercase" style={{ fontFamily: "monospace" }}>Select All</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {SALES_CHANNELS_OPTIONS.map(channel => (
                          <label key={channel} className="cursor-pointer">
                            <input type="checkbox" value={channel} checked={formData.salesChannels.includes(channel)} onChange={handleCheckboxGroup} className="sr-only" />
                            <div className={`flex items-center gap-2.5 p-3.5 border transition-all duration-200 ${
                              formData.salesChannels.includes(channel)
                                ? "border-[#C4A378]/50 bg-[#C4A378]/[0.06] text-[#C4A378]"
                                : "border-white/[0.06] text-white/25 hover:border-white/15 hover:text-white/40"
                            }`}>
                              <div className={`size-4 border flex items-center justify-center shrink-0 transition-all ${
                                formData.salesChannels.includes(channel) ? "bg-[#C4A378] border-[#C4A378]" : "border-white/20"
                              }`}>
                                {formData.salesChannels.includes(channel) && <Check className="size-2.5 text-[#0A0806]" />}
                              </div>
                              <span className="text-[12px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{channel}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.salesChannels && <p className="text-[11px] text-red-400/80 mt-2 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="size-1 rounded-full bg-red-400/80 inline-block" /> {errors.salesChannels}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormInput label="Website URL" icon={Link2} type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} placeholder="https://" />
                      <FormInput label="Store Name" icon={Store} type="text" name="storeName" value={formData.storeName} onChange={handleChange} />
                    </div>

                    {/* Shipping type */}
                    <div>
                      <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-3 block" style={{ fontFamily: "monospace" }}>
                        Shipping Destination <span className="text-[#C4A378]">*</span>
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {["Commercial Address", "Residential Address"].map(type => (
                          <label key={type} className="flex-1 cursor-pointer">
                            <input type="radio" name="shippingType" value={type} checked={formData.shippingType === type} onChange={handleChange} className="sr-only" />
                            <div className={`flex items-center gap-3 p-4 border transition-all duration-200 ${
                              formData.shippingType === type
                                ? "border-[#C4A378]/50 bg-[#C4A378]/[0.06] text-[#C4A378]"
                                : "border-white/[0.06] text-white/25 hover:border-white/15"
                            }`}>
                              <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-all ${
                                formData.shippingType === type ? "border-[#C4A378]" : "border-white/20"
                              }`}>
                                {formData.shippingType === type && <div className="size-2 rounded-full bg-[#C4A378]" />}
                              </div>
                              <span className="text-[13px] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{type}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.shippingType && <p className="text-[11px] text-red-400/80 mt-2 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><span className="size-1 rounded-full bg-red-400/80 inline-block" /> {errors.shippingType}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 4: Confirm ── */}
              {currentStep === 4 && (
                <div>
                  <StepHeader icon={CheckCircle2} title="Final Declarations" subtitle="Confirm the following before reviewing terms." />

                  <div className="flex flex-col gap-2 mb-7 border border-white/[0.06] p-5 bg-white/[0.02]">
                    {[
                      { key: "accurate" as const, text: "I verify that all information provided is accurate and true." },
                      { key: "policies" as const, text: "I acknowledge and agree to comply with wholesale policies." },
                      { key: "verification" as const, text: "I understand that Avelon MFG may request additional verification." },
                    ].map(item => (
                      <label
                        key={item.key}
                        className={`flex items-start gap-4 p-3 cursor-pointer hover:bg-white/[0.02] transition-colors ${
                          errors[item.key] ? "border border-red-500/20 bg-red-500/[0.03]" : ""
                        }`}
                        onClick={() => handleDeclaration(item.key)}
                      >
                        <div className={`size-5 border flex items-center justify-center mt-0.5 shrink-0 transition-all ${
                          formData.declarations[item.key]
                            ? "bg-[#C4A378] border-[#C4A378]"
                            : errors[item.key] ? "border-red-500/50" : "border-white/20"
                        }`}>
                          {formData.declarations[item.key] && <Check className="size-3 text-[#0A0806]" />}
                        </div>
                        <span className="text-[13px] text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.text}
                        </span>
                      </label>
                    ))}
                    {(errors.accurate || errors.policies || errors.verification) && (
                      <p className="text-[11px] text-red-400/80 pt-1 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <span className="size-1 rounded-full bg-red-400/80 inline-block" /> All declarations must be accepted.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-2 block" style={{ fontFamily: "monospace" }}>Additional Comments</label>
                      <textarea
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleChange}
                        rows={3}
                        className={`${inputBase} resize-none`}
                        placeholder="Any specific requirements or questions?"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>
                    <FormInput
                      label="Application Date"
                      required
                      icon={Calendar}
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      error={errors.date}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Nav footer */}
            <div className="px-6 md:px-10 py-5 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between">
              {currentStep > 0 ? (
                <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 text-white/25 hover:text-white text-[12px] tracking-[0.1em] uppercase transition-colors duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <ArrowLeft className="size-3.5" /> Back
                </button>
              ) : <div />}

              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="group inline-flex items-center gap-2.5 bg-white hover:bg-[#C4A378] text-[#0A0806] text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-3.5 transition-all duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Continue <ArrowRight className="size-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 bg-[#C4A378] hover:bg-white text-[#0A0806] text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-3.5 transition-all duration-300"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Review Terms & Submit <Send className="size-4" />
                </button>
              )}
            </div>
          </div>
        </form>
      </main>

      {/* ── Terms Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0806]/85 backdrop-blur-sm">
          <div className="bg-[#0E0C0A] border border-white/[0.08] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl">

            <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className="size-10 border border-[#C4A378]/30 bg-[#C4A378]/[0.08] flex items-center justify-center">
                  <ShieldCheck className="size-5 text-[#C4A378]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Terms & Conditions</h3>
                  <p className="text-[11px] text-white/20" style={{ fontFamily: "monospace" }}>Click each clause to accept</p>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="size-9 border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all">
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
              {TERMS_AND_CONDITIONS.map(term => (
                <div
                  key={term.id}
                  onClick={() => toggleTermAgreement(term.id)}
                  className={`flex items-start gap-4 p-4 border cursor-pointer transition-all duration-200 ${
                    agreedTerms.includes(term.id)
                      ? "border-[#C4A378]/30 bg-[#C4A378]/[0.04]"
                      : "border-white/[0.05] hover:border-white/10 bg-white/[0.01]"
                  }`}
                >
                  <div className={`size-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    agreedTerms.includes(term.id) ? "bg-[#C4A378] border-[#C4A378]" : "border-white/20"
                  }`}>
                    {agreedTerms.includes(term.id) && <Check className="size-3 text-[#0A0806]" />}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white/55 tracking-[0.1em] mb-1.5" style={{ fontFamily: "monospace" }}>
                      {term.id}. {term.title}
                    </h4>
                    <p className="text-[12px] text-white/25 leading-[1.7]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {term.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleAgreeAllTerms}
                className="flex items-center gap-2.5 text-[11px] tracking-[0.12em] uppercase text-[#C4A378] hover:text-white transition-colors"
                style={{ fontFamily: "monospace" }}
              >
                <div className={`size-5 border flex items-center justify-center transition-all ${isAllTermsAgreed ? "bg-[#C4A378] border-[#C4A378]" : "border-[#C4A378]/40"}`}>
                  {isAllTermsAgreed && <Check className="size-3 text-[#0A0806]" />}
                </div>
                Agree to All
              </button>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 sm:flex-none border border-white/[0.08] text-white/25 hover:text-white hover:border-white/20 text-[12px] tracking-[0.1em] uppercase px-6 py-3 transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleFinalConfirm}
                  disabled={!isAllTermsAgreed || isSubmitting}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-3 transition-all duration-300 ${
                    isAllTermsAgreed
                      ? "bg-[#C4A378] hover:bg-white text-[#0A0806] cursor-pointer"
                      : "bg-white/[0.04] text-white/15 cursor-not-allowed"
                  }`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="size-4 border-2 border-[#0A0806]/20 border-t-[#0A0806] rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm & Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}