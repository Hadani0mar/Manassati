import { Link, useLocation } from "react-router-dom";

export default function DockMenu() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 z-50 w-full max-w-md left-1/2 -translate-x-1/2 px-2 pb-safe">
      <div className="flex justify-between bg-white/60 dark:bg-neutral/50 backdrop-blur-md shadow-md rounded-xl px-1 py-1 transition-all duration-500">
        {/* الرئيسية */}
        <Link to="/">
          <button
            className={`flex flex-col items-center justify-center px-2 py-0.5 rounded-lg transition-all duration-300 ${
              isActive("/") ? "text-primary bg-primary/10 shadow-inner shadow-primary/30" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4-11l9 9m-9 0v5a1 1 0 001 1h3a1 1 0 001-1v-5" />
            </svg>
            <span className="text-xs mt-0.5">الرئيسية</span>
          </button>
        </Link>

        {/* طلباتي */}
        <Link to="/requests">
          <button
            className={`flex flex-col items-center justify-center px-2 py-0.5 rounded-lg transition-all duration-300 ${
              isActive("/requests") ? "text-primary bg-primary/10 shadow-inner shadow-primary/30" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="currentColor">
                <polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M5 13v7c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2v-7" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeWidth="2" />
              </g>
            </svg>
            <span className="text-xs mt-0.5">طلباتي</span>
          </button>
        </Link>

        {/* بياناتي */}
        <Link to="/profile">
          <button
            className={`flex flex-col items-center justify-center px-2 py-0.5 rounded-lg transition-all duration-300 ${
              isActive("/profile") ? "text-primary bg-primary/10 shadow-inner shadow-primary/30" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="currentColor">
                <polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
              </g>
            </svg>
            <span className="text-xs mt-0.5">بياناتي</span>
          </button>
        </Link>

        {/* الإعدادات */}
        <Link to="/settings">
          <button
            className={`flex flex-col items-center justify-center px-2 py-0.5 rounded-lg transition-all duration-300 ${
              isActive("/settings") ? "text-primary bg-primary/10 shadow-inner shadow-primary/30" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="currentColor">
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M22 13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966 2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768 1.768.954 2.318c-.287.518-.515 1.073-.682 1.654l-2.318.966v2.5l2.318.966c.167.581.395 1.135.682 1.654l-.954 2.318 1.768 1.768 2.318-.954c.518.287 1.073.515 1.654.682l.966 2.318h2.5l.966-2.318c.581-.167 1.135-.395 1.654-.682l2.318.954 1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </g>
            </svg>
            <span className="text-xs mt-0.5">إعداداتي</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
