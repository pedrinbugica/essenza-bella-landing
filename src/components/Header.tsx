
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl">🌸</span>
          <h1 className="text-lg md:text-2xl font-bold text-slate-800">
            <span className="hidden sm:inline">Essenza Clínica Estética</span>
            <span className="sm:hidden">Essenza</span>
          </h1>
        </div>
        <Button className="bg-rose-400 hover:bg-rose-500 text-white flex items-center gap-1 md:gap-2 text-sm md:text-base px-3 md:px-4 py-2">
          <Phone size={16} className="md:hidden" />
          <Phone size={18} className="hidden md:block" />
          <span className="hidden sm:inline">Agende sua consulta</span>
          <span className="sm:hidden">Agendar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
