"use client";

import { type FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, type Variants } from "motion/react";
import dynamic from "next/dynamic";
import SectionHead from "../ui/SectionHead";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCheckCircle,
} from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const Aurora = dynamic(() => import("../ui/Aurora"), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    type: "" | "loading" | "success" | "error";
  }>({
    message: "",
    type: "",
  });

  const handleCopyEmail = () => {
    const email = "adelyasser5002@gmail.com";
    const triggerSuccess = () => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    };

    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(email)
        .then(triggerSuccess)
        .catch(() => {
          fallbackCopyText(email, triggerSuccess);
        });
    } else {
      fallbackCopyText(email, triggerSuccess);
    }
  };

  const fallbackCopyText = (text: string, onSuccess: () => void) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.setAttribute("readonly", "");
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) onSuccess();
    } catch {
      // Fallback failed silently without throwing
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus({ message: "Sending your message...", type: "loading" });

    emailjs
      .sendForm("adelYasser", "template_yui8p2n", form.current, {
        publicKey: "HNdP806FCFVmc58P0",
      })
      .then(
        () => {
          setStatus({ message: "", type: "success" });
          form.current?.reset();
        },
        () => {
          setStatus({
            message:
              "Failed to send message. Please try again or email me directly.",
            type: "error",
          });
        },
      );
  };

  return (
    <motion.section
      className="relative flex flex-col items-center min-h-screen gap-10 sm:gap-12 px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-hidden"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={containerVariants}
    >
      {/* Background: Fluid WebGL Aurora with Ambient Vignette */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-45">
        <Aurora
          colorStops={["#4f46e5", "#7c3aed", "#06b6d4"]}
          amplitude={1.1}
          blend={0.6}
        />
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-transparent to-neutral-950" />
      </div>

      {/* Header Container */}
      <motion.div
        className="z-10 flex flex-col items-center text-center gap-3 max-w-2xl"
        variants={itemVariants}
      >
        {/* Live Availability Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for new opportunities</span>
        </div>

        <SectionHead animate={false}>Let&apos;s Build Together</SectionHead>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Have an exciting project in mind, need a high-performance frontend, or
          simply want to say hello? Drop me a message below.
        </p>
      </motion.div>

      {/* Main Grid: Info Bento Cards (Left) + Glass Form (Right) */}
      <div className="container max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-12 z-10 w-full">
        {/* Left Column: Direct Info & Social Hub (5 cols on lg) */}
        <motion.div
          className="flex flex-col gap-4 lg:col-span-5"
          variants={itemVariants}
        >
          {/* Email Bento Card with Quick Copy */}
          <div className="group relative p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                  <FiMail size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:adelyasser5002@gmail.com"
                    className="text-xs sm:text-base font-medium text-white hover:text-indigo-400 transition-colors break-all sm:break-normal"
                  >
                    adelyasser5002@gmail.com
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <FiCheck size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp & Phone Bento Card */}
          <div className="group relative p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/201069142906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    +20 1069142906
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/201069142906"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all cursor-pointer shrink-0"
              >
                <span>Chat</span>
                <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Location & Timezone Card */}
          {/* Location & Timezone Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shrink-0">
              <FiMapPin size={18} />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Location & Timezone
              </h3>
              <p className="text-xs sm:text-sm font-medium text-white">
                Cairo, Egypt (GMT+2) • Remote Worldwide
              </p>
            </div>
          </div>

          {/* Social Media Hub Bento */}
          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Connect on Social Platforms
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
              <a
                href="https://github.com/dola5xd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium group"
              >
                <FaGithub
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adel-yasser-a28181242/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/20 hover:border-[#0077b5]/40 text-blue-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium group"
              >
                <FaLinkedin
                  size={16}
                  className="text-[#0077b5] group-hover:scale-110 transition-transform"
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/dola2005ti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-2 rounded-xl bg-[#1877f2]/10 hover:bg-[#1877f2]/20 border border-[#1877f2]/20 hover:border-[#1877f2]/40 text-blue-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium group"
              >
                <FaFacebook
                  size={16}
                  className="text-[#1877f2] group-hover:scale-110 transition-transform"
                />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Modern Glassmorphic Contact Form (7 cols on lg) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={itemVariants}
        >
          <div className="relative p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Ambient card top corner glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {status.type === "success" ? (
                <motion.div
                  key="success-message"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                    <FaCheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Thank you for reaching out. I&apos;ve received your message
                    and will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ message: "", type: "" })}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  key="contact-form"
                  ref={form}
                  onSubmit={sendEmail}
                  suppressHydrationWarning
                  className="flex flex-col gap-5 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="user_name"
                        className="text-xs font-semibold text-zinc-300 uppercase tracking-wider"
                      >
                        Your Name
                      </label>
                      <input
                        id="user_name"
                        type="text"
                        name="user_name"
                        defaultValue=""
                        autoComplete="name"
                        autoCapitalize="words"
                        autoCorrect="off"
                        spellCheck={false}
                        suppressHydrationWarning
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-zinc-500 text-sm transition-all outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="user_email"
                        className="text-xs font-semibold text-zinc-300 uppercase tracking-wider"
                      >
                        Your Email
                      </label>
                      <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        defaultValue=""
                        autoComplete="email"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        suppressHydrationWarning
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-zinc-500 text-sm transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-zinc-300 uppercase tracking-wider"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      defaultValue=""
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck={false}
                      suppressHydrationWarning
                      placeholder="Project Inquiry / Frontend Development"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-zinc-500 text-sm transition-all outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-zinc-300 uppercase tracking-wider"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      defaultValue=""
                      autoComplete="off"
                      spellCheck={false}
                      suppressHydrationWarning
                      placeholder="Tell me about your project, goals, or timeline..."
                      rows={5}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-zinc-500 text-sm transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="group relative inline-flex items-center justify-center gap-2.5 w-full py-4 px-8 mt-2 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all duration-300 border border-indigo-400/40 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status.type === "loading" ? (
                      <>
                        <ImSpinner2 className="text-lg animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend
                          size={18}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>

                  {status.type === "error" && (
                    <p className="mt-2 text-center text-red-400 text-xs sm:text-sm">
                      {status.message}
                    </p>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
