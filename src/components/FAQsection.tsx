import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide 3D rendering, 2D design, interior and exterior design services tailored to your project's needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary, but most are completed within 1-2 weeks depending on complexity and revisions.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, we include up to 3-5 rounds of revisions depending on size and complexity of project in our standard package to ensure you're satisfied.",
  },
  {
    question: "What kind of Projects do you work on?",
    answer:
      "We work on a variety of projects including residential, commercial, interior and exterior designs. Whether it's a home renovation or a new product launch, we've got you covered.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12" id="faq">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
