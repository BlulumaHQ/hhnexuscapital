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
            {t("Partnership Inquiries", "合作洽詢")}
          </h2>
          <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mb-10">
            {lang === "en"
              ? "For partnership, investment, or advisory inquiries, please reach out to our corporate office."
              : "如有合作、投資或顧問諮詢需求，請聯繫我們的公司辦公室。"}
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">
                {t("Location", "地點")}
              </p>
              <p className="text-primary-foreground text-base font-body">Vancouver, BC, Canada</p>
            </div>
            <div>
              <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">
                {t("Email", "電子信箱")}
              </p>
              <div className="space-y-1">
                <p className="text-primary-foreground text-base font-body">info@hhnexuscapital.com</p>
                <p className="text-primary-foreground text-base font-body">partners@hhnexuscapital.com</p>
                <p className="text-primary-foreground text-base font-body">media@hhnexuscapital.com</p>
              </div>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
          >
            {t("Submit Inquiry", "提交洽詢")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;