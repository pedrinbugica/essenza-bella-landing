
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Instagram, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌸</span>
              <h3 className="text-xl md:text-2xl font-bold">Essenza Clínica Estética</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md text-sm md:text-base">
              Sua beleza natural realçada com carinho. Tratamentos personalizados 
              em um ambiente acolhedor e moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2 text-sm md:text-base justify-center">
                <Phone size={16} />
                <span className="hidden sm:inline">WhatsApp: (11) 99999-9999</span>
                <span className="sm:hidden">(11) 99999-9999</span>
              </Button>
              <Button variant="outline" className="border-rose-400 text-rose-400 hover:bg-rose-50 hover:text-rose-600 flex items-center gap-2 text-sm md:text-base justify-center">
                <Instagram size={16} />
                @essenzaclinica
              </Button>
            </div>
          </div>

          {/* Informações de contato */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-rose-300">Contato</h4>
            <div className="space-y-3 text-slate-300 text-sm md:text-base">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-rose-400 mt-1 flex-shrink-0" />
                <span>Rua das Flores, 123<br />Vila Madalena - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-rose-400 flex-shrink-0" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-rose-400 flex-shrink-0" />
                <span className="break-all">contato@essenza.com.br</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-300">Horário de Funcionamento</h4>
            <div className="space-y-2 text-slate-300 text-sm md:text-base">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta: 9h às 19h</p>
                  <p>Sábado: 9h às 17h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-slate-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
              © 2024 Essenza Clínica Estética. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-xs md:text-sm text-slate-400">
              <a href="#" className="hover:text-rose-400 transition-colors text-center">Política de Privacidade</a>
              <a href="#" className="hover:text-rose-400 transition-colors text-center">Termos de Uso</a>
              <a href="#" className="hover:text-rose-400 transition-colors text-center">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
