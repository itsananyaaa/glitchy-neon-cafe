import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SecretMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const secretItems = [
  {
    name: "The Glitch",
    description: "A drink that exists between dimensions - sometimes coffee, sometimes tea",
    price: "₹404",
    code: "GL1TCH_C0D3"
  },
  {
    name: "Binary Brew",
    description: "01000011 01001111 01000110 01000110 01000101 01000101",
    price: "₹101",
    code: "B1N4RY_CAF3"
  },
  {
    name: "Null Pointer",
    description: "A coffee that points to nothing but tastes like everything",
    price: "₹NULL",
    code: "SEGFAULT_LATTE"
  }
];

const SecretMenu = ({ isOpen, onClose }: SecretMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-cyber-dark/90 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card/95 backdrop-blur-sm neon-border animate-fade-in">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-orbitron font-bold text-neon-magenta glitch" data-text="SECRET MENU">
              SECRET MENU
            </h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-neon-cyan hover:bg-neon-cyan/10"
            >
              <X size={24} />
            </Button>
          </div>
          
          <p className="text-muted-foreground font-rajdhani mb-6 text-center">
            🤫 You've unlocked the forbidden flavors...
          </p>

          <div className="space-y-4">
            {secretItems.map((item, index) => (
              <div 
                key={item.name}
                className="p-4 bg-cyber-dark/50 rounded-lg neon-border hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-orbitron font-bold text-neon-cyan text-lg">
                    {item.name}
                  </h3>
                  <span className="text-neon-yellow font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="text-foreground font-rajdhani mb-2">
                  {item.description}
                </p>
                <div className="text-xs font-mono text-neon-green">
                  ORDER_CODE: {item.code}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-rajdhani">
              Whisper the order code to our barista to unlock these hidden flavors
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecretMenu;