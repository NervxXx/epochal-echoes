import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium text-foreground border border-border"
      aria-label={language === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      <Globe className="w-4 h-4 text-muted-foreground" />
      <span className="uppercase">{language === "ru" ? "EN" : "RU"}</span>
    </motion.button>
  );
};

export default LanguageSwitcher;
