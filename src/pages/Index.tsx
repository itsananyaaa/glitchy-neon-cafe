import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Star } from "lucide-react";
import Layout from "@/components/Layout";
import DigitalClock from "@/components/DigitalClock";
import ScrollCoffee from "@/components/ScrollCoffee";
import SecretMenu from "@/components/SecretMenu";
import heroCafeImage from "@/assets/hero-cafe.jpg";
import neonCoffeeImage from "@/assets/neon-coffee.jpg";

const reviews = [
  {
    name: "CyberNinja_42",
    rating: 5,
    text: "This place hacked my taste buds and installed pure bliss!",
    avatar: "🥷"
  },
  {
    name: "NeonDreamer",
    rating: 5,
    text: "The coffee here is literally next-level. Matrix vibes confirmed.",
    avatar: "🤖"
  },
  {
    name: "ByteBarista",
    rating: 5,
    text: "Finally, a café that speaks my language: caffeine and code.",
    avatar: "👩‍💻"
  }
];

const events = [
  {
    date: "Dec 15",
    title: "Hack & Brew Night",
    time: "19:00 IST"
  },
  {
    date: "Dec 22",
    title: "AI Art Exhibition",
    time: "18:00 IST"
  },
  {
    date: "Dec 29",
    title: "Cyberpunk Karaoke",
    time: "20:00 IST"
  }
];

const menuPreview = [
  { name: "Quantum Cappuccino", price: "₹349", image: neonCoffeeImage },
  { name: "Neural Latte", price: "₹299", image: neonCoffeeImage },
  { name: "Binary Cold Brew", price: "₹279", image: neonCoffeeImage }
];

const Index = () => {
  const [logoClicks, setLogoClicks] = useState(0);
  const [showSecretMenu, setShowSecretMenu] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [typedText, setTypedText] = useState("");
  
  const fullText = "Where Code Meets Caffeine in Digital Harmony";

  useEffect(() => {
    if (logoClicks === 3) {
      setShowSecretMenu(true);
      setLogoClicks(0);
    }
  }, [logoClicks]);

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Review rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleLogoClick = () => {
    setLogoClicks(prev => prev + 1);
  };

  return (
    <Layout>
      <ScrollCoffee />
      <SecretMenu isOpen={showSecretMenu} onClose={() => setShowSecretMenu(false)} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 
                  className="text-6xl lg:text-7xl font-orbitron font-bold text-neon-cyan mb-4 glitch cursor-pointer"
                  data-text="gLItChycAFe"
                  onClick={handleLogoClick}
                >
                  gLItChycAFe
                </h1>
                <div className="h-16">
                  <p className="text-2xl text-foreground font-rajdhani">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground font-rajdhani max-w-lg">
                Step into the future of coffee culture. Experience our digital realm 
                where every brew is crafted with precision algorithms and served 
                with neon-bright passion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button className="bg-gradient-neon text-cyber-dark font-orbitron font-bold hover:scale-105 transition-transform px-8 py-3">
                    Explore the Menu
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="neon-border text-neon-cyan hover:bg-neon-cyan/10 font-orbitron font-bold px-8 py-3">
                    Meet the Creators
                  </Button>
                </Link>
              </div>
              
              <DigitalClock />
            </div>
            
            {/* Right Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative rounded-lg overflow-hidden neon-border">
                <img
                  src={heroCafeImage}
                  alt="Cyberpunk Café Interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-orbitron font-bold text-neon-magenta mb-4">
              Digital Menu Preview
            </h2>
            <p className="text-muted-foreground font-rajdhani text-lg">
              Sample our most popular neural beverages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuPreview.map((item, index) => (
              <Card 
                key={item.name}
                className="bg-card/80 backdrop-blur-sm neon-border hover-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-orbitron font-bold text-neon-cyan">
                        {item.name}
                      </h3>
                      <span className="text-neon-yellow font-bold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button variant="outline" className="neon-border text-neon-cyan hover:bg-neon-cyan/10 font-orbitron">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-cyber-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold text-neon-yellow mb-4">
              Digital Testimonials
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm neon-border">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">
                  {reviews[currentReview].avatar}
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="text-neon-yellow fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg font-rajdhani text-foreground mb-4">
                  "{reviews[currentReview].text}"
                </blockquote>
                <cite className="text-neon-cyan font-orbitron font-bold">
                  - {reviews[currentReview].name}
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-orbitron font-bold text-neon-green mb-8">
                Upcoming Events
              </h2>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <Card 
                    key={event.title}
                    className="bg-card/80 backdrop-blur-sm neon-border hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <Badge className="bg-neon-magenta text-cyber-dark font-orbitron">
                            {event.date}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-orbitron font-bold text-neon-cyan text-lg">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground font-rajdhani">
                            <Clock size={16} />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="bg-gradient-neon p-6 text-cyber-dark sticky top-24">
                <h3 className="font-orbitron font-bold text-xl mb-4">
                  AR Experience Portal
                </h3>
                <div className="w-32 h-32 bg-cyber-dark mx-auto rounded-lg flex items-center justify-center mb-4">
                  <span className="text-neon-cyan text-lg font-orbitron">QR</span>
                </div>
                <p className="text-sm font-rajdhani text-center">
                  Scan with your device to enter our augmented reality café experience
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
