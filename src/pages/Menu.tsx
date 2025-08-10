import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Layout from "@/components/Layout";
import neonCoffeeImage from "@/assets/neon-coffee.jpg";
import cyberDessertImage from "@/assets/cyber-dessert.jpg";
import quantumEspresso from "@/assets/menu-quantum-espresso.jpg";
import holoMacchiato from "@/assets/menu-holo-macchiato.jpg";
import synthMatcha from "@/assets/menu-synth-matcha.jpg";
import icedNebula from "@/assets/menu-iced-nebula.jpg";
import stellarSundae from "@/assets/menu-stellar-sundae.jpg";
import neoCheesecake from "@/assets/menu-neo-cheesecake.jpg";

const menuItems = [
  {
    id: 1,
    name: "Neon Latte",
    description: "Electric blue foam art meets premium espresso",
    price: "₹299",
    category: "Coffee",
    image: neonCoffeeImage,
    special: false,
    tags: ["Signature"]
  },
  {
    id: 2,
    name: "Quantum Cappuccino",
    description: "Multi-dimensional flavor with holographic foam",
    price: "₹349",
    category: "Coffee",
    image: holoMacchiato,
    special: true,
    tags: ["Signature"]
  },
  {
    id: 3,
    name: "Cyber Mocha",
    description: "Dark chocolate meets neon energy",
    price: "₹399",
    category: "Coffee",
    image: neonCoffeeImage,
    special: false,
    tags: ["Chocolate"]
  },
  {
    id: 4,
    name: "Binary Cold Brew",
    description: "01001001 00100000 01001100 01001111 01010110 01000101",
    price: "₹279",
    category: "Cold Brews",
    image: icedNebula,
    special: false,
    tags: ["Cold"]
  },
  {
    id: 5,
    name: "Pixel Parfait",
    description: "Glowing layers of digital delight",
    price: "₹249",
    category: "Desserts",
    image: cyberDessertImage,
    special: false,
    tags: ["Vegetarian"]
  },
  {
    id: 6,
    name: "Matrix Cake",
    description: "Reality-bending chocolate experience",
    price: "₹329",
    category: "Desserts",
    image: neoCheesecake,
    special: true,
    tags: ["Vegetarian"]
  },
  {
    id: 7,
    name: "Quantum Espresso",
    description: "Pure concentrated stardust energy",
    price: "₹199",
    category: "Coffee",
    image: quantumEspresso,
    special: false,
    tags: ["Strong"]
  },
  {
    id: 8,
    name: "Holo Macchiato",
    description: "Layered with holographic caramel streams",
    price: "₹329",
    category: "Coffee",
    image: holoMacchiato,
    special: false,
    tags: ["Sweet"]
  },
  {
    id: 9,
    name: "Synth Matcha",
    description: "Neon-green matcha latte with cyber foam",
    price: "₹309",
    category: "Coffee",
    image: synthMatcha,
    special: false,
    tags: ["Vegetarian"]
  },
  {
    id: 10,
    name: "Iced Nebula",
    description: "Cold brew swirling like a galaxy",
    price: "₹289",
    category: "Cold Brews",
    image: icedNebula,
    special: false,
    tags: ["Cold"]
  },
  {
    id: 11,
    name: "Stellar Sundae",
    description: "Futuristic sundae with glowing toppings",
    price: "₹359",
    category: "Desserts",
    image: stellarSundae,
    special: false,
    tags: ["Vegetarian"]
  },
  {
    id: 12,
    name: "Neo Cheesecake",
    description: "Holographic-sheen cheesecake slice",
    price: "₹349",
    category: "Desserts",
    image: neoCheesecake,
    special: false,
    tags: ["Vegetarian"]
  }
];

const categories = ["All", "Coffee", "Cold Brews", "Desserts", "Specials"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chefSpecial, setChefSpecial] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<(typeof menuItems)[number] | null>(null);
const filteredItems = menuItems.filter((item) => {
  const categoryMatch = selectedCategory === "All"
    ? true
    : selectedCategory === "Specials"
      ? item.special
      : item.category === selectedCategory;
  const searchMatch = search.trim()
    ? item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    : true;
  return categoryMatch && searchMatch;
});

  const specialItems = menuItems.filter(item => item.special);

  // Rotate chef's special every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setChefSpecial(prev => (prev + 1) % specialItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [specialItems.length]);

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-orbitron font-bold text-neon-cyan mb-4 glitch" data-text="Digital Menu">
              Digital Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience flavors from the future in our cyberpunk café
            </p>
          </div>

          {/* Chef's Special Rotating Banner */}
          <div className="mb-8 p-6 bg-gradient-neon rounded-lg neon-border animate-slide-in-right">
            <div className="text-center">
              <h2 className="text-2xl font-orbitron font-bold text-cyber-dark mb-2">
                Chef's Special
              </h2>
              <div className="text-cyber-dark font-rajdhani font-medium text-lg">
                {specialItems[chefSpecial]?.name} - {specialItems[chefSpecial]?.price}
              </div>
            </div>
          </div>

{/* Search + Category Filter */}
<div className="flex flex-col items-center gap-4 mb-8">
  <Input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search menu..."
    className="w-full max-w-md bg-card neon-border"
    aria-label="Search menu"
  />
  <div className="flex flex-wrap justify-center gap-4">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-6 py-2 rounded-full font-rajdhani font-medium transition-all duration-300 ${
          selectedCategory === category
            ? "bg-neon-cyan text-cyber-dark"
            : "bg-card text-foreground hover:bg-neon-cyan/20 neon-border"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
<Card 
  key={item.id} 
  className="bg-card/80 backdrop-blur-sm border-border hover-glow transition-all duration-300 hover:scale-105 neon-border cursor-pointer"
  style={{ animationDelay: `${index * 0.1}s` }}
  onClick={() => setSelectedItem(item)}
>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {item.special && (
                      <Badge className="absolute top-2 right-2 bg-neon-yellow text-cyber-dark font-orbitron">
                        Special
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-orbitron font-bold text-neon-cyan">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-neon-yellow">
                        {item.price}
                      </span>
                    </div>
<p className="text-muted-foreground font-rajdhani">
  {item.description}
</p>
<div className="mt-3 flex flex-wrap gap-2">
  {item.tags?.map((tag) => (
    <Badge key={tag} variant="secondary" className="uppercase">{tag}</Badge>
  ))}
</div>
<Badge variant="secondary" className="mt-3">
  {item.category}
</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
</div>

{/* Quick View Modal */}
<Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
  <DialogContent className="bg-card/95 backdrop-blur-sm neon-border max-w-2xl">
    <DialogHeader>
      <DialogTitle className="font-orbitron text-neon-cyan">{selectedItem?.name}</DialogTitle>
      <DialogDescription className="text-muted-foreground">{selectedItem?.description}</DialogDescription>
    </DialogHeader>
    <img
      src={selectedItem?.image}
      alt={selectedItem?.name || "Menu item image"}
      className="w-full h-64 object-cover rounded-md"
    />
    <div className="mt-4 flex flex-wrap gap-2">
      {selectedItem?.tags?.map((tag: string) => (
        <Badge key={tag} variant="secondary" className="uppercase">{tag}</Badge>
      ))}
    </div>
    <div className="mt-4 text-neon-yellow font-bold text-lg">{selectedItem?.price}</div>
  </DialogContent>
</Dialog>
</div>
</div>
</Layout>
  );
};

export default Menu;