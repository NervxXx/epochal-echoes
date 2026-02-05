
# План оптимизации SEO для Epochal Dialog

## Обзор

Проведён полный технический SEO-аудит лендинга. Выявлено **12 критических и средних проблем**, влияющих на индексацию и ранжирование сайта.

---

## Фаза 1: Критические исправления HTML (index.html)

### 1.1 Добавить недостающие мета-теги

Текущее состояние `index.html` требует значительного расширения мета-тегов:

```text
Добавить в <head>:

1. meta robots для разрешения индексации
2. canonical URL для предотвращения дублей
3. hreflang теги для RU/EN версий
4. og:url, og:locale для Open Graph
5. Preload для критических ресурсов
6. Schema.org JSON-LD разметка
```

### 1.2 Структура обновлённого index.html

```text
<!DOCTYPE html>
<html lang="ru">  <!-- будет динамически меняться -->
<head>
    <!-- Базовые мета-теги (уже есть) -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- НОВОЕ: Robots директива -->
    <meta name="robots" content="index, follow" />
    
    <!-- НОВОЕ: Canonical URL -->
    <link rel="canonical" href="https://epochaldialog.com/" />
    
    <!-- НОВОЕ: hreflang для мультиязычности -->
    <link rel="alternate" hreflang="ru" href="https://epochaldialog.com/?lang=ru" />
    <link rel="alternate" hreflang="en" href="https://epochaldialog.com/?lang=en" />
    <link rel="alternate" hreflang="x-default" href="https://epochaldialog.com/" />
    
    <!-- Title и Description (обновить для динамики) -->
    <title>Epochal Dialog — Диалог с историей | AI чат с историческими личностями</title>
    <meta name="description" content="..." />
    
    <!-- НОВОЕ: Дополнительные Open Graph теги -->
    <meta property="og:url" content="https://epochaldialog.com/" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta property="og:site_name" content="Epochal Dialog" />
    
    <!-- НОВОЕ: Preload критических ресурсов -->
    <link rel="preload" href="/src/assets/hero-background.jpg" as="image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- НОВОЕ: Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Epochal Dialog",
      "description": "AI платформа для диалога с историческими личностями",
      "url": "https://epochaldialog.com",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Epochal Dialog",
        "url": "https://epochaldialog.com"
      }
    }
    </script>
</head>
```

---

## Фаза 2: Семантика и структура React-компонентов

### 2.1 Обернуть контент в `<main>` (Index.tsx)

**Файл**: `src/pages/Index.tsx`

Изменить корневой `<div>` на семантическую структуру:

```text
До:
<div className="min-h-screen...">

После:
<>
  <Navigation />
  <main className="min-h-screen..." role="main">
    <ScrollProgress />
    <HeroSection />
    ...
  </main>
  <Footer />
</>
```

### 2.2 Добавить role и aria-label к секциям

Каждая секция должна иметь понятную роль:

```text
<section id="hero" aria-label="Главный экран">
<section id="magic" aria-label="Галерея персонажей">
<section id="salon" aria-label="Функция Салон">
```

---

## Фаза 3: Оптимизация изображений

### 3.1 Добавить width/height для предотвращения CLS

**Файлы**: HeroSection.tsx, PortraitCard.tsx, SalonSection.tsx, DemoChat.tsx

```text
До:
<img src={heroBackground} alt="..." className="..." />

После:
<img 
  src={heroBackground} 
  alt="Историческая карта с силуэтами великих мыслителей"
  width={1920}
  height={1080}
  className="..."
/>
```

### 3.2 Улучшить alt-тексты

| Компонент | Текущий alt | Улучшенный alt |
|-----------|-------------|----------------|
| HeroSection | "Historical map with silhouettes" | "Старинная карта мира с силуэтами исторических личностей — Леонардо да Винчи, Эйнштейна, Клеопатры" |
| PortraitCard | "{name}" | "Портрет {name} — {era}. {quote}" |
| DemoChat | "Oscar Wilde" | "Портрет Оскара Уайльда — ирландского писателя и драматурга XIX века" |

