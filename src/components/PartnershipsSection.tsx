import { useLanguage } from "@/context/LanguageContext";

const partnersEn = [
  "Government & City Collaboration",
  "Corporate Partnerships",
  "Cultural & Community Partners",
  "Advisors & Experts",
];

const partnersZh = [
  "政府與城市合作",
  "企業合作夥伴",
  "文化與社區夥伴",
  "顧問與專家",
];

const PartnershipsSection = () => {
  const { lang, t } = useLanguage();
  const partners = lang === "en" ? partnersEn : partnersZh;

  return (
    <section id="partnerships" className="section-padding bg-card border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Partners", "合作夥伴")}</p>
            <h2 className="heading-section mb-6">
              {t("Institutional Partnerships & Alliances", "機構合作與策略聯盟")}
            </h2>
          </div>
          <div>
            <p className="body-large mb-6">
              {lang === "en"
                ? "HH Nexus Capital maintains strategic alliances with institutional partners across government, private sector, and advisory networks in British Columbia and beyond."
                : "衡寰資本與政府、企業及顧問網絡中的機構合作夥伴在卑詩省及海外建立了策略聯盟。"}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-border flex items-center justify-center">
                  <span className="text-secondary text-xs font-medium tracking-wider uppercase font-body">TBD</span>
                </div>
                <p className="text-sm text-muted-foreground font-body">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
