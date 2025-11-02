import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, CheckCircle2, Sparkles, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SubmissionSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  
  const type = searchParams.get("type") || "adoption";
  const petId = searchParams.get("petId");
  const petName = searchParams.get("petName") || "this pet";
  const caregiverName = searchParams.get("caregiverName") || "the caregiver";

  useEffect(() => {
    // Generate confetti pieces
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3
    }));
    setConfettiPieces(pieces);
  }, []);

  const isAdoption = type === "adoption";
  const title = isAdoption ? "Adoption Request Sent!" : "Message Sent Successfully!";
  const message = isAdoption 
    ? `Your adoption request for ${petName} has been sent to ${caregiverName}. They'll carefully review your application and respond within 24-48 hours.`
    : `Your message has been sent to ${caregiverName}. They'll get back to you soon via email.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className="absolute top-0 w-2 h-2 bg-primary rounded-full animate-confetti-fall opacity-70"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }}
          />
        ))}
        
        {/* Floating hearts */}
        <Heart className="absolute top-20 left-10 h-8 w-8 text-primary/20 animate-float" />
        <Heart className="absolute bottom-32 right-16 h-12 w-12 text-secondary/20 animate-float" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute top-40 right-20 h-10 w-10 text-primary/20 animate-float" style={{ animationDelay: "0.5s" }} />
        <Sparkles className="absolute bottom-40 left-20 h-8 w-8 text-secondary/20 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <Card className="max-w-2xl w-full relative z-10 shadow-2xl border-2 animate-scale-in">
        <CardContent className="p-8 sm:p-12">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center relative">
            <div className="relative">
              {isAdoption ? (
                <div className="relative">
                  <Heart className="h-24 w-24 sm:h-32 sm:w-32 text-primary fill-current animate-scale-in" />
                  <div className="absolute inset-0 animate-ping">
                    <Heart className="h-24 w-24 sm:h-32 sm:w-32 text-primary/30 fill-current" />
                  </div>
                  <CheckCircle2 className="absolute -bottom-2 -right-2 h-12 w-12 text-secondary fill-current animate-bounce-in" style={{ animationDelay: "0.3s" }} />
                </div>
              ) : (
                <div className="relative">
                  <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center animate-scale-in">
                    <CheckCircle2 className="h-16 w-16 sm:h-20 sm:w-20 text-secondary-foreground" />
                  </div>
                  <div className="absolute inset-0 animate-ping">
                    <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-secondary/30" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in">
            {title}
          </h1>

          {/* Message */}
          <p className="text-center text-muted-foreground text-lg mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.1s" }}>
            {message}
          </p>

          {/* What Happens Next */}
          <Card className="bg-primary/5 border-primary/20 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                What Happens Next?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {isAdoption ? (
                  <>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <span>The caregiver will review your application and background information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">2</span>
                      </div>
                      <span>They'll reach out to you via email to schedule a meet-and-greet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">3</span>
                      </div>
                      <span>If it's a good match, you'll complete the adoption process together!</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-secondary">1</span>
                      </div>
                      <span>{caregiverName} will receive your message notification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-secondary">2</span>
                      </div>
                      <span>They'll respond to your email address with the information you requested</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-secondary">3</span>
                      </div>
                      <span>Check your inbox (and spam folder) within 24 hours</span>
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {petId && (
              <Button
                onClick={() => navigate(`/pet/${petId}`)}
                variant="default"
                size="lg"
                className="flex-1 group"
              >
                <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Back to {petName}
              </Button>
            )}
            <Button
              onClick={() => navigate("/adoption")}
              variant="outline"
              size="lg"
              className="flex-1 group"
            >
              Browse More Pets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Home Link */}
          <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Home className="h-4 w-4" />
              Return to Home
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmissionSuccess;
