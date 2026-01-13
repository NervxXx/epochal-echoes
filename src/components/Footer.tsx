import { motion } from "framer-motion";

const signatures = [
  { name: "L. da Vinci", style: "italic" },
  { name: "W. Shakespeare", style: "normal" },
  { name: "M. Curie", style: "normal" },
  { name: "A. Einstein", style: "italic" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden bg-secondary/50">
      {/* Paper texture */}
      <div className="absolute inset-0 texture-paper" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-medium text-foreground">
                Epochal<span className="text-primary">Dialog</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Платформа для диалога с величайшими умами истории. Погрузитесь в беседу с прошлым.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <div>
              <h4 className="font-display text-foreground font-medium mb-4">Навигация</h4>
              <ul className="space-y-2">
                {["О проекте", "Персонажи", "Тарифы", "Блог"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social links styled as postal seals */}
          <div className="flex md:justify-end">
            <div>
              <h4 className="font-display text-foreground font-medium mb-4">Связаться</h4>
              <div className="flex gap-3">
                {["TG", "VK", "YT"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors font-display text-sm"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Signatures decoration */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-50">
          {signatures.map((sig) => (
            <span
              key={sig.name}
              className={`font-display text-sm text-muted-foreground ${
                sig.style === "italic" ? "italic" : ""
              }`}
            >
              {sig.name}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Epochal Dialog. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;