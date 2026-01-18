import { Shield, Clock, Target, Award } from 'lucide-react';

const values = [
  { icon: Target, title: 'Calidad', description: 'Estándares exigentes en cada trabajo.' },
  { icon: Clock, title: 'Puntualidad', description: 'Cumplimos tiempos de entrega.' },
  { icon: Shield, title: 'Seguridad', description: 'Procesos seguros y controlados.' },
  { icon: Award, title: 'Precisión', description: 'Tolerancias exactas garantizadas.' },
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-gradient-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Workshop */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-5xl font-black font-display text-primary">D&D</span>
                  </div>
                  <p className="text-muted-foreground">Taller Especializado</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-card border border-border rounded-xl p-4 shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">+15 Años</p>
                  <p className="text-sm text-muted-foreground">de Experiencia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-6">
              Soldadura y Maquinados con{' '}
              <span className="text-primary">Experiencia y Compromiso</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              En D&D nos especializamos en brindar soluciones de soldadura y maquinado industrial con los más altos estándares de calidad. Nuestro equipo combina experiencia técnica con maquinaria de precisión para entregar resultados que superan expectativas.
            </p>
            <p className="text-muted-foreground mb-8">
              Trabajamos bajo estrictos protocolos de seguridad y control de calidad, garantizando que cada pieza cumpla con las especificaciones requeridas. Nuestra prioridad es ser su socio confiable en manufactura.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
