const ContactSection = () => (
  <section id="contact" className="section-padding bg-primary">
    <div className="section-container">
      <div className="max-w-2xl">
        <div className="gold-line mb-6" />
        <p className="label-uppercase mb-4">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-6">
          Institutional Inquiries
        </h2>
        <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mb-10">
          For partnership, investment, or advisory inquiries, please reach out to our corporate office.
        </p>

        <div className="space-y-6 mb-12">
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">Location</p>
            <p className="text-primary-foreground text-base font-body">British Columbia, Canada</p>
          </div>
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">Email</p>
            <p className="text-primary-foreground text-base font-body">TBD</p>
          </div>
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">Phone</p>
            <p className="text-primary-foreground text-base font-body">TBD</p>
          </div>
        </div>

        <a
          href="mailto:info@hhnexusholdings.com"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
        >
          Send Inquiry
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
