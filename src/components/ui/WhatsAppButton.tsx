// src/components/ui/WhatsAppButton.tsx
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// TODO: replace with your real WhatsApp number in international format, no + or leading zeros.
const WHATSAPP_NUMBER = "+2347058466586";
const DEFAULT_MESSAGE = "Hi Nosyra Digital! I'd like to talk about a project.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.5)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
