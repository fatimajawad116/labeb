import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import IconFaq from "../components/IconFaq";
import { CiSearch } from "react-icons/ci";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[var(--orange)] rounded-lg shadow-md p-4 bg-[var(--white)] transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-right"
      >
        <span className="text-lg font-semibold text-[var(--pink)]">{question}</span>
        {open ? (
          <MinusIcon className="w-5 h-5 text-[var(--pink)] cursor-pointer" />
        ) : (
          <PlusIcon className="w-5 h-5 text-[var(--pink)] cursor-pointer" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const faqs = [
    {
      question: "ما هي خدمة CORE Maturity؟",
      answer: "CORE Maturity هي خدمة تقييم نضج المؤسسات عبر معايير عالمية.",
    },
    {
      question: "هل يمكن تخصيص التقييم حسب المؤسسة؟",
      answer: "نعم، يتم تخصيص التقييمات بناءً على احتياجات وأهداف المؤسسة.",
    },
    {
      question: "كيف يمكنني البدء؟",
      answer: "يمكنك البدء بالتواصل معنا عبر نموذج الاتصال الموجود على الموقع.",
    },
  ];

  return (
    <section className="pt-[120px] pb-[60px] px-4 md:px-12 md:h-auto h-[100vh]">
      <div className="relative w-full h-[220px] md:h-[250px] mb-10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <IconFaq className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 px-6 md:px-[10%]">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--orange)] text-center md:text-right bg-white px-6 py-2 rounded-md shadow-md">
            كيف يمكنني مساعدتك؟
          </h2>
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="البحث هنا"
              className="w-full border bg-white border-[var(--orange)] py-2 pl-10 pr-4 rounded-md outline-none placeholder:text-[var(--orange)]"
            />
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-[var(--orange)]" />
          </div>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
