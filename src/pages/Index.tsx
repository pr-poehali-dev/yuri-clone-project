import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Привет! Я Юра — твой AI-ассистент для разработки. Что будем создавать?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI-разработка',
      description: 'Создавай сайты и приложения через обычный разговор на русском языке',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      icon: 'Code2',
      title: 'Чистый код',
      description: 'React + TypeScript + современные практики. Готовый код для любых задач',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'От идеи до рабочего прототипа за минуты. Без настройки окружения',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      icon: 'Palette',
      title: 'Современный дизайн',
      description: 'Красивые UI-компоненты и адаптивная вёрстка из коробки',
      color: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      icon: 'Database',
      title: 'Backend + БД',
      description: 'Serverless функции и PostgreSQL база данных уже настроены',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      icon: 'Rocket',
      title: 'Деплой в 1 клик',
      description: 'Публикуй проекты мгновенно. GitHub интеграция и custom домены',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    }
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setChatMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        'Отличная идея! Начинаю создавать компоненты...',
        'Уже пишу код для твоего проекта! 🚀',
        'Сейчас настрою всё как надо!',
        'Понял задачу, делаю красиво и функционально!'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { role: 'assistant', text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none px-4 py-2 text-sm">
            AI-Powered Development
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Юра
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Твой личный AI-разработчик. Создаём сайты и приложения через простой разговор на русском языке. 
            Без кода, без сложностей — только результат.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Попробовать сейчас
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Lightbulb" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </header>

        <section id="features" className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё что нужно для создания современных веб-приложений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={feature.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="demo" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Попробуй прямо сейчас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Напиши что хочешь создать, и Юра начнёт разработку
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 shadow-2xl">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-4 h-96 overflow-y-auto space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-scale-in`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                          : 'bg-white border-2 border-purple-200'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start animate-scale-in">
                    <div className="bg-white border-2 border-purple-200 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Input 
                  placeholder="Создай лендинг для кофейни..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 border-2 text-lg py-6"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8"
                  disabled={isTyping}
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center mb-20">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-blue-600 border-none text-white">
            <CardContent className="p-12">
              <Icon name="Sparkles" className="mx-auto mb-6 animate-float" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готов создать что-то невероятное?
              </h2>
              <p className="text-lg mb-8 text-purple-100">
                Присоединяйся к тысячам разработчиков, которые уже используют Юру
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать бесплатно
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center py-8 border-t">
          <div className="flex justify-center gap-6 mb-4">
            <Button variant="ghost" size="sm">
              <Icon name="Github" className="mr-2" size={18} />
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Telegram
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Mail" className="mr-2" size={18} />
              Email
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2024 Юра AI. Создаём будущее разработки вместе 🚀
          </p>
        </footer>
      </div>
    </div>
  );
}
