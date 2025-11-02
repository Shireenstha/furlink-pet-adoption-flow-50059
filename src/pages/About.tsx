import { Heart, Users, Shield, Star, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-warm py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Furlink
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're passionate about creating meaningful connections between pets and families. 
            Our platform combines technology with compassion to make pet adoption simple, 
            safe, and rewarding for everyone involved.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Connecting Hearts
                    </h3>
                    <p className="text-muted-foreground">
                      We believe every pet deserves a loving home and every family deserves 
                      the joy of pet companionship. Our platform bridges that gap.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Safe & Secure
                    </h3>
                    <p className="text-muted-foreground">
                      All caregivers are verified, and we provide tools to ensure safe, 
                      transparent interactions throughout the adoption process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Community First
                    </h3>
                    <p className="text-muted-foreground">
                      Built by pet lovers for pet lovers, we foster a supportive community 
                      that celebrates the human-animal bond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Successful Adoptions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">1,200+</div>
                  <div className="text-muted-foreground">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">300+</div>
                  <div className="text-muted-foreground">Verified Caregivers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Cities Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from platform design to community building.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-hover transition-all duration-300">
              <Award className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in pet care, platform security, and user experience.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-hover transition-all duration-300">
              <Globe className="h-12 w-12 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                Pet adoption should be accessible to everyone, regardless of location or budget.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card text-center hover:shadow-hover transition-all duration-300">
              <Star className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                Open communication and honest interactions build trust in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Furlink was born from a simple observation: finding the right pet should be as easy 
                as finding the right home. Our founders, all passionate pet owners, experienced 
                firsthand the challenges of traditional adoption processes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We realized that technology could solve many of these problems – creating better 
                matches, ensuring safer transactions, and building stronger communities around pet care. 
                What started as a weekend project became a mission to revolutionize how pets and 
                families connect.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Furlink serves thousands of families across the country, and we're just 
                getting started. Every successful adoption motivates us to keep improving, innovating, 
                and expanding our reach to help even more pets find their forever homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt or help a pet find a new home, 
            we're here to make the process smooth and rewarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/adoption" className="bg-white text-primary hover:bg-white/90 shadow-soft hover:shadow-hover transition-all duration-300 font-semibold px-8 py-3 rounded-xl">
              Start Adopting
            </a>
            <a href="/adoption?tab=give" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 font-semibold px-8 py-3 rounded-xl">
              List Your Pet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;