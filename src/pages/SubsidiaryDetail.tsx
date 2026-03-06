import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const subsidiaryData: Record<string, { name: string; sector: string; founded: string; description: string; verticals: string[] }> = {
  "hsin-hsin-holdings": {
    name: "HSIN HSIN HOLDINGS LTD.",
    sector: "Operating Assets",
    founded: "Founded in Vancouver, 1995",
    description: "A diversified group spanning art craftsmanship, education, retail lifestyle, branding & design, and coffee and tea experiences.",
    verticals: ["Art Craftsmanship", "Education", "Retail Lifestyle", "Branding & Design", "Coffee and Tea Experiences"],
  },
};

const SubsidiaryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const subsidiary = slug ? subsidiaryData[slug] : null;

  if (!subsidiary) {
    return (
      <>
        <Header />
        <main className="bg-background pt-28 pb-20">
          <div className="section-container text-center">
            <h1 className="heading-section mb-4">Subsidiary Not Found</h1>
            <Link to="/portfolio" className="text-secondary text-sm font-body">← Back to Portfolio</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <Link to="/portfolio" className="text-primary-foreground/40 hover:text-secondary text-xs font-body tracking-wide mb-6 inline-block transition-colors">
              ← Portfolio
            </Link>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{subsidiary.sector}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1]">
              {subsidiary.name}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container max-w-3xl">
            <p className="text-sm text-muted-foreground tracking-[0.15em] uppercase mb-4 font-body">{subsidiary.founded}</p>
            <p className="body-large mb-12">{subsidiary.description}</p>

            <div className="mb-12">
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">Business Verticals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subsidiary.verticals.map((v) => (
                  <div key={v} className="p-6 border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-primary">{v}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              {["Overview", "Leadership", "Key Metrics"].map((title, i) => (
                <div key={i} className="border-b border-border pb-8 last:border-0">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">{title}</h2>
                  <p className="body-large">TBD</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SubsidiaryDetail;
