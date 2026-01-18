import { Check, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const capabilities = [
  'Lectura e interpretación de planos técnicos',
  'Ensamble y fabricación a medida',
  'Medición y control (vernier, micrómetro, indicadores)',
  'Materiales: acero al carbón, inoxidable, aluminio',
  'Acabados: pulido, arenado, pintura industrial',
  'Soldadura bajo normas AWS y especificaciones del cliente',
];

const specs = [
  { label: 'Diámetros de torneado', value: 'Ø10mm - Ø400mm' },
  { label: 'Longitud máxima', value: 'Hasta 1,500mm' },
  { label: 'Tolerancias CNC', value: '±0.05mm' },
  { label: 'Tolerancias convencional', value: '±0.1mm' },
  { label: 'Espesor soldadura', value: '0.5mm - 50mm' },
  { label: 'Turnaround normal', value: '3-7 días' },
  { label: 'Turnaround urgente', value: '24-48 horas' },
];

const Capabilities = () => {
  return (
    <section id="capacidades" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Capacidades Técnicas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Equipamiento y{' '}
            <span className="text-secondary">Especificaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contamos con maquinaria de precisión y personal calificado para cumplir con las especificaciones más exigentes.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Capabilities List */}
          <div className="industrial-card p-6 md:p-8">
            <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Capacidades de Fabricación
            </h3>
            <ul className="space-y-4">
              {capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Specifications Table */}
          <div className="industrial-card p-6 md:p-8">
            <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-secondary" />
              Especificaciones Técnicas
            </h3>
            <div className="space-y-3">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-foreground bg-muted px-3 py-1 rounded-lg text-sm">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <Button className="w-full mt-6 gap-2 btn-primary">
              <Download className="w-4 h-4" />
              Descargar ficha técnica (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
