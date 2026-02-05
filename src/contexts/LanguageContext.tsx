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
    "meta.description": "Оживи голоса прошлого. Общайтесь с 50+ величайшими умами истории — от Леонардо да Винчи до Эйнштейна. Создавайте уникальные салоны для дискуссий.",
    
    // Navigation
    "nav.home": "Главная",
    "nav.characters": "Персонажи",
    "nav.salon": "Салон",
    "nav.create": "Создать",
    "nav.demo": "Демо",
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
    "magic.subtitle": "Общайтесь с 50+ величайшими умами и сердцами истории: от Леонардо да Винчи до Клеопатры, от Эйнштейна до Фриды Кало.",
    "magic.stat1": "Исторических личностей",
    "magic.stat2": "Эпох и цивилизаций",
    "magic.stat3": "Возможных диалогов",
    "magic.more": "...и ещё более 40 исторических личностей",
    
    // Portrait names and quotes
    "portrait.leonardo.name": "Леонардо да Винчи",
    "portrait.leonardo.era": "Ренессанс, XV-XVI век",
    "portrait.leonardo.quote": "Познание без применения подобно дереву без плодов.",
    "portrait.cleopatra.name": "Клеопатра VII",
    "portrait.cleopatra.era": "Древний Египет, I век до н.э.",
    "portrait.cleopatra.quote": "Власть — это искусство делать невозможное неизбежным.",
    "portrait.einstein.name": "Альберт Эйнштейн",
    "portrait.einstein.era": "XX век",
    "portrait.einstein.quote": "Воображение важнее знания.",
    "portrait.frida.name": "Фрида Кало",
    "portrait.frida.era": "XX век",
    "portrait.frida.quote": "Я не больна — я разбита. Но счастлива быть живой.",
    "portrait.napoleon.name": "Наполеон Бонапарт",
    "portrait.napoleon.era": "XVIII-XIX век",
    "portrait.napoleon.quote": "Невозможно — слово из словаря глупцов.",
    "portrait.shakespeare.name": "Уильям Шекспир",
    "portrait.shakespeare.era": "Эпоха Возрождения, XVI век",
    "portrait.shakespeare.quote": "Весь мир — театр, а люди в нём — актёры.",
    "portrait.curie.name": "Мария Кюри",
    "portrait.curie.era": "XIX-XX век",
    "portrait.curie.quote": "В жизни нет ничего, чего следует бояться — только понимать.",
    "portrait.wilde.name": "Оскар Уайльд",
    "portrait.wilde.era": "Викторианская эпоха, XIX век",
    "portrait.wilde.quote": "Будь собой — все остальные роли уже заняты.",
    
    // Salon Section
    "salon.badge": "Эксклюзивная функция",
    "salon.title1": "Создай свой",
    "salon.title2": "салон",
    "salon.subtitle1": "Соберите уникальные группы. Что обсудят в одной комнате",
    "salon.subtitle1.names": "Цезарь, Tesla и Будда",
    "salon.subtitle2": "Станьте режиссёром исторического диспута. Наблюдайте, как великие умы обмениваются идеями, спорят и находят неожиданные точки соприкосновения.",
    "salon.feature1": "Создавайте групповые чаты с любыми историческими персонажами",
    "salon.feature2": "Задавайте темы для дискуссии или наблюдайте свободный диалог",
    "salon.feature3": "Сохраняйте лучшие моменты бесед в коллекцию",
    "salon.napoleon": "Наполеон",
    "salon.shakespeare": "Шекспир",
    "salon.curie": "Мария Кюри",
    "salon.message": "Мадам Кюри, как вы относитесь к военному применению науки?",
    "salon.typing": "Мария Кюри печатает",
    
    // Create Hero Section
    "create.badge": "Создайте любого персонажа",
    "create.title1": "Добавь своего",
    "create.title2": "героя",
    "create.subtitle1": "Нет вашего кумира?",
    "create.subtitle1.action": "Добавьте его!",
    "create.subtitle1.text": "Обучите ИИ-личность на основе биографий, речей и мемуаров.",
    "create.subtitle2": "Наш алгоритм проанализирует исторические источники и создаст уникальную личность, сохраняя аутентичность взглядов и манеру общения вашего персонажа.",
    "create.tip.title": "Совет эксперта",
    "create.tip.text": "Чем больше источников вы загрузите, тем глубже и достовернее будет личность вашего персонажа.",
    "create.grimoire.title": "Создание персонажа",
    "create.grimoire.subtitle": "Гримуар оживления",
    "create.step1": "Загрузите источники",
    "create.step2": "ИИ анализирует данные",
    "create.step3": "Персонаж оживает",
    "create.name.label": "Имя исторической личности",
    "create.name.value": "Никола Тесла",
    "create.feature1.label": "Биография",
    "create.feature1.value": "Загрузите книги и мемуары",
    "create.feature2.label": "Стиль речи",
    "create.feature2.value": "Формальный / Дружеский",
    "create.feature3.label": "Характер",
    "create.feature3.value": "Настройте личность",
    "create.feature4.label": "Эпоха",
    "create.feature4.value": "Исторический контекст",
    "create.button": "Оживить персонажа",
    
    // Demo Chat
    "demo.badge": "Интерактивное демо",
    "demo.title1": "Попробуйте",
    "demo.title2": "прямо сейчас",
    "demo.subtitle": "Задайте вопрос Оскару Уайльду — одному из самых остроумных писателей в истории",
    "demo.wilde.role": "Писатель, драматург • XIX век",
    "demo.wilde.greeting": "Добрый день, мой любознательный друг! Оскар Уайльд к вашим услугам. Я готов поделиться мудростью, остроумием и, возможно, толикой скандальности. О чём вы хотели бы поговорить?",
    "demo.suggestion1": "Дай совет о жизни",
    "demo.suggestion2": "Что думаешь о любви?",
    "demo.suggestion3": "Как достичь успеха?",
    "demo.suggestion4": "В чём секрет счастья?",
    "demo.try": "Попробуйте спросить:",
    "demo.placeholder": "Напишите сообщение...",
    "demo.response.advice": "Мой дорогой друг, единственный способ избавиться от искушения — поддаться ему. Что касается советов — я их охотно даю, ведь это единственное, что можно дать, не потеряв. Будьте собой, но только самой интересной версией.",
    "demo.response.love": "Любовь — это таинство, к которому всё должно приноситься в жертву, включая здравый смысл. Когда любишь, начинаешь с самообмана и заканчиваешь обманом других. Это называют романтикой.",
    "demo.response.happiness": "Говорят, что счастье делает людей добрыми, но лично я полагаю, что доброта — это то, что делает людей счастливыми. В нашем мире есть только два вида трагедий: когда не получаешь то, что хочешь, и когда получаешь.",
    "demo.response.success": "Успех — это всего лишь вопрос удачи. Спросите любого неудачника. Единственное, что хуже, чем быть объектом разговоров — это не быть им. Делайте то, что для вас естественно, и делайте это великолепно.",
    "demo.response.default": "Какой восхитительный вопрос! Знаете, я человек простых вкусов — мне всегда хватает самого лучшего. Позвольте сказать вам одно: будьте собой — все остальные роли уже заняты. А теперь расскажите мне что-нибудь интересное о себе.",
    
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
    "footer.feature1": "50+ исторических персонажей",
    "footer.feature2": "Групповые диалоги",
    "footer.feature3": "ИИ нового поколения",
    "footer.nav": "Навигация",
    "footer.about": "О проекте",
    "footer.characters": "Персонажи",
    "footer.salon": "Салон",
    "footer.create": "Создать",
    "footer.cta": "Начать путешествие",
    "footer.free": "Бесплатно • Без регистрации",
    "footer.contact": "Связаться",
    "footer.location": "Санкт-Петербург, Россия",
    "footer.copyright": "© 2024 Epochal Dialog.",
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
  },
  en: {
    // Meta SEO
    "meta.title": "Epochal Dialog — Dialogue with History | AI Chat with Historical Figures",
    "meta.description": "Bring voices of the past to life. Converse with 50+ of history's greatest minds — from Leonardo da Vinci to Einstein. Create unique discussion salons.",
    
    // Navigation
    "nav.home": "Home",
    "nav.characters": "Characters",
    "nav.salon": "Salon",
    "nav.create": "Create",
    "nav.demo": "Demo",
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
    "magic.subtitle": "Converse with 50+ of history's greatest minds and hearts: from Leonardo da Vinci to Cleopatra, from Einstein to Frida Kahlo.",
    "magic.stat1": "Historical Figures",
    "magic.stat2": "Eras & Civilizations",
    "magic.stat3": "Possible Dialogues",
    "magic.more": "...and 40+ more historical figures",
    
    // Portrait names and quotes
    "portrait.leonardo.name": "Leonardo da Vinci",
    "portrait.leonardo.era": "Renaissance, 15th-16th century",
    "portrait.leonardo.quote": "Learning without application is like a tree without fruit.",
    "portrait.cleopatra.name": "Cleopatra VII",
    "portrait.cleopatra.era": "Ancient Egypt, 1st century BC",
    "portrait.cleopatra.quote": "Power is the art of making the impossible inevitable.",
    "portrait.einstein.name": "Albert Einstein",
    "portrait.einstein.era": "20th century",
    "portrait.einstein.quote": "Imagination is more important than knowledge.",
    "portrait.frida.name": "Frida Kahlo",
    "portrait.frida.era": "20th century",
    "portrait.frida.quote": "I'm not sick — I'm broken. But happy to be alive.",
    "portrait.napoleon.name": "Napoleon Bonaparte",
    "portrait.napoleon.era": "18th-19th century",
    "portrait.napoleon.quote": "Impossible is a word in the dictionary of fools.",
    "portrait.shakespeare.name": "William Shakespeare",
    "portrait.shakespeare.era": "Renaissance, 16th century",
    "portrait.shakespeare.quote": "All the world's a stage, and all the men and women merely players.",
    "portrait.curie.name": "Marie Curie",
    "portrait.curie.era": "19th-20th century",
    "portrait.curie.quote": "Nothing in life is to be feared — only to be understood.",
    "portrait.wilde.name": "Oscar Wilde",
    "portrait.wilde.era": "Victorian era, 19th century",
    "portrait.wilde.quote": "Be yourself — everyone else is already taken.",
    
    // Salon Section
    "salon.badge": "Exclusive Feature",
    "salon.title1": "Create Your Own",
    "salon.title2": "Salon",
    "salon.subtitle1": "Assemble unique groups. What would",
    "salon.subtitle1.names": "Caesar, Tesla, and Buddha",
    "salon.subtitle2": "Become the director of a historical debate. Watch great minds exchange ideas, argue, and find unexpected common ground.",
    "salon.feature1": "Create group chats with any historical figures",
    "salon.feature2": "Set discussion topics or observe free dialogue",
    "salon.feature3": "Save the best moments to your collection",
    "salon.napoleon": "Napoleon",
    "salon.shakespeare": "Shakespeare",
    "salon.curie": "Marie Curie",
    "salon.message": "Madame Curie, what are your thoughts on the military application of science?",
    "salon.typing": "Marie Curie is typing",
    
    // Create Hero Section
    "create.badge": "Create Any Character",
    "create.title1": "Add Your Own",
    "create.title2": "Hero",
    "create.subtitle1": "Missing your idol?",
    "create.subtitle1.action": "Add them!",
    "create.subtitle1.text": "Train an AI personality based on biographies, speeches, and memoirs.",
    "create.subtitle2": "Our algorithm will analyze historical sources and create a unique personality, preserving the authentic views and communication style of your character.",
    "create.tip.title": "Expert Tip",
    "create.tip.text": "The more sources you upload, the deeper and more authentic your character's personality will be.",
    "create.grimoire.title": "Character Creation",
    "create.grimoire.subtitle": "The Grimoire of Revival",
    "create.step1": "Upload sources",
    "create.step2": "AI analyzes data",
    "create.step3": "Character comes alive",
    "create.name.label": "Historical figure's name",
    "create.name.value": "Nikola Tesla",
    "create.feature1.label": "Biography",
    "create.feature1.value": "Upload books and memoirs",
    "create.feature2.label": "Speech Style",
    "create.feature2.value": "Formal / Friendly",
    "create.feature3.label": "Personality",
    "create.feature3.value": "Customize character",
    "create.feature4.label": "Era",
    "create.feature4.value": "Historical context",
    "create.button": "Bring Character to Life",
    
    // Demo Chat
    "demo.badge": "Interactive Demo",
    "demo.title1": "Try It",
    "demo.title2": "Right Now",
    "demo.subtitle": "Ask Oscar Wilde a question — one of history's wittiest writers",
    "demo.wilde.role": "Writer, playwright • 19th century",
    "demo.wilde.greeting": "Good day, my curious friend! Oscar Wilde at your service. I'm ready to share wisdom, wit, and perhaps a touch of scandal. What would you like to discuss?",
    "demo.suggestion1": "Give me life advice",
    "demo.suggestion2": "What do you think about love?",
    "demo.suggestion3": "How to achieve success?",
    "demo.suggestion4": "What's the secret to happiness?",
    "demo.try": "Try asking:",
    "demo.placeholder": "Type a message...",
    "demo.response.advice": "My dear friend, the only way to get rid of temptation is to yield to it. As for advice — I give it freely, for it's the only thing one can give without losing anything. Be yourself, but only the most interesting version.",
    "demo.response.love": "Love is a sacrament to which everything must be sacrificed, including common sense. When in love, one begins by deceiving oneself and ends by deceiving others. That is what the world calls romance.",
    "demo.response.happiness": "They say happiness makes people kind, but I believe kindness is what makes people happy. There are only two tragedies in this world: not getting what you want, and getting it.",
    "demo.response.success": "Success is merely a matter of luck. Ask any failure. The only thing worse than being talked about is not being talked about. Do what comes naturally to you, and do it brilliantly.",
    "demo.response.default": "What a delightful question! You know, I am a man of simple tastes — I'm always satisfied with the best. Let me tell you one thing: be yourself — everyone else is already taken. Now tell me something interesting about yourself.",
    
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
    "footer.feature1": "50+ historical characters",
    "footer.feature2": "Group dialogues",
    "footer.feature3": "Next-gen AI",
    "footer.nav": "Navigation",
    "footer.about": "About",
    "footer.characters": "Characters",
    "footer.salon": "Salon",
    "footer.create": "Create",
    "footer.cta": "Start Your Journey",
    "footer.free": "Free • No registration",
    "footer.contact": "Contact",
    "footer.location": "Saint Petersburg, Russia",
    "footer.copyright": "© 2024 Epochal Dialog.",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
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
