'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Smile, Timer, Award, Calendar, MessageSquare, ChevronLeft, ChevronRight, Menu, X, Bluetooth as Tooth, Stethoscope, Heart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menuItems = [
  { title: "О враче", href: "#about" },
  { title: "Ортодонтия", href: "#orthodontics" },
  { title: "Частые вопросы", href: "#faq" },
  { title: "Первый визит", href: "#first-visit" },
  { title: "Результаты", href: "#results" },
  { title: "Контакты", href: "#contact" },
];

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&q=80",
    description: "Исправление прикуса"
  },
  {
    before: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&q=80",
    after: "https://images.unsplash.com/photo-1601289081641-b38e7fd4e156?w=600&q=80",
    description: "Выравнивание зубного ряда"
  },
  {
    before: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=600&q=80",
    after: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&q=80",
    description: "Коррекция дистального прикуса"
  }
];

const faqItems = [
  {
    question: "Сколько длится ортодонтическое лечение?",
    answer: "Длительность лечения индивидуальна и зависит от сложности случая. В среднем, лечение занимает от 12 до 24 месяцев."
  },
  {
    question: "Где проходила обучение доктор Мария Ткач?",
    answer: "Доктор Мария Ткач окончила медицинский университет с отличием, прошла специализацию по ортодонтии и регулярно повышает квалификацию на международных конференциях."
  },
  {
    question: "Какой опыт работы у доктора?",
    answer: "Доктор Мария Ткач имеет более 10 лет практического опыта в ортодонтии, успешно пролечила более 1000 пациентов."
  }
];

const firstVisitSteps = [
  {
    icon: <MessageSquare className="w-12 h-12 text-pink-500" />,
    title: "Знакомство и консультация",
    description: "Обсуждение проблем и пожеланий пациента"
  },
  {
    icon: <Calendar className="w-12 h-12 text-pink-500" />,
    title: "Диагностика",
    description: "Осмотр, фотографии, снимки и слепки"
  },
  {
    icon: <Award className="w-12 h-12 text-pink-500" />,
    title: "План лечения",
    description: "Подробное обсуждение вариантов лечения"
  },
  {
    icon: <Smile className="w-12 h-12 text-pink-500" />,
    title: "Начало лечения",
    description: "Согласование плана и запись на установку"
  }
];

// const FloatingIcon = ({ icon, delay = 0 }) => (
//   <motion.div
//     className="absolute"
//     animate={{
//       y: [0, -20, 0],
//       rotate: [0, 10, -10, 0],
//     }}
//     transition={{
//       duration: 4,
//       repeat: Infinity,
//       delay,
//     }}
//   >
//     {icon}
//   </motion.div>
// );

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-pink-500" />
        ) : (
          <Menu className="w-6 h-6 text-pink-500" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 flex flex-col"
          >
            <div className="pt-16 px-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-lg text-gray-800 hover:text-pink-500 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Doctor's Photo */}
      <section id="about" className="h-screen flex flex-col md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex items-center justify-center animated-bg p-8 relative overflow-hidden"
        >
          <div className="max-w-xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Мария Ткач
            </h1>
            <p className="text-xl md:text-2xl text-pink-600 mb-4">
              Врач-ортодонт высшей категории
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Создаю красивые улыбки и здоровые прикусы уже более 10 лет. Индивидуальный подход к каждому пациенту.
            </p>
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
              Хочу консультацию
            </button>
          </div>
          {/* <div className="absolute inset-0 opacity-10">
            <FloatingIcon icon={<Tooth className="w-16 h-16 text-pink-500" />} delay={0} />
            <FloatingIcon icon={<Smile className="w-16 h-16 text-pink-500" />} delay={1} />
            <FloatingIcon icon={<Heart className="w-16 h-16 text-pink-500" />} delay={2} />
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000"
            alt="Доктор Мария Ткач"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* About Orthodontics Section */}
      <section id="orthodontics" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Что такое ортодонтия?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ортодонтия — это раздел стоматологии, который занимается исправлением положения зубов и челюстей. 
              Современные методы лечения позволяют не только создать красивую улыбку, но и улучшить здоровье 
              всей зубочелюстной системы. Правильный прикус — это не только эстетика, но и здоровье височно-нижнечелюстного 
              сустава, профилактика заболеваний пародонта и долговечность зубов.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4"
          >
            <Stethoscope className="w-32 h-32 text-pink-500" />
          </motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4"
          >
            <Tooth className="w-32 h-32 text-pink-500" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Частые вопросы
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* First Visit Process Section */}
      <section id="first-visit" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Как проходит первый визит
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {firstVisitSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-pink-50 p-6 rounded-lg shadow-lg text-center relative overflow-hidden group"
              >
                <div className="mb-4 flex justify-center relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 relative z-10">{step.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section with Carousel */}
      <section id="results" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Результаты лечения
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4 p-4">
                <div>
                  <p className="text-center text-gray-600 mb-2">До</p>
                  <motion.img
                    src={beforeAfterImages[currentSlide].before}
                    alt="До лечения"
                    className="rounded-lg w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div>
                  <p className="text-center text-gray-600 mb-2">После</p>
                  <motion.img
                    src={beforeAfterImages[currentSlide].after}
                    alt="После лечения"
                    className="rounded-lg w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <p className="text-center p-4 text-gray-800">{beforeAfterImages[currentSlide].description}</p>
              <div className="flex justify-center gap-4 pb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-pink-500" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-pink-500" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Записаться на консультацию
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте свои контакты, и мы свяжемся с вами для записи на консультацию
            </p>
            <div className="space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="Ваш телефон"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                Записаться
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}