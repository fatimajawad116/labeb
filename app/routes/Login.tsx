import LoginIcon from "~/components/LoginIcon";
import imgLogo from "../assets/logo.png";
import { NavLink } from "react-router";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center overflow-hidden" dir="rtl">
      <div className="hidden md:block w-1/2 h-full bg-gray-100 p-10">
        <LoginIcon />
      </div>
      <div className="w-full md:w-1/2 p-10 mt-12">
        {/* الشعار */}
        <div className="mb-5 flex justify-center">
          <img src={imgLogo} className="w-1/2" alt="Logo" />
        </div>
        <h2 className="text-2xl mr-[-5px] font-bold tracking-wide mb-6 text-gray-800">
          تسجيل الدخول إلى حسابك
        </h2>
        <form className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none transition mt-2"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">كلمة المرور</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none  transition mt-2"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox w-4 h-4 text-[var(--pink)]" />
              تذكرني
            </label>
            <a href="#" className="text-[#ffa07a] hover:underline transition">
              نسيت كلمة المرور؟
            </a>
          </div>
          <button
  type="submit"
  className="w-full bg-[#a5b26e] border-[1px] border-[#a5b26e] text-white py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-[var(--white)] hover:text-[#a5b26e] hover:shadow-lg hover:opacity-90 cursor-pointer"
>
  تسجيل الدخول
</button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-7">
          ليس لديك حساب؟
          <NavLink to="/signup" className="text-[#ffa07a] hover:underline transition">
            إنشاء حساب جديد
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;