---

## Фаза 4: Создание sitemap.xml

**Файл**: `public/sitemap.xml` (новый)

```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://epochaldialog.com/</loc>
    <xhtml:link rel="alternate" hreflang="ru" href="https://epochaldialog.com/?lang=ru"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://epochaldialog.com/?lang=en"/>
    <lastmod>2026-02-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Фаза 5: Обновить robots.txt

**Файл**: `public/robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://epochaldialog.com/sitemap.xml
```

---

## Фаза 6: Динамические мета-теги для мультиязычности

### 6.1 Создать компонент SEOHead

**Файл**: `src/components/SEOHead.tsx` (новый)

Компонент для динамического управления мета-тегами через react-helmet-async:

```text
Функционал:
- Динамически меняет <html lang="..."> при переключении языка
- Обновляет title и description
- Переключает og:locale
- Меняет canonical URL
```

### 6.2 Добавить переводы для мета-тегов

**Файл**: `src/contexts/LanguageContext.tsx`

Добавить ключи перевода:

```text
"meta.title": "Epochal Dialog — Диалог с историей"
"meta.description": "Оживи голоса прошлого..."
```

---

## Фаза 7: Исправить проблемные ссылки

### 7.1 Footer — пустые href

**Файл**: `src/components/Footer.tsx`

```text
До:
<a href="#">Политика конфиденциальности</a>

После:
<a href="/privacy">Политика конфиденциальности</a>
<!-- или если страниц нет: -->
<span className="text-muted-foreground cursor-not-allowed">
  Политика конфиденциальности (скоро)
</span>
```

### 7.2 Социальные ссылки

```text
До:
{["TG", "VK", "YT"].map((social) => (
  <a href="#">{social}</a>
))}

После:
const socialLinks = [
  { name: "TG", url: "https://t.me/epochaldialog" },
  { name: "VK", url: "https://vk.com/epochaldialog" },
  { name: "YT", url: "https://youtube.com/@epochaldialog" },
];
```

---

## Сводка изменений по файлам

| Файл | Изменения |
|------|-----------|
| `index.html` | +meta robots, +canonical, +hreflang, +schema.org, +preload |
| `src/pages/Index.tsx` | div → main, +aria-labels |
| `src/components/SEOHead.tsx` | Новый компонент для динамических мета-тегов |
| `src/components/HeroSection.tsx` | +width/height, улучшить alt |
| `src/components/PortraitCard.tsx` | +width/height, улучшить alt |
| `src/components/SalonSection.tsx` | +width/height |
| `src/components/DemoChat.tsx` | +width/height, улучшить alt |
| `src/components/Footer.tsx` | Исправить пустые href |
| `src/contexts/LanguageContext.tsx` | +ключи для мета-тегов |
| `public/sitemap.xml` | Новый файл |
| `public/robots.txt` | +Sitemap ссылка |

---

## Технические детали

### Зависимости

Для динамического управления `<head>` потребуется установить:

```text
npm install react-helmet-async
```

### Порядок реализации

1. **Критические** (влияют на индексацию):
   - robots meta tag
   - canonical URL
   - sitemap.xml

2. **Важные** (улучшают ранжирование):
   - hreflang теги
   - Schema.org разметка
   - Семантический main

3. **Оптимизационные** (улучшают UX и Core Web Vitals):
   - width/height изображений
   - preload ресурсов
   - Улучшенные alt-тексты

4. **Косметические**:
   - Исправление пустых ссылок
   - Улучшение aria-labels

---

## Ожидаемые результаты

После внедрения всех изменений:

- Корректная индексация обеих языковых версий (RU/EN)
- Улучшение позиций в поисковой выдаче благодаря Schema.org
- Снижение CLS за счёт явных размеров изображений
- Правильное отображение в соцсетях (OG/Twitter Cards)
- Соответствие требованиям W3C валидатора
