import { Factory, Car, Building2, UtensilsCrossed, Mountain, Zap, Wrench } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: 'Manufactura',
    description: 'Líneas de producción, herramentales y refacciones.',
  },
  {
    icon: Car,
    title: 'Automotriz',
    description: 'Componentes de precisión y herramentales especializados.',
  },
  {
    icon: Building2,
    title: 'Construcción',
    description: 'Estructuras metálicas y elementos arquitectónicos.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Alimentos y Bebidas',
    description: 'Equipos en acero inoxidable y grado alimenticio.',
  },
  {
    icon: Mountain,
    title: 'Minería',
    description: 'Piezas de desgaste y reparaciones pesadas.',
  },
  {
    icon: Zap,
    title: 'Energía / HVAC',
    description: 'Ductos, soportería y componentes industriales.',
  },
  {
    icon: Wrench,
    title: 'Talleres y Mantenimiento',
    description: 'Refacciones y reparaciones especializadas.',
  },
];

const Industries = () => {
  return (
    <section id="industrias" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Sectores que Atendemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Industrias que{' '}
            <span className="text-primary">Confían en Nosotros</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos adaptamos a sus especificaciones y normas internas. Experiencia en diversos sectores industriales.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="industrial-card p-6 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
