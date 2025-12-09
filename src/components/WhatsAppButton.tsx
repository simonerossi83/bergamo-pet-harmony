import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/39XXXXXXXXXX?text=Ciao! Vorrei informazioni sui servizi di pet sitting.", "_blank");
  };

  return (
    <Button
      variant="whatsapp"
      size="lg"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 shadow-elevated rounded-full h-14 w-14 md:h-auto md:w-auto md:px-6"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden md:inline">WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
