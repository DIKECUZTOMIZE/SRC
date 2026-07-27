/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const profileRef = useRef(null);
  const { employee, isLoading } = useSelector((store) => store.auth);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Memoized NavLink styling for consistent active state
  const navLinkClass = useCallback(
    ({ isActive }) =>
      `relative py-2 text-sm font-medium transition-all duration-200 ${
        isActive
          ? "text-emerald-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:rounded-full"
          : "text-slate-600 hover:text-emerald-600"
      }`,
    [],
  );

  if (isLoading) {
    return (
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex items-center justify-center">
        <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
          <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/home"
            className="group flex items-center gap-2.5 text-2xl font-black tracking-tight transition-all duration-300"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white font-black text-xl shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <span className="drop-shadow-sm">S</span>
              {/* Subtle Glow Overlay */}
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-800 bg-clip-text text-transparent font-black leading-none text-2xl tracking-wider">
                SRC
              </span>
              <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase leading-tight mt-0.5">
                Car Rental
              </span>
            </div>
          </NavLink>

          {/* Desktop Menu - Modern Array Mapping */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-100">
            {[
              { name: "Home", path: "/home", end: true },
              { name: "About", path: "about" },
              { name: "Car List", path: "carList" },
              { name: "Order", path: "order" },
              { name: "Terms", path: "termsAndCondition" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  end={item.end}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 block ${
                      isActive
                        ? "bg-white text-emerald-600 shadow-sm shadow-slate-200/50"
                        : "text-slate-600 hover:text-emerald-600 hover:bg-white/60"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Section */}
          <div className="hidden md:block relative" ref={profileRef}>
            {employee ? (
              <>
                <button
                  onClick={() => setShowProfile((prev) => !prev)}
                  className="flex items-center gap-2 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-200 text-slate-800 px-3.5 py-1.5 rounded-xl transition-all duration-200 focus:outline-none"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                    {employee.username?.[0] || "U"}
                  </div>
                  <span className="text-xs font-bold text-slate-700 max-w-[120px] truncate">
                    {employee.username}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-slate-400 transition-transform duration-200 ${showProfile ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Profile Dropdown */}
                {showProfile && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-xl rounded-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="p-2 bg-slate-50 rounded-xl mb-2 border border-slate-100/80">
                      <p className="font-extrabold text-sm text-slate-800 truncate">
                        {employee.username}
                      </p>
                      <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
                        {employee.email}
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <NavLink
                        to="/settings"
                        onClick={() => setShowProfile(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-lg transition-colors"
                      >
                        <Settings size={15} /> Settings
                      </NavLink>

                      <NavLink
                        to="/account"
                        onClick={() => setShowProfile(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-lg transition-colors"
                      >
                        <User size={15} /> Account
                      </NavLink>
                    </div>

                    <hr className="my-2 border-slate-100" />

                    <button className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white py-2 rounded-xl text-xs font-bold transition-all duration-200">
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to="/"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-emerald-200 active:scale-[0.98]"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Hamburger Button */}

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-emerald-600 bg-slate-100/80 active:bg-emerald-50 transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-slate-50/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-3.5 shadow-xl shadow-slate-200/50">
              {/* Mobile-Only Loading State */}
              {isLoading ? (
                <div className="flex items-center justify-center py-8 gap-2.5 text-emerald-600 font-bold text-xs tracking-wide">
                  <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                  <span>Loading menu...</span>
                </div>
              ) : (
                <ul className="flex flex-col gap-1.5">
                  {/* Nav Items Mapped Dynamically */}
                  {[
                    { name: "Home", path: "/home", end: true },
                    { name: "About", path: "about" },
                    { name: "Car List", path: "carList" },
                    { name: "Order", path: "order" },
                    { name: "Terms", path: "termsAndCondition" },
                  ].map((item) => (
                    <li key={item.name}>
                      <NavLink
                        end={item.end}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                            isActive
                              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                              : "text-slate-800 hover:bg-white hover:text-emerald-600"
                          }`
                        }
                      >
                        <span>{item.name}</span>
                      </NavLink>
                    </li>
                  ))}

                  {/* Profile Card & Auth Actions */}
                  <li className="pt-2 mt-1 border-t border-slate-200/70">
                    {employee ? (
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-sm uppercase shadow-sm shrink-0">
                            {employee.username?.[0] || "U"}
                          </div>
                          <div className="overflow-hidden">
                            <p className="font-extrabold text-xs text-slate-900 truncate tracking-tight">
                              {employee.username}
                            </p>
                            <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                              {employee.email}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <NavLink
                            to="/settings"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-600 transition-all"
                          >
                            <Settings size={14} /> Settings
                          </NavLink>
                          <NavLink
                            to="/account"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-600 transition-all"
                          >
                            <User size={14} /> Account
                          </NavLink>
                        </div>

                        <button className="w-full flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-200 active:scale-[0.99]">
                          <LogOut size={14} /> Logout
                        </button>
                      </div>
                    ) : (
                      <NavLink
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs py-3 rounded-xl shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all mt-1"
                      >
                        Login to Account
                      </NavLink>
                    )}
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
