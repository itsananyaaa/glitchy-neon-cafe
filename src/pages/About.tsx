import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import cyberCityImage from "@/assets/cyber-city.jpg";
import alexaImage from "@/assets/team-alexa.jpg";
import lunaImage from "@/assets/team-luna.jpg";
import kyraImage from "@/assets/team-kyra.jpg";
import rinImage from "@/assets/team-rin.jpg";
import zoeImage from "@/assets/team-zoe.jpg";
import mayaImage from "@/assets/team-maya.jpg";

const teamMembers = [
  {
    name: "Alexa Rao",
    role: "The Code Whisperer",
    image: alexaImage,
    quote: "I speak fluent binary and make coffee machines think they're sentient.",
    funFact: "Can debug code while brewing the perfect espresso shot"
  },
  {
    name: "Luna Mehta",
    role: "The Neon Muse",
    image: lunaImage,
    quote: "I paint with light and design dreams in neon.",
    funFact: "Creates holographic latte art that defies physics"
  },
  {
    name: "Kyra Das",
    role: "Byte Smith",
    image: kyraImage,
    quote: "I forge digital experiences one pixel at a time.",
    funFact: "Built our quantum coffee brewing algorithm"
  },
  {
    name: "Rin Kapoor",
    role: "The Pixel Enchanter",
    image: rinImage,
    quote: "Every interface tells a story, every animation has a soul.",
    funFact: "Makes our UI elements dance to cyberpunk beats"
  },
  {
    name: "Zoe Thomas",
    role: "Circuit Bard",
    image: zoeImage,
    quote: "I compose neon symphonies in code.",
    funFact: "Can turn error logs into poetry"
  },
  {
    name: "Maya Singh",
    role: "Quantum Brewer",
    image: mayaImage,
    quote: "I bend time so your coffee arrives just before you need it.",
    funFact: "Invented our time-dilated cold brew"
  }
];

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${cyberCityImage})` }}
        >
          <div className="absolute inset-0 bg-cyber-dark/70"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl font-orbitron font-bold text-neon-cyan mb-4 glitch" data-text="Our Digital Genesis">
                Our Digital Genesis
              </h1>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Born in a neon alley of creativity, where code meets caffeine
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Story Section */}
          <div className="mb-16 animate-fade-in">
            <Card className="bg-card/80 backdrop-blur-sm neon-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-orbitron font-bold text-neon-magenta mb-6">
                  How gLItChycAFe Was Born
                </h2>
                <div className="prose prose-lg text-foreground font-rajdhani">
                  <p className="mb-4">
                    In the year 2024, in the digital backstreets of Kerala, four visionaries 
                    converged with a shared dream: to create the world's first truly cyberpunk café. 
                    Armed with lines of code, gallons of caffeine, and an unhealthy obsession 
                    with neon lighting, they transformed an ordinary space into a portal 
                    between realities.
                  </p>
                  <p className="mb-4">
                    gLItChycAFe isn't just a café—it's a digital sanctuary where hackers, 
                    dreamers, and coffee enthusiasts gather to fuel their next breakthrough. 
                    Every cup is brewed with precision algorithms, every ambiance crafted 
                    with pixel-perfect attention to atmosphere.
                  </p>
                  <p>
                    Step into our world, where the aroma of freshly ground beans mixes 
                    with the hum of quantum processors, and every sip transports you 
                    deeper into the digital realm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl font-orbitron font-bold text-center text-neon-cyan mb-12">
              Meet the Digital Architects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={member.name}
                  className="bg-card/80 backdrop-blur-sm border-border hover-glow transition-all duration-300 hover:scale-105 neon-border group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                      />
                      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-2">
                      {member.name}
                    </h3>
                    <p className="text-neon-yellow font-rajdhani font-medium mb-3">
                      {member.role}
                    </p>
                    <blockquote className="text-sm text-muted-foreground italic mb-3 font-rajdhani">
                      "{member.quote}"
                    </blockquote>
                    <div className="bg-cyber-dark/50 rounded-lg p-3">
                      <p className="text-xs text-neon-green font-rajdhani">
                        <strong>Fun Fact:</strong> {member.funFact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="bg-gradient-neon p-8 text-cyber-dark">
              <h2 className="text-3xl font-orbitron font-bold mb-4">
                Our Digital Vision
              </h2>
              <p className="text-lg font-rajdhani max-w-3xl mx-auto">
                To bridge the gap between the analog and digital worlds, 
                one cup of perfectly coded coffee at a time. We're not just 
                serving beverages—we're serving the future.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;