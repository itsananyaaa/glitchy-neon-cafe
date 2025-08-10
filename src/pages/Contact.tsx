import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Instagram, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent to the Matrix",
      description: "Your transmission has been received. We'll decrypt it soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 7 && hour < 23; // Open 7 AM to 11 PM
  };

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-orbitron font-bold text-neon-cyan mb-4 glitch" data-text="Connect to the Grid">
              Connect to the Grid
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Establish a secure connection with our digital realm
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-card/80 backdrop-blur-sm neon-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-neon-cyan">
                    Transmit Your Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                        Your Handle
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-cyber-dark border-neon-cyan/30 focus:border-neon-cyan text-foreground"
                        placeholder="Enter your digital identity..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                        Neural Link (Email)
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-cyber-dark border-neon-cyan/30 focus:border-neon-cyan text-foreground"
                        placeholder="your.email@cyberspace.net"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                        Encrypted Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-cyber-dark border-neon-cyan/30 focus:border-neon-cyan text-foreground min-h-32"
                        placeholder="Encode your thoughts here..."
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-neon text-cyber-dark font-orbitron font-bold hover:scale-105 transition-transform"
                    >
                      Transmit to Matrix
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Location & Hours */}
              <Card className="bg-card/80 backdrop-blur-sm neon-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-neon-cyan" size={24} />
                      <div>
                        <h3 className="font-orbitron font-bold text-foreground">Physical Node</h3>
                        <p className="text-muted-foreground font-rajdhani">
                          Cyber District, Neon Alley<br />
                          Kochi, Kerala 682001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-neon-yellow" size={24} />
                      <div>
                        <h3 className="font-orbitron font-bold text-foreground">
                          Server Status: {isOpen() ? (
                            <span className="text-neon-green">ONLINE</span>
                          ) : (
                            <span className="text-destructive">OFFLINE</span>
                          )}
                        </h3>
                        <p className="text-muted-foreground font-rajdhani">
                          Daily: 07:00 - 23:00 IST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <Card className="bg-card/80 backdrop-blur-sm neon-border">
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-neon-cyan mb-4">
                    Direct Channels
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-neon-magenta" size={20} />
                      <span className="font-rajdhani">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-neon-yellow" size={20} />
                      <span className="font-rajdhani">hello@glitchycafe.digital</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/80 backdrop-blur-sm neon-border">
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-neon-cyan mb-4">
                    Social Networks
                  </h3>
                  <div className="flex space-x-4">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-neon-magenta hover:bg-neon-magenta/10 hover:text-neon-magenta"
                    >
                      <Instagram size={24} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan"
                    >
                      <Twitter size={24} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code */}
              <Card className="bg-gradient-neon p-6 text-cyber-dark">
                <div className="text-center">
                  <h3 className="font-orbitron font-bold mb-2">Mobile Access Portal</h3>
                  <div className="w-24 h-24 bg-cyber-dark mx-auto rounded-lg flex items-center justify-center">
                    <span className="text-neon-cyan text-xs">QR</span>
                  </div>
                  <p className="text-sm font-rajdhani mt-2">
                    Scan for AR Experience
                  </p>
                </div>
              </Card>

              {/* Embedded Map Placeholder */}
              <Card className="bg-card/80 backdrop-blur-sm neon-border">
                <CardContent className="p-6">
                  <h3 className="font-orbitron font-bold text-neon-cyan mb-4">
                    Navigation Grid
                  </h3>
                  <div className="w-full h-48 bg-cyber-dark rounded-lg flex items-center justify-center border border-neon-cyan/30">
                    <span className="text-neon-cyan font-rajdhani">
                      Interactive Map Loading...
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;