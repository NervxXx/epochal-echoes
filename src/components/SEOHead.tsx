import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const SEOHead = () => {
  const { language, t } = useLanguage();

  const baseUrl = "https://epochaldialog.com";
  const currentUrl = `${baseUrl}${language !== "ru" ? `?lang=${language}` : ""}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      
      {/* Dynamic canonical */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={language === "ru" ? "ru_RU" : "en_US"} />
    </Helmet>
  );
};

export default SEOHead;