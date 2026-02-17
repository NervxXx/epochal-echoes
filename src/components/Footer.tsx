import { motion } from "framer-motion";
import { Feather, BookOpen, Users, Sparkles, Crown, Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  const signatures = [
    { name: language === "ru" ? "Леонардо да Винчи" : "Leonardo da Vinci", style: "italic" },
    { name: language === "ru" ? "Уильям Шекспир" : "William Shakespeare", style: "normal" },
    { name: language === "ru" ? "Мария Кюри" : "Marie Curie", style: "italic" },
    { name: language === "ru" ? "Альберт Эйнштейн" : "Albert Einstein", style: "normal" },
    { name: language === "ru" ? "Клеопатра VII" : "Cleopatra VII", style: "italic" },
    { name: language === "ru" ? "Оскар Уайльд" : "Oscar Wilde", style: "normal" },
    { name: language === "ru" ? "Наполеон Бонапарт" : "Napoleon Bonaparte", style: "italic" },
    { name: language === "ru" ? "Фрида Кало" : "Frida Kahlo", style: "normal" },
  ];

  const navLinks = [
    { name: t("footer.about"), href: "#hero" },
    { name: t("footer.characters"), href: "#magic" },
    { name: t("footer.salon"), href: "#salon" },
    { name: t("footer.create"), href: "#create" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sentiens-apps", label: "LinkedIn", icon: Linkedin },
    { name: "X", url: "https://x.com/SentiensApps", label: "X (Twitter)", icon: Twitter },
    { name: "Instagram", url: "https://www.instagram.com/sentiensapps/", label: "Instagram", icon: Instagram },
  ];

  const features = [
    { icon: BookOpen, text: t("footer.feature1") },
    { icon: Users, text: t("footer.feature2") },
    { icon: Sparkles, text: t("footer.feature3") },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative">
      {/* Simple top border */}
      <div className="h-px bg-border" />

      {/* Clean footer background */}
      <div className="relative bg-secondary pt-16 pb-8">

        <div className="relative z-10 container mx-auto px-4">
          {/* Top section with logo and features */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <img src="/logo.png" alt="Epochal Dialog Logo" className="h-16 w-auto rounded-sm" width="64" height="64" />
              <span className="font-display text-3xl font-semibold text-foreground">
                Epochal<span className="text-primary dark:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">Dialog</span>
              </span>
            </motion.div>

            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Features row with icons */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground group"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {/* Navigation */}
            <nav className="text-center md:text-left" aria-label={t("footer.nav")}>
              <h4 className="font-display text-foreground font-medium mb-5 text-sm uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
                <Feather className="w-4 h-4 text-accent" />
                {t("footer.nav")}
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Middle - CTA */}
            <div className="text-center flex flex-col items-center justify-center">
              <motion.a
                href="https://epochaldialog.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-display hover:bg-primary/90 transition-colors dark:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              >
                <Sparkles className="w-5 h-5" />
                {t("footer.cta")}
              </motion.a>

              <p className="text-xs text-muted-foreground mt-4">
                {t("footer.free")}
              </p>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-right">
              <h4 className="font-display text-foreground font-medium mb-5 text-sm uppercase tracking-widest flex items-center gap-2 justify-center md:justify-end">
                <Mail className="w-4 h-4 text-accent" />
                {t("footer.contact")}
              </h4>
              <div className="flex justify-center md:justify-end gap-3 mb-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-11 h-11 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 hover:border-accent/50 transition-all font-display text-sm dark:shadow-[0_0_15px_hsl(var(--accent)/0.2)]"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                <MapPin className="w-3 h-3" />
                {t("footer.location")}
              </p>
            </div>
          </div>

          {/* Ornate divider */}
          <div className="relative flex items-center justify-center mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="px-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rotate-45 bg-accent/50" />
              <Feather className="w-5 h-5 text-accent/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent/50" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Signatures decoration - animated on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
          >
            {signatures.map((sig, index) => (
              <motion.span
                key={sig.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ opacity: 1, scale: 1.1, y: -2 }}
                className={`font-display text-sm text-muted-foreground cursor-default transition-all duration-300 ${sig.style === "italic" ? "italic" : ""
                  }`}
              >
                {sig.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground pt-6 border-t border-border/50">
            <p className="flex items-center gap-2">
              <Crown className="w-3 h-3 text-accent/50" />
              {t("footer.copyright")}
              <span className="hidden sm:inline">{t("footer.rights")}</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://sentiensapps.online"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {t("footer.company")}
              </a>
              <a
                href="https://sentiensapps.online/legal#privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="https://sentiensapps.online/legal#terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
