import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Environmental Stewardship",
    description: "TBD",
  },
  {
    title: "Social Impact",
    description: "TBD",
  },
  {
    title: "Governance & Ethics",
    description: "TBD",
  },
];

const Impact = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="section-container">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Impact / ESG</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
            Responsible Growth, <span className="text-secondary">Measurable Impact</span>
          </h1>
          <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Our commitment to environmental, social, and governance principles is embedded in every decision we make and every partnership we form.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-8 md:p-10 border border-border bg-card">
                <div className="w-8 h-[2px] bg-secondary mb-6" />
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">{pillar.title}</h2>
                <p className="body-large">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card border-t border-border">
        <div className="section-container max-w-3xl">
          <div className="gold-line mb-6" />
          <h2 className="heading-section mb-6">ESG Framework</h2>
          <p className="body-large mb-6">
            HH Nexus Holdings integrates ESG considerations into our investment analysis, portfolio management, and corporate governance practices. Our framework is aligned with internationally recognized standards and reporting guidelines.
          </p>
          <p className="body-large">TBD</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Impact;
