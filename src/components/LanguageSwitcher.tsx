import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-secondary/80 rounded-full border border-border/50 backdrop-blur-sm shadow-sm hover:border-border transition-colors group">
      <Globe className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors" />
      <div className="flex items-center">
        <button
          onClick={() => setLanguage("ru")}
          className={`relative px-2 py-1 text-[11px] font-bold rounded-full transition-all duration-300 ${language === "ru"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          {language === "ru" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 px-1">RU</span>
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`relative px-2 py-1 text-[11px] font-bold rounded-full transition-all duration-300 ${language === "en"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 px-1">EN</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
