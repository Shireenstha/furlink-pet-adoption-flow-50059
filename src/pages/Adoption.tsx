import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PetCard } from "@/components/PetCard";
import { PetListingForm } from "@/components/PetListingForm";
import { Heart, Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample pet data with imported images
import goldenRetrieverImg from "@/assets/pets/golden-retriever.jpg";
import orangeTabbyImg from "@/assets/pets/orange-tabby.jpg";
import whiteRabbitImg from "@/assets/pets/white-rabbit.jpg";
import borderCollieImg from "@/assets/pets/border-collie.jpg";
import persianCatImg from "@/assets/pets/persian-cat.jpg";

const samplePets = [
  {
    id: "1",
    name: "Max",
    age: "3 years",
    breed: "Golden Retriever",
    type: "Dog",
    location: "San Francisco, CA",
    available: true,
    description: "Friendly and energetic golden retriever looking for an active family. Great with kids and other pets.",
    image: goldenRetrieverImg,
    caregiver: "Sarah Johnson",
    verified: true,
    adoptionType: "Permanent" as const
  },
  {
    id: "2", 
    name: "Luna",
    age: "2 years",
    breed: "Persian",
    type: "Cat",
    location: "Los Angeles, CA",
    available: true,
    description: "Gentle and affectionate Persian cat. Loves cuddles and quiet environments. Perfect for apartment living.",
    image: persianCatImg,
    caregiver: "Mike Chen",
    verified: true,
    adoptionType: "Temporary" as const
  },
  {
    id: "3",
    name: "Snowball",
    age: "1 year",
    breed: "Holland Lop",
    type: "Rabbit",
    location: "Seattle, WA",
    available: true,
    description: "Adorable white rabbit who loves fresh vegetables and gentle handling. Great first pet for families.",
    image: whiteRabbitImg,
    caregiver: "Emma Davis",
    verified: true,
    adoptionType: "Permanent" as const
  },
  {
    id: "4",
    name: "Buddy",
    age: "6 months",
    breed: "Border Collie",
    type: "Dog", 
    location: "Portland, OR",
    available: true,
    description: "Smart and playful Border Collie puppy. Needs an active family who can provide mental stimulation.",
    image: borderCollieImg,
    caregiver: "John Smith",
    verified: true,
    adoptionType: "Permanent" as const
  },
  {
    id: "5",
    name: "Milo",
    age: "4 years",
    breed: "Orange Tabby",
    type: "Cat",
    location: "Denver, CO",
    available: false,
    description: "Sweet orange tabby with beautiful green eyes. Recently adopted but profile kept for reference.",
    image: orangeTabbyImg,
    caregiver: "Lisa Wilson",
    verified: true,
    adoptionType: "Permanent" as const
  }
];

const Adoption = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("adopt");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPets, setFilteredPets] = useState(samplePets);
  
  // Check URL parameters for initial tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get("tab");
    if (tab === "give") {
      setActiveTab("give");
    }
  }, [location]);
  
  // Filter pets based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPets(samplePets);
    } else {
      const filtered = samplePets.filter(pet => 
        pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPets(filtered);
    }
  }, [searchQuery]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL without page reload
    const newUrl = value === "give" ? "/adoption?tab=give" : "/adoption";
    navigate(newUrl, { replace: true });
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pet Adoption Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect companion or help a pet find their forever home. 
            Every pet deserves love and care.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-muted">
              <TabsTrigger value="adopt" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Adopt a Pet
              </TabsTrigger>
              <TabsTrigger value="give" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Give a Pet for Adoption
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="adopt" className="space-y-8">
              {/* Search and Filter Bar */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, breed, type, or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
              
              {/* Pet Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPets.map((pet) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
              
              {filteredPets.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No pets found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or check back later for new arrivals.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="give" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <div className="bg-card p-8 rounded-xl shadow-card">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      List Your Pet for Adoption
                    </h2>
                    <p className="text-muted-foreground">
                      Help your pet find a loving new home. Fill out the details below to create their profile.
                    </p>
                  </div>
                  <PetListingForm />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Adoption;