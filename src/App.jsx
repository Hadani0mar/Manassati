// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";
import TooltipButton from "./components/TooltipButton";
import DockMenu from "./components/DockMenu";
import MyRequests from "./pages/MyRequests";
import MyProfile from "./pages/MyProfile";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import PlatformTimeline from "./pages/PlatformTimeline";
import RequestForm from "./pages/RequestForm";
import WhyPlatform from "./components/WhyPlatform";
import HowItWorks from "./pages/HowItWorks"; // ✅ مكون صفحة التعليمات

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-base-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
        <Navbar />

        <main className="mt-32 w-full max-w-screen-xl mx-auto px-4 space-y-10">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center space-y-6">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <h1 className="text-2xl font-semibold">
                      🚀 العد التنازلي لانطلاقة الموقع
                    </h1>
                    <p className="text-base opacity-80">
                      نعمل على شيء مميز جدًا... كن أول من يراه!
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <CountdownTimer />
                  </div>

                  <div className="flex justify-center">
                    <TooltipButton />
                  </div>

                  <WhyPlatform />
                </div>
              }
            />
            <Route path="/how-it-works" element={<HowItWorks />} /> {/* ✅ */}
            <Route path="/request" element={<RequestForm />} />
            <Route path="/requests" element={<MyRequests />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/team" element={<Team />} />
            <Route path="/timeline" element={<PlatformTimeline />} />
          </Routes>
        </main>

        <DockMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;	
