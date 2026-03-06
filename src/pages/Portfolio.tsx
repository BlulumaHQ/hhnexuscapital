import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";
import hsinhsinLogo from "@/assets/brands/hsinhsin_logo.jpg";
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

const Portfolio = () => {
  const { lang, t } = useLanguage();

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
            <p className="label-uppercase mb-4">{t("Portfolio / Subsidiaries", "旗下事業")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Strategic Investments & <span className="text-secondary">Holdings</span></>
              ) : (
                <>策略性投資與<span className="text-secondary">控股事業</span></>
              )}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {lang === "en"
                ? "Our holding structure connects strategic platforms with operating assets."
                : "我們以控股架構串聯平台型業務與營運型資產群。"}
            </p>
          </div>
        </section>

        {/* Operating Assets */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="mb-16">
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">
                {t("Operating Assets", "營運資產")}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <Link
                  to="/portfolio/hsin-hsin-holdings"
                  className="block p-8 md:p-12 bg-card border border-border hover:border-secondary/30 transition-colors group"
                >
                  <div className="flex items-start gap-6">
                    <img src={hsinhsinLogo} alt="HSIN HSIN HOLDINGS" className="w-20 h-20 object-contain flex-shrink-0 hidden md:block" />
                    <div>
                      <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-3 font-body">
                        {t("Founded in Vancouver, 1995", "創立於溫哥華，1995年")}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary group-hover:text-secondary transition-colors mb-3">
                        HSIN HSIN HOLDINGS LTD.
                      </h3>
                      <p className="body-large max-w-2xl mb-4">
                        {lang === "en"
                          ? "Founded in Vancouver in 1995, HSIN HSIN HOLDINGS LTD. is a diversified business group spanning art craftsmanship, education, retail lifestyle, branding and design, and coffee and tea experiences."
                          : "欣欣控股自 1995 年成立於溫哥華，事業涵蓋工藝美學與藝術裝裱、文化教育、生活選品零售、品牌設計與行銷整合，以及咖啡茶與健康食材體驗。"}
                      </p>
                      <p className="body-large max-w-2xl">
                        {lang === "en"
                          ? "The group connects products, services, and cultural programming into a practical ecosystem for sustainable growth."
                          : "串聯商品、服務與文化內容，形成可持續成長的實務型生態系。"}
                      </p>
                      <span className="inline-block mt-6 text-secondary text-sm font-body tracking-wide">
                        {t("View Details →", "查看詳情 →")}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Group Brands */}
            <div className="mb-16">
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">
                {t("Group Brands", "集團品牌")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="p-8 bg-card border border-border hover:border-secondary/20 transition-colors flex flex-col"
                  >
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

            {/* Urban Platforms */}
            <div>
              <div className="gold-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">
                {t("Urban Platforms", "城市平台")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Urban Strategic Forum Platform", nameCn: "城市戰略論壇平台", slug: "urban-strategic-forum" },
                  { name: "Public-Private Strategy & Advisory", nameCn: "公私合作策略顧問", slug: "public-private-advisory" },
                  { name: "International Cultural IP Platform", nameCn: "國際文化 IP 平台", slug: "cultural-ip" },
                  { name: "Nexus Global Forum", nameCn: "Nexus 全球論壇", slug: "nexus-global-forum" },
                  { name: "Industry & Capital Connection Platform", nameCn: "產業與資本連結平台", slug: "industry-capital" },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    to={`/platforms/${item.slug}`}
                    className="block p-8 bg-card border border-border hover:border-secondary/30 transition-colors group"
                  >
                    <h3 className="font-display text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                      {lang === "en" ? item.name : item.nameCn}
                    </h3>
                    <span className="inline-block mt-4 text-secondary text-sm font-body tracking-wide">
                      {t("View Platform →", "查看平台 →")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;