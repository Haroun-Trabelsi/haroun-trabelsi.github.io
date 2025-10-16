"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(""); // honeypot (hidden)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | "info"; msg: string } | null>(null);
  const startedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    // reset timer on mount
    startedAtRef.current = Date.now();
  }, []);

  const valid = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!EMAIL_RE.test(email.trim())) return "Please enter a valid email.";
    if (message.trim().length < 5) return "Message should be at least 5 characters.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const v = valid();
    if (v) {
      setStatus({ type: "error", msg: v });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          honey,
          startedAt: startedAtRef.current,
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok === false) {
        setStatus({ type: "error", msg: json?.error || "Failed to send message." });
      } else {
        setStatus({ type: "success", msg: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
        setHoney("");
        startedAtRef.current = Date.now();
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center slide-in-up">
        <h2 className="font-pixel text-3xl text-primary mb-4">{">"} READY TO COLLABORATE?</h2>
        <p className="text-muted-foreground mb-8">Let's build something amazing together</p>
      </div>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-card/60 border-2 border-primary p-6 md:p-8 mb-12"
        aria-describedby="contact-status"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="font-pixel text-xs text-primary block mb-2">
              NAME
            </label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-pixel"
              placeholder="YOUR NAME"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="font-pixel text-xs text-primary block mb-2">
              EMAIL
            </label>
            <Input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-pixel"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="contact-message" className="font-pixel text-xs text-primary block mb-2">
            MESSAGE
          </label>
          <Textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="font-pixel min-h-40"
            placeholder="TELL ME ABOUT YOUR PROJECT..."
            required
          />
        </div>

        {/* Honeypot field (hidden from users and screen readers) */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
          />
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <Button
            type="submit"
            disabled={loading}
            className={cn(
              "font-pixel bg-secondary hover:bg-secondary/80 text-secondary-foreground pixel-press",
              loading && "opacity-80 cursor-not-allowed"
            )}
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </Button>

          <div id="contact-status" aria-live="polite" className="text-sm">
            {status && (
              <span
                className={cn(
                  "font-pixel",
                  status.type === "success" && "text-tertiary",
                  status.type === "error" && "text-destructive",
                  status.type === "info" && "text-muted-foreground"
                )}
              >
                {status.msg}
              </span>
            )}
          </div>
        </div>
      </form>

      <footer className="border-t-2 border-primary bg-card/50 backdrop-blur-sm mt-16 rounded-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-pixel text-primary text-sm">© 2025 HAROUN TRABELSI</div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-pixel text-xs pixel-press"
                asChild
              >
                <a href="https://linkedin.com/in/harountrabelsi1" target="_blank" rel="noopener noreferrer">
                  LINKEDIN
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-pixel text-xs pixel-press"
                asChild
              >
                <a href="mailto:harountrabelsi12@gmail.com">
                  EMAIL
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-pixel text-xs pixel-press"
                asChild
              >
                <a href="tel:+21642417058">
                  PHONE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
