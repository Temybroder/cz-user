import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqas = [
  {
    title: "How is Conzooming different from other delivery apps and services?",
    content:
      "Conzooming addresses the pain-points of letting our Conzoomers (customers) have the power to decide how their food is prepared. We also don't just claim speedy delivery, we deliver ultra-fast, and at the best rates.",
  },
  {
    title: "How does Conzooming personalise my meals?",
    content:
      "We use your nutritional health profile where you can specify things like allergies and preferences, to curate meal options.",
  },
  {
    title: "How does Conzooming subscription work?",
    content:
      "Our subscription allows you to plan for your food needs ahead of time on a weekly basis. You can choose your meals or allow our system recommend best meals.",
  },
  {
    title: "How are delivery fees calculated?",
    content:
      "Delivery fees are based on distance, order size, and real-time delivery conditions.",
  },
];

const Faqs = () => {
  return (
    <section className="container lg:px-20">
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
                  <AccordionTrigger className="mb-[14px] rounded-3xl bg-[#FEF1F1] py-[17.5px] pl-5 pr-4 text-xs text-[#231F20] hover:no-underline md:text-base">
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
