// src/components/WhyPlatform.jsx
import { ShieldCheck, Layers3, ListChecks } from "lucide-react";

export default function WhyPlatform() {
  const features = [
    {
      title: "اعتماد موثوق",
      description: "نعتمد الشركاء بعد تحقق دقيق لضمان الجودة والمصداقية.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "كل شيء في مكان واحد",
      description: "طلبك، تتبعه، تقييمك، وتحديثاتك... كل شيء عبر منصة واحدة.",
      icon: <Layers3 className="w-8 h-8 text-primary" />,
    },
    {
      title: "معلومات منظمة وواضحة",
      description: "نقدم لك كل التفاصيل والخطوات بطريقة مرتبة وسهلة الفهم.",
      icon: <ListChecks className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="py-12 px-4 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          لماذا <span className="text-primary">منصتنا</span>؟
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-base-200 shadow-md hover:shadow-lg transition"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
