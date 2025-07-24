// src/pages/MyRequests.jsx
import {
  FileText,
  CalendarDays,
  Info,
  XCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export default function MyRequests() {
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  const requests = [
    {
      title: "شهادة ميلاد",
      status: "تم التجهيز",
      statusColor: "text-green-500",
      date: "2025-07-20",
    },
    {
      title: "شهادة إقامة",
      status: "قيد التنفيذ",
      statusColor: "text-yellow-500",
      date: "2025-07-22",
    },
    {
      title: "وضع عائلي",
      status: "مرفوض",
      statusColor: "text-red-500",
      date: "2025-07-21",
    },
  ];

  const showTooltip = (index) => {
    setVisibleTooltip(index);
    setTimeout(() => setVisibleTooltip(null), 5000); // مدة ظهور التولتيب
  };

  const getTooltipContent = (status) => {
    switch (status) {
      case "تم التجهيز":
        return {
          message: "طلبك جاهز للتسليم. يمكنك مراجعته الآن.",
          icon: <CheckCircle2 className="size-5 text-green-500" />,
        };
      case "قيد التنفيذ":
        return {
          message: "طلبك قيد المعالجة، يرجى المتابعة لاحقًا.",
          icon: <Loader2 className="size-5 text-yellow-500 animate-spin" />,
        };
      case "مرفوض":
        return {
          message: "تم رفض الطلب بسبب نقص في المستندات.",
          icon: <XCircle className="size-5 text-red-500" />,
        };
      default:
        return {
          message: "حالة غير معروفة.",
          icon: <Info className="size-5" />,
        };
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-20 pb-32 space-y-10 text-right">
      <h1 className="text-4xl font-bold text-primary text-center">طلباتي</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requests.map((req, i) => {
          const tooltip = getTooltipContent(req.status);

          return (
            <div
              key={i}
              className="relative rounded-xl bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-primary size-5 shrink-0" />
                <h2 className="text-lg font-semibold text-base-content">
                  {req.title}
                </h2>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <CalendarDays className="size-4" />
                  <span>{req.date}</span>
                </div>
                <span className={`font-semibold ${req.statusColor}`}>
                  {req.status}
                </span>
              </div>

              <div className="relative self-end mt-4 flex flex-col items-end">
                {/* Tooltip */}
                <div
                  className={`mb-2 absolute bottom-full right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 bg-base-200 text-base-content px-4 py-3 rounded-xl shadow-md flex items-center gap-3 text-sm z-50 max-w-[90vw] sm:max-w-sm transition-opacity duration-300 ${
                    visibleTooltip === i
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {tooltip.icon}
                  <p className="text-sm leading-snug text-center">{tooltip.message}</p>
                </div>

                {/* الزر */}
                <button
                  className="btn btn-primary btn-sm px-4 py-1 rounded-md text-white flex items-center gap-2 hover:scale-[1.02] active:scale-[.98] transition"
                  onClick={() => showTooltip(i)}
                >
                  <Info className="size-4" />
                  تفاصيل
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
