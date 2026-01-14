import { motion } from "framer-motion";
import { Feather, BookOpen, Users, Sparkles, Crown, Mail, MapPin } from "lucide-react";

const signatures = [
  { name: "Leonardo da Vinci", style: "italic" },
  { name: "William Shakespeare", style: "normal" },
  { name: "Marie Curie", style: "italic" },
  { name: "Albert Einstein", style: "normal" },
  { name: "Cleopatra VII", style: "italic" },
  { name: "Oscar Wilde", style: "normal" },
  { name: "Napoleon Bonaparte", style: "italic" },
  { name: "Frida Kahlo", style: "normal" },
];

const navLinks = [
  { name: "О проекте", href: "#hero" },
  { name: "Персонажи", href: "#magic" },
  { name: "Салон", href: "#salon" },
  { name: "Создать", href: "#create" },
];

const features = [
  { icon: BookOpen, text: "50+ исторических персонажей" },
  { icon: Users, text: "Групповые диалоги" },
  { icon: Sparkles, text: "ИИ нового поколения" },
];

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Main footer background with rich styling */}
      <div className="relative bg-gradient-to-b from-secondary/60 to-secondary/80 dark:from-secondary/40 dark:to-secondary/60 pt-20 pb-8">
        {/* Paper texture */}
        <div className="absolute inset-0 texture-paper opacity-50" />
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23000' stroke-width='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Decorative crown at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-8 left-1/2 -translate-x-1/2"
        >
          <div className="relative">
            <Crown className="w-10 h-10 text-accent/30" />
            <div className="absolute -inset-4 rounded-full border border-dashed border-accent/10" />
          </div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Top section with logo and features */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-display text-3xl font-semibold text-foreground">
                Epochal<span className="text-primary dark:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">Dialog</span>
              </span>
            </motion.div>
            
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Платформа для диалога с величайшими умами истории. 
              Погрузитесь в беседу с прошлым и откройте новые горизонты знаний.
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
            <div className="text-center md:text-left">
              <h4 className="font-display text-foreground font-medium mb-5 text-sm uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
                <Feather className="w-4 h-4 text-accent" />
                Навигация
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
            </div>

            {/* Middle - CTA */}
            <div className="text-center flex flex-col items-center justify-center">
              <motion.a
                href="#cta"
                onClick={(e) => scrollToSection(e, "#cta")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-display hover:bg-primary/90 transition-colors dark:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              >
                <Sparkles className="w-5 h-5" />
                Начать путешествие
              </motion.a>
              
              <p className="text-xs text-muted-foreground mt-4">
                Бесплатно • Без регистрации
              </p>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-right">
              <h4 className="font-display text-foreground font-medium mb-5 text-sm uppercase tracking-widest flex items-center gap-2 justify-center md:justify-end">
                <Mail className="w-4 h-4 text-accent" />
                Связаться
              </h4>
              <div className="flex justify-center md:justify-end gap-3 mb-4">
                {["TG", "VK", "YT"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-11 h-11 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 hover:border-accent/50 transition-all font-display text-sm dark:shadow-[0_0_15px_hsl(var(--accent)/0.2)]"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                <MapPin className="w-3 h-3" />
                Санкт-Петербург, Россия
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
                className={`font-display text-sm text-muted-foreground cursor-default transition-all duration-300 ${
                  sig.style === "italic" ? "italic" : ""
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
              © 2024 Epochal Dialog. 
              <span className="hidden sm:inline">Все права защищены.</span>
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">
                Условия использования
              </a>
            </div>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:shadow-[0_0_30px_hsl(var(--primary)/0.3)]" />
      </div>
    </footer>
  );
};

export default Footer;
