import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-3">
      <div className="flex items-center gap-3">
        <Button className="flex-1 btn-primary gap-2" size="lg">
          <Phone className="w-5 h-5" />
          Cotiza Ahora
        </Button>
        <Button variant="outline" size="lg" className="gap-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
