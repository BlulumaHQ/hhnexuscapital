const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Who We Are</p>
          <h2 className="heading-section mb-6">
            HH Nexus Holdings Ltd.
          </h2>
          <p className="font-display text-lg text-secondary tracking-wide">
            衡寰國際控股有限公司
          </p>
        </div>
        <div>
          <p className="body-large mb-6">
            HH Nexus Holdings Ltd. is an urban strategic platform group dedicated to structuring long-term city-level influence through capital integration, policy collaboration, and cultural IP development.
          </p>
          <p className="body-large">
            以制度化平台構建長期城市影響力
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 mt-16 md:mt-24 pt-16 border-t border-border">
        {[
          { title: "Integrity", desc: "Principled conduct in every engagement and decision." },
          { title: "Institutional Collaboration", desc: "Structured partnerships with public and private institutions." },
          { title: "Long-termism", desc: "Patient capital and strategy built for enduring impact." },
          { title: "Cultural Respect", desc: "Honouring diverse traditions and international heritage." },
          { title: "Execution Excellence", desc: "Disciplined delivery across every platform and initiative." },
        ].map((value) => (
          <div key={value.title}>
            <div className="w-8 h-[2px] bg-secondary mb-4" />
            <h3 className="font-display text-lg font-semibold text-primary mb-3">{value.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
