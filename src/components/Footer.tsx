const Footer = () => (
  <footer className="bg-primary border-t border-white/5 py-10">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-primary-foreground/40 text-xs tracking-wide font-body">
        © {new Date().getFullYear()} HH Nexus Holdings. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
          Privacy Policy
        </a>
        <a href="#" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
          Terms
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
