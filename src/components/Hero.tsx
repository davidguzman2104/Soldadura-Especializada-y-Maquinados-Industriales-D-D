import { ArrowRight, Play, Zap, Settings, Wrench, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-welding.jpg';

const chips = [
  { icon: Zap, label: 'MIG / TIG / SMAW' },
  { icon: Settings, label: 'CNC de Precisión' },
  { icon: Wrench, label: 'Piezas a Medida' },
  { icon: Clock, label: 'Reparación Industrial' },
  { icon: Truck, label: 'Entrega Local y Foránea' },
];

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated Spark Effect */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-spark opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-spark opacity-40" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-spark opacity-50" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Precisión que se nota. Resistencia que dura.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-foreground leading-tight mb-6 animate-fade-in stagger-1">
            Soldadura Especializada y{' '}
            <span className="text-primary text-glow">Maquinados Industriales</span>
            {' '}de Alta Precisión
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in stagger-2">
            Fabricación, reparación y manufactura para industria: calidad, tolerancias exactas y entregas a tiempo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in stagger-3">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 gap-2 w-full sm:w-auto">
              Solicitar cotización
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-6 gap-2 w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Ver capacidades
            </Button>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in stagger-4">
            {chips.map((chip, index) => (
              <div key={chip.label} className="chip" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <chip.icon className="w-4 h-4 mr-2 text-primary" />
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
