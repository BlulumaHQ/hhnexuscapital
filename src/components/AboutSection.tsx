const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Who We Are</p>
          <h2 className="heading-section mb-6">
            A Holding Group Built on Institutional Discipline
          </h2>
        </div>
        <div>
          <p className="body-large mb-6">
            HH Nexus Holdings operates as a strategic holding and advisory organization with a focus on long-term institutional value creation across British Columbia.
          </p>
          <p className="body-large mb-6">
            Our approach is rooted in disciplined capital allocation, operational governance, and strategic partnerships that drive measurable impact across our portfolio companies.
          </p>
          <p className="body-large">
            We serve as a nexus between capital, expertise, and opportunity — connecting institutional-grade resources with high-potential ventures across diversified sectors.
          </p>
        </div>
      </div>

      {/* Key pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 md:mt-24 pt-16 border-t border-border">
        {[
          { title: "Strategic Advisory", desc: "Board-level guidance and corporate strategy across portfolio entities." },
          { title: "Capital Deployment", desc: "Disciplined allocation of resources towards long-term institutional growth." },
          { title: "Operational Governance", desc: "Structured oversight frameworks ensuring accountability and performance." },
        ].map((pillar) => (
          <div key={pillar.title}>
            <div className="w-8 h-[2px] bg-secondary mb-4" />
            <h3 className="font-display text-xl font-semibold text-primary mb-3">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
