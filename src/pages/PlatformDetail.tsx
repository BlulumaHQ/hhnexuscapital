import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const platformData: Record<string, { name: string; category: string }> = {
  "real-estate": { name: "TBD", category: "Real Estate & Development" },
  "technology": { name: "TBD", category: "Technology & Innovation" },
  "advisory": { name: "TBD", category: "Advisory & Consulting" },
};

const sections = [
  { title: "Definition", content: "TBD" },
  { title: "Services", content: "TBD" },
  { title: "Deliverables", content: "TBD" },
  { title: "Who It Is For", content: "TBD" },
  { title: "Revenue Model", content: "TBD" },
  { title: "Case Studies", content: "TBD" },
];

const PlatformDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const platform = slug ? platformData[slug] : null;

  if (!platform) {
    return (
      <>
        <Header />
        <main className="bg-background pt-28 pb-20">
          <div className="section-container text-center">
            <h1 className="heading-section mb-4">Platform Not Found</h1>
            <Link to="/platforms" className="text-secondary text-sm font-body">← Back to Platforms</Link>
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
            <Link to="/platforms" className="text-primary-foreground/40 hover:text-secondary text-xs font-body tracking-wide mb-6 inline-block transition-colors">
              ← All Platforms
            </Link>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{platform.category}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1]">
              {platform.name}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="space-y-16">
              {sections.map((section, i) => (
                <div key={i} className="border-b border-border pb-12 last:border-0">
                  <div className="flex items-start gap-6">
                    <span className="text-secondary text-xs font-body tracking-[0.15em] uppercase mt-1 min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
                        {section.title}
                      </h2>
                      <p className="body-large">{section.content}</p>
                    </div>
                  </div>
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

export default PlatformDetail;
