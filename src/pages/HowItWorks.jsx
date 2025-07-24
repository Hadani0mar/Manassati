// src/pages/HowItWorks.jsx
import {
  FilePlus,
  ShieldCheck,
  ScanLine,
  Contact,
  UserPlus,
  ListChecks,
  Send,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-20 pb-32 space-y-12 text-right">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl font-bold text-primary text-center">
        كيفية استخدام المنصة
      </h1>

      {/* قائمة الخدمات */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-base-content">
          الخدمات المتاحة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: FilePlus, title: "إصدار جواز سفر" },
            { icon: Contact, title: "تجديد البطاقة الشخصية" },
            { icon: ScanLine, title: "استخراج شهادة ميلاد" },
            { icon: ShieldCheck, title: "طلب الإقامة" },
            { icon: UserPlus, title: "نقل الكفالة" },
          ].map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="bg-base-200 p-5 rounded-xl shadow hover:shadow-md transition duration-300 flex items-center gap-4"
            >
              <Icon className="text-primary size-6 shrink-0" />
              <span className="text-base-content font-medium">{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* خطوات الاستخدام */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-base-content">
          خطوات الاستخدام
        </h2>
        <ol className="relative border-s-2 border-primary space-y-8 ps-5">
          {[
            {
              icon: UserPlus,
              title: "التسجيل في المنصة",
              desc: "أنشئ حساب جديد أو سجّل دخولك للبدء.",
            },
            {
              icon: ListChecks,
              title: "اختر الخدمة",
              desc: "اضغط على زر 'تقديم طلب' واختر الخدمة التي تحتاجها.",
            },
            {
              icon: FilePlus,
              title: "املأ البيانات",
              desc: "أدخل جميع البيانات المطلوبة بدقة لضمان قبول الطلب.",
            },
            {
              icon: Send,
              title: "تابع حالة الطلب",
              desc: "توجه إلى قسم 'طلباتي' لمتابعة حالة الطلب حتى يتم اعتماده.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <li key={i} className="space-y-1">
              <span className="absolute -start-[1.15rem] bg-primary text-white rounded-full p-1">
                <Icon className="size-4" />
              </span>
              <h3 className="font-bold text-base-content">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          * تأكد من دقة بياناتك لتجنب التأخير أو الرفض.
        </p>
      </section>
    </div>
  );
}
