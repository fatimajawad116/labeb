import AboutSection from '~/components/AboutSection';
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <section className="bg-[var(--pink)] min-h-screen pt-[150px] pb-[70px] px-4 md:px-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-[var(--white)]">
        من <span className="text-[var(--orange)]">لبيب؟</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* المحتوى النصي */}
        <div className="space-y-6">
          <motion.h3
            className="text-2xl md:text-3xl text-[var(--white)] leading-snug"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            لبيب بوابتك للتفوق الدراسي
          </motion.h3>

          <motion.p
            className="text-[var(--white)] text-base md:text-lg leading-relaxed"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            في لبيب، نؤمن أن النجاح يبدأ بخطوة معرفة مستواك الحقيقي.
            نقدم لك منصّة متكاملة لاختبارات ذكية تغطي جميع المراحل الدراسية، مصممة بعناية لتعزيز مهاراتك الأكاديمية واكتشاف قدراتك الكاملة.
          </motion.p>

          <motion.p
            className="text-[var(--white)] text-base md:text-lg leading-relaxed"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            سواء كنت تطمح لتحقيق أفضل النتائج في المدرسة أو تسعى لتطوير مستواك الشخصي، فإن لبيب هو رفيقك الأمثل في رحلتك نحو التفوق.
            مع اختبارات متجددة، تحليل فوري للأداء، وتجربة تعليمية ممتعة ومشوقة، لبيب يمنحك الأدوات التي تحتاجها لتحقيق طموحاتك بثقة.<br />
            <strong>لبيب.. معك خطوة بخطوة نحو التميّز والنجاح</strong>
          </motion.p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-transparent text-[var(--orange)] px-6 py-2 rounded-md text-lg border-2 border-[var(--orange)] transition hover:bg-[var(--orange)] hover:text-[var(--white)]"
          >
            اقرأ المزيد
          </motion.a>
        </div>

        {/* القسم البصري */}
        <div className="flex justify-center">
          <AboutSection />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
