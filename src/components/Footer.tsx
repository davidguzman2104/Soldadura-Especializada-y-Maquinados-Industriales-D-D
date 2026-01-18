import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  'Soldadura MIG/MAG',
  'Soldadura TIG',
  'Soldadura SMAW',
  'Maquinados CNC',
  'Maquinado Convencional',
  'Fabricación de Estructuras',
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black font-display text-primary">D&D</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Soldadura Especializada y Maquinados Industriales. Precisión que se nota. Resistencia que dura.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-display text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-display text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                (55) 1234-5678
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                cotizaciones@dyd.mx
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Zona Industrial, Ciudad, Estado, México
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} D&D — Soldadura Especializada y Maquinados Industriales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
