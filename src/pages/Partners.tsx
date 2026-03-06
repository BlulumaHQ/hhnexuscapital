import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const partnerCategories = [
  {
    name: "Government & City Collaborations",
    nameCn: "政府與城市合作",
    partners: [
      { en: "Municipal governments", zh: "市級政府" },
      { en: "Regional economic development agencies", zh: "區域經濟發展機構" },
      { en: "Urban innovation offices", zh: "城市創新辦公室" },
      { en: "City cultural departments", zh: "城市文化部門" },
    ],
  },
  {
    name: "Corporate Partners",
    nameCn: "企業合作夥伴",
    partners: [
      { en: "Global consulting firms", zh: "全球諮詢公司" },
      { en: "Investment institutions", zh: "投資機構" },
      { en: "Technology companies", zh: "科技公司" },
      { en: "Infrastructure development firms", zh: "基礎建設開發公司" },
    ],
  },
  {
    name: "Cultural & Community Partners",
    nameCn: "文化與社區夥伴",
    partners: [
      { en: "Museums", zh: "博物館" },
      { en: "Cultural foundations", zh: "文化基金會" },
      { en: "Arts councils", zh: "藝術委員會" },
      { en: "International exchange organizations", zh: "國際交流組織" },
    ],
  },
  {
    name: "Advisors & Experts",
    nameCn: "顧問與專家",
    partners: [
      { en: "Urban policy advisors", zh: "城市政策顧問" },
      { en: "Economic strategists", zh: "經濟策略師" },
      { en: "Cultural diplomacy specialists", zh: "文化外交專家" },
      { en: "Institutional governance experts", zh: "制度治理專家" },
    ],
  },
];

const Partners = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Partners", "合作夥伴")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Institutional <span className="text-secondary">Partnerships</span></>
              ) : (
                <>機構<span className="text-secondary">合作夥伴</span></>
              )}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {lang === "en"
                ? "HH Nexus Capital Ltd. collaborates with governments, corporations, and cultural institutions to build long-term strategic platforms."
                : "衡寰資本有限公司與政府、企業及文化機構合作，共同打造長期策略平台。"}
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerCategories.map((cat) => (
                <div key={cat.name} className="p-8 md:p-10 border border-border bg-card">
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h2 className="font-display text-xl font-semibold text-primary mb-6">
                    {lang === "en" ? cat.name : cat.nameCn}
                  </h2>
                  <ul className="space-y-3">
                    {cat.partners.map((p, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary/60 rounded-full flex-shrink-0" />
                        {lang === "en" ? p.en : p.zh}
                      </li>
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
                {t("Become a Partner", "合作洽談")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;