import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Ing. Roberto Méndez',
    company: 'Manufactura del Norte S.A.',
    text: 'Excelente calidad en maquinados CNC. Las tolerancias siempre exactas y entregas puntuales. D&D se ha convertido en nuestro proveedor de confianza.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lic. María González',
    company: 'Alimentos Industriales MX',
    text: 'Trabajamos con ellos para equipos en acero inoxidable grado alimenticio. Soldaduras impecables y acabados de primera. Muy recomendados.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ing. Carlos Ramírez',
    company: 'Automotriz Central',
    text: 'Resolvieron una urgencia de refacciones para nuestra línea de producción en menos de 48 horas. Profesionales y comprometidos.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Arq. Patricia Sánchez',
    company: 'Construcciones PSA',
    text: 'Las estructuras metálicas que fabricaron para nuestro proyecto cumplieron todas las especificaciones. Trabajo de alta calidad.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Lo Que Dicen{' '}
            <span className="text-primary">Nuestros Clientes</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="industrial-card p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <div className="text-center pt-8">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "{currentTestimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground text-lg">{currentTestimonial.name}</p>
                <p className="text-muted-foreground">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:border-primary hover:text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              Clientes recurrentes por calidad y cumplimiento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
