import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Meta SEO
    "meta.title": "Epochal Dialog — Диалог с историей | AI чат с историческими личностями",
    "meta.description": "Оживи голоса прошлого. Общайтесь с 100+ величайшими умами истории — от Леонардо да Винчи до Эйнштейна. Создавайте уникальные группы для дискуссий.",

    // Navigation
    "nav.home": "Главная",
    "nav.characters": "Персонажи",
    "nav.salon": "Группы",
    "nav.create": "Создать",
    "nav.start": "Начать",
    "nav.navigation": "Навигация",

    // Hero Section
    "hero.tagline1": "Оживи голоса прошлого.",
    "hero.tagline2": "Веди диалог с историей.",
    "hero.subtitle": "Погрузитесь в беседу с величайшими умами человечества — от философов древности до гениев XX века",
    "hero.cta": "Начать путешествие",
    "hero.free": "Бесплатно",

    // Magic Dialog Section
    "magic.title1": "Магия",
    "magic.title2": "диалога",
    "magic.subtitle": "Общайтесь с 100+ величайшими умами и сердцами истории: от Леонардо да Винчи до Клеопатры, от Эйнштейна до Фриды Кало.",
    "magic.stat1": "Исторических личностей",
    "magic.stat2": "Эпох и цивилизаций",
    "magic.stat3": "Возможных диалогов",
    "magic.more": "...и ещё более 100 исторических личностей",

    // Portrait names and quotes
    "portrait.leonardo.name": "Леонардо да Винчи",
    "portrait.leonardo.era": "Ренессанс, XV-XVI век",
    "portrait.leonardo.quote": "Познание без применения подобно дереву без плодов.",
    "portrait.columbus.name": "Христофор Колумб",
    "portrait.columbus.era": "Эпоха великих географических открытий, XV век",
    "portrait.columbus.quote": "Море дарит свободу тем, кто осмеливается покинуть берег.",
    "portrait.beethoven.name": "Людвиг ван Бетховен",
    "portrait.beethoven.era": "Эпоха классицизма и романтизма, XVIII-XIX век",
    "portrait.beethoven.quote": "Музыка — это вино, которое заливает сердце ушей.",
    "portrait.archimedes.name": "Архимед",
    "portrait.archimedes.era": "Древняя Греция, III век до н.э.",
    "portrait.archimedes.quote": "Дайте мне точку опоры, и я переверну Землю.",
    "portrait.napoleon.name": "Наполеон Бонапарт",
    "portrait.napoleon.era": "XVIII-XIX век",
    "portrait.napoleon.quote": "Невозможно — слово из словаря глупцов.",
    "portrait.shakespeare.name": "Уильям Шекспир",
    "portrait.shakespeare.era": "Эпоха Возрождения, XVI век",
    "portrait.shakespeare.quote": "Весь мир — театр, а люди в нём — актёры.",
    "portrait.copernicus.name": "Николай Коперник",
    "portrait.copernicus.era": "Эпоха Возрождения, XV-XVI век",
    "portrait.copernicus.quote": "Мы приписываем Земле движение, а не небу — и всё становится ясно.",
    "portrait.mozart.name": "Вольфганг Амадей Моцарт",
    "portrait.mozart.era": "Эпоха классицизма, XVIII век",
    "portrait.mozart.quote": "Музыка не в нотах, а в тишине между ними.",

    // Salon Section
    "salon.badge": "Эксклюзивная функция",
    "salon.title1": "Создай свою",
    "salon.title2": "группу",
    "salon.subtitle1": "Соберите уникальные группы. Что обсудят в одной комнате",
    "salon.subtitle1.names": "Наполеон, Шекспир, Бетховен",
    "salon.subtitle2": "Станьте режиссёром исторического диспута. Наблюдайте, как великие умы обмениваются идеями, спорят и находят неожиданные точки соприкосновения.",
    "salon.feature1": "Создавайте групповые чаты с любыми историческими персонажами",
    "salon.feature2": "Задавайте темы для дискуссии или наблюдайте свободный диалог",
    "salon.feature3": "Экспортируйте диалоги в PDF и делитесь ими",
    "salon.napoleon": "Наполеон",
    "salon.shakespeare": "Шекспир",
    "salon.beethoven": "Бетховен",
    "salon.message": "Господин Бетховен, как вы находите вдохновение в тишине?",
    "salon.typing": "Бетховен печатает",

    // Create Hero Section
    "create.badge": "Создайте любого персонажа",
    "create.title1": "Добавь своего",
    "create.title2": "героя",
    "create.subtitle1": "Нет вашего кумира?",
    "create.subtitle1.action": "Добавьте его!",
    "create.subtitle1.text": "Оживите любого исторического деятеля, детально описав его характер, идеалы и жизненный путь.",
    "create.subtitle2": "Наш ИИ воссоздаст уникальную личность на основе ваших указаний, сохраняя аутентичность взглядов и неповторимый стиль общения персонажа.",
    "create.tip.title": "Сила промпта",
    "create.tip.text": "Чем подробнее вы опишете черты характера, привычки и исторический контекст в промпте, тем более живым и глубоким будет ваш диалог.",
    "create.grimoire.title": "Создание персонажа",
    "create.grimoire.subtitle": "Гримуар оживления",
    "create.step1": "Опишите личность",
    "create.step2": "Воссоздание личности",
    "create.step3": "Персонаж оживает",
    "create.grimoire.characterName.label": "Имя персонажа",
    "create.grimoire.characterName.value": "Архимаг Элдрин",
    "create.grimoire.description.label": "Описание",
    "create.grimoire.description.value": "Мудрый волшебник, хранитель древних тайн и мастер заклинаний. Обладает непревзойденным знанием магических артефактов.",
    "create.grimoire.prompt.label": "Промпт",
    "create.grimoire.prompt.value": "Пожилой волшебник с длинной серебряной бородой, в темно-синей мантии с золотыми рунами, с хрустальным посохом в руках, на фоне мистической библиотеки, драматичное освещение, стиль фэнтези",
    "create.name.label": "Имя исторической личности",
    "create.name.value": "Никола Тесла",
    "create.feature1.label": "Биография",
    "create.feature1.value": "Детальное описание",
    "create.feature2.label": "Стиль речи",
    "create.feature2.value": "Формальный / Дружеский",
    "create.feature3.label": "Характер",
    "create.feature3.value": "Настройте личность",
    "create.feature4.label": "Эпоха",
    "create.feature4.value": "Исторический контекст",
    "create.button": "Оживить персонажа",

    // Final CTA
    "cta.title1": "История ждёт",
    "cta.title2": "вашего вопроса",
    "cta.subtitle": "Присоединяйтесь к тысячам исследователей, которые уже открыли для себя магию диалога с прошлым",
    "cta.stat1": "Пользователей",
    "cta.stat2": "Диалогов",
    "cta.stat3": "Рейтинг",
    "cta.download": "Скачать приложение",
    "cta.start": "Начать бесплатно",
    "cta.trust": "Бесплатный доступ • Без кредитной карты",

    // Footer
    "footer.description": "Платформа для диалога с величайшими умами истории. Погрузитесь в беседу с прошлым и откройте новые горизонты знаний.",
    "footer.feature1": "100+ исторических персонажей",
    "footer.feature2": "Групповые диалоги",
    "footer.feature3": "ИИ нового поколения",
    "footer.nav": "Навигация",
    "footer.about": "О проекте",
    "footer.characters": "Персонажи",
    "footer.salon": "Группы",
    "footer.create": "Создать",
    "footer.cta": "Начать путешествие",
    "footer.free": "Бесплатно",
    "footer.contact": "Связаться",
    "footer.location": "Минск, Беларусь",
    "footer.copyright": "© 2026 Epochal Dialog.",
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.company": "О компании SentiensApps",
  },
  en: {
    // Meta SEO
    "meta.title": "Epochal Dialog — Dialogue with History | AI Chat with Historical Figures",
    "meta.description": "Bring voices of the past to life. Converse with 100+ of history's greatest minds — from Leonardo da Vinci to Einstein. Create unique discussion groups.",

    // Navigation
    "nav.home": "Home",
    "nav.characters": "Characters",
    "nav.salon": "Groups",
    "nav.create": "Create",
    "nav.start": "Start",
    "nav.navigation": "Navigation",

    // Hero Section
    "hero.tagline1": "Bring voices of the past to life.",
    "hero.tagline2": "Have a dialogue with history.",
    "hero.subtitle": "Immerse yourself in conversations with humanity's greatest minds — from ancient philosophers to 20th-century geniuses",
    "hero.cta": "Start Your Journey",
    "hero.free": "Free",

    // Magic Dialog Section
    "magic.title1": "The Magic",
    "magic.title2": "of Dialogue",
    "magic.subtitle": "Converse with 100+ of history's greatest minds and hearts: from Leonardo da Vinci to Cleopatra, from Einstein to Frida Kahlo.",
    "magic.stat1": "Historical Figures",
    "magic.stat2": "Eras & Civilizations",
    "magic.stat3": "Possible Dialogues",
    "magic.more": "...and 100 more historical figures",

    // Portrait names and quotes
    "portrait.leonardo.name": "Leonardo da Vinci",
    "portrait.leonardo.era": "Renaissance, 15th-16th century",
    "portrait.leonardo.quote": "Learning without application is like a tree without fruit.",
    "portrait.columbus.name": "Christopher Columbus",
    "portrait.columbus.era": "Age of Discovery, 15th century",
    "portrait.columbus.quote": "The sea grants freedom to those who dare to leave the shore.",
    "portrait.beethoven.name": "Ludwig van Beethoven",
    "portrait.beethoven.era": "Classical and Romantic era, 18th-19th century",
    "portrait.beethoven.quote": "Music is the wine that fills the cup of silence.",
    "portrait.archimedes.name": "Archimedes",
    "portrait.archimedes.era": "Ancient Greece, 3rd century BC",
    "portrait.archimedes.quote": "Give me a place to stand, and I shall move the Earth.",
    "portrait.napoleon.name": "Napoleon Bonaparte",
    "portrait.napoleon.era": "18th-19th century",
    "portrait.napoleon.quote": "Impossible is a word in the dictionary of fools.",
    "portrait.shakespeare.name": "William Shakespeare",
    "portrait.shakespeare.era": "Renaissance, 16th century",
    "portrait.shakespeare.quote": "All the world's a stage, and all the men and women merely players.",
    "portrait.copernicus.name": "Nicolaus Copernicus",
    "portrait.copernicus.era": "Renaissance, 15th-16th century",
    "portrait.copernicus.quote": "We attribute motion to the Earth, not to the heavens — and everything becomes clear.",
    "portrait.mozart.name": "Wolfgang Amadeus Mozart",
    "portrait.mozart.era": "Classical era, 18th century",
    "portrait.mozart.quote": "Music is not in the notes, but in the silence between.",

    // Salon Section
    "salon.badge": "Exclusive Feature",
    "salon.title1": "Create Your Own",
    "salon.title2": "Groups",
    "salon.subtitle1": "Assemble unique groups. What would",
    "salon.subtitle1.names": "Napoleon, Shakespeare, Beethoven",
    "salon.subtitle2": "Become the director of a historical debate. Watch great minds exchange ideas, argue, and find unexpected common ground.",
    "salon.feature1": "Create group chats with any historical figures",
    "salon.feature2": "Set discussion topics or observe free dialogue",
    "salon.feature3": "Save the best moments to your collection",
    "salon.napoleon": "Napoleon",
    "salon.shakespeare": "Shakespeare",
    "salon.beethoven": "Beethoven",
    "salon.message": "Mr. Beethoven, how do you find inspiration in silence?",
    "salon.typing": "Beethoven is typing",

    // Create Hero Section
    "create.badge": "Create Any Character",
    "create.title1": "Add Your Own",
    "create.title2": "Hero",
    "create.subtitle1": "Missing your idol?",
    "create.subtitle1.action": "Add them!",
    "create.subtitle1.text": "Bring any historical figure to life by describing their character, ideals, and life journey in detail.",
    "create.subtitle2": "Our AI will recreate a unique personality based on your instructions, preserving the authentic views and communication style of your character.",
    "create.tip.title": "Prompt Power",
    "create.tip.text": "The more detailed you describe character traits, habits, and historical context in the prompt, the more vivid and deep your dialogue will be.",
    "create.grimoire.title": "Character Creation",
    "create.grimoire.subtitle": "The Grimoire of Revival",
    "create.step1": "Describe personality",
    "create.step2": "Recreating personality",
    "create.step3": "Character comes alive",
    "create.grimoire.characterName.label": "Character Name",
    "create.grimoire.characterName.value": "Archmage Eldrin",
    "create.grimoire.description.label": "Description",
    "create.grimoire.description.value": "A wise wizard, keeper of ancient secrets and master of spells. Possesses unsurpassed knowledge of magical artifacts.",
    "create.grimoire.prompt.label": "Prompt",
    "create.grimoire.prompt.value": "Elderly wizard with long silver beard, wearing dark blue robes with golden runes, holding a crystal staff, mystical library background, dramatic lighting, fantasy art style",
    "create.name.label": "Historical figure's name",
    "create.name.value": "Nikola Tesla",
    "create.feature1.label": "Biography",
    "create.feature1.value": "Detailed description",
    "create.feature2.label": "Speech Style",
    "create.feature2.value": "Formal / Friendly",
    "create.feature3.label": "Personality",
    "create.feature3.value": "Customize character",
    "create.feature4.label": "Era",
    "create.feature4.value": "Historical context",
    "create.button": "Bring Character to Life",

    // Final CTA
    "cta.title1": "History Awaits",
    "cta.title2": "Your Question",
    "cta.subtitle": "Join thousands of explorers who have already discovered the magic of dialogue with the past",
    "cta.stat1": "Users",
    "cta.stat2": "Dialogues",
    "cta.stat3": "Rating",
    "cta.download": "Download App",
    "cta.start": "Start for Free",
    "cta.trust": "Free access • No credit card required",

    // Footer
    "footer.description": "A platform for dialogue with history's greatest minds. Immerse yourself in conversations with the past and discover new horizons of knowledge.",
    "footer.feature1": "100+ historical characters",
    "footer.feature2": "Group dialogues",
    "footer.feature3": "Next-gen AI",
    "footer.nav": "Navigation",
    "footer.about": "About",
    "footer.characters": "Characters",
    "footer.salon": "Groups",
    "footer.create": "Create",
    "footer.cta": "Start Your Journey",
    "footer.free": "Free",
    "footer.contact": "Contact",
    "footer.location": "Minsk, Belarus",
    "footer.copyright": "© 2026 Epochal Dialog.",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.company": "About SentiensApps",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      return saved || "ru";
    }
    return "ru";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
