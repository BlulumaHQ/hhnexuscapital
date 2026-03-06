import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const categoriesEn = ["All", "Perspectives", "Case Studies", "Reports"] as const;
const categoriesZh = ["全部", "觀點", "案例研究", "報告"] as const;

type Category = string;

const insightItems = [
  {
    title: "Urban Cultural Platforms and the Future of Global Cities",
    titleCn: "城市文化平台與全球城市的未來",
    category: "Perspectives",
    categoryCn: "觀點",
    date: "March 2026",
    excerpt: "How cultural diplomacy and international collaboration platforms are reshaping city influence.",
    excerptCn: "文化外交與國際合作平台如何重塑城市影響力。",
    content: [
      "Cities today compete not only through economic policy but also through cultural visibility and international partnerships. Cultural platforms allow cities to build long-term relationships that extend beyond traditional diplomacy.",
      "Through curated forums, cultural exchanges, and institutional dialogue, cities create environments where innovation, investment, and creativity intersect."
    ],
    contentCn: [
      "當今城市不僅透過經濟政策競爭，更需要文化能見度與國際夥伴關係。文化平台讓城市能夠建立超越傳統外交的長期關係。",
      "透過策展式論壇、文化交流與制度化對話，城市創造了創新、投資與創意交會的環境。"
    ],
  },
  {
    title: "Public-Private Partnerships Driving Urban Innovation",
    titleCn: "公私合作推動城市創新",
    category: "Case Studies",
    categoryCn: "案例研究",
    date: "February 2026",
    excerpt: "Why collaboration between government and private organizations is essential for modern city development.",
    excerptCn: "為什麼政府與民間組織的合作對現代城市發展至關重要。",
    content: [
      "Modern urban development increasingly relies on collaboration between public institutions and private sector leadership. When these partnerships are structured effectively, they accelerate innovation in infrastructure, culture, and economic policy.",
      "Strategic dialogue platforms provide neutral environments where policy leaders, investors, and industry experts can collaborate."
    ],
    contentCn: [
      "現代城市發展越來越依賴公共機構與民間部門領導者之間的合作。當這些合作關係得到有效架構時，它們能加速基礎建設、文化與經濟政策的創新。",
      "策略對話平台提供了政策領導者、投資者與產業專家可以合作的中立環境。"
    ],
  },
  {
    title: "Cultural IP as a Strategic Economic Asset",
    titleCn: "文化 IP 作為策略性經濟資產",
    category: "Reports",
    categoryCn: "報告",
    date: "January 2026",
    excerpt: "How cultural programming is becoming scalable intellectual property.",
    excerptCn: "文化活動如何成為可規模化的知識產權。",
    content: [
      "Cities around the world are transforming cultural programs into scalable intellectual property assets. Festivals, exhibitions, and cultural collaborations are now designed to be replicated across cities and regions.",
      "These initiatives strengthen city branding while creating long-term economic opportunities."
    ],
    contentCn: [
      "世界各地的城市正在將文化項目轉化為可規模化的知識產權資產。節慶、展覽與文化合作現在被設計為可在城市與地區間複製。",
      "這些倡議在加強城市品牌的同時，也創造了長期的經濟機會。"
    ],
  },
  {
    title: "Institutional Platforms for Global Collaboration",
    titleCn: "全球合作的制度化平台",
    category: "Perspectives",
    categoryCn: "觀點",
    date: "December 2025",
    excerpt: "Why long-term dialogue platforms are becoming essential.",
    excerptCn: "為什麼長期對話平台變得不可或缺。",
    content: [
      "Global challenges require long-term institutional collaboration. Dialogue platforms bring together governments, corporations, and cultural organizations to address shared challenges.",
      "These platforms allow cities to build sustainable relationships that extend far beyond single events."
    ],
    contentCn: [
      "全球性挑戰需要長期的制度化合作。對話平台匯集政府、企業與文化組織，共同應對共同挑戰。",
      "這些平台讓城市能夠建立遠超單一活動的可持續關係。"
    ],
  },
];

const Insights = () => {
  const { lang, t } = useLanguage();
  const categories = lang === "en" ? categoriesEn : categoriesZh;
  const [active, setActive] = useState<Category>(categories[0]);

  const filtered = active === categories[0]
    ? insightItems
    : insightItems.filter((i) => (lang === "en" ? i.category : i.categoryCn) === active);

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Insights", "洞察觀點")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Perspectives & <span className="text-secondary">Intelligence</span></>
              ) : (
                <>觀點與<span className="text-secondary">洞察</span></>
              )}
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
            <div className="space-y-8">
              {filtered.map((item, i) => (
                <article key={i} className="p-8 md:p-10 bg-card border border-border hover:border-secondary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <span className="text-xs text-secondary tracking-[0.15em] uppercase font-body">
                      {lang === "en" ? item.category : item.categoryCn}
                    </span>
                    <span className="text-xs text-muted-foreground font-body">{item.date}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">
                    {lang === "en" ? item.title : item.titleCn}
                  </h2>
                  <p className="text-sm text-secondary/80 font-medium mb-4 font-body">
                    {lang === "en" ? item.excerpt : item.excerptCn}
                  </p>
                  <div className="space-y-3">
                    {(lang === "en" ? item.content : item.contentCn).map((para, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed font-body">
                        {para}
                      </p>
                    ))}
                  </div>
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