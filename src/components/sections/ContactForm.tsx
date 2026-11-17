"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown, CircleCheck, FlaskConical, LoaderCircle, TriangleAlert } from "lucide-react";
import { links } from "@/config/assets";
import { contact } from "@/content/site";
import { DIAL_CODES, UTM_KEYS, validateContact, type ContactErrors, type ContactField, type ContactInput, type Utm } from "@/lib/contact";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "demo-checked" | "error";

const initial: ContactInput = {
  fullName: "",
  company: "",
  role: "",
  sector: "",
  dialCode: "+212",
  phone: "",
  objective: "",
  email: "",
  consent: false,
};

const fieldOrder: ContactField[] = ["fullName", "company", "role", "sector", "phone", "objective", "email", "consent"];
const UTM_STORAGE_KEY = "cdd_tanger_utm";

/** Lit les paramètres UTM de l'URL (mémorisés pour la session, afin de survivre à la navigation). */
function readUtm(): Utm {
  const utm: Utm = {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) utm[key] = value.slice(0, 150);
    }
    if (Object.keys(utm).length > 0) sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    else return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) ?? "{}") as Utm;
  } catch {
    /* stockage indisponible : on garde ce qui a pu être lu */
  }
  return utm;
}

const inputClass =
  "block h-[3.25rem] w-full rounded-[14px] border border-line-strong bg-white px-4 text-[1rem] text-ink placeholder:text-ink-muted/70 transition-[border-color,box-shadow] duration-200 hover:border-sky-300 focus:border-brand focus:shadow-[0_0_0_4px_rgba(10,123,240,0.14)] focus:outline-none aria-[invalid=true]:border-error aria-[invalid=true]:focus:shadow-[0_0_0_4px_rgba(198,40,56,0.12)]";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: string;
  className?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, optional, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-2 text-[0.9rem] font-medium text-ink">
        <span>
          {label}
          {!optional && (
            <span aria-hidden className="ml-0.5 text-brand-deep">
              *
            </span>
          )}
        </span>
        {optional && <span className="text-[0.8rem] font-normal text-ink-muted">({optional})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-[0.84rem] leading-snug text-error">
          <TriangleAlert aria-hidden className="mt-[0.12em] size-[1em] shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ mode }: { mode: "webhook" | "demo" }) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [values, setValues] = useState<ContactInput>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef(0);
  const utm = useRef<Utm>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    utm.current = readUtm();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const set = <K extends keyof ContactInput>(key: K, value: ContactInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    const field = (key === "dialCode" ? "phone" : key) as ContactField;
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    if (status === "demo-checked" || status === "error") setStatus("idle");
  };

  const showErrors = (next: ContactErrors) => {
    setErrors(next);
    setFormError(contact.errors.summary);
    setStatus("error");
    const first = fieldOrder.find((f) => next[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(first))}`)?.focus();
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const result = validateContact(values);
    if (!result.ok) return showErrors(result.errors);
    setErrors({});
    setFormError("");

    // Mode démonstration : aucune requête, aucune donnée transmise.
    if (mode === "demo") return setStatus("demo-checked");

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypot,
          startedAt: startedAt.current,
          utm: utm.current,
          pageUrl: window.location.origin + window.location.pathname,
        }),
      });
      const data = (await response.json().catch(() => null)) as { ok?: boolean; code?: string; errors?: ContactErrors } | null;

      // Le message de succès n'apparaît qu'après confirmation réelle du serveur.
      if (response.ok && data?.ok === true) return setStatus("success");
      if (response.status === 422 && data?.errors) return showErrors(data.errors);
      setFormError(
        response.status === 429 ? contact.errors.rateLimit : data?.code === "not_configured" ? contact.errors.notConfigured : contact.errors.generic,
      );
      setStatus("error");
    } catch {
      setFormError(contact.errors.network);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex flex-col items-center px-2 py-10 text-center focus:outline-none sm:py-16">
        <span className="grid size-16 place-items-center rounded-full bg-[linear-gradient(160deg,var(--brand),var(--brand-deep))] text-white shadow-cta">
          <CircleCheck aria-hidden className="size-8" strokeWidth={1.8} />
        </span>
        <h3 className="mt-6 text-[1.5rem] font-semibold tracking-[-0.02em] text-ink">{contact.success.title}</h3>
        <p className="mt-3 max-w-[420px] text-[1.02rem] leading-[1.65] text-ink-soft">{contact.success.text}</p>
      </div>
    );
  }

  const f = contact.fields;
  const describe = (field: ContactField) => (errors[field] ? { "aria-invalid": true, "aria-describedby": `${id(field)}-error` } : {});
  const submitting = status === "submitting";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Formulaire de contact CDD Tanger">
      {mode === "demo" && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-[#f0d9a2] bg-[#fff8e8] p-4 text-[#5f4500]">
          <FlaskConical aria-hidden className="mt-0.5 size-5 shrink-0" />
          <p className="text-[0.88rem] leading-[1.55]">
            <strong className="font-semibold">{contact.demo.badge}. </strong>
            {contact.demo.notice}
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id("fullName")} label={f.fullName.label} error={errors.fullName} className="sm:col-span-2">
          <input
            id={id("fullName")}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder={f.fullName.placeholder}
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            className={inputClass}
            {...describe("fullName")}
          />
        </Field>

        <Field id={id("company")} label={f.company.label} error={errors.company}>
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            required
            maxLength={160}
            placeholder={f.company.placeholder}
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            className={inputClass}
            {...describe("company")}
          />
        </Field>

        <Field id={id("role")} label={f.role.label} error={errors.role}>
          <input
            id={id("role")}
            name="role"
            type="text"
            autoComplete="organization-title"
            required
            maxLength={120}
            placeholder={f.role.placeholder}
            value={values.role}
            onChange={(e) => set("role", e.target.value)}
            className={inputClass}
            {...describe("role")}
          />
        </Field>

        <Field id={id("sector")} label={f.sector.label} error={errors.sector} className="sm:col-span-2">
          <div className="relative">
            <select
              id={id("sector")}
              name="sector"
              required
              value={values.sector}
              onChange={(e) => set("sector", e.target.value)}
              className={cn(inputClass, "appearance-none pr-11", !values.sector && "text-ink-muted/80")}
              {...describe("sector")}
            >
              <option value="" disabled>
                {f.sector.placeholder}
              </option>
              {contact.sectors.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-[1.1rem] -translate-y-1/2 text-ink-muted" />
          </div>
        </Field>

        <Field id={id("phone")} label={f.whatsapp.label} error={errors.phone} className="sm:col-span-2">
          <div className="flex gap-2">
            <div className="relative w-[7.25rem] shrink-0">
              <select
                name="dialCode"
                aria-label={f.whatsapp.countryLabel}
                autoComplete="tel-country-code"
                value={values.dialCode}
                onChange={(e) => set("dialCode", e.target.value)}
                className={cn(inputClass, "appearance-none pr-8 pl-3.5 text-transparent")}
              >
                {DIAL_CODES.map((c) => (
                  <option key={c.iso} value={c.dial} className="text-ink">
                    {c.iso} {c.dial} — {c.label}
                  </option>
                ))}
              </select>
              {/* Libellé court affiché par-dessus le <select> (dont les options gardent le nom complet du pays). */}
              <span aria-hidden className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[1rem] text-ink">
                {DIAL_CODES.find((c) => c.dial === values.dialCode)?.iso} {values.dialCode}
              </span>
              <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-ink-muted" />
            </div>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required
              maxLength={30}
              placeholder={f.whatsapp.placeholder}
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={cn(inputClass, "min-w-0 flex-1")}
              {...describe("phone")}
            />
          </div>
        </Field>

        <Field id={id("objective")} label={f.objective.label} error={errors.objective} className="sm:col-span-2">
          <div className="relative">
            <select
              id={id("objective")}
              name="objective"
              required
              value={values.objective}
              onChange={(e) => set("objective", e.target.value)}
              className={cn(inputClass, "appearance-none pr-11", !values.objective && "text-ink-muted/80")}
              {...describe("objective")}
            >
              <option value="" disabled>
                {f.objective.placeholder}
              </option>
              {contact.objectives.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-[1.1rem] -translate-y-1/2 text-ink-muted" />
          </div>
        </Field>

        <Field id={id("email")} label={f.email.label} error={errors.email} optional={f.email.optional} className="sm:col-span-2">
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={160}
            placeholder={f.email.placeholder}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputClass}
            {...describe("email")}
          />
        </Field>
      </div>

      {/* Champ piège anti-spam : invisible et ignoré par les lecteurs d'écran. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Ne pas remplir ce champ
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id={id("consent")}
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 size-[1.35rem] shrink-0 cursor-pointer rounded-md accent-[var(--brand-deep)]"
            {...describe("consent")}
          />
          <label htmlFor={id("consent")} className="cursor-pointer text-[0.88rem] leading-[1.55] text-ink-soft">
            {contact.consent.before}
            <a
              href={links.privacyPolicy}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-deep underline decoration-sky-300 underline-offset-2 hover:decoration-brand-deep"
            >
              {contact.consent.link}
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
            {contact.consent.after}
            <span aria-hidden className="ml-0.5 text-brand-deep">
              *
            </span>
          </label>
        </div>
        {errors.consent && (
          <p id={`${id("consent")}-error`} className="mt-1.5 flex items-start gap-1.5 pl-9 text-[0.84rem] leading-snug text-error">
            <TriangleAlert aria-hidden className="mt-[0.12em] size-[1em] shrink-0" />
            {errors.consent}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {status === "error" && formError && (
          <p role="alert" className="mt-5 flex items-start gap-2.5 rounded-2xl border border-[#f1c4c9] bg-[#fdf1f2] p-4 text-[0.9rem] leading-[1.5] text-error">
            <TriangleAlert aria-hidden className="mt-0.5 size-[1.1em] shrink-0" />
            {formError}
          </p>
        )}
        {status === "demo-checked" && (
          <p role="status" className="mt-5 flex items-start gap-2.5 rounded-2xl border border-[#f0d9a2] bg-[#fff8e8] p-4 text-[0.9rem] leading-[1.5] text-[#5f4500]">
            <FlaskConical aria-hidden className="mt-0.5 size-[1.1em] shrink-0" />
            {contact.demo.afterSubmit}
          </p>
        )}
      </div>

      <button type="submit" disabled={submitting} className={cn(buttonClass("primary", "lg"), "mt-6 w-full disabled:cursor-wait disabled:opacity-80")}>
        {submitting ? (
          <>
            <LoaderCircle aria-hidden className="size-[1.1em] animate-spin" />
            {contact.submitting}
          </>
        ) : (
          <>
            {contact.submit}
            <ArrowRight aria-hidden className="size-[1.05em] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-[0.82rem] leading-[1.55] text-ink-muted">{contact.microcopy}</p>
    </form>
  );
}
