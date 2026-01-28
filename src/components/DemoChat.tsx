import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Sparkles, Quote, RotateCcw, MessageCircle } from "lucide-react";
import wildeImg from "@/assets/portraits/wilde.jpg";

const presetResponses: Record<string, string> = {
  "совет": "Мой дорогой друг, единственный способ избавиться от искушения — поддаться ему. Что касается советов — я их охотно даю, ведь это единственное, что можно дать, не потеряв. Будьте собой, но только самой интересной версией.",
  "любовь": "Любовь — это таинство, к которому всё должно приноситься в жертву, включая здравый смысл. Когда любишь, начинаешь с самообмана и заканчиваешь обманом других. Это называют романтикой.",
  "счастье": "Говорят, что счастье делает людей добрыми, но лично я полагаю, что доброта — это то, что делает людей счастливыми. В нашем мире есть только два вида трагедий: когда не получаешь то, что хочешь, и когда получаешь.",
  "успех": "Успех — это всего лишь вопрос удачи. Спросите любого неудачника. Единственное, что хуже, чем быть объектом разговоров — это не быть им. Делайте то, что для вас естественно, и делайте это великолепно.",
  "default": "Какой восхитительный вопрос! Знаете, я человек простых вкусов — мне всегда хватает самого лучшего. Позвольте сказать вам одно: будьте собой — все остальные роли уже заняты. А теперь расскажите мне что-нибудь интересное о себе.",
};

const DemoChat = () => {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Добрый день, мой любознательный друг! Оскар Уайльд к вашим услугам. Я готов поделиться мудростью, остроумием и, возможно, толикой скандальности. О чём вы хотели бы поговорить?",
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
      content: "Добрый день, мой любознательный друг! Оскар Уайльд к вашим услугам. Я готов поделиться мудростью, остроумием и, возможно, толикой скандальности. О чём вы хотели бы поговорить?",
    }]);
  };

  const suggestedQuestions = [
    "Дай совет о жизни",
    "Что думаешь о любви?",
    "Как достичь успеха?",
    "В чём секрет счастья?",
  ];

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Интерактивное демо</span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
            Попробуйте{" "}
            <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
              прямо сейчас
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Задайте вопрос Оскару Уайльду — одному из самых остроумных писателей в истории
          </p>
        </motion.div>

        {/* Chat Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Decorative glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 rounded-3xl blur-2xl opacity-50 dark:opacity-30" />
            
            <div className="relative bg-card border border-border rounded-2xl shadow-elevated overflow-hidden dark:shadow-[0_0_50px_hsl(var(--accent)/0.15)]">
              {/* Chat Header */}
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-secondary/80 via-secondary/50 to-secondary/80 border-b border-border">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-accent/50 shadow-lg">
                    <img src={wildeImg} alt="Oscar Wilde" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  {/* Online indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald rounded-full border-2 border-card"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-display font-medium text-foreground text-lg">Оскар Уайльд</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Quote className="w-3 h-3" />
                    Писатель, драматург • XIX век
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={resetChat}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  title="Начать заново"
                >
                  <RotateCcw className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-background/50 to-background">
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={`msg-${index}`}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
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
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-secondary/80 px-5 py-3 rounded-2xl rounded-bl-sm border border-border">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-accent animate-pulse" />
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="w-2 h-2 rounded-full bg-accent"
                              animate={{ 
                                y: [0, -6, 0],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ 
                                duration: 0.6, 
                                repeat: Infinity, 
                                delay: i * 0.15 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
                    <p className="text-xs text-muted-foreground mb-3 font-display">Попробуйте спросить:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <motion.button
                          key={question}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setInput(question)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 text-sm bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition-colors font-display"
                        >
                          {question}
                        </motion.button>
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
                      placeholder="Напишите сообщение..."
                      className="w-full px-5 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    className="px-5 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 dark:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
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
