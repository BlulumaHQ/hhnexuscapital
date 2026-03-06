import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";
import hsinFramingLogo from "@/assets/brands/hsin_framing_logo.jpg";
import cambridgeArtLogo from "@/assets/brands/cambridge_art_logo.jpg";
import hsinEventLogo from "@/assets/brands/hsin_hsin_event_logo.jpg";
import blulumaLogo from "@/assets/brands/bluluma_logo.png";

const brands = [
  {
    name: "Hsin Framing & Moulding",
    nameCn: "欣欣畫框",
    description: "Premium custom framing and art presentation services trusted by collectors and designers since 1995.",
    descriptionCn: "自1995年起深受收藏家和設計師信賴的高級訂製畫框與藝術展示服務。",
    logo: hsinFramingLogo,
  },
  {
    name: "Cambridge Art Center",
    nameCn: "劍橋藝術教育中心",
    description: "Educational workshops and creative mentorship programs supporting artistic development and cultural preservation.",
    descriptionCn: "支持藝術發展與文化傳承的教育工作坊與創意導師計畫。",
    logo: cambridgeArtLogo,
  },
  {
    name: "Hsin PR & Events",
    nameCn: "欣欣向榮活動策劃與公關公司",
    description: "Professional event planning, media relations, and brand activation services.",
    descriptionCn: "專業活動策劃、媒體關係與品牌推廣服務。",
    logo: hsinEventLogo,
  },
  {
    name: "La Petite Elli Coffee & Tea Boutique",
    nameCn: "La Petite Elli 咖啡茶精品",
    description: "A curated boutique focused on specialty coffee, tea, and lifestyle experiences.",
    descriptionCn: "專注於精品咖啡、茶與生活體驗的精選店。",
    logo: null,
  },
  {
    name: "Hsin Hsin Shop",
    nameCn: "欣欣複合式商店",
    description: "A curated lifestyle and food marketplace connecting local producers and community commerce.",
    descriptionCn: "連結在地生產者與社區商業的嚴選生活與食品市集。",
    logo: null,
  },
  {
    name: "Bluluma Design",
    nameCn: "Bluluma 設計工作室",
    description: "Brand strategy, web design, and creative development for modern businesses.",
    descriptionCn: "為現代企業提供品牌策略、網站設計與創意開發服務。",
    logo: blulumaLogo,
    url: "https://www.bluluma.com",
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
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="section-container relative z-10">
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
              {t("Group Brands", "集團品牌")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <div key={brand.name} className="p-8 border border-border bg-card hover:border-secondary/20 transition-colors flex flex-col">
                  <div className="h-24 mb-6 flex items-center">
                    {brand.logo ? (
                      brand.url ? (
                        <a href={brand.url} target="_blank" rel="noopener noreferrer">
                          <img src={brand.logo} alt={brand.name} className="h-20 w-auto object-contain" />
                        </a>
                      ) : (
                        <img src={brand.logo} alt={brand.name} className="h-20 w-auto object-contain" />
                      )
                    ) : (
                      <div className="h-20 w-20 border border-border flex items-center justify-center">
                        <span className="text-secondary text-2xl font-display font-semibold">
                          {brand.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    {lang === "en" ? brand.name : brand.nameCn}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body flex-1">
                    {lang === "en" ? brand.description : brand.descriptionCn}
                  </p>
                  {brand.url && (
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-secondary text-sm font-body tracking-wide hover:underline">
                      {brand.url.replace("https://www.", "")} →
                    </a>
                  )}
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