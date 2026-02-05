import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Sparkles, Quote, RotateCcw, MessageCircle } from "lucide-react";
import wildeImg from "@/assets/portraits/wilde.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const DemoChat = () => {
  const { t, language } = useLanguage();
  const reducedMotion = useReducedMotion();

  const presetResponses: Record<string, string> = {
    "совет": t("demo.response.advice"),
    "advice": t("demo.response.advice"),
    "любовь": t("demo.response.love"),
    "love": t("demo.response.love"),
    "счастье": t("demo.response.happiness"),
    "happiness": t("demo.response.happiness"),
    "успех": t("demo.response.success"),
    "success": t("demo.response.success"),
    "default": t("demo.response.default"),
  };

  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: t("demo.wilde.greeting"),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    const lowerMessage = userMessage.toLowerCase();
    let response = presetResponses.default;

    for (const [keyword, resp] of Object.entries(presetResponses)) {
      if (lowerMessage.includes(keyword)) {
        response = resp;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const resetChat = () => {
    setMessages([{
      role: "assistant",
      content: t("demo.wilde.greeting"),
    }]);
  };

  const suggestedQuestions = [
    t("demo.suggestion1"),
    t("demo.suggestion2"),
    t("demo.suggestion3"),
    t("demo.suggestion4"),
  ];

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl hidden md:block" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">{t("demo.badge")}</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
            {t("demo.title1")}{" "}
            <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
              {t("demo.title2")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("demo.subtitle")}
          </p>
        </motion.div>

        {/* Chat Window */}
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Decorative glow - desktop only */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-3xl blur-2xl opacity-50 dark:opacity-30 hidden md:block" />
            
            <div className="relative bg-card border border-border rounded-2xl shadow-elevated overflow-hidden dark:shadow-[0_0_50px_hsl(var(--accent)/0.15)]">
              {/* Chat Header */}
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-secondary/80 via-secondary/50 to-secondary/80 border-b border-border">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-accent/50 shadow-lg">
                    <img 
                      src={wildeImg} 
                      alt="Портрет Оскара Уайльда — ирландского писателя и драматурга XIX века" 
                      width={56}
                      height={56}
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald rounded-full border-2 border-card" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-display font-medium text-foreground text-lg">{t("portrait.wilde.name")}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Quote className="w-3 h-3" />
                    {t("demo.wilde.role")}
                  </p>
                </div>
                <button
                  onClick={resetChat}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:rotate-[-180deg] duration-300"
                  title={language === "ru" ? "Начать заново" : "Start over"}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-background/50 to-background">
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={`msg-${index}`}
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: reducedMotion ? 0 : 0.3 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-5 py-3 rounded-2xl relative ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-secondary/80 text-secondary-foreground rounded-bl-sm border border-border"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-accent/40" />
                        )}
                        <p className={message.role === "assistant" ? "font-display italic leading-relaxed" : "leading-relaxed"}>
                          {message.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary/80 px-5 py-3 rounded-2xl rounded-bl-sm border border-border">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-accent" />
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <span
                              key={i}
                              className="w-2 h-2 rounded-full bg-accent animate-pulse"
                              style={{ animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggested Questions */}
              <AnimatePresence>
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-xs text-muted-foreground mb-3 font-display">{t("demo.try")}</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          onClick={() => setInput(question)}
                          className="px-4 py-2 text-sm bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition-colors font-display"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input */}
              <div className="px-6 py-4 border-t border-border bg-secondary/30">
                <div className="flex gap-3">
                  <div className="flex-grow relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder={t("demo.placeholder")}
                      className="w-full px-5 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    className="px-5 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 dark:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoChat;
