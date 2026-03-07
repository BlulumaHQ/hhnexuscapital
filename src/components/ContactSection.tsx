import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-2xl">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">{t("Contact", "聯絡我們")}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-6">
            {t("Get in Touch", "與我們聯繫")}
          </h2>
          <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mb-10">
            {t(
              "For investment inquiries, partnership opportunities, or to submit a pitch deck, please reach out to our team.",
              "如有投資諮詢、合作機會或提交商業計劃書，請與我們的團隊聯繫。"
            )}
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">
                {t("Headquarters", "總部")}
              </p>
              <p className="text-primary-foreground text-base font-body">Vancouver, Canada</p>
            </div>
            <div>
              <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">
                {t("Email", "電子信箱")}
              </p>
              <p className="text-primary-foreground text-base font-body">info@hhnexuscapital.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
            >
              {t("Contact Us", "聯絡我們")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium tracking-wide hover:border-secondary hover:text-secondary transition-colors"
            >
              {t("Submit Pitch Deck", "提交商業計劃書")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
