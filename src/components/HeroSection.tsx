
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-rose-50 via-white to-blue-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
            Sua beleza natural
            <span className="text-rose-400 block">realçada com carinho</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Na Essenza, cada tratamento é pensado especialmente para você. 
            Venha descobrir o que há de mais moderno em estética e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
            <Button size="lg" className="bg-rose-400 hover:bg-rose-500 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
              Agende sua Avaliação
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
              Conheça nossos serviços
            </Button>
          </div>
          
          {/* Estatísticas */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-center">
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-slate-700 font-semibold text-sm md:text-base">4.9/5 estrelas</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="text-rose-400" size={20} />
              <span className="text-slate-700 font-semibold text-sm md:text-base">+1000 clientes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="text-blue-400" size={20} />
              <span className="text-slate-700 font-semibold text-sm md:text-base">5 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
