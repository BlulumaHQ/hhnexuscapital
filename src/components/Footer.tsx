import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary border-t border-white/5">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
        {/* Tagline */}
        <div>
          <p className="font-display text-lg md:text-xl text-primary-foreground font-semibold mb-1">
            HH Nexus Holdings Ltd.
          </p>
          <p className="font-display text-sm text-secondary mb-3">衡寰國際控股有限公司</p>
          <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">
            Where Capital Meets Governance and Culture. Structuring long-term urban influence platforms across British Columbia and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-4 font-body">Navigation</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "About", href: "/about" },
              { label: "Platforms", href: "/platforms" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Impact", href: "/impact" },
              { label: "Insights", href: "/insights" },
              { label: "Partners", href: "/partners" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
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
          <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-4 font-body">Contact</p>
          <div className="space-y-2">
            <p className="text-primary-foreground/60 text-sm font-body">Vancouver, British Columbia, Canada</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/40 text-xs tracking-wide font-body">
          © {new Date().getFullYear()} HH Nexus Holdings Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
