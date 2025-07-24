// src/pages/Team.jsx
import React from 'react';
import { Crown } from 'lucide-react'; // ✅ أيقونة التاج

const Team = () => {
  const teamMembers = [
    {
      name: 'موسى عمر',
      title: 'المدير التنفيذي',
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?&w=320&h=320&q=80',
      isCEO: true,
    },
    {
      name: 'أمل إيفارا',
      title: 'مصممة واجهات',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=320&h=320&q=80',
    },
    {
      name: 'إيبل إيجبونا',
      title: 'الدعم الفني',
      img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?&w=320&h=320&q=80',
    },
    {
      name: 'داليا بافيلك',
      title: 'مطورة واجهات',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=320&h=320&q=80',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          فريق القيادة
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          هؤلاء هم الأبطال خلف نجاحنا.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((person, idx) => (
          <div
            key={idx}
            className="relative bg-base-100 rounded-xl shadow-md p-4 text-center transition-transform duration-300 hover:scale-105"
          >
            {person.isCEO && (
              <span className="absolute top-2 left-2 text-yellow-500">
                <Crown size={24} />
              </span>
            )}
            <img
              className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
              src={person.img}
              alt={person.name}
            />
            <h3 className="font-semibold text-base-content">{person.name}</h3>
            <p className="text-sm text-base-content/70">{person.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
