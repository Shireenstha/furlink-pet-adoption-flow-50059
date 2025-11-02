import { Link } from "react-router-dom";
import { MapPin, Calendar, CheckCircle, XCircle, Shield } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  age: string;
  breed: string;
  type: string;
  location: string;
  available: boolean;
  description: string;
  image: string;
  caregiver: string;
  verified: boolean;
  adoptionType: "Permanent" | "Temporary";
}

interface PetCardProps {
  pet: Pet;
}

export const PetCard = ({ pet }: PetCardProps) => {
  return (
    <div className="pet-card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={pet.image} 
          alt={`${pet.name} - ${pet.breed}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          {pet.available ? (
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Available
            </span>
          ) : (
            <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <XCircle className="h-3 w-3" />
              Adopted
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            pet.adoptionType === "Permanent" 
              ? "bg-primary text-primary-foreground" 
              : "bg-accent text-accent-foreground"
          }`}>
            {pet.adoptionType}
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {pet.name}
            </h3>
            <p className="text-muted-foreground">
              {pet.breed} • {pet.type}
            </p>
          </div>
          {pet.verified && (
            <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
          )}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {pet.age}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {pet.location}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {pet.description}
        </p>
        
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">
            Caregiver: <span className="font-medium">{pet.caregiver}</span>
            {pet.verified && <span className="text-secondary ml-1">✓ Verified</span>}
          </p>
          
          <Link 
            to={`/pet/${pet.id}`}
            className="accent-button w-full text-center block"
          >
            View Pet Profile
          </Link>
        </div>
      </div>
    </div>
  );
};