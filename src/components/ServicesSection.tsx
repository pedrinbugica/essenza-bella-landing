
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Flower, Droplets } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="text-rose-500" size={32} />,
      title: "Limpeza de Pele",
      description: "Tratamento profundo que remove impurezas e renova sua pele, deixando-a macia e luminosa.",
      price: "A partir de R$ 120",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: <Zap className="text-blue-500" size={32} />,
      title: "Botox",
      description: "Aplicação segura e precisa para suavizar rugas de expressão e prevenir o envelhecimento.",
      price: "A partir de R$ 350",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop"
    },
    {
      icon: <Flower className="text-green-500" size={32} />,
      title: "Massagem Relaxante",
      description: "Momento de puro relaxamento que alivia tensões e promove seu bem-estar completo.",
      price: "A partir de R$ 150",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      icon: <Droplets className="text-purple-500" size={32} />,
      title: "Peeling",
      description: "Renovação celular que melhora textura, tom e luminosidade da sua pele.",
      price: "A partir de R$ 200",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Nossos Serviços</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubra nossos tratamentos exclusivos, pensados para realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-rose-500">{service.price}</span>
                  <Button size="sm" variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50">
                    Saiba mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
