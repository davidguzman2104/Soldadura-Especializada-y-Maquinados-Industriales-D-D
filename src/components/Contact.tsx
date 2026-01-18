import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin, Clock, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const services = [
  'Soldadura MIG/MAG',
  'Soldadura TIG',
  'Soldadura SMAW',
  'Maquinados CNC',
  'Maquinado Convencional',
  'Corte y Preparación',
  'Fabricación de Estructuras',
  'Mantenimiento Industrial',
  'Otro',
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    urgency: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground mb-4">
            Solicita tu{' '}
            <span className="text-primary">Cotización</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Adjunta tu plano y te respondemos con costo y tiempo estimado. Cotiza hoy — respuesta rápida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="industrial-card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre *</label>
                    <Input
                      name="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Empresa</label>
                    <Input
                      name="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono *</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(55) 1234-5678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Servicio Requerido *</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="bg-muted border-border">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Urgencia</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                      <SelectTrigger className="bg-muted border-border">
                        <SelectValue placeholder="Selecciona urgencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal (3-7 días)</SelectItem>
                        <SelectItem value="urgent">Urgente (24-48 hrs)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Ubicación</label>
                  <Input
                    name="location"
                    placeholder="Ciudad / Estado"
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Descripción del Trabajo *</label>
                  <Textarea
                    name="message"
                    placeholder="Describe el trabajo requerido, especificaciones, materiales, cantidades..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Adjuntar Plano (Opcional)</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      PDF, DWG, DXF, JPG, PNG (Max 10MB)
                    </p>
                    <input type="file" className="hidden" accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1 btn-primary gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </Button>
                  <Button type="button" size="lg" variant="outline" className="flex-1 gap-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    <MessageCircle className="w-5 h-5" />
                    Cotizar por WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="industrial-card p-6">
              <h3 className="text-lg font-bold font-display text-foreground mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">(55) 1234-5678</p>
                    <p className="text-sm text-muted-foreground">Línea directa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">cotizaciones@dyd.mx</p>
                    <p className="text-sm text-muted-foreground">Email para cotizaciones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Zona Industrial</p>
                    <p className="text-sm text-muted-foreground">Ciudad, Estado, México</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Lun - Vie: 8:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground">Sáb: 8:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="industrial-card p-6">
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Mapa de ubicación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
