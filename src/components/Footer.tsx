
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Instagram, MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌸</span>
              <h3 className="text-2xl font-bold">Essenza Clínica Estética</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Sua beleza natural realçada com carinho. Tratamentos personalizados 
              em um ambiente acolhedor e moderno.
            </p>
            <div className="flex gap-4">
              <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                <Phone size={18} />
                WhatsApp: (11) 99999-9999
              </Button>
              <Button variant="outline" className="border-rose-400 text-rose-400 hover:bg-rose-50 hover:text-rose-600 flex items-center gap-2">
                <Instagram size={18} />
                @essenzaclinica
              </Button>
            </div>
          </div>

          {/* Informações de contato */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-rose-300">Contato</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-rose-400" />
                <span>Rua das Flores, 123<br />Vila Madalena - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-rose-400" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-rose-400" />
                <span>contato@essenza.com.br</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-300">Horário de Funcionamento</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-400" />
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
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Essenza Clínica Estética. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-rose-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
