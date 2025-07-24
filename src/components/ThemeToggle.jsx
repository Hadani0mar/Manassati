import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", prefersDark);
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains("dark") ? "light" : "dark";

    html.classList.toggle("dark", newTheme === "dark");
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");

    // 🧨 الحل النهائي: إعادة تحميل الصفحة لحل الخلل
    window.location.reload(); // هذا يحل المشكلة كلياً
  };

  return (
    <button className="btn btn-outline btn-sm gap-2" onClick={toggleTheme}>
      {isDark ? <MdDarkMode className="text-lg" /> : <MdLightMode className="text-lg" />}
      {isDark ? "الوضع الداكن" : "الوضع الفاتح"}
    </button>
  );
}
