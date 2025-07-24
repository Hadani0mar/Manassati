// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 text-base-content shadow-sm w-full fixed top-0 left-0 right-0 z-50 px-4">
      <div className="flex justify-end items-center w-full flex-wrap gap-4">
        {/* زر كيف تعمل المنصة */}
        <Link
          to="/how-it-works"
          className="btn btn-primary btn-sm whitespace-nowrap"
        >
          كيف تعمل المنصة
        </Link>

        {/* زر تقديم طلب */}
        <Link
          to="/request"
          className="btn btn-outline btn-sm whitespace-nowrap"
        >
          تقديم طلب
        </Link>

        {/* صورة المستخدم وقائمة منسدلة */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full overflow-hidden">
              <img
                alt="صورة المستخدم"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                الملف الشخصي
                <span className="badge">جديد</span>
              </Link>
            </li>
            <li><Link to="/settings">الإعدادات</Link></li>
            <li><Link to="/team">المطورون</Link></li>
            <li><Link to="/timeline">جدول المنصة</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
