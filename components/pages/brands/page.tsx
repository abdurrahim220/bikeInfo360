import Image from "next/image";
import { bikeModels } from "@/lib/bikeType";
import { Card, CardContent } from "@/components/features/AllCards/card";
import BrandHeader from "@/components/features/ReUseContent/BrandHeader";

export default function HeroBikesSection({ brand }: { brand: string }) {
  return (
    <section className="w-full  py-8">
      <div className="">
        <BrandHeader brand={brand} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bikeModels.map((bike) => (
            <Card key={bike.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <Image
                    src={bike.image}
                    alt={bike.name}
                    width={400}
                    height={300}
                    className="rounded-lg w-full"
                  />
                  <div className="absolute bottom-2 right-2 bg-gray-900 rounded-full p-2">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 36 36" className="w-12 h-12">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#444"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="3"
                          strokeDasharray={`${bike.rating * 10}, 100`}
                        />
                        <text
                          x="18"
                          y="20.35"
                          className="text-[8px]"
                          textAnchor="middle"
                          fill="white"
                        >
                          {bike.rating}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {bike.name}
                </h3>

                <div className="text-sm text-gray-400 mb-4">
                  {bike.specs.cc} CC | {bike.specs.kmpl} KM/L |{" "}
                  {bike.specs.category}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-400">
                      Ex-Showroom Price
                    </div>
                    <div className="text-gray-200">
                      $ {bike.pricing.exShowroom}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">EMI Starts at</div>
                    <div className="text-gray-200">
                      ₹ {bike.pricing.emiStarts}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  <button className="flex-1 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Compare
                  </button>
                  <button className="flex-1 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Variants
                  </button>
                  <button className="flex-1 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Reviews
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
