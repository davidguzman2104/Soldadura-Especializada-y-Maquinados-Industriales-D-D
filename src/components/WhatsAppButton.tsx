import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5215512345678'; // Configurable
  const message = encodeURIComponent('Hola, me interesa solicitar una cotización para servicios de soldadura/maquinado.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Contactar por WhatsApp"
      style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
