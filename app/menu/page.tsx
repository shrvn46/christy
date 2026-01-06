"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menuCategories = {
  Thali: [
    { id: "1", name: "Veg Thali", price: "₹70", description: "Veg + 3 Chapati/2 Roti + Jeera Rice" },
    { id: "2", name: "Paneer Thali", price: "₹80", description: "Paneer + 3 Chapati/2 Roti + Jeera Rice" },
    { id: "3", name: "Egg Thali", price: "₹100", description: "Egg + 3 Chapati/2 Roti + Jeera Rice" },
    { id: "4", name: "Punjabi Thali", price: "₹120", description: "Punjabi + 3 Chapati/2 Roti + Jeera Rice" },
    { id: "5", name: "Dal Thali", price: "₹70", description: "Dal + 3 Chapati/2 Roti + Jeera Rice" },
    { id: "6", name: "Chicken Thali", price: "₹120", description: "Chicken + 3 Chapati/2 Roti + Jeera Rice" },
  ],
  VegMainCourse: [
    { id: "7", name: "Paneer Handi", price: "₹250", description: "" },
    { id: "8", name: "Malai Kofta", price: "₹280", description: "" },
    { id: "9", name: "Paneer Tikka Masala", price: "₹240", description: "" },
    { id: "10", name: "Veg Kolhapuri", price: "₹290", description: "" },
    { id: "11", name: "Dal Fry", price: "₹200", description: "" },
    { id: "12", name: "Kaju Curry", price: "₹180", description: "" },
  ],
  NonVegMainCourse: [
    { id: "13", name: "Chicken Handi", price: "₹120", description: "" },
    { id: "14", name: "Egg Masala", price: "₹40", description: "" },
    { id: "15", name: "Chicken Masala", price: "₹80", description: "" },
    { id: "16", name: "Chicken Lollipop Masala", price: "₹100", description: "" },
    { id: "17", name: "Chicken Tawa Masala", price: "₹90", description: "" },
    { id: "18", name: "Egg Bhurji", price: "₹60", description: "" },
  ],
  Biryani: [
    { id: "19", name: "Chicken Dum Biryani", price: "₹120", description: "" },
    { id: "20", name: "Paneer Biryani", price: "₹100", description: "" },
    { id: "21", name: "Veg Biryani", price: "₹50", description: "" },
    { id: "22", name: "Veg Hyderabadi Biryani", price: "₹140", description: "" },
    { id: "23", name: "Egg Biryani", price: "₹150", description: "" },
    { id: "24", name: "Chicken Biryani", price: "₹100", description: "" },
  ],
}

type CategoryKey = keyof typeof menuCategories

export default function Menu() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState<CategoryKey>("Thali")

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-primary">Christy</Link>
          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/menu" className="font-semibold">Menu</Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">Our Menu</h1>
        <p className="text-muted-foreground mt-2">Authentic Indian Cuisine</p>
      </section>

      {/* TABS */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as CategoryKey)}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-10">
              <TabsTrigger value="Thali">Thali</TabsTrigger>
              <TabsTrigger value="VegMainCourse">Veg Main Course</TabsTrigger>
              <TabsTrigger value="NonVegMainCourse">Non-Veg Main Course</TabsTrigger>
              <TabsTrigger value="Biryani">Biryani</TabsTrigger>
            </TabsList>

            {(Object.entries(menuCategories) as [CategoryKey, any[]][]).map(
              ([category, items]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <div key={item.id} className="border rounded-lg p-5">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold">{item.name}</h3>
                          <button onClick={() => toggleFavorite(item.id)}>
                            <Heart
                              size={18}
                              className={
                                favorites[item.id]
                                  ? "fill-red-500 text-red-500"
                                  : "text-muted-foreground"
                              }
                            />
                          </button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-primary">{item.price}</span>
                          <Button size="sm">Add</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
