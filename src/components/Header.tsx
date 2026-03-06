import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Platforms", href: "#platforms" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/5">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <img src={logo} alt="HH Nexus Holdings" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/70 hover:text-secondary text-sm font-body tracking-wide transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-primary border-t border-white/5">
          <div className="section-container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-secondary text-sm tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
