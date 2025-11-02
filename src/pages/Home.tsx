import { Link } from "react-router-dom";
import { Heart, Users, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                A Cloud Pet Hostel & Adoption Platform You Can Trust
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find a loving home for your pet, or adopt a new companion today. 
                Connect with verified caregivers in a safe, community-driven platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/adoption" className="hero-button text-center">
                  Adopt a Pet
                  <Heart className="ml-2 h-5 w-5 inline" />
                </Link>
                <Link to="/adoption?tab=give" className="secondary-button text-center">
                  Give a Pet for Adoption
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="Happy pets playing together" 
                className="rounded-2xl shadow-card w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We believe every pet deserves love and care. Furlink provides an affordable, 
            ethical, and community-driven platform that connects pets with loving families 
            while supporting caregivers who provide temporary or permanent homes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Verified Caregivers</h3>
              <p className="text-muted-foreground">
                All our caregivers are verified and trusted community members.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Ethical Care</h3>
              <p className="text-muted-foreground">
                We prioritize the wellbeing and happiness of every pet in our platform.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Built by pet lovers, for pet lovers. Join our growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Furlink Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Follow these four easy steps to find your perfect pet companion.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free account and complete your profile.",
                icon: Users
              },
              {
                step: "2", 
                title: "Browse or Post",
                description: "Search for pets to adopt or post your pet for adoption.",
                icon: Heart
              },
              {
                step: "3",
                title: "Connect",
                description: "Contact caregivers and arrange meetings with potential pets.",
                icon: Star
              },
              {
                step: "4",
                title: "Adopt",
                description: "Complete the adoption process and welcome your new family member.",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-card">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Happy Families
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read stories from families who found their perfect companions through Furlink.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                story: "Furlink helped me find Max, the perfect golden retriever for our family. The process was smooth and the caregivers were amazing!",
                pet: "Max the Golden Retriever",
                rating: 5
              },
              {
                name: "Mike Chen", 
                story: "When I had to relocate, Furlink helped me find a loving temporary home for Luna. She's thriving and I get regular updates!",
                pet: "Luna the Persian Cat",
                rating: 5
              },
              {
                name: "Emma Davis",
                story: "The platform made it so easy to connect with local pet families. We adopted Buddy and couldn't be happier!",
                pet: "Buddy the Border Collie",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.story}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Adopted {testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Furlink Today – Because Pets Deserve Care
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to find the perfect pet companion or help a pet find their forever home.
          </p>
          <Link to="/adoption" className="bg-white text-primary hover:bg-white/90 shadow-soft hover:shadow-hover transition-all duration-300 font-semibold px-8 py-4 rounded-xl text-lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;