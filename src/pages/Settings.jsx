// src/pages/Settings.jsx
import { useEffect, useState } from "react";
import {
  MdLanguage,
  MdDarkMode,
  MdNotifications,
  MdLogout,
} from "react-icons/md";

function Settings() {
  const [darkMode, setDarkMode] = useState(() => {
    const userTheme = localStorage.theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return userTheme === "dark" || (!userTheme && systemPrefersDark);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8 text-right space-y-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">الإعدادات</h2>

      <div className="space-y-5">
        {/* اللغة */}
        <div className="flex items-center justify-between bg-base-200 p-5 rounded-2xl shadow-md transition-all duration-300">
          <div className="flex items-center gap-3">
            <MdLanguage className="text-2xl text-primary" />
            <span className="text-lg font-medium text-base-content">اللغة</span>
          </div>
          <select className="select select-bordered select-sm w-36">
            <option>العربية</option>
            <option>English</option>
          </select>
        </div>

        {/* الوضع الداكن */}
        <div className="flex items-center justify-between bg-base-200 p-5 rounded-2xl shadow-md transition-all duration-300">
          <div className="flex items-center gap-3">
            <MdDarkMode className="text-2xl text-primary" />
            <span className="text-lg font-medium text-base-content">الوضع الداكن</span>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-lg toggle-primary"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* الإشعارات */}
        <div className="flex items-center justify-between bg-base-200 p-5 rounded-2xl shadow-md transition-all duration-300">
          <div className="flex items-center gap-3">
            <MdNotifications className="text-2xl text-primary" />
            <span className="text-lg font-medium text-base-content">الإشعارات</span>
          </div>
          <input type="checkbox" className="toggle toggle-lg toggle-secondary" />
        </div>

        {/* تسجيل الخروج */}
        <button className="btn btn-error w-full mt-8 text-lg gap-2">
          <MdLogout className="text-xl" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  );
}

export default Settings;
