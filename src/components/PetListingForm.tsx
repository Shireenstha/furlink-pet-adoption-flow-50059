import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, X, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PetListingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    location: "",
    description: "",
    adoptionType: "",
    photos: [] as File[]
  });
  
  const [dragActive, setDragActive] = useState(false);
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith("image/")
    );
    
    if (files.length > 0) {
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...files].slice(0, 5) // Max 5 photos
      }));
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...files].slice(0, 5)
      }));
    }
  };
  
  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.species || !formData.age || !formData.description || formData.photos.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload at least one photo.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    console.log("Pet listing submitted:", formData);
    
    toast({
      title: "Pet Listed Successfully!",
      description: "Your pet has been added to our adoption listings. You'll receive updates on potential adopters.",
    });
    
    // Reset form
    setFormData({
      name: "",
      species: "",
      breed: "",
      age: "",
      gender: "",
      location: "",
      description: "",
      adoptionType: "",
      photos: []
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Pet Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter pet's name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="species">Species *</Label>
          <Select value={formData.species} onValueChange={(value) => handleInputChange("species", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="rabbit">Rabbit</SelectItem>
              <SelectItem value="bird">Bird</SelectItem>
              <SelectItem value="hamster">Hamster</SelectItem>
              <SelectItem value="guinea-pig">Guinea Pig</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="breed">Breed (Optional)</Label>
          <Input
            id="breed"
            value={formData.breed}
            onChange={(e) => handleInputChange("breed", e.target.value)}
            placeholder="Enter breed if known"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="age">Age *</Label>
          <Input
            id="age"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            placeholder="e.g., 2 years, 6 months"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label>Gender</Label>
          <RadioGroup 
            value={formData.gender} 
            onValueChange={(value) => handleInputChange("gender", value)}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="City, State"
            required
          />
        </div>
      </div>
      
      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Tell us about your pet's temperament, health, vaccination status, and reason for adoption..."
          rows={4}
          required
        />
      </div>
      
      {/* Adoption Type */}
      <div className="space-y-2">
        <Label>Duration of Adoption *</Label>
        <RadioGroup 
          value={formData.adoptionType} 
          onValueChange={(value) => handleInputChange("adoptionType", value)}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="permanent" id="permanent" />
            <Label htmlFor="permanent" className="flex-1">
              <div className="font-medium">Permanent Adoption</div>
              <div className="text-sm text-muted-foreground">Looking for a forever home for my pet</div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="temporary" id="temporary" />
            <Label htmlFor="temporary" className="flex-1">
              <div className="font-medium">Temporary Fostering</div>
              <div className="text-sm text-muted-foreground">Need temporary care (vacation, relocation, etc.)</div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Photo Upload */}
      <div className="space-y-2">
        <Label>Photos * (At least 1 required, max 5)</Label>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">
            Drag and drop photos here, or{" "}
            <label className="text-primary cursor-pointer hover:underline">
              click to browse
              <input
                type="file" 
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleFileInput}
              />
            </label>
          </p>
          <p className="text-sm text-muted-foreground">
            Supported formats: JPG, PNG, WEBP (max 5MB each)
          </p>
        </div>
        
        {/* Photo Preview */}
        {formData.photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {formData.photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Pet photo ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Submit Button */}
      <div className="pt-6">
        <Button type="submit" className="w-full hero-button">
          <Check className="mr-2 h-5 w-5" />
          List Pet for Adoption
        </Button>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Your listing will be reviewed and published within 24 hours.
        </p>
      </div>
    </form>
  );
};