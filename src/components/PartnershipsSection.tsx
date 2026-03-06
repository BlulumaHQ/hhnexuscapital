const PartnershipsSection = () => (
  <section id="partnerships" className="section-padding bg-card border-t border-border">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Partnerships</p>
          <h2 className="heading-section mb-6">
            Institutional Partnerships &amp; Alliances
          </h2>
        </div>
        <div>
          <p className="body-large mb-6">
            HH Nexus Holdings maintains strategic alliances with institutional partners across government, private sector, and advisory networks in British Columbia and beyond.
          </p>
          <p className="body-large">
            Our partnership model is structured around mutual value creation, shared governance standards, and long-term alignment of objectives.
          </p>
        </div>
      </div>

      <div className="mt-16 pt-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Government & Public Sector", "Private Capital", "Advisory Networks", "Academic Institutions"].map(
            (partner) => (
              <div key={partner} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-border flex items-center justify-center">
                  <span className="text-secondary text-xs font-medium tracking-wider uppercase font-body">TBD</span>
                </div>
                <p className="text-sm text-muted-foreground font-body">{partner}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </section>
);

export default PartnershipsSection;
