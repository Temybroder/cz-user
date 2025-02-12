import { BicycleIcon } from "@/app/icons";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const popularMeals = [
  {
    image: "/images/meals/super-foods1.png",
    title: "Jollof rice and steak meat",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/la-paco1.png",
    title: "Spaghetti",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/bollegi.png",
    title: "Porridge beans",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/super-foods2.png",
    title: "Shawarma",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/la-paco2.png",
    title: "Jollof Spaghetti",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/bollegi.png",
    title: "Bollegi",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/super-foods1.png",
    title: "Jollof rice and steak meat",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/la-paco1.png",
    title: "Spaghetti and fries",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
  {
    image: "/images/meals/bollegi.png",
    title: "Porridge beans",
    rating: (4.0).toFixed(1),
    distance: "1Km",
    description: "Fastfood, Soups, Swallow",
  },
];

const PopularMeals = () => {
  return (
    <div className="grid">
      <h2 className="hidden md:mb-6 md:block md:text-[2rem] md:font-bold md:text-[#231F20]">
        Popular
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {popularMeals.map((meal, index) => (
          <div
            key={index}
            className="rounded-xl border-[1px] border-[#EFF0F0] px-[14px] py-3"
          >
            <div>
              <Image
                src={meal.image}
                alt={meal.title}
                width={311}
                height={160}
                className="mb-2 rounded-lg bg-no-repeat object-cover md:w-[311px]"
              />

              <div className="mb-[6px] flex items-center justify-between">
                <p className="text-lg font-bold text-[#231F20]">{meal.title}</p>
                <div className="flex items-center gap-[2px]">
                  <Star
                    size={16}
                    strokeWidth={0.5}
                    className="fill-[#FFBC66] stroke-[#FFBC66]"
                  />
                  <p>{meal.rating}</p>
                </div>
              </div>

              <div className="mb-[14px] flex items-center gap-[10px] text-xs text-[#AEB2B2]">
                <div className="flex items-center gap-[3px]">
                  <BicycleIcon width={17} height={10} />
                  <span>{meal.distance}</span>
                </div>
                <div>{"."}</div>
                <p>{meal.description}</p>
              </div>

              <Button
                type="button"
                variant="ghost"
                className="flex items-center p-0 text-sm font-medium text-[#231F20]"
              >
                Order now{" "}
                <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E]">
                  <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
                </p>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMeals;
