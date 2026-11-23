"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { FAQS, SITE_CONFIG } from "@/data/site-config";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Product & Routine Guidance");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="bg-cream-warm/80 border-b border-border-warm/80 py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            We&apos;re Here to Help
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-espresso">
            Contact ESDORR Care
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Have questions about building your 2-step routine, verifying an
            official marketplace seller, or partnering with ESDORR? Reach out to
            our team.
          </p>
        </div>
      </section>

      {/* Contact Form + Direct Channels */}
      <section className="py-14 sm:py-20 bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-medium text-espresso">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Our skincare advisors reply to all customer enquiries within 24
                business hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-cream border border-border-warm/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Customer Care Email
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="mt-0.5 block text-sm font-semibold text-espresso hover:underline"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-cream border border-border-warm/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Phone &amp; WhatsApp Support
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-espresso">
                    {SITE_CONFIG.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-cream border border-border-warm/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Support Hours
                  </p>
                  <p className="mt-0.5 text-sm text-espresso">
                    {SITE_CONFIG.contact.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-cream border border-border-warm/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Registered Office
                  </p>
                  <p className="mt-0.5 text-sm text-espresso leading-relaxed">
                    {SITE_CONFIG.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-cream border border-border-warm p-6 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sunlit text-espresso">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-espresso">
                    Message Received
                  </h3>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Our care team will review your enquiry
                    about <strong className="text-espresso">{topic}</strong> and
                    respond to <strong className="text-espresso">{email}</strong>{" "}
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-espresso/40 px-6 py-2.5 text-sm font-medium text-espresso hover:bg-espresso hover:text-[#FFFDF9] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-espresso">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-espresso-soft mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aarav Sharma"
                        className="w-full rounded-xl border border-border-warm bg-[#FFFDF9] px-4 py-3 text-sm text-espresso placeholder:text-subtle"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-espresso-soft mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border-warm bg-[#FFFDF9] px-4 py-3 text-sm text-espresso placeholder:text-subtle"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso-soft mb-1.5"
                    >
                      Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full rounded-xl border border-border-warm bg-[#FFFDF9] px-4 py-3 text-sm text-espresso"
                    >
                      <option>Product &amp; Routine Guidance</option>
                      <option>Order on Amazon / Nykaa / Flipkart</option>
                      <option>Wholesale &amp; Retail Partnership</option>
                      <option>Press &amp; Creator Collaborations</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso-soft mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your skin concern or enquiry..."
                      className="w-full rounded-xl border border-border-warm bg-[#FFFDF9] px-4 py-3 text-sm text-espresso placeholder:text-subtle"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-espresso px-8 py-3.5 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="py-16 bg-cream-warm/70 border-t border-border-warm/80"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Common Questions
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-medium text-espresso">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#FFFDF9] border border-border-warm/85 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="font-medium text-sm sm:text-base text-espresso">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-muted transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
