import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.svg";

const navEn = [
  { label: "About", href: "/about" },
  { label: "Platforms", href: "/platforms" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Impact", href: "/impact" },
  { label: "Insights", href: "/insights" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

const navZh = [
  { label: "關於我們", href: "/about" },
  { label: "平台架構", href: "/platforms" },
  { label: "旗下事業", href: "/portfolio" },
  { label: "社會影響力", href: "/impact" },
  { label: "洞察觀點", href: "/insights" },
  { label: "合作夥伴", href: "/partners" },
  { label: "聯絡我們", href: "/contact" },
];

const Footer = () => {
  const { lang, t } = useLanguage();
  const navItems = lang === "en" ? navEn : navZh;

  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Tagline */}
          <div>
            <img src={logo} alt="HH Nexus Capital" className="h-14 w-auto mb-5 brightness-0 invert" />
            <p className="font-display text-lg md:text-xl text-primary-foreground font-semibold mb-1">
              {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
            </p>
            <p className="font-display text-sm text-secondary mb-3">
              {t("Urban Strategic Platform Group", "城市級戰略平台型資本平台集團")}
            </p>
            <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">
              {t("Where Capital Meets Governance and Culture.", "資本 × 政策 × 文化的城市樞紐。")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-4 font-body">
              {t("Navigation", "導覽")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-primary-foreground/50 hover:text-secondary text-sm transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-4 font-body">
              {t("Contact", "聯絡")}
            </p>
            <div className="space-y-2">
              <p className="text-primary-foreground/60 text-sm font-body">Vancouver, BC, Canada</p>
              <p className="text-primary-foreground/60 text-sm font-body">info@hhnexuscapital.com</p>
              <p className="text-primary-foreground/60 text-sm font-body">partners@hhnexuscapital.com</p>
              <p className="text-primary-foreground/60 text-sm font-body">media@hhnexuscapital.com</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs tracking-wide font-body">
            © {new Date().getFullYear()} HH Nexus Capital Ltd. {t("All rights reserved.", "版權所有。")}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
              {t("Privacy Policy", "隱私政策")}
            </Link>
            <Link to="/terms" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
              {t("Terms", "條款")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;