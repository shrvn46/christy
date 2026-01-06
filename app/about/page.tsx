import Link from "next/link"
import { Award, Users, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/christy.avif)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20"></div>
        </div>
        <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Our Story</h2>
            <p className="text-xl text-muted-foreground">Christy Restaurant was started with a simple vision — serve tasty food at honest prices. Over time, we’ve grown into a go-to spot for students, families, working professionals, and food lovers across Chinchwad. Our focus has always been on flavour, hygiene, and customer happiness.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Christy</h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Christy was founded with a simple mission: to bring authentic Indian cuisine to everyone. Starting as a
              small family venture, we've grown into a beloved local restaurant known for our commitment to quality,
              authenticity, and exceptional service.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Every dish at Christy is prepared with love and traditional cooking methods passed down through
              generations. We believe that great food starts with great ingredients, which is why we source the freshest
              produce and authentic spices for every meal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're craving traditional Punjabi cuisine, exciting Indo-Chinese flavours, or quick street-style
              snacks, Christy offers something for everyone. Our diverse menu celebrates the rich culinary heritage of
              India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Flame className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Authentic Recipes</h5>
                    <p className="text-muted-foreground">Traditional recipes using time-honored cooking techniques</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Premium Ingredients</h5>
                    <p className="text-muted-foreground">Sourced from the finest suppliers for superior taste</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Customer Focus</h5>
                    <p className="text-muted-foreground">Your satisfaction is our top priority</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-secondary/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years of Excellence" },
              { number: "2,400+", label: "Happy Customers" },
              { number: "50+", label: "Signature Dishes" },
              { number: "4.8★", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Experience Authentic Taste</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Visit Christy today and discover why we're a local favorite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Explore Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Christy</h4>
              <p className="text-primary-foreground/80">Authentic Indian Cuisine</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/menu" className="hover:text-primary-foreground transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Order Online</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="https://www.swiggy.com/restaurants/new-christy-hotel-ravet-ravet-306519/dineout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Swiggy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zomato.com/pune/christy-restaurant-chinchwad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Zomato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-primary-foreground/80">📞 +91 70830 79674</p>
              <p className="text-primary-foreground/80">📍 Akurdi, Pune</p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2025 Christy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
