import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const partnerCategories = [
  { name: "Government & City Collaboration", partners: ["TBD"] },
  { name: "Corporate Partnerships", partners: ["TBD"] },
  { name: "Cultural & Community Partners", partners: ["TBD"] },
  { name: "Advisors & Experts", partners: ["TBD"] },
];

const Partners = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="section-container">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Partners</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
            Institutional <span className="text-secondary">Partnerships</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerCategories.map((cat) => (
              <div key={cat.name} className="p-8 md:p-10 border border-border bg-card">
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-xl font-semibold text-primary mb-6">{cat.name}</h2>
                <ul className="space-y-3">
                  {cat.partners.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-body">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors font-body"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Partners;
