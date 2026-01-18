import { Flame, Zap, CircleDot, Settings, Wrench, Scissors, Building, Hammer, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Flame,
    title: 'Soldadura MIG/MAG',
    description: 'Soldadura semiautomática para alta productividad en aceros y aleaciones.',
    includes: ['Acero al carbón', 'Acero inoxidable', 'Aluminio'],
  },
  {
    icon: Zap,
    title: 'Soldadura TIG',
    description: 'Precisión máxima para acabados de alta calidad y materiales especiales.',
    includes: ['Inoxidable sanitario', 'Titanio', 'Aluminio de precisión'],
  },
  {
    icon: CircleDot,
    title: 'Soldadura SMAW',
    description: 'Electrodo revestido para reparaciones y trabajo estructural pesado.',
    includes: ['Reparaciones in situ', 'Estructuras pesadas', 'Mantenimiento'],
  },
  {
    icon: Settings,
    title: 'Maquinados CNC',
    description: 'Torno y fresadora CNC para piezas de alta precisión y repetibilidad.',
    includes: ['Tolerancias ±0.05mm', 'Series cortas y largas', 'Prototipado'],
  },
  {
    icon: Wrench,
    title: 'Maquinado Convencional',
    description: 'Torno, fresadora y taladro para piezas unitarias y modificaciones.',
    includes: ['Refacciones', 'Modificaciones', 'Piezas únicas'],
  },
  {
    icon: Scissors,
    title: 'Corte y Preparación',
    description: 'Corte por plasma, oxiacetileno y preparación de materiales.',
    includes: ['Corte plasma', 'Oxicorte', 'Biselado'],
  },
  {
    icon: Building,
    title: 'Fabricación de Estructuras',
    description: 'Diseño y fabricación de estructuras metálicas y herramentales.',
    includes: ['Estructuras', 'Herramentales', 'Bases de máquinas'],
  },
  {
    icon: Hammer,
    title: 'Mantenimiento Industrial',
    description: 'Reparación y mantenimiento preventivo/correctivo para su maquinaria.',
    includes: ['Reparaciones urgentes', 'Mantenimiento programado', 'Retrofitting'],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Soluciones Completas en{' '}
            <span className="text-primary">Soldadura y Maquinado</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos servicios integrales para cubrir todas sus necesidades de fabricación y reparación industrial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="industrial-card p-6 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-display text-foreground mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>

              {/* Includes */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Incluye:
                </p>
                <ul className="space-y-1">
                  {service.includes.map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 mt-auto">
                Ver más
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
