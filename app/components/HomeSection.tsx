import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import IconReact from "./IconReact";

const HomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const [svgStyle, setSvgStyle] = useState({
    width: "100%",
    height: "auto",
    paddingTop: "auto"
  });

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth >= 768) {
        setSvgStyle({ width: "36%", height: "auto", paddingTop: "auto"});
      } else {
        setSvgStyle({ width: "80%", height: "auto", paddingTop: "50px" });
      }
    };

    updateStyle(); // Initial
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);
  return (
<section
  className="min-h-screen flex flex-col justify-center  md:justify-between md:flex-row md:gap-6 gap-10  items-center relative px-6 md:px-16 py-[100px] "
  id="home"
  ref={ref}
>
      <motion.div
      >
        <h3 className="text-[3rem] md:text-[4rem] font-bold text-[var(--black)] leading-tight">
          اهلا بكم في <span className="text-[var(--orange)]">لبيب</span>
        </h3>
        <p className="text-[18px] text-[var(--light-color)] leading-relaxed py-4">
          يُعد موقع Exam منصة متخصصة تُساعد الطلاب على التحضير للاختبارات عبر نماذج وأسئلة تفاعلية.
        </p>

        <div className="flex">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/login"
            className="flex bg-[var(--white)] text-[var(--orange)] border-2 border-[var(--orange)] py-4 px-6 rounded-md text-xl hover:bg-[var(--orange)] hover:text-[var(--white)] transition cursor-pointer"
          >
            <h5 className="text-right text-[15px] leading-4">
              تسجيل الدخول
            </h5>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/signup" 
            className="flex bg-[var(--white)] mr-[20px] text-[var(--orange)] border-2 border-[var(--orange)] py-4 px-6 rounded-md text-xl hover:bg-[var(--orange)] hover:text-[var(--white)] transition cursor-pointer"
          >
            <h5 className="text-right text-[15px] leading-4">
              تسجيل الدخول جديد
            </h5>
          </motion.a>
        </div>
      </motion.div>

      <IconReact style={svgStyle} />

      <div className="custom-shape-divider-bottom-1684324473 absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[107px] rotate-y-180"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,
            31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
            C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill fill-[var(--pink)]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;
