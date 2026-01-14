import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Check, Upload, X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PROFILE_COLORS = [
  { name: "Forest", value: "hsl(152, 45%, 25%)" },
  { name: "Teal", value: "hsl(168, 65%, 45%)" },
  { name: "Earth", value: "hsl(32, 40%, 45%)" },
  { name: "Bark", value: "hsl(25, 30%, 35%)" },
  { name: "Sage", value: "hsl(140, 30%, 40%)" },
  { name: "Moss", value: "hsl(120, 25%, 35%)" },
];

const CreateProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Step 1: Personal Data
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(PROFILE_COLORS[0].value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  // Step 2: Skills to Trade
  const [skillsToTrade, setSkillsToTrade] = useState<string[]>([]);
  const [newSkillToTrade, setNewSkillToTrade] = useState("");

  // Step 3: Skills to Learn
  const [skillsToLearn, setSkillsToLearn] = useState<string[]>([]);
  const [newSkillToLearn, setNewSkillToLearn] = useState("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSkillToTrade = () => {
    if (newSkillToTrade.trim() && !skillsToTrade.includes(newSkillToTrade.trim())) {
      setSkillsToTrade([...skillsToTrade, newSkillToTrade.trim()]);
      setNewSkillToTrade("");
    }
  };

  const removeSkillToTrade = (skill: string) => {
    setSkillsToTrade(skillsToTrade.filter((s) => s !== skill));
  };

  const addSkillToLearn = () => {
    if (newSkillToLearn.trim() && !skillsToLearn.includes(newSkillToLearn.trim())) {
      setSkillsToLearn([...skillsToLearn, newSkillToLearn.trim()]);
      setNewSkillToLearn("");
    }
  };

  const removeSkillToLearn = (skill: string) => {
    setSkillsToLearn(skillsToLearn.filter((s) => s !== skill));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return firstName.trim() && lastName.trim() && email.trim() && location.trim();
      case 2:
        return skillsToTrade.length > 0;
      case 3:
        return skillsToLearn.length > 0 && agreedToPrivacy;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically save the profile data
    toast.success("Profile created successfully! Welcome to MyCorr.");
    navigate("/");
  };

  const stepVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          {/* Progress indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                      step < currentStep
                        ? "bg-primary text-primary-foreground"
                        : step === currentStep
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-24 md:w-32 h-1 mx-2 rounded-full transition-colors ${
                        step < currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Personal Info</span>
              <span>Skills to Trade</span>
              <span>Skills to Learn</span>
            </div>
          </div>

          {/* Form steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                      Tell Us About Yourself
                    </h1>
                    <p className="text-muted-foreground">
                      Let the community know who you are
                    </p>
                  </div>

                  {/* Profile Image Upload */}
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="relative w-32 h-32 rounded-full overflow-hidden border-4 transition-colors"
                      style={{ borderColor: selectedColor }}
                    >
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <Upload className="w-8 h-8 text-muted-foreground" />
                        </div>
                      )}
                      <label className="absolute inset-0 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Click to upload your photo
                    </span>
                  </div>

                  {/* Profile Color */}
                  <div className="space-y-3">
                    <Label>Choose your profile color</Label>
                    <div className="flex gap-3 justify-center">
                      {PROFILE_COLORS.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.value)}
                          className={`w-10 h-10 rounded-full transition-transform hover:scale-110 ${
                            selectedColor === color.value
                              ? "ring-2 ring-offset-2 ring-foreground scale-110"
                              : ""
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Name fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                      What Can You Offer?
                    </h1>
                    <p className="text-muted-foreground">
                      Share the skills you're willing to trade with the community
                    </p>
                  </div>

                  {/* Add skill input */}
                  <div className="flex gap-2">
                    <Input
                      value={newSkillToTrade}
                      onChange={(e) => setNewSkillToTrade(e.target.value)}
                      placeholder="e.g., Web Development, Guitar Lessons, Cooking..."
                      onKeyDown={(e) => e.key === "Enter" && addSkillToTrade()}
                    />
                    <Button onClick={addSkillToTrade} size="icon">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Skills list */}
                  <div className="min-h-[200px]">
                    {skillsToTrade.length === 0 ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <p>No skills added yet.</p>
                        <p className="text-sm">Add at least one skill to continue.</p>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {skillsToTrade.map((skill) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full"
                          >
                            <span>{skill}</span>
                            <button
                              onClick={() => removeSkillToTrade(skill)}
                              className="hover:bg-primary-foreground/20 rounded-full p-0.5"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                      What Would You Like to Learn?
                    </h1>
                    <p className="text-muted-foreground">
                      Tell us what skills you'd like to receive in exchange
                    </p>
                  </div>

                  {/* Add skill input */}
                  <div className="flex gap-2">
                    <Input
                      value={newSkillToLearn}
                      onChange={(e) => setNewSkillToLearn(e.target.value)}
                      placeholder="e.g., Photography, Language Learning, Yoga..."
                      onKeyDown={(e) => e.key === "Enter" && addSkillToLearn()}
                    />
                    <Button onClick={addSkillToLearn} size="icon">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Skills list */}
                  <div className="min-h-[150px]">
                    {skillsToLearn.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>No skills added yet.</p>
                        <p className="text-sm">Add at least one skill to continue.</p>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {skillsToLearn.map((skill) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full"
                          >
                            <span>{skill}</span>
                            <button
                              onClick={() => removeSkillToLearn(skill)}
                              className="hover:bg-accent-foreground/20 rounded-full p-0.5"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Privacy Policy */}
                  <div className="border-t border-border pt-6">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="privacy"
                        checked={agreedToPrivacy}
                        onCheckedChange={(checked) =>
                          setAgreedToPrivacy(checked as boolean)
                        }
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/privacy"
                          className="text-accent hover:underline"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="/terms"
                          className="text-accent hover:underline"
                          target="_blank"
                        >
                          Terms of Service
                        </a>
                        . I understand that my profile information will be visible to
                        other members of the MyCorr community.
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              onClick={currentStep === 1 ? () => navigate("/") : handleBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? "Cancel" : "Back"}
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                variant="hero"
                className="gap-2"
              >
                Create Profile
                <Check className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateProfile;
