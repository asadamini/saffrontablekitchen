import { useState } from "react";
import { Check } from "lucide-react";
import { mealTypeOptions } from "../data/menuData";

interface FormData {
  name: string; company: string; email: string; phone: string;
  eventDate: string; deliveryTime: string; deliveryAddress: string;
  numberOfGuests: string; budgetPerPerson: string; mealType: string;
  dietaryRequests: string; additionalNotes: string;
}

const initialForm: FormData = {
  name: "", company: "", email: "", phone: "", eventDate: "",
  deliveryTime: "", deliveryAddress: "", numberOfGuests: "", budgetPerPerson: "",
  mealType: "", dietaryRequests: "", additionalNotes: "",
};

const quoteEmail = "saffrontableindkitchen@gmail.com";
const formEndpoint = `https://formsubmit.co/${quoteEmail}`;
const ajaxEndpoint = `https://formsubmit.co/ajax/${quoteEmail}`;

function Field({ label, id, type = "text", value, onChange, placeholder, required }: {
  label: string; id: keyof FormData; type?: string;
  value: string; onChange: (id: keyof FormData, val: string) => void;
  placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 mb-1.5">
        {label}{required && <span className="text-[#D89A27] ml-0.5">*</span>}
      </label>
      <input
        id={id} name={id} type={type} value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder} required={required}
        className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm min-h-[44px] focus:outline-none focus:border-[#D89A27] transition-colors duration-150"
      />
    </div>
  );
}

const trustPoints = [
  "Individual meals and tray catering",
  "Meat and vegetarian options",
  "Catering for teams of 10+",
  "Clearly organized office delivery",
];

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (id: keyof FormData, val: string) => setForm((p) => ({ ...p, [id]: val }));
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const payload = {
        _subject: "New Saffron Table catering quote request",
        _template: "table",
        _captcha: "false",
        brand: "Saffron Table Indian Kitchen",
        ...Object.fromEntries(new FormData(e.currentTarget).entries()),
      };

      const response = await fetch(ajaxEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
    } catch {
      setError(`We could not send this request. Please email ${quoteEmail} directly.`);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setError("");
    setSubmitted(false);
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-[#3E2438]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-14 lg:gap-20">

          {/* Left */}
          <div className="lg:pt-2">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D89A27] mb-5">Get a Quote</p>
            <h2 className="font-[Gloock] text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] text-white mb-5">
              {"Let's plan your team's Indian meal"}
            </h2>
            <p className="text-white/45 text-[15px] leading-relaxed mb-10">
              Tell us about your event and we will help you select the right lunch boxes, biryani meals, or catering package.
            </p>
            <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
              {trustPoints.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm bg-[#D89A27]/20 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#D89A27]" strokeWidth={3} />
                  </div>
                  <span className="text-white/55 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-white/12 rounded-sm p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 rounded-sm bg-[#4E6650] flex items-center justify-center mb-5">
                  <Check size={22} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-[Gloock] text-2xl text-white mb-3">Request received.</h3>
                <p className="text-white/50 text-base leading-relaxed max-w-xs">
                  Thank you. Your catering request has been received. Our team will contact you with the next steps.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-7 bg-[#D89A27] text-white px-7 py-3.5 text-[12px] font-bold tracking-[0.18em] uppercase rounded-sm hover:bg-[#C48A1F] transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27]"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form action={formEndpoint} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="_subject" value="New Saffron Table catering quote request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Name" id="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  <Field label="Company" id="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" id="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                  <Field label="Phone" id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Event Date" id="eventDate" type="date" value={form.eventDate} onChange={handleChange} />
                  <Field label="Delivery Time" id="deliveryTime" value={form.deliveryTime} onChange={handleChange} placeholder="e.g. 11:30 AM" />
                </div>
                <Field label="Delivery Address" id="deliveryAddress" value={form.deliveryAddress} onChange={handleChange} placeholder="Street address, city, zip" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Number of Guests" id="numberOfGuests" type="number" value={form.numberOfGuests} onChange={handleChange} placeholder="e.g. 20" required />
                  <Field label="Budget Per Person" id="budgetPerPerson" value={form.budgetPerPerson} onChange={handleChange} placeholder="e.g. $20–$25" />
                </div>
                <div>
                  <label htmlFor="mealType" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 mb-1.5">
                    Meal Type<span className="text-[#D89A27] ml-0.5">*</span>
                  </label>
                  <select
                    id="mealType" name="mealType" value={form.mealType}
                    onChange={(e) => handleChange("mealType", e.target.value)} required
                    className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white text-sm min-h-[44px] focus:outline-none focus:border-[#D89A27] transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-[#3E2438]">Select a meal type…</option>
                    {mealTypeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#3E2438]">{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="dietaryRequests" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 mb-1.5">Dietary Requests</label>
                  <input id="dietaryRequests" name="dietaryRequests" type="text" value={form.dietaryRequests} onChange={(e) => handleChange("dietaryRequests", e.target.value)} placeholder="e.g. nut allergy, gluten-free" className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm min-h-[44px] focus:outline-none focus:border-[#D89A27] transition-colors" />
                </div>
                <div>
                  <label htmlFor="additionalNotes" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 mb-1.5">Additional Notes</label>
                  <textarea id="additionalNotes" name="additionalNotes" value={form.additionalNotes} onChange={(e) => handleChange("additionalNotes", e.target.value)} placeholder="Any other details about your event or order…" rows={3} className="w-full bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D89A27] transition-colors resize-none" />
                </div>
                {error && (
                  <p className="border border-[#D89A27]/30 bg-[#D89A27]/10 px-4 py-3 text-sm text-white/75">
                    {error}
                  </p>
                )}
                <button
                  type="submit" disabled={submitting}
                  className="w-full bg-[#D89A27] text-white py-4 rounded-sm text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#C48A1F] transition-colors min-h-[52px] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3E2438]"
                >
                  {submitting ? "Sending…" : "Request Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
