import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { Loader2, ShieldCheck } from "lucide-react";

const ProtectedRoute = () => {
  const { employee, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-slate-50/80 backdrop-blur-md flex flex-col items-center justify-center p-4 font-sans select-none">
        <div className="relative flex flex-col items-center">
          {/* Glowing Animated Ring */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 blur-xl opacity-30 animate-pulse" />
            <div className="relative bg-white/90 border border-slate-200/80 p-4 rounded-2xl shadow-lg shadow-slate-200/50 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" strokeWidth={2.5} />
            </div>
          </div>

          {/* Text Indicators */}
          <div className="mt-5 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Authenticating Session</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 animate-pulse">
              Verifying credentials, please wait...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!employee) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;