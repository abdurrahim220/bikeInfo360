"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/features/AllCards/card"

export default function BikeDetailsOverview() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100"
  ]

  const specifications = {
    engine: [
      { label: "Engine Type", value: "4-Stroke, DOHC, 4-Valve" },
      { label: "Displacement", value: "149.16 CC" },
      { label: "Compression ratio", value: "11.3:1" },
      { label: "Max net power", value: "17.1 PS (16.87 BHP) @ 9000 RPM" },
      { label: "Max net torque", value: "14.4 Nm @ 7000 RPM" },
    ],
    dimensions: [
      { label: "Length", value: "1983mm" },
      { label: "Width", value: "694mm" },
      { label: "Height", value: "1077mm" },
      { label: "Ground clearance", value: "160mm" },
      { label: "Kerb weight", value: "137 kg" },
    ],
    chassis: [
      { label: "Frame type", value: "Diamond (Truss) Frame" },
      { label: "Front Suspension", value: "Inverted Telescopic" },
      { label: "Rear Suspension", value: "Swing arm with Monoshock (Pro-Link)" },
    ]
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={images[selectedImage]}
              alt="Honda CBR 150R"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=50&width=100"
              alt="Honda Logo"
              width={100}
              height={50}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold">HONDA CBR 150R DOMINOR BLACK ABS INDONESIA</h1>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">BDT. 673,000</p>
              <p className="text-sm text-muted-foreground">
                Brand: Honda | <a href="#" className="text-primary">More Bike From Honda</a>
              </p>
              <p className="text-sm text-muted-foreground">Product Code: CBR150IN</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Available in colors</h3>
            <div className="flex gap-2">
              <button className="w-16 h-16 rounded border p-1">
                <div className="w-full h-full bg-black rounded" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">ADD TO CART</Button>
            <Button className="flex-1">BUY NOW</Button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <Card>
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">DESCRIPTION</TabsTrigger>
            <TabsTrigger value="specifications">SPECIFICATIONS</TabsTrigger>
          </TabsList>
          <CardContent className="mt-6">
            <TabsContent value="description">
              <h2 className="text-xl font-bold mb-4">HONDA CBR 150R DOMINOR BLACK ABS INDONESIA SUMMARY</h2>
              <p className="text-muted-foreground">
                A powerful sports motorcycle featuring advanced technology and superior performance...
              </p>
            </TabsContent>
            <TabsContent value="specifications">
              <div className="space-y-6">
                {/* Engine Specifications */}
                <div>
                  <h3 className="text-lg font-bold bg-primary/10 p-3 rounded-lg mb-4">ENGINE</h3>
                  <div className="grid gap-2">
                    {specifications.engine.map((spec, index) => (
                      <div key={index} className="grid grid-cols-2 p-2 odd:bg-muted/50">
                        <span className="font-medium">{spec.label}</span>
                        <span>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body Dimensions */}
                <div>
                  <h3 className="text-lg font-bold bg-primary/10 p-3 rounded-lg mb-4">Body Dimensions</h3>
                  <div className="grid gap-2">
                    {specifications.dimensions.map((spec, index) => (
                      <div key={index} className="grid grid-cols-2 p-2 odd:bg-muted/50">
                        <span className="font-medium">{spec.label}</span>
                        <span>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chassis & Suspension */}
                <div>
                  <h3 className="text-lg font-bold bg-primary/10 p-3 rounded-lg mb-4">Chassis & Suspension</h3>
                  <div className="grid gap-2">
                    {specifications.chassis.map((spec, index) => (
                      <div key={index} className="grid grid-cols-2 p-2 odd:bg-muted/50">
                        <span className="font-medium">{spec.label}</span>
                        <span>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  )
}

