import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const platforms = [
  {
    slug: "urban-strategic-forum",
    name: "Urban Strategic Forum Platform",
    nameCn: "城市戰略論壇平台",
    description: "Policy roundtables, leadership summits, and institutional dialogue platforms connecting governments, corporations, and civic leadership.",
    descriptionCn: "政策圓桌、領袖峰會與制度化政商對話平台，連結政府、企業與城市領袖。",
  },
  {
    slug: "public-private-advisory",
    name: "Public-Private Strategy & Advisory",
    nameCn: "公私合作策略顧問",
    description: "Strategic advisory services helping organizations navigate public-private collaboration, government relations, and urban positioning.",
    descriptionCn: "協助機構在公私合作、政府協作與城市定位中建立可落地的策略架構。",
  },
  {
    slug: "cultural-ip",
    name: "International Cultural IP Platform",
    nameCn: "國際文化 IP 平台",
    description: "Developing scalable cultural programming, festivals, and international exchange initiatives designed for long-term licensing and replication.",
    descriptionCn: "把文化內容從活動升級為可複製、可授權的 IP 資產。",
  },
  {
    slug: "nexus-global-forum",
    name: "Nexus Global Forum",
    nameCn: "Nexus 全球論壇",
    description: "A flagship global forum brand designed for multi-city expansion, institutional dialogue, and strategic partnership development.",
    descriptionCn: "以授權與跨城市複製為核心的旗艦論壇品牌。",
  },
  {
    slug: "industry-capital",
    name: "Industry & Capital Connection Platform",
    nameCn: "產業與資本連結平台",
    description: "Alliance building and strategic matchmaking between industries, investors, and institutional partners.",
    descriptionCn: "建立產業聯盟與資本媒合機制，促進長期策略合作。",
  },
];

const Platforms = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Five Strategic Platforms", "五大戰略平台")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Urban Influence <span className="text-secondary">Platforms</span></>
              ) : (
                <>城市影響力<span className="text-secondary">平台</span></>
              )}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-8">
              {platforms.map((p) => (
                <Link
                  key={p.slug}
                  to={`/platforms/${p.slug}`}
                  className="block border border-border p-8 md:p-12 hover:border-secondary/40 transition-colors group bg-card"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {lang === "en" ? p.name : p.nameCn}
                  </h2>
                  <p className="body-large max-w-2xl">
                    {lang === "en" ? p.description : p.descriptionCn}
                  </p>
                  <span className="inline-block mt-6 text-secondary text-sm font-body tracking-wide">
                    {t("View Platform →", "查看平台 →")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Platforms;
