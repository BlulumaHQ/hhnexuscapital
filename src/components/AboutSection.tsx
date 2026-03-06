const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">What We Are</p>
          <h2 className="heading-section mb-6">
            HH Nexus Holdings Ltd.
          </h2>
          <p className="font-display text-lg text-secondary tracking-wide">
            衡寰國際控股有限公司
          </p>
        </div>
        <div>
          <p className="body-large mb-6">
            We are not an event company, not a traditional PR firm, and not merely an investment vehicle.
          </p>
          <p className="body-large mb-6">
            HH Nexus builds institutional, repeatable city platforms—linking government collaboration, private-sector coalitions, and cultural IP into long-term influence systems.
          </p>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">
              我們不是活動公司、不是傳統公關、也不只是投資公司。
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              衡寰打造的是制度化、可複製的城市平台：把政府協作、企業聯盟與文化 IP 結構化整合，形成長期可運作的城市影響力系統。
            </p>
          </div>
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
