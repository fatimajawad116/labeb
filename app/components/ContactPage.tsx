import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import EmailIcon from "../components/EmailIcon";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <section className="pt-[140px] pb-[30px] px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="text-[var(--orange)]">تواصل</span> معنا
      </h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="p-8 shadow-lg rounded-2xl text-center border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--orange)] text-white text-3xl">
            <FaClock />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">ساعات العمل</h3>
          <p className="text-gray-500 text-lg">من الإثنين إلى الخميس: 08:00 صباحًا حتى 12:30 ظهرًا</p>
          <p className="text-gray-500 text-lg">الجمعة: 09:00 صباحًا حتى 12:00 ظهرًا</p>
        </div>

        <div className="p-8 shadow-lg rounded-2xl text-center border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--orange)] text-white text-3xl">
            <FaEnvelope />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">البريد الإلكتروني</h3>
          <p className="text-gray-500 text-lg">ninjashub4@gmail.com</p>
          <p className="text-gray-500 text-lg">ninjashub4@gmail.com</p>
        </div>

        <div className="p-8 shadow-lg rounded-2xl text-center border border-gray-200">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--orange)] text-white text-3xl">
            <FaPhone />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">رقم الهاتف</h3>
          <p className="text-gray-500 text-lg">+123-456-7890</p>
          <p className="text-gray-500 text-lg">+123-456-7890</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 items-center mt-16">
        <div className="flex-1 min-w-[250px]">
          <EmailIcon />
        </div>

        <form action="#" className="flex-1 min-w-[300px] p-6 border border-gray-300 shadow-lg rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">راسلنا الآن</h3>

          <div className="flex flex-wrap gap-4 mb-4">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-[100%] md:w-[48%] p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--orange)] text-gray-700"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-[100%] md:w-[48%] p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--orange)] text-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="w-[100%] md:w-[48%] p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--orange)] text-gray-700"
            />
            <input
              type="text"
              placeholder="الموضوع"
              className="w-[100%] md:w-[48%] p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--orange)] text-gray-700"
            />
          </div>

          <textarea
            placeholder="رسالتك"
            className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[var(--orange)] text-gray-700 resize-none mb-4"
          ></textarea>

          <motion.input
            type="submit"
            value="إرسال الرسالة"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "var(--orange)",
              boxShadow: "0 4px 20px rgba(255, 165, 0, 0.4)",
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
              },
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[var(--orange)] text-white py-3 px-8 rounded-md cursor-pointer 
                       shadow-md font-semibold tracking-wide"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
