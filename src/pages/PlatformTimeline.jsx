// src/pages/PlatformTimeline.jsx
import { CalendarClock, Rocket } from "lucide-react";

const events = [
  { date: "2024-01-01", title: "تشكيل فريق التطوير" },
  { date: "2024-06-01", title: "اكتمال مخطط الفكرة" },
  {
    date: "2025-01-01",
    title: "بداية البرمجة",
    substeps: ["تخطيط", "تصميم", "تطوير", "فريق التطوير"],
  },
  { date: "2025-07-23", title: "انتهاء التطوير" },
  {
    date: "2025-08-01",
    title: "الإطلاق الرسمي للمنصة",
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
];

const partners = [
  { src: "/images/libyana.png", alt: "Libyana" },
  { src: "/images/ltt.svg", alt: "LTT" },
  { src: "/images/libyanspider.svg", alt: "Libyan Spider" },
];

export default function PlatformTimeline() {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-8 pb-20 space-y-16">
      {/* العنوان */}
      <div className="flex items-center justify-center gap-2 text-2xl font-bold text-base-content">
        <CalendarClock className="w-6 h-6 text-blue-500" />
        <h2>
          الجدول الزمني <span className="text-blue-500">للمنصة</span>
        </h2>
      </div>

      {/* الجدول الزمني */}
      <div className="space-y-10 mt-6">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="relative border-r-4 border-primary pr-6 pe-4"
          >
            <div className="absolute right-[-10px] top-1 w-4 h-4 bg-primary rounded-full"></div>
            <div className="text-sm text-base-content/70 mb-1">{event.date}</div>
            <div className="flex items-center gap-2 text-base font-semibold text-base-content">
              {event.icon}
              {event.title}
            </div>
            {event.substeps && (
              <div className="flex flex-wrap gap-2 mt-2">
                {event.substeps.map((step, i) => (
                  <span
                    key={i}
                    className="badge badge-outline text-xs px-3 py-1 dark:text-white"
                  >
                    {step}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* الشركاء */}
      <div className="text-center pt-12">
        <h3 className="text-lg font-semibold mb-6 text-base-content">
          شركاؤنا
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, i) => (
            <img
              key={i}
              src={partner.src}
              alt={partner.alt}
              className="h-16 w-16 object-contain rounded-full border border-base-300 dark:border-base-100 shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
