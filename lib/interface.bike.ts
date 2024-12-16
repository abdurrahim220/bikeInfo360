export interface IBike {
    brand: {
      name: "Yamaha" | "Honda" | "Suzuki" | "KTM" | "Hero" | "Bajaj" | "TVS";
      country: "Japan" | "India" | "Austria" | "China";
    };
    model: string;
    year: number;
    variants: Array<{
      region:
        | "Global"
        | "Asia"
        | "Europe"
        | "North America"
        | "South America"
        | "Australia"
        | "Africa";
      specifications: {
        emissionStandard?: "BS7" | "BS6" | "BS4" | "Euro5" | "Euro4";
        fuelSystem?: "Fuel Injection" | "Carburetor";
        ABS: "Single Channel" | "Dual Channel" | "None";
      };
    }>;
    colors: string[];
    engine: {
      capacity: string;
      type:
        | "Single Cylinder"
        | "Twin Cylinder"
        | "Inline-3"
        | "Inline-4"
        | "V-Twin"
        | "Boxer";
      fuelType: "Octane" | "Petrol" | "Diesel" | "Electric" | "Hybrid";
      maxPower: string;
      torque: string;
      cooling: "Air-Cooled" | "Liquid-Cooled" | "Oil-Cooled";
      fuelSystem: "Fuel Injection" | "Carburetor";
      compressionRatio: string;
      emissionStandard: "BS7" | "BS6" | "BS4" | "Euro5" | "Euro4";
      ignition:
        | "Electronic"
        | "Digital"
        | "TCI"
        | "DC-CDI"
        | "AC-CDI"
        | "ECU-Controlled";
      starter: "Electric" | "Kick" | "Electric & Kick";
      transmission: {
        type: "Manual" | "Automatic" | "Semi-Automatic" | "CVT";
        clutch:
          | "Wet Multi-Plate"
          | "Dry Multi-Plate"
          | "Hydraulic"
          | "None";
      };
    };
    dimensions: {
      overallLength: string;
      overallWidth: string;
      overallHeight: string;
      wheelbase: string;
      groundClearance: string;
      seatHeight: string;
      dryWeight: string;
      fuelCapacity: string;
    };
    chassis: {
      frameType:
        | "Double Cradle"
        | "Diamond"
        | "Backbone"
        | "Perimeter"
        | "Trellis"
        | "Delta Box"
        | "Double Cradle SynchroSTIFF";
      suspension: {
        front:
          | "Telescopic"
          | "USD Fork"
          | "Inverted Fork"
          | "Hydraulic Telescopic"
          | "Telescopic Fork"
          | "Telescopic Fork with Hydraulic Dampers";
        rear:
          | "Monoshock"
          | "Twin Shock"
          | "Dual Shock"
          | "Swingarm"
          | "Single Shock"
          | "Monoshock with Gas-Assisted Dampers";
      };
      brakes: {
        front?: {
          type?: "Disc" | "Drum" | "CBS" | "Disc/CBS" | "Drum/CBS" | "Drum/Disc";
          ABS?: "Single Channel" | "Dual Channel" | "None";
        };
        rear?: {
          type?: "Disc" | "Drum" | "CBS" | "Disc/CBS" | "Drum/CBS" | "Drum/Disc";
          ABS?: "Single Channel" | "Dual Channel" | "None";
        };
      };
      wheels: {
        front: {
          type: "Alloy" | "Spoke" | "Steel" | "Carbon Fiber";
          tire:
            | "Radial"
            | "Bias Ply"
            | "Tubeless"
            | "Tube-Type"
            | "Tubeless 90/90-17"
            | "Tubeless 120/80-17";
        };
        rear: {
          type: "Alloy" | "Spoke" | "Steel" | "Carbon Fiber";
          tire:
            | "Radial"
            | "Bias Ply"
            | "Tubeless"
            | "Tube-Type"
            | "Tubeless 90/90-17"
            | "Tubeless 120/80-17";
        };
      };
    };
    features: {
      display: string;
      connectivity: string;
      ridingModes: string[];
      electronics: {
        tractionControl: "Yes" | "No";
        quickShifter: "Yes" | "No";
        rideByWire: "Yes" | "No";
        slipperClutch: "Yes" | "No";
      };
      lighting: {
        headlight:
          | "LED"
          | "Halogen"
          | "Xenon"
          | "Halogen Projector"
          | "LED Projector"
          | "LED with DRL";
        taillight:
          | "LED"
          | "Halogen"
          | "Xenon"
          | "Halogen Projector"
          | "LED Projector"
          | "LED with DRL";
        indicators:
          | "LED"
          | "Halogen"
          | "Xenon"
          | "Halogen Projector"
          | "LED Projector"
          | "LED with DRL";
      };
    };
    performance: {
      topSpeed: string;
      acceleration: string;
      fuelEfficiency: {
        city: string;
        highway: string;
      };
    };
    images: {
      allImages: string[];
    };
    price: {
      USD: number;
      INR: number;
      BDT: number;
    };
    isDeleted?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }
  