import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const brands = [
  {
    name: "Hsin Framing & Moulding",
    nameCn: "欣欣畫框",
    description: "Premium gold-leaf mouldings and custom framing services trusted by designers and collectors since 1995.",
    descriptionCn: "提供高級金箔木條、訂製畫框與專業裝裱服務。",
  },
  {
    name: "Cambridge Art Center",
    nameCn: "劍橋藝術教育中心",
    description: "Workshops and mentorship programs preserving artistic heritage while inspiring new talent.",
    descriptionCn: "金工與藝術課程與創作指導。",
  },
  {
    name: "Hsin PR & Events",
    nameCn: "欣欣向榮活動策劃與公關公司",
    description: "Integrated event planning, media relations, and brand activation services.",
    descriptionCn: "活動企劃、公關媒體與品牌整合。",
  },
  {
    name: "La Petite Elli Coffee & Tea Boutique",
    nameCn: "La Petite Elli 咖啡茶精品",
    description: "A curated boutique offering specialty coffee, tea, and wellness ingredients.",
    descriptionCn: "精品咖啡、茶與養生選品。",
  },
  {
    name: "Hsin Hsin Shop",
    nameCn: "欣欣複合式商店",
    description: "Curated lifestyle and food selections connecting local partners and community commerce.",
    descriptionCn: "嚴選生活選品與團購商品。",
  },
  {
    name: "Bluluma Design",
    nameCn: "Bluluma 設計工作室",
    description: "Branding, web, and graphic design solutions for modern businesses.",
    descriptionCn: "品牌識別、網站與平面設計服務。",
  },
];

const SubsidiaryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  if (slug !== "hsin-hsin-holdings") {
    return (
      <>
        <Header />
        <main className="bg-background pt-28 pb-20">
          <div className="section-container text-center">
            <h1 className="heading-section mb-4">{t("Subsidiary Not Found", "未找到子公司")}</h1>
            <Link to="/portfolio" className="text-secondary text-sm font-body">
              {t("← Back to Portfolio", "← 返回旗下事業")}
            </Link>
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
              {t("← Portfolio", "← 旗下事業")}
            </Link>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Operating Assets", "營運資產")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1]">
              HSIN HSIN HOLDINGS LTD.
            </h1>
            {lang === "zh" && (
              <p className="font-display text-lg text-primary-foreground/50 mt-4">欣欣控股有限公司</p>
            )}
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-3xl mb-16">
              <p className="text-sm text-muted-foreground tracking-[0.15em] uppercase mb-4 font-body">
                {t("Founded in Vancouver, 1995", "創立於溫哥華，1995年")}
              </p>
              <p className="body-large mb-6">
                {lang === "en"
                  ? "Founded in Vancouver in 1995, HSIN HSIN HOLDINGS LTD. is a diversified business group spanning art craftsmanship, education, retail lifestyle, branding and design, and coffee and tea experiences."
                  : "欣欣控股自 1995 年成立於溫哥華，事業涵蓋工藝美學與藝術裝裱、文化教育、生活選品零售、品牌設計與行銷整合，以及咖啡茶與健康食材體驗。"}
              </p>
              <p className="body-large">
                {lang === "en"
                  ? "The group connects products, services, and cultural programming into a practical ecosystem for sustainable growth."
                  : "串聯商品、服務與文化內容，形成可持續成長的實務型生態系。"}
              </p>
            </div>

            {/* Brands */}
            <div className="gold-line mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">
              {t("Brands", "品牌")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <div key={brand.name} className="p-8 border border-border bg-card">
                  <h3 className="font-display text-lg font-semibold text-primary mb-4">
                    {lang === "en" ? brand.name : brand.nameCn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {lang === "en" ? brand.description : brand.descriptionCn}
                  </p>
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
