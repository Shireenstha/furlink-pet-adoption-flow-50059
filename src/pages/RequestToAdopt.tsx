import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Heart, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Import pet images
import goldenRetrieverImg from "@/assets/pets/golden-retriever.jpg";
import persianCatImg from "@/assets/pets/persian-cat.jpg";

// Sample pet data (same as PetProfile)
const petData: { [key: string]: any } = {
  "1": {
    id: "1",
    name: "Max",
    age: "3 years",
    breed: "Golden Retriever",
    type: "Dog",
    location: "San Francisco, CA",
    adoptionFee: "$200",
    images: [goldenRetrieverImg],
  },
  "2": {
    id: "2",
    name: "Luna",
    age: "2 years",
    breed: "Persian",
    type: "Cat",
    location: "Los Angeles, CA",
    adoptionFee: "$150",
    images: [persianCatImg],
  }
};

const RequestToAdopt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = petData[id || ""];
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    reason: ""
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
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Navigate to success page with adoption type
    navigate(`/success?type=adoption&petId=${id}&petName=${encodeURIComponent(pet.name)}&caregiverName=${encodeURIComponent("the caregiver")}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(`/pet/${id}`)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Pet
        </button>

        <h1 className="text-3xl font-bold text-foreground mb-8">Request to Adopt</h1>

        {/* Pet Summary Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex gap-6 items-start">
              <img
                src={pet.images[0]}
                alt={pet.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">{pet.name}</h2>
                <p className="text-lg text-muted-foreground mb-3">
                  {pet.breed} • {pet.type}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {pet.age}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {pet.location}
                  </div>
                </div>
                <p className="text-xl font-bold text-primary">{pet.adoptionFee}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adoption Request Form */}
        <Card>
          <CardHeader>
            <CardTitle>Adoption Request Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
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
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Street address, City, State, ZIP"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="reason">Why do you want to adopt this pet? *</Label>
                <Textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about yourself, your living situation, and why you'd be a great match for this pet..."
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I agree to the adoption terms and conditions, and understand that the caregiver will review my application before approval.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full hero-button"
                disabled={!agreedToTerms}
              >
                <Heart className="mr-2 h-4 w-4" />
                Submit Adoption Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestToAdopt;
