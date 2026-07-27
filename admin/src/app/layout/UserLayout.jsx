import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router";
import { Menu, X, Sparkles } from "lucide-react";
import Sidebar from "../../feature/private/dashboard/ui/components/Dashboard/SideBar.jsx";

const UserLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigation = useNavigation();

  // Route transition / Loading state check
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen bg-slate-50/70 font-sans text-slate-900 flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
      {/* --- TOP GLOBAL LOADING BAR (Appears during route transition) --- */}
      {isPageLoading && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-100 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 animate-pulse w-full transition-all duration-300" />
        </div>
      )}

      {/* --- MOBILE HEADER BAR --- */}
      <div className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="font-black text-sm tracking-tight text-slate-800 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-ping" />
            Dashboard
          </span>
        </div>

        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full flex items-center gap-1">
          <Sparkles size={11} className="text-emerald-500 fill-emerald-500" />
          User Space
        </span>
      </div>

      {/* --- SIDEBAR + CONTENT CONTAINER --- */}
      <div className="flex flex-1 relative">
        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* --- LEFT SIDEBAR CONTAINER --- */}
        <aside
          className={`
            fixed lg:sticky top-0 lg:top-0 z-40
            w-64 lg:w-60 min-h-screen lg:min-h-[calc(100vh)]
            bg-white/95 backdrop-blur-xl border-r border-slate-200/80
            shadow-xl lg:shadow-none
            transition-transform duration-300 ease-in-out
            flex flex-col justify-between
            ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          {/* Sidebar Component Render */}
          <div className="h-full overflow-y-auto custom-scrollbar">
            <Sidebar />
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Container wrapper for smooth max-width and UI alignment */}
          <div className="max-w-7xl mx-auto space-y-6">
            {isPageLoading ? (
              /* Content Loading State Shell */
              <div className="space-y-4 animate-pulse">
                <div className="h-8 w-48 bg-slate-200/70 rounded-xl"></div>
                <div className="h-32 bg-slate-200/50 rounded-2xl w-full border border-slate-200/60"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-48 bg-slate-200/40 rounded-2xl"></div>
                  <div className="h-48 bg-slate-200/40 rounded-2xl"></div>
                </div>
              </div>
            ) : (
              /* Actual Child Route Content */
              <Outlet />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default React.memo(UserLayout);
