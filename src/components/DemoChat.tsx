import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
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

    // Find matching response
    const lowerMessage = userMessage.toLowerCase();
    let response = presetResponses.default;

    for (const [keyword, resp] of Object.entries(presetResponses)) {
      if (lowerMessage.includes(keyword)) {
        response = resp;
        break;
      }
    }

    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestedQuestions = [
    "Дай совет о жизни",
    "Что думаешь о любви?",
    "Как достичь успеха?",
  ];

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Интерактивное демо</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6 dark:drop-shadow-[0_0_20px_hsl(var(--foreground)/0.1)]">
            Попробуйте <span className="text-primary italic dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">прямо сейчас</span>
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
          <div className="bg-card border border-border rounded-lg shadow-elevated overflow-hidden dark:shadow-[0_0_40px_hsl(var(--accent)/0.15)]">
            {/* Chat Header */}
            <div className="flex items-center gap-4 px-6 py-4 bg-secondary/50 border-b border-border">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
                <img src={wildeImg} alt="Oscar Wilde" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-medium text-foreground">Оскар Уайльд</h3>
                <p className="text-sm text-muted-foreground">Писатель, XIX век</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                <span className="text-sm text-muted-foreground">онлайн</span>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className={message.role === "assistant" ? "font-display italic" : ""}>
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary px-4 py-3 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => setInput(question)}
                    className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-6 py-4 border-t border-border bg-secondary/30">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Напишите сообщение..."
                  className="flex-grow px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={isTyping}
                  className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoChat;