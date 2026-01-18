import { FileText, Search, Calculator, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Envío de Requerimiento',
    description: 'Envíanos tu plano, especificaciones o descripción del trabajo requerido.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Revisión Técnica',
    description: 'Nuestro equipo analiza viabilidad, materiales y proceso óptimo.',
  },
  {
    number: '03',
    icon: Calculator,
    title: 'Cotización y Tiempos',
    description: 'Recibe precio detallado y tiempo de entrega estimado.',
  },
  {
    number: '04',
    icon: Settings,
    title: 'Fabricación / Maquinado',
    description: 'Ejecutamos el trabajo con control de calidad en cada etapa.',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Inspección y Entrega',
    description: 'Verificación final y entrega en tiempo acordado.',
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Proceso de Trabajo{' '}
            <span className="text-secondary">Simple y Eficiente</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            De tu idea al producto terminado en pasos claros y transparentes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="btn-primary text-lg px-8 py-6 gap-2">
            Inicia tu cotización en 2 minutos
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
