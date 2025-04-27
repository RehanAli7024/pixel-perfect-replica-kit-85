import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react"; // or use any icon library

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae a cras tincidunt. Pretium proin in nulla metus est. Iaculis pharetra velit amet placerat. Viverra lectus ut duis convallis nunc elit consequat.Lorem ipsum dolor sit amet consectetur. Sed vitae vitae",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae a cras tincidunt. Pretium proin in nulla metus est. Iaculis pharetra velit amet placerat. Viverra lectus ut duis convallis nunc elit consequat.Lorem ipsum dolor sit amet consectetur. Sed vitae vitae",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae a cras tincidunt. Pretium proin in nulla metus est. Iaculis pharetra velit amet placerat. Viverra lectus ut duis convallis nunc elit consequat.Lorem ipsum dolor sit amet consectetur. Sed vitae vitae",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae a cras tincidunt. Pretium proin in nulla metus est. Iaculis pharetra velit amet placerat. Viverra lectus ut duis convallis nunc elit consequat.Lorem ipsum dolor sit amet consectetur. Sed vitae vitae",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sed vitae vitae a cras tincidunt. Pretium proin in nulla metus est. Iaculis pharetra velit amet placerat. Viverra lectus ut duis convallis nunc elit consequat.Lorem ipsum dolor sit amet consectetur. Sed vitae vitae",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black min-h-screen py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white text-center mb-4">Some Common FAQ's</h2>
      <p className="text-gray-400 text-center mb-10">
        Get answers to your questions and learn about our platform
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </section>
  );
};

interface AccordionItemProps {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  open,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`rounded-xl border border-blue-500/40 bg-[#0a0f1a] transition-shadow ${
        open ? "shadow-[0_0_16px_2px_rgba(51,136,255,0.2)]" : "shadow"
      }`}
    >
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center px-6 py-5 text-left transition-colors rounded-xl ${
          open ? "text-white" : "text-white"
        }`}
      >
        <span className="font-semibold text-base md:text-lg">{question}</span>
        <ChevronDown
          className={`ml-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          } text-blue-300`}
          size={24}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 px-6"
        style={{
          maxHeight: open
            ? `${contentRef.current?.scrollHeight ?? 0}px`
            : "0px",
        }}
      >
        <div className="py-2 text-gray-300 text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
