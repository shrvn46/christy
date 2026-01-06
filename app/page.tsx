"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Leaf, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[750px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/christy.avif)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/30"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <p className="text-lg md:text-xl text-primary font-semibold mb-4 tracking-wide uppercase">Welcome to</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance text-foreground mb-6 drop-shadow-lg">
              Christy
            </h2>
            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-4 drop-shadow">
              Authentic Indian Flavours
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 drop-shadow">
              Punjabi • Indo-Chinese • Street Style
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.swiggy.com/restaurants/new-christy-hotel-ravet-ravet-306519/dineout" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-background/90 backdrop-blur hover:bg-background"
                >
                  Order on Swiggy
                </Button>
              </a>
              <a href="https://www.zomato.com/pune/christy-restaurant-chinchwad" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Order on Zomato
                </Button>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Today's Specials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Today's Specials</h3>
            <p className="text-muted-foreground">Hand-picked dishes from our kitchen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "1",
                name: "Paneer Thali",
                category: "Thali",
                price: "₹80",
                image: "/paneerth.avif",
                description: "Paneer+3 Chapati/2 Roti+Jeera Rice",
              },
              {
                id: "2",
                name: "Egg Thali",
                category: "Thali",
                price: "₹100",
                image: "/eggth.avif",
                description: "Egg+3 Chapati/2 Roti+Jeera Rice",
              },
              {
                id: "3",
                name: "Chicken Thali",
                category: "Thali",
                price: "₹120",
                image: "/chickenth.avif",
                description: "Chicken+3 Chapati/2 Roti+Jeera Rice",
              },
            ].map((dish) => (
              <div
                key={dish.id}
                className="group rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(dish.id)}
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <Heart
                      size={20}
                      className={favorites[dish.id] ? "fill-destructive text-destructive" : "text-muted-foreground"}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">{dish.category}</p>
                  <h4 className="text-xl font-bold text-foreground mb-2">{dish.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{dish.price}</span>
                    <span className="text-sm font-semibold text-primary">Order Now</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Christy */}
      <section className="py-16 md:py-24 bg-secondary/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Christy?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Fresh Ingredients",
                description: "We source the finest, locally-sourced ingredients for every dish",
              },
              {
                icon: Clock,
                title: "Authentic Spices",
                description: "Handpicked spice blends following traditional recipes",
              },
              {
                icon: Star,
                title: "Hygienic Kitchen",
                description: "Highest standards of food safety and cleanliness",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rating Preview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Loved by Our Customers</h3>

          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">4.8/5.0</p>
            <p className="text-muted-foreground mb-4">Based on 2,400+ customer reviews</p>
            <p className="text-lg text-foreground italic">
              "The most authentic and delicious Indian food in the city. Christy never disappoints!"
            </p>
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
                  <a href="/menu" className="hover:text-primary-foreground transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
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
              <p className="text-primary-foreground/80">📞 +91 7083079674</p>
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
