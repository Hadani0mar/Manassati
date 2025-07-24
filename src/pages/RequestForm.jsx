import { useState } from "react";
import Select from "react-select";
import { Alert, Button, Label, TextInput, Textarea } from "flowbite-react";

export default function RequestForm() {
  const [showAlert, setShowAlert] = useState(false);

  const serviceOptions = [
    { value: "birth", label: "شهادة ميلاد" },
    { value: "residency", label: "شهادة إقامة" },
    { value: "license", label: "رخصة قيادة" },
    { value: "family", label: "الوضع العائلي" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: null,
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 bg-base-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 space-y-5 border border-gray-200 dark:border-gray-700 backdrop-blur-md bg-opacity-60 dark:bg-opacity-60 mb-20"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
          تقديم طلب
        </h2>

        <div>
          <Label htmlFor="name" value="الاسم الكامل" />
          <TextInput
            id="name"
            type="text"
            placeholder="مثال: أحمد محمد"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="email" value="البريد الإلكتروني" />
          <TextInput
            id="email"
            type="email"
            placeholder="example@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="service" value="اختر الخدمة المطلوبة" />
          <Select
            id="service"
            options={serviceOptions}
            placeholder="اختر خدمة..."
            className="mt-1"
            onChange={(selected) => setFormData({ ...formData, service: selected })}
          />
        </div>

        <div>
          <Label htmlFor="details" value="تفاصيل إضافية (اختياري)" />
          <Textarea
            id="details"
            rows={3}
            placeholder="اكتب أي ملاحظات أو تفاصيل أخرى..."
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          />
        </div>

        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          إرسال الطلب
        </Button>

        {showAlert && (
          <Alert color="success" onDismiss={() => setShowAlert(false)}>
            تم إرسال طلبك بنجاح 🎉
          </Alert>
        )}
      </form>
    </div>
  );
}
