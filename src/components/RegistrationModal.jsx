import { useId, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import Modal from "./ui/Modal";
import { states } from "../data/states";

const initialForm = { fullName: "", phone: "", email: "", state: "", message: "" };

function inputClasses(error) {
  // text-base (not text-sm) is intentional: iOS Safari auto-zooms on focus
  // for inputs with a computed font-size under 16px.
  return `w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-navy/40 ${
    error ? "border-primary" : "border-navy/15"
  }`;
}

function Field({ label, error, optional, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink">
        {label}
        {optional && <span className="ml-1 font-normal text-muted">(optional)</span>}
      </span>
      {children}
      {error && <span className="text-xs font-medium text-primary">{error}</span>}
    </label>
  );
}

export default function RegistrationModal({ open, mode = "veteran", onClose, onModeChange }) {
  const titleId = useId();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const isVeteran = mode === "veteran";

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Front-end placeholder only — wire this up to a real endpoint (e.g. an
    // internal API or a form service) before launch.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setForm(initialForm);
      setErrors({});
    }, 300);
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy={titleId} className="max-w-lg p-6 sm:p-9">
      <button
        type="button"
        onClick={handleClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-navy/5 hover:text-ink sm:right-6 sm:top-6"
      >
        <X className="h-4.5 w-4.5" strokeWidth={1.75} />
      </button>

      {status === "success" ? (
        <div className="flex flex-col items-center py-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <h3 className="mt-6 font-heading text-2xl font-bold text-ink">
            {isVeteran ? "Registration received" : "Message sent"}
          </h3>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
            Thank you, {form.fullName.split(" ")[0]}. Our team will get back to you within 2
            business days.
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-1.5 rounded-2xl bg-navy/5 p-1.5 text-sm font-semibold sm:flex-row sm:gap-1 sm:rounded-full sm:p-1">
            <button
              type="button"
              onClick={() => onModeChange?.("veteran")}
              aria-pressed={isVeteran}
              className={`w-full rounded-full px-4 py-2 transition-colors sm:flex-1 ${
                isVeteran ? "bg-white text-ink shadow-soft" : "text-muted"
              }`}
            >
              Register as Veteran
            </button>
            <button
              type="button"
              onClick={() => onModeChange?.("contact")}
              aria-pressed={!isVeteran}
              className={`w-full rounded-full px-4 py-2 transition-colors sm:flex-1 ${
                !isVeteran ? "bg-white text-ink shadow-soft" : "text-muted"
              }`}
            >
              General Enquiry
            </button>
          </div>

          <h3 id={titleId} className="mt-6 font-heading text-2xl font-bold text-ink">
            {isVeteran ? "Join the ATS Corps Veteran Network" : "Contact ATS Corps"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {isVeteran
              ? "Share your details and our team will reach out about co-working spaces, consultancy support, and opportunities near you."
              : "Have a question about our services? Send us a message and we'll respond within 2 business days."}
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-7 flex flex-col gap-5">
            <Field label="Full Name" error={errors.fullName}>
              <input
                type="text"
                value={form.fullName}
                onChange={handleChange("fullName")}
                autoComplete="name"
                className={inputClasses(errors.fullName)}
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  autoComplete="tel"
                  className={inputClasses(errors.phone)}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                  className={inputClasses(errors.email)}
                />
              </Field>
            </div>

            <Field label="State" optional>
              <select
                value={form.state}
                onChange={handleChange("state")}
                className={inputClasses()}
              >
                <option value="">Select a state</option>
                {states.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </Field>

            <Field label="Message" optional>
              <textarea
                rows={3}
                value={form.message}
                onChange={handleChange("message")}
                className={inputClasses()}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
            >
              {status === "submitting"
                ? "Submitting…"
                : isVeteran
                  ? "Submit Registration"
                  : "Send Message"}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
