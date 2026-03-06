import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "Press Releases", "Case Studies", "Reports", "Perspectives"] as const;
type Category = typeof categories[number];

const insightItems = [
  { title: "TBD", category: "Press Releases" as const, date: "TBD", excerpt: "TBD" },
  { title: "TBD", category: "Case Studies" as const, date: "TBD", excerpt: "TBD" },
  { title: "TBD", category: "Reports" as const, date: "TBD", excerpt: "TBD" },
  { title: "TBD", category: "Perspectives" as const, date: "TBD", excerpt: "TBD" },
];

const Insights = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? insightItems : insightItems.filter((i) => i.category === active);

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">Insights</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              Perspectives & <span className="text-secondary">Intelligence</span>
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-xs font-body tracking-[0.1em] uppercase transition-colors border ${
                    active === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Items */}
            <div className="space-y-6">
              {filtered.map((item, i) => (
                <article key={i} className="p-8 bg-card border border-border hover:border-secondary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <span className="text-xs text-secondary tracking-[0.15em] uppercase font-body">{item.category}</span>
                    <span className="text-xs text-muted-foreground font-body">{item.date}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-3">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
