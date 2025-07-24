import { useState } from 'react';

export default function TooltipButton() {
  const [showModal, setShowModal] = useState(false);

  const message =
    'موقع رقمي يسهل على المواطنين تقديم طلباتهم مثل الرخص، شهادة الميلاد، شهادة الإقامة، وشهادة الوضع العائلي، بكل سهولة ومن أي مكان.';

  return (
    <>
      <button
        className="btn bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-lg shadow-md transition-all duration-200"
        onClick={() => setShowModal(true)}
      >
        اضغط لمعرفة فكرة الموقع
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 w-full max-w-md relative text-right text-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow">✨ فكرة الموقع</h2>
            <p className="text-white text-lg leading-loose drop-shadow-sm">
              {message}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 left-3 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-sm transition-all"
              aria-label="إغلاق"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
