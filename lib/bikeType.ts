import { BikeModels, BikeType } from "./interface";

export const bikeTypes: BikeType[] = [
    { id: 1, type: "Sports Bike" },
    { id: 2, type: "Scooter" },
    { id: 3, type: "Cruiser" },
    { id: 4, type: "Commuter" },
    { id: 5, type: "Naked Sports" },
    { id: 6, type: "Electric Bike" },
    { id: 7, type: "Cafe Racer" },
    { id: 8, type: "Off-Road" },
    { id: 9, type: "Adventure" },
    { id: 10, type: "Moped" },
    { id: 11, type: "Tourer" },
    { id: 12, type: "Mini Bike" },
  ];




  export const bikeModels: BikeModels[] = [
    {
      id: "xpulse-200-4v",
      name: "Hero XPulse 200 4V",
      image: "/placeholder.svg",
      rating: 8.6,
      specs: {
        cc: 199.6,
        kmpl: 40.00,
        category: "Off Road"
      },
      pricing: {
        exShowroom: "1.44 - 1.51 Lakh",
        emiStarts: 4733
      }
    },
    {
      id: "splendor-plus",
      name: "Hero Splendor Plus",
      image: "/placeholder.svg",
      rating: 8.4,
      specs: {
        cc: 97.2,
        kmpl: 70.00,
        category: "Commuter"
      },
      pricing: {
        exShowroom: "69,380 - 72,900",
        emiStarts: 2288
      }
    },
    {
      id: "hf-deluxe",
      name: "Hero HF Deluxe",
      image: "/placeholder.svg",
      rating: 8.4,
      specs: {
        cc: 97.2,
        kmpl: 83.00,
        category: "Commuter"
      },
      pricing: {
        exShowroom: "62,002 - 68,522",
        emiStarts: 2045
      }
    },
    {
      id: "hf-deluxe-i3s",
      name: "Hero HF Deluxe i3s",
      image: "/placeholder.svg",
      rating: 8.5,
      specs: {
        cc: 97.2,
        kmpl: 88.50,
        category: "Commuter"
      },
      pricing: {
        exShowroom: "69,152",
        emiStarts: 2280
      }
    }
  ]
  