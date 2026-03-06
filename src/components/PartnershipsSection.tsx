import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const partnerCategoriesEn = [
  { name: "Government & City Collaborations", items: ["Municipal governments", "Regional economic development agencies", "Urban innovation offices", "City cultural departments"] },
  { name: "Corporate Partners", items: ["Global consulting firms", "Investment institutions", "Technology companies", "Infrastructure development firms"] },
  { name: "Cultural & Community Partners", items: ["Museums", "Cultural foundations", "Arts councils", "International exchange organizations"] },
  { name: "Advisors & Experts", items: ["Urban policy advisors", "Economic strategists", "Cultural diplomacy specialists", "Institutional governance experts"] },
];

const partnerCategoriesZh = [
  { name: "政府與城市合作", items: ["市級政府", "區域經濟發展機構", "城市創新辦公室", "城市文化部門"] },
  { name: "企業合作夥伴", items: ["全球諮詢公司", "投資機構", "科技公司", "基礎建設開發公司"] },
  { name: "文化與社區夥伴", items: ["博物館", "文化基金會", "藝術委員會", "國際交流組織"] },
  { name: "顧問與專家", items: ["城市政策顧問", "經濟策略師", "文化外交專家", "制度治理專家"] },
];

const PartnershipsSection = () => {
  const { lang, t } = useLanguage();
  const categories = lang === "en" ? partnerCategoriesEn : partnerCategoriesZh;

  return (
    <section id="partnerships" className="section-padding bg-card border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
          <div>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Partners", "合作夥伴")}</p>
            <h2 className="heading-section mb-6">
              {t("Institutional Partnerships", "機構合作夥伴")}
            </h2>
          </div>
          <div>
            <p className="body-large">
              {lang === "en"
                ? "HH Nexus Capital Ltd. collaborates with governments, corporations, and cultural institutions to build long-term strategic platforms."
                : "衡寰資本有限公司與政府、企業及文化機構合作，共同打造長期策略平台。"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary mb-4">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary/50 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/partners"
            className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
          >
            {t("View All Partners →", "查看所有合作夥伴 →")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;