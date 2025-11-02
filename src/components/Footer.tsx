import { Heart, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Furlink</span>
            </div>
            <p className="text-accent-foreground/80 mb-4">
              A cloud pet hostel & adoption platform connecting loving families with pets in need of care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/adoption" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Pet Adoption
                </Link>
              </li>
              <li>
                <a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-accent-foreground/80">Pet Adoption</li>
              <li className="text-accent-foreground/80">Pet Fostering</li>
              <li className="text-accent-foreground/80">Pet Care Support</li>
              <li className="text-accent-foreground/80">Community Platform</li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-accent-foreground/80 mb-4 text-sm">
              Get updates on new pets and adoption stories.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-accent-foreground/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 bg-accent-foreground/10 border border-accent-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-accent-foreground placeholder-accent-foreground/60"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Strip */}
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © 2025 Furlink – All Rights Reserved. Made with ❤️ for pets and their families.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;