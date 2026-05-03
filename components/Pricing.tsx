"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "For individuals and small teams exploring automation.",
    features: [
      "5 active workflows",
      "500 runs / month",
      "10 integrations",
      "Community support",
      "Basic analytics",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Studio",
    price: "$49",
    period: "per month",
    desc: "For growing teams that need power and reliability at scale.",
    features: [
      "Unlimited workflows",
      "50,000 runs / month",
      "200+ integrations",
      "AI decision nodes",
      "Priority support",
      "99.9% uptime SLA",
    ],
    cta: "Start Studio trial",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "talk to us",
    desc: "For enterprises that need full control and dedicated support.",
    features: [
      "Everything in Studio",
      "Custom run limits",
      "SSO & SAML",
      "On-prem deployment",
      "Dedicated SLA",
      "Custom integrations",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-lines" id="pricing">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
          — Pricing
        </span>
        <h2
          className="font-fraunces font-bold text-ink mt-3"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Simple,{" "}
          <em className="italic text-accent">honest</em> pricing
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`relative rounded-2xl p-8 border transition-all duration-400 hover:-translate-y-2 ${
              plan.featured
                ? "border-accent bg-bg-2"
                : "border-lines bg-bg-2/40 hover:border-ink-soft/25"
            }`}
            style={{
              boxShadow: plan.featured
                ? "0 0 0 0 rgba(255,87,34,0)"
                : undefined,
            }}
            whileHover={
              plan.featured
                ? { boxShadow: "0 24px 60px rgba(255,87,34,0.18)" }
                : { boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }
            }
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.65 }}
            data-hover={plan.name}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-ink font-mono text-[10px] uppercase tracking-[0.15em] px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              </div>
            )}

            <div className="mb-7">
              <div className="font-mono text-[10px] text-ink-soft uppercase tracking-[0.2em] mb-3">
                {plan.name}
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span
                  className={`font-fraunces font-bold leading-none ${plan.featured ? "text-accent" : "text-ink"}`}
                  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
                >
                  {plan.price}
                </span>
                <span className="font-mono text-[10px] text-ink-soft pb-1.5">
                  {plan.period}
                </span>
              </div>
              <p className="font-body text-sm text-ink-soft leading-relaxed">
                {plan.desc}
              </p>
            </div>

            <ul className="space-y-3 mb-8 border-t border-lines pt-6">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <span className="w-3.5 h-px bg-accent shrink-0" />
                  <span className="font-body text-sm text-ink-soft">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              data-hover={plan.cta}
              className={`block text-center font-mono text-[10px] uppercase tracking-[0.15em] py-3.5 rounded-full transition-all duration-300 ${
                plan.featured
                  ? "bg-accent text-ink hover:bg-orange-600"
                  : "border border-lines text-ink-soft hover:border-accent/60 hover:text-ink"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
