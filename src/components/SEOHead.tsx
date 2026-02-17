import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const SEOHead = () => {
  const { language, t } = useLanguage();

  const baseUrl = "https://www.land-epochaldialog.com";
  const currentUrl = `${baseUrl}${language !== "ru" ? `?lang=${language}` : ""}`;
  const ogImageUrl = `${baseUrl}/preview.png`;
  const logoUrl = `${baseUrl}/logo.png`;
  
  const locale = language === "ru" ? "ru_RU" : "en_US";
  const alternateLocale = language === "ru" ? "en_US" : "ru_RU";

  return (
    <Helmet>
      <html lang={language} />
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta name="keywords" content={language === "ru" 
        ? "AI чат, исторические личности, Леонардо да Винчи, Эйнштейн, диалог с историей, образование, искусственный интеллект" 
        : "AI chat, historical figures, Leonardo da Vinci, Einstein, dialogue with history, education, artificial intelligence"} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Dynamic canonical */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="ru" href={`${baseUrl}?lang=ru`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:site_name" content="Epochal Dialog" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={language === "ru" 
        ? "Epochal Dialog - Диалог с величайшими умами истории" 
        : "Epochal Dialog - Dialogue with history's greatest minds"} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EpochalDialog" />
      <meta name="twitter:creator" content="@EpochalDialog" />
      <meta name="twitter:title" content={t("meta.title")} />
      <meta name="twitter:description" content={t("meta.description")} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={language === "ru" 
        ? "Epochal Dialog - Диалог с величайшими умами истории" 
        : "Epochal Dialog - Dialogue with history's greatest minds"} />
      
      {/* Mobile App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Epochal Dialog" />
      
      {/* Theme */}
      <meta name="theme-color" content="#0f172a" />
      
      {/* Structured Data - Dynamic */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "${currentUrl}",
          "name": "${t("meta.title")}",
          "description": "${t("meta.description")}",
          "inLanguage": "${language}",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Epochal Dialog",
            "url": "${baseUrl}"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "${ogImageUrl}",
            "width": 1200,
            "height": 630
          }
        }
      `}</script>
    </Helmet>
  );
};

export default SEOHead;