
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-rose-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Sua beleza natural
            <span className="text-rose-400 block">realçada com carinho</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Na Essenza, cada tratamento é pensado especialmente para você. 
            Venha descobrir o que há de mais moderno em estética e bem-estar.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 text-lg">
              Agende sua Avaliação
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Conheça nossos serviços
            </Button>
          </div>
          
          {/* Estatísticas */}
          <div className="flex justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              <span className="text-slate-700 font-semibold">4.9/5 estrelas</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-rose-400" size={24} />
              <span className="text-slate-700 font-semibold">+1000 clientes</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-blue-400" size={24} />
              <span className="text-slate-700 font-semibold">5 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
