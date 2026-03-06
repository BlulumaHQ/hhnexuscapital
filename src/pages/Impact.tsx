import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Cultural Continuity",
    titleCn: "文化延續",
    description: "Protecting and modernizing cultural heritage through scalable IP.",
    descriptionCn: "透過文化 IP 的制度化發展讓傳承可持續。",
  },
  {
    title: "Community Inclusion",
    titleCn: "社區共融",
    description: "Encouraging multicultural engagement and accessible public programming.",
    descriptionCn: "推動多族裔參與與公共文化活動。",
  },
  {
    title: "Responsible Partnerships",
    titleCn: "責任合作",
    description: "Promoting transparent collaboration and long-term accountability.",
    descriptionCn: "建立透明且長期的合作關係。",
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
            Building Platforms That Deliver <span className="text-secondary">Measurable Community Value</span>
          </h1>
          <p className="font-display text-lg text-primary-foreground/50 mt-4">社會影響力</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-8 md:p-10 border border-border bg-card">
                <div className="w-8 h-[2px] bg-secondary mb-6" />
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">{pillar.title}</h2>
                <p className="text-secondary/70 text-sm font-display mb-4">{pillar.titleCn}</p>
                <p className="body-large mb-4">{pillar.description}</p>
                <p className="text-muted-foreground text-sm font-body">{pillar.descriptionCn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Impact;
