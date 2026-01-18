import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Industrias', href: '#industrias' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-black font-display text-primary">D&D</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs md:text-sm font-medium text-foreground leading-tight">Soldadura Especializada</p>
              <p className="text-xs text-muted-foreground leading-tight">Maquinados Industriales</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button size="sm" className="gap-2 btn-primary">
              <Phone className="w-4 h-4" />
              Cotiza ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link py-2 px-4 rounded-lg hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" className="w-full gap-2 border-primary/50 text-primary">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button className="w-full gap-2 btn-primary">
                  <Phone className="w-4 h-4" />
                  Cotiza ahora
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
