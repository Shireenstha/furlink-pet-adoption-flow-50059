import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, Star, Shield, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Import pet images
import goldenRetrieverImg from "@/assets/pets/golden-retriever.jpg";
import persianCatImg from "@/assets/pets/persian-cat.jpg";

// Sample pet data (same as PetProfile)
const petData: { [key: string]: any } = {
  "1": {
    id: "1",
    name: "Max",
    breed: "Golden Retriever",
    type: "Dog",
    location: "San Francisco, CA",
    images: [goldenRetrieverImg],
    caregiver: {
      name: "Sarah Johnson",
      verified: true,
      rating: 4.9,
      reviewCount: 15,
      memberSince: "2022",
      bio: "Loving pet owner and occasional foster parent. I believe every pet deserves a caring home."
    }
  },
  "2": {
    id: "2",
    name: "Luna",
    breed: "Persian",
    type: "Cat",
    location: "Los Angeles, CA",
    images: [persianCatImg],
    caregiver: {
      name: "Mike Chen",
      verified: true,
      rating: 4.8,
      reviewCount: 12,
      memberSince: "2021",
      bio: "Cat enthusiast and volunteer at local animal shelters."
    }
  }
};

const ContactCaregiver = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = petData[id || ""];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  if (!pet) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Pet Not Found</h1>
          <Link to="/adoption" className="hero-button">
            Back to Adoption
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to success page with message type
    navigate(`/success?type=message&petId=${id}&petName=${encodeURIComponent(pet.name)}&caregiverName=${encodeURIComponent(pet.caregiver.name)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(`/pet/${id}`)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Pet
        </button>

        <h1 className="text-3xl font-bold text-foreground mb-8">Contact Caregiver</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Caregiver Info Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                    {pet.caregiver.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-foreground">{pet.caregiver.name}</h2>
                      {pet.caregiver.verified && (
                        <Shield className="h-5 w-5 text-secondary" />
                      )}
                    </div>
                    {pet.caregiver.verified && (
                      <p className="text-sm text-secondary mb-2">✓ Verified Caregiver</p>
                    )}
                    <div className="flex items-center gap-2 mb-2">
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
                    <p className="text-sm text-muted-foreground mb-3">
                      Member since {pet.caregiver.memberSince}
                    </p>
                    <p className="text-muted-foreground">
                      {pet.caregiver.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Ask about the pet's temperament, schedule a meet-and-greet, or share why you're interested..."
                      className="mt-1 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hero-button"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Pet Info Sidebar */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>About This Pet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={pet.images[0]}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{pet.name}</h3>
                  <p className="text-muted-foreground">{pet.breed} • {pet.type}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Location:</p>
                  <p className="font-medium">{pet.location}</p>
                </div>
                <Button
                  onClick={() => navigate(`/pet/${id}`)}
                  variant="outline"
                  className="w-full"
                >
                  View Full Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCaregiver;
