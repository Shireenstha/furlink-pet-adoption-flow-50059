import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-hero p-2 rounded-xl shadow-soft group-hover:shadow-hover transition-all duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Furlink</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-primary ${
                isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-all duration-300 hover:text-primary ${
                isActive('/about') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/adoption" 
              className={`font-medium transition-all duration-300 hover:text-primary ${
                isActive('/adoption') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
              }`}
            >
              Adoption
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/adoption" className="hero-button">
              Adopt a Pet
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium py-2 transition-colors ${
                  isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium py-2 transition-colors ${
                  isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/adoption" 
                className={`font-medium py-2 transition-colors ${
                  isActive('/adoption') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Adoption
              </Link>
              <Link 
                to="/adoption" 
                className="hero-button text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Adopt a Pet
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;