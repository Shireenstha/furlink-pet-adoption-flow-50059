import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, MapPin, Calendar, Shield, Heart, MessageCircle, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Import pet images
import goldenRetrieverImg from "@/assets/pets/golden-retriever.jpg";
import orangeTabbyImg from "@/assets/pets/orange-tabby.jpg";
import whiteRabbitImg from "@/assets/pets/white-rabbit.jpg";
import borderCollieImg from "@/assets/pets/border-collie.jpg";
import persianCatImg from "@/assets/pets/persian-cat.jpg";

// Sample pet data (in a real app, this would come from an API)
const petData: { [key: string]: any } = {
  "1": {
    id: "1",
    name: "Max",
    age: "3 years",
    breed: "Golden Retriever",
    type: "Dog",
    location: "San Francisco, CA",
    available: true,
    description: "Max is a friendly and energetic golden retriever who loves playing fetch and swimming. He's been with our family for 3 years but we're relocating internationally and can't take him with us. Max is great with children of all ages and gets along well with other dogs. He's fully house-trained, knows basic commands (sit, stay, come, down), and loves going on hikes and beach walks.",
    images: [goldenRetrieverImg],
    caregiver: {
      name: "Sarah Johnson",
      verified: true,
      rating: 4.9,
      reviewCount: 15,
      memberSince: "2022",
      bio: "Loving pet owner and occasional foster parent. I believe every pet deserves a caring home."
    },
    healthInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      healthIssues: "None known"
    },
    temperament: ["Friendly", "Energetic", "Good with kids", "Social"],
    adoptionType: "Permanent",
    adoptionFee: "$200",
    reasonForAdoption: "International relocation - cannot take pets",
    specialRequirements: "Active family preferred, access to yard or regular exercise"
  },
  "2": {
    id: "2",
    name: "Luna",
    age: "2 years",
    breed: "Persian",
    type: "Cat",
    location: "Los Angeles, CA",
    available: true,
    description: "Luna is a gentle and affectionate Persian cat who loves quiet environments and gentle cuddles. She's perfect for apartment living and enjoys lounging by windows watching the world go by. Luna is very well-behaved and has never had any behavioral issues.",
    images: [persianCatImg],
    caregiver: {
      name: "Mike Chen",
      verified: true,
      rating: 4.8,
      reviewCount: 12,
      memberSince: "2021",
      bio: "Cat enthusiast and volunteer at local animal shelters."
    },
    healthInfo: {
      vaccinated: true,
      spayedNeutered: true,
      microchipped: true,
      healthIssues: "Regular grooming required"
    },
    temperament: ["Gentle", "Quiet", "Affectionate", "Independent"],
    adoptionType: "Temporary",
    adoptionFee: "$150",
    reasonForAdoption: "Temporary work assignment abroad",
    specialRequirements: "Indoor only, regular grooming needed"
  }
};

const PetProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const pet = petData[id || ""];
  
  if (!pet) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Pet Not Found</h1>
          <p className="text-muted-foreground mb-6">The pet you're looking for doesn't exist.</p>
          <Link to="/adoption" className="hero-button">
            Back to Adoption
          </Link>
        </div>
      </div>
    );
  }
  
  const handleContactCaregiver = () => {
    navigate(`/pet/${id}/contact`);
  };
  
  const handleRequestAdoption = () => {
    navigate(`/pet/${id}/request-adopt`);
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Adoption
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pet Images */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={pet.images[currentImageIndex]}
                    alt={`${pet.name} - ${pet.breed}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    {pet.available ? (
                      <Badge className="bg-secondary text-secondary-foreground">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        Adopted
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${
                      pet.adoptionType === "Permanent" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}>
                      {pet.adoptionType}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Pet Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl">{pet.name}</CardTitle>
                    <p className="text-xl text-muted-foreground mt-1">
                      {pet.breed} • {pet.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{pet.adoptionFee}</p>
                    <p className="text-sm text-muted-foreground">Adoption Fee</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {pet.age}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {pet.location}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">About {pet.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pet.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Temperament</h3>
                  <div className="flex flex-wrap gap-2">
                    {pet.temperament.map((trait: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Reason for Adoption</h3>
                  <p className="text-muted-foreground">{pet.reasonForAdoption}</p>
                </div>
                
                {pet.specialRequirements && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Special Requirements</h3>
                    <p className="text-muted-foreground">{pet.specialRequirements}</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Health Information */}
            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    {pet.healthInfo.vaccinated ? (
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">Vaccinated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {pet.healthInfo.spayedNeutered ? (
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">Spayed/Neutered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {pet.healthInfo.microchipped ? (
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">Microchipped</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Health Issues:</strong> {pet.healthInfo.healthIssues}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            {pet.available && (
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Button 
                    onClick={handleRequestAdoption}
                    className="w-full hero-button"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Request to Adopt
                  </Button>
                  <Button 
                    onClick={handleContactCaregiver}
                    variant="outline" 
                    className="w-full"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Caregiver
                  </Button>
                </CardContent>
              </Card>
            )}
            
            {/* Caregiver Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Caregiver
                  {pet.caregiver.verified && (
                    <Shield className="h-5 w-5 text-secondary" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">{pet.caregiver.name}</h3>
                  {pet.caregiver.verified && (
                    <p className="text-sm text-secondary">✓ Verified Caregiver</p>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(pet.caregiver.rating) 
                            ? "text-primary fill-current" 
                            : "text-muted-foreground"
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {pet.caregiver.rating} ({pet.caregiver.reviewCount} reviews)
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Member since {pet.caregiver.memberSince}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {pet.caregiver.bio}
                </p>
              </CardContent>
            </Card>
            
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{pet.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Breed:</span>
                  <span className="font-medium">{pet.breed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age:</span>
                  <span className="font-medium">{pet.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">{pet.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Adoption Type:</span>
                  <span className="font-medium">{pet.adoptionType}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;