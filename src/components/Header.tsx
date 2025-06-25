
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🌸</span>
          <h1 className="text-2xl font-bold text-slate-800">Essenza Clínica Estética</h1>
        </div>
        <Button className="bg-rose-400 hover:bg-rose-500 text-white flex items-center gap-2">
          <Phone size={18} />
          Agende sua consulta
        </Button>
      </div>
    </header>
  );
};

export default Header;
