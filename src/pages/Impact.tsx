import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, Users, Handshake } from "lucide-react";

const pillars = [
  {
    title: "Cultural Continuity",
    titleCn: "文化延續",
    description: "Supporting cultural preservation while enabling modern creative innovation.",
    descriptionCn: "在支持文化保存的同時，推動現代創意創新。",
    icon: Landmark,
  },
  {
    title: "Community Inclusion",
    titleCn: "社區共融",
    description: "Encouraging multicultural engagement and inclusive participation.",
    descriptionCn: "鼓勵多元文化參與和包容性社區活動。",
    icon: Users,
  },
  {
    title: "Responsible Partnerships",
    titleCn: "責任合作",
    description: "Building transparent institutional partnerships that generate long-term impact.",
    descriptionCn: "建立透明的機構合作關係，創造長期影響力。",
    icon: Handshake,
  },
];

const Impact = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Impact / ESG", "社會影響力")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Building Platforms That Deliver <span className="text-secondary">Measurable Community Value</span></>
              ) : (
                <>打造能創造<span className="text-secondary">可衡量社區價值</span>的平台</>
              )}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-8 md:p-10 border border-border bg-card">
                    <Icon className="w-10 h-10 text-secondary mb-6" strokeWidth={1.2} />
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">
                      {lang === "en" ? pillar.title : pillar.titleCn}
                    </h2>
                    <p className="body-large">
                      {lang === "en" ? pillar.description : pillar.descriptionCn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Impact;