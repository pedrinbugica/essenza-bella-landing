
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      age: 28,
      text: "Melhor atendimento da cidade! As meninas são super carinhosas e o resultado dos tratamentos é incrível. Recomendo demais!",
      rating: 5,
      treatment: "Limpeza de pele"
    },
    {
      name: "Mariana Costa",
      age: 35,
      text: "Fiz botox pela primeira vez e fiquei com medo, mas a equipe me tranquilizou. O resultado ficou super natural, amei!",
      rating: 5,
      treatment: "Botox"
    },
    {
      name: "Julia Santos",
      age: 42,
      text: "O ambiente é um verdadeiro spa! A massagem relaxante me fez esquecer todo o estresse da semana. Saí renovada!",
      rating: 5,
      treatment: "Massagem relaxante"
    },
    {
      name: "Fernanda Lima",
      age: 31,
      text: "Faço peeling há 6 meses e minha pele está irreconhecível! Mais lisa, uniforme e brilhante. Essenza é top!",
      rating: 5,
      treatment: "Peeling"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-rose-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">O que nossas clientes dizem</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            A satisfação de quem confia em nosso trabalho é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-rose-300" size={20} />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 mb-4 md:mb-6 italic text-sm md:text-base">"{testimonial.text}"</p>
                
                <div className="border-t pt-3 md:pt-4">
                  <p className="font-semibold text-slate-800 text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-slate-500">{testimonial.age} anos</p>
                  <p className="text-xs md:text-sm text-rose-500 mt-1">{testimonial.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white px-4 md:px-6 py-3 rounded-full shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={18} />
              ))}
            </div>
            <span className="text-slate-700 font-semibold text-sm md:text-base text-center">4.9/5 baseado em 127 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
