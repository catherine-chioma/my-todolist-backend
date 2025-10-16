import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/logo.png"
                  alt="JollofAI Logo"
                  className="h-14 md:h-16 w-auto"
                />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                🍛 AI-Powered African Cuisine
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Authentic African recipes
                  <span className="block text-primary mt-2">
                    designed for you
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transform your ingredients into delicious African meals with our
                intelligent recipe generator. Discover traditional flavors made
                simple.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => navigate("/recipe-generator")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Generate Recipe
                </Button>
                <Button
                  onClick={() => navigate("/signin")}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-medium border-2 border-gray-300 hover:border-primary hover:text-primary rounded-xl transition-all duration-300"
                >
                  Sign In
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200/60">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      10,000+
                    </div>
                    <div className="text-sm text-gray-600">
                      Recipes Generated
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">
                      African Ingredients
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">
                      Countries Served
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative w-full flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Background Card Effect */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform rotate-1"></div>

                {/* Main Image Card */}
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-4">
                    <img
                      src="/hero.png"
                      alt="JollofAI - Traditional African cuisine made simple"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JollofAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of tradition and technology in your
              kitchen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI-Powered
              </h3>
              <p className="text-gray-600">
                Advanced machine learning analyzes your ingredients and
                preferences to create perfect recipes
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authentic
              </h3>
              <p className="text-gray-600">
                Preserve traditional African cooking methods while adapting to
                modern kitchens
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Instant
              </h3>
              <p className="text-gray-600">
                Get personalized recipes in seconds, complete with nutritional
                information and cooking tips
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to your perfect African recipe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-0.5 bg-primary/30 hidden md:block transform -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Add Ingredients
              </h3>
              <p className="text-gray-600">
                Tell us what ingredients you have available in your kitchen
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-0.5 bg-primary/30 hidden md:block transform -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Magic
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your ingredients and suggests authentic recipes
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cook & Enjoy
              </h3>
              <p className="text-gray-600">
                Follow the step-by-step instructions and enjoy your delicious
                meal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate food enthusiasts and technology experts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                name: "Lucy Chioma",
                role: "Managing Director",
                image: "/lucy-chioma.jpg",
              },
              {
                name: "Jiddah Abidemi",
                role: "Project Manager",
                image: "/jiddah-abidemi.jpg",
              },
              {
                name: "Khalid Yekini",
                role: "AI Engineer",
                image: "/khalid-yekini.jpg",
              },
              {
                name: "Martins Babatunde",
                role: "Lead Engineer",
                image: "/martins-babatunde.jpg",
              },
              {
                name: "Oluchi Joy",
                role: "Assistant PM",
                image: "/oluchi-joy.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              className="px-8 py-3"
            >
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Amazing Recipes?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who are discovering new flavors with
            JollofAI
          </p>
          <Button
            onClick={() => navigate("/recipe-generator")}
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
}
