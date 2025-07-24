// src/pages/MyProfile.jsx
import { Crown } from "lucide-react";

export default function MyProfile() {
  return (
    <div dir="rtl" className="flex flex-col items-center justify-center p-6 gap-4">
      <div className="relative avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="صورة المستخدم"
          />
        </div>
        <div className="absolute -top-2 -left-2 bg-yellow-500 text-white p-1 rounded-full shadow">
          <Crown className="w-4 h-4" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-base-content">موسى عمر</h2>
        <p className="text-sm text-base-content/70">
          مطور ويب ومهتم بالذكاء الاصطناعي
        </p>
      </div>

      <div className="w-full max-w-sm bg-base-200 rounded-box p-4 space-y-2 shadow">
        <div className="flex justify-between">
          <span className="font-semibold">البريد:</span>
          <span className="text-sm">mousa@example.com</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">رقم الهاتف:</span>
          <span className="text-sm">+218 91 1234567</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">المدينة:</span>
          <span className="text-sm">طرابلس</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">آخر تحديث:</span>
          <span className="text-sm">2025-07-23</span>
        </div>
      </div>
    </div>
  );
}
