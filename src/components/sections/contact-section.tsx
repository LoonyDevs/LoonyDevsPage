// contact — just the email, big

import { SectionLabel } from "@/components/ui/section-label";
import { MAILTO, SUPPORT_EMAIL } from "@/lib/site";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20 bg-accent">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-28">
        <SectionLabel>Contact</SectionLabel>
        <a
          href={MAILTO}
          className="mt-5 block font-heading text-2xl tracking-tight text-primary break-words transition-colors hover:text-primary/70 sm:text-4xl"
        >
          {SUPPORT_EMAIL}
        </a>
        <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
          For app support, questions, or project work.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
