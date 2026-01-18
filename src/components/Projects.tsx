import { useState } from 'react';
import { X, Clock, CheckCircle, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['Todos', 'Estructuras', 'Refacciones', 'CNC', 'Reparaciones', 'Herramentales'];

const projects = [
  {
    id: 1,
    title: 'Base de Máquina CNC',
    category: 'Estructuras',
    image: null,
    problem: 'Cliente requería base estructural para centro de maquinado con tolerancias estrictas.',
    solution: 'Fabricación de estructura soldada con nivelación de precisión y placas maquinadas.',
    process: 'Soldadura MIG en acero estructural + maquinado CNC de superficies de montaje.',
    time: '5 días',
  },
  {
    id: 2,
    title: 'Eje de Transmisión',
    category: 'CNC',
    image: null,
    problem: 'Refacción urgente para línea de producción detenida.',
    solution: 'Maquinado de eje con tolerancias ±0.02mm en tiempo récord.',
    process: 'Torneado CNC en acero 4140, tratamiento térmico y acabado.',
    time: '48 horas',
  },
  {
    id: 3,
    title: 'Reparación de Reductor',
    category: 'Reparaciones',
    image: null,
    problem: 'Desgaste severo en carcasa de reductor industrial.',
    solution: 'Reconstrucción con soldadura y maquinado a medidas originales.',
    process: 'Soldadura TIG para relleno + torneado de precisión.',
    time: '3 días',
  },
  {
    id: 4,
    title: 'Herramental de Sujeción',
    category: 'Herramentales',
    image: null,
    problem: 'Fixture especial para proceso de ensamble automatizado.',
    solution: 'Diseño y fabricación de herramental multi-posición.',
    process: 'Corte, soldadura y maquinado CNC con tratamiento superficial.',
    time: '7 días',
  },
  {
    id: 5,
    title: 'Tanque Inoxidable',
    category: 'Estructuras',
    image: null,
    problem: 'Tanque de proceso para industria alimenticia.',
    solution: 'Fabricación en acero inoxidable 304 con acabado sanitario.',
    process: 'Soldadura TIG con pasivado y pulido espejo interior.',
    time: '10 días',
  },
  {
    id: 6,
    title: 'Sprocket Especial',
    category: 'Refacciones',
    image: null,
    problem: 'Pieza descontinuada requerida para transportador.',
    solution: 'Ingeniería inversa y fabricación bajo especificación.',
    process: 'Fresado CNC en acero 1045 con tratamiento térmico.',
    time: '4 días',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Proyectos{' '}
            <span className="text-primary">Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conoce algunos de nuestros trabajos más representativos en soldadura y maquinado.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="industrial-card overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-foreground font-medium">Ver detalles</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {project.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-secondary gap-2">
            Ver todos los proyectos
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div className="industrial-card max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {/* Header */}
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <Wrench className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Problema</h4>
                    <p className="text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Solución</h4>
                    <p className="text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Proceso</h4>
                    <p className="text-muted-foreground">{selectedProject.process}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{selectedProject.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">Entregado a tiempo</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 btn-primary">
                  Solicitar un trabajo similar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
