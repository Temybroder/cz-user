import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqas = [
  {
    title: "What is Conzooming?",
    content: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "How does Conzooming work?",
    content: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "What is Meal plan?",
    content: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "How long will it take to get my order delivered?",
    content: " Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const Faqs = () => {
  return (
    <section>
      <p className="mb-4 h-10 w-[66px] rounded-xl bg-[#FEF6EC] p-[10px] text-lg font-medium text-[#231F20]">
        FAQs
      </p>

      <div className="md:flex md:justify-between">
        <div className="mr-[345px] md:mr-0">
          <h2 className="mb-[27px] w-[200px] text-wrap text-[1.75rem] font-bold text-[#231F20]">
            All you need to Know
          </h2>
          <Image
            src="/images/landing-page/faq.png"
            alt="frequently asked questions"
            width={250}
            height={250}
            className="hidden md:block md:self-center md:object-cover"
          />
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full md:w-[555px]"
            >
              {faqas.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b-0"
                >
                  <AccordionTrigger className="mb-[14px] rounded-3xl bg-[#FEF1F1] py-[17.5px] pl-5 pr-4 text-xs text-[#231F20] hover:no-underline md:text-xl">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent>{faq.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
