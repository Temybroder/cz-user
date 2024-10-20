import { Tabs, TabsList } from "@/components/ui/tabs";
import PopularMeals from "./popular-meals";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { DrinksIcon, GroceryIcon, PillIcon, RestuarantIcon } from "@/app/icons";

const Consumables = () => {
  const tabs = [
    {
      value: "restaurants",
      label: "Restaurants",
      icon: (
        <RestuarantIcon
          width={17}
          height={17}
          className="fill-current text-[#AEB2B2] transition-colors group-focus:text-[#FFB31E] group-data-[state=active]:text-[#FFB31E] md:h-6 md:w-[27px]"
        />
      ),
    },
    {
      value: "groceries",
      label: "Groceries",
      icon: (
        <GroceryIcon
          width={17}
          height={19}
          className="fill-current text-[#AEB2B2] transition-colors group-focus:text-[#FFB31E] group-data-[state=active]:text-[#FFB31E] md:h-[30px] md:w-[27px]"
        />
      ),
    },
    {
      value: "drinks",
      label: "Drinks",
      icon: (
        <DrinksIcon
          width={17}
          height={18}
          className="fill-current text-[#AEB2B2] transition-colors group-focus:text-[#FFB31E] group-data-[state=active]:text-[#FFB31E] md:h-[29px] md:w-7"
        />
      ),
    },

    {
      value: "pharmacy",
      label: "Pharmacy",
      icon: (
        <PillIcon
          width={17}
          height={14}
          className="fill-current text-[#AEB2B2] transition-colors group-focus:text-[#FFB31E] group-data-[state=active]:text-[#FFB31E] md:h-6 md:w-[27px]"
        />
      ),
    },
  ];

  return (
    <div className="grid place-items-center">
      <h2 className="mb-3 text-[1.75rem] font-bold text-[#231F20] md:w-[392px] md:text-center md:text-5xl">
        Explore consumables
      </h2>
      <p className="mb-[38px] w-[293px] text-sm text-[#AEB2B2] md:w-[470px] md:text-center md:text-lg">
        Explore a vibrant marketplace of top-tier vendors offering a variety of
        unique services tailored to meet all your needs.
      </p>

      <Tabs defaultValue="restaurants" className="mb-6">
        <TabsList className="mb-7 flex flex-wrap rounded-full bg-white p-2 md:mb-10">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="group flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[#AEB2B2] transition-colors duration-300 data-[state=active]:border-[#FFB31E] data-[state=active]:bg-[#FEF6EC] data-[state=active]:text-[#231F20] md:text-xl"
            >
              <span>{tab.icon}</span> {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-3">
          <TabsContent value="restaurants">
            <PopularMeals />
          </TabsContent>
          <TabsContent value="drinks"></TabsContent>
          <TabsContent value="groceries"></TabsContent>
          <TabsContent value="pharmacy"></TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Consumables;
