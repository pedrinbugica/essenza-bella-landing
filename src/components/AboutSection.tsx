
import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">Sobre a Essenza</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Mais do que uma clínica, somos um espaço de acolhimento e transformação, 
              onde cada cliente é única e especial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                alt="Ambiente acolhedor da clínica" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full flex-shrink-0">
                  <Heart className="text-rose-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">Cuidado Personalizado</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Cada tratamento é desenvolvido especialmente para suas necessidades, 
                    respeitando sua individualidade e objetivos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Award className="text-blue-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">Experiência e Qualidade</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Nossa equipe é formada por profissionais experientes e certificados, 
                    sempre atualizados com as mais modernas técnicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Users className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">Ambiente Acolhedor</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Um espaço pensado para seu relaxamento e bem-estar, 
                    onde você se sente em casa desde o primeiro momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
