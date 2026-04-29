import { useState } from 'react';
import { 
  Gamepad2, 
  Library, 
  MessageSquare, 
  PlayCircle, 
  FileText, 
  Mic, 
  ExternalLink,
  ChevronRight,
  Target,
  Trophy,
  Users,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'О геймификации', href: '#about' },
    { name: 'Материалы', href: '#media' },
    { name: 'Об авторе', href: '#author' },
    { name: 'Источники', href: '#sources' },
    { name: 'Обратная связь', href: '#feedback' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-pink-500 w-8 h-8" />
            <span className="font-serif text-xl font-bold text-gray-800 tracking-tight">GamifyEdu</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-pink-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-pink-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:text-pink-500 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-pink-50 to-white">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
      >
        Геймификация в образовании
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
      >
        Исследование применения игровых механик в неигровых контекстах для повышения вовлеченности и эффективности обучения.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="#about" className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200">
          Начать изучение
        </a>
        <a href="#media" className="bg-white text-pink-500 border border-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all">
          Медиа материалы
        </a>
      </motion.div>
    </div>
  </section>
);

const AboutGamification = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-6">Что такое геймификация?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Геймификация — это использование игровых элементов и методов проектирования игр в неигровых контекстах. 
            В образовании она помогает трансформировать скучные процессы в увлекательное путешествие, мотивируя студентов достигать большего.
          </p>
          <div className="space-y-4">
            {[
              { icon: <Target className="text-pink-500" />, title: 'Цели', desc: 'Четко сформулированные задачи обучения.' },
              { icon: <Trophy className="text-pink-500" />, title: 'Награды', desc: 'Система баллов, бейджей и признания достижений.' },
              { icon: <Users className="text-pink-500" />, title: 'Социализация', desc: 'Взаимодействие и соревнование между участниками.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-pink-50 rounded-3xl p-8 relative overflow-hidden border border-pink-100">
          <div className="aspect-video bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800" 
               alt="Gaming setup" 
               className="w-full h-full object-cover opacity-80"
             />
          </div>
          <div className="mt-6 text-center">
             <p className="font-serif italic text-pink-700">"Игра — это высшая форма исследования." — Альберт Эйнштейн</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-serif font-bold mb-8 text-center">Основные компоненты (PBL)</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-2xl">
            <h4 className="font-bold text-blue-800 mb-2">Points (Баллы)</h4>
            <p className="text-sm text-blue-700">Количественное выражение успеха. Позволяют отслеживать прогресс в реальном времени и служат основой для обратной связи.</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-2xl">
            <h4 className="font-bold text-yellow-800 mb-2">Badges (Значки)</h4>
            <p className="text-sm text-yellow-700">Визуальное подтверждение достижений. Символизируют мастерство в конкретной области или выполнение сложной задачи.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl">
            <h4 className="font-bold text-green-800 mb-2">Leaderboards (Рейтинги)</h4>
            <p className="text-sm text-green-700">Инструмент социального сравнения. Мотивируют через конкуренцию, но требуют осторожного применения.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MediaSection = () => (
  <section id="media" className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12">Образовательные материалы</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Video */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group">
          <div className="mb-4 relative">
            <PlayCircle className="w-16 h-16 text-red-500 relative z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
          </div>
          <h3 className="text-xl font-bold mb-2">Видео-лекция</h3>
          <p className="text-gray-600 mb-6 text-sm">Введение в основы геймификации и разбор ключевых кейсов.</p>
          <a href="https://www.youtube.com/results?search_query=gamification+in+education" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-pink-500 font-semibold hover:gap-2 transition-all">
            Смотреть видео <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Presentation */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <FileText className="w-16 h-16 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Презентация</h3>
          <p className="text-gray-600 mb-6 text-sm">Подробные слайды с инфографикой и схемами игровых механик.</p>
          <a href="https://docs.google.com/presentation/d/1_y0XGZz-jS6-8O_mI-mXmXmXmXmXmXmXmXmXmXmX/edit" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-pink-500 font-semibold hover:gap-2 transition-all">
            Открыть презентацию <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Podcast */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <Mic className="w-16 h-16 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Подкаст</h3>
          <p className="text-gray-600 mb-6 text-sm">Интервью с экспертами о будущем геймификации в школах и ВУЗах.</p>
          <a href="https://music.yandex.ru/search?text=геймификация" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-pink-500 font-semibold hover:gap-2 transition-all">
            Слушать подкаст <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const AuthorSection = () => (
  <section id="author" className="py-20 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-serif font-bold mb-12">Об авторе</h2>
      <div className="bg-white border border-pink-100 p-12 rounded-3xl shadow-xl flex flex-col items-center">
        <div className="mb-8 overflow-hidden">
          {/* Logo Placeholder - The user provided an image with Varvara Nazarova */}
          <div className="w-64 h-64 bg-white flex items-center justify-center border-2 border-pink-50 rounded-full">
            <img src="/logo.png" alt="Varvara Nazarova Logo" className="w-full h-full object-contain" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<div class="text-3xl font-serif text-pink-500 text-center">Varvara<br/>Nazarova</div>';
            }} />
          </div>
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Варвара Назарова</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Студентка-исследовательница, увлекающаяся инновационными методами в педагогике и современными технологиями обучения. 
          Данный ресурс является частью проекта по изучению влияния геймификации на образовательный процесс.
        </p>
        <div className="flex gap-4">
           {/* Author Socials or links can go here */}
        </div>
      </div>
    </div>
  </section>
);

const SourcesSection = () => (
  <section id="sources" className="py-20 px-4 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Library className="text-pink-500 w-8 h-8" />
        <h2 className="text-3xl font-serif font-bold">Источники</h2>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <ul className="space-y-6">
          <li className="flex gap-4 items-start border-b border-gray-100 pb-4">
             <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mt-1">1</span>
             <div>
                <p className="text-gray-800 font-medium">Кевин Вербах, Дэн Хантер</p>
                <p className="text-gray-600 italic">"Вовлекай и властвуй. Игровое мышление на службе бизнеса"</p>
             </div>
          </li>
          <li className="flex gap-4 items-start border-b border-gray-100 pb-4">
             <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mt-1">2</span>
             <div>
                <p className="text-gray-800 font-medium">Ю-Кай Чоу</p>
                <p className="text-gray-600 italic">"Геймификация. Октализ: Система проектирования поведения"</p>
             </div>
          </li>
          <li className="flex gap-4 items-start">
             <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mt-1">3</span>
             <div>
                <p className="text-gray-800 font-medium">Coursera / University of Pennsylvania</p>
                <p className="text-gray-600 italic">Курс "Gamification" от профессора Кевина Вербаха</p>
                <a href="https://www.coursera.org/learn/gamification" className="text-pink-500 text-sm flex items-center gap-1 hover:underline">
                  Перейти к источнику <ExternalLink className="w-3 h-3" />
                </a>
             </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const FeedbackSection = () => (
  <section id="feedback" className="py-20 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-12 rounded-3xl text-white shadow-2xl">
        <MessageSquare className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl font-serif font-bold mb-4">Обратная связь</h2>
        <p className="mb-8 text-pink-100">
          Ваше мнение очень важно для моего исследования! Пожалуйста, заполните короткую анкету, чтобы помочь улучшить проект.
        </p>
        <a 
          href="https://forms.yandex.ru" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
        >
          Заполнить Яндекс-форму
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-4 border-t border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Gamepad2 className="text-pink-500 w-6 h-6" />
        <span className="font-serif text-lg font-bold text-gray-800">GamifyEdu</span>
      </div>
      <p className="text-gray-500 text-sm">
        © 2024 Варвара Назарова. Все права защищены.
      </p>
      <div className="text-gray-400 text-sm italic flex flex-col items-end">
        <span>Создано для образовательных целей</span>
        <div className="mt-2 text-[10px] uppercase tracking-widest text-gray-300">
          Карта сайта: Главная • Теория • Ресурсы • Автор • Источники • Опрос
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <AboutGamification />
        <MediaSection />
        <AuthorSection />
        <SourcesSection />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
}
