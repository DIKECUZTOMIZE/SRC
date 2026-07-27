import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  CalendarCheck2,
  Car,
  PlusCircle,
  FileText,
  Edit,
  Filter,
  History,
  User,
  Settings,
  Sparkles,
} from "lucide-react";

// Icon Mapper for Menu Items
const MENU_ICONS = {
  "/dashboard": LayoutDashboard,
  "/dashboard/bookings": CalendarCheck2,
  "/dashboard/cars": Car,
  "/dashboard/cars/add": PlusCircle,
  "/dashboard/cars/details": FileText,
  "/dashboard/cars/update": Edit,
  "/dashboard/filter": Filter,
  "/dashboard/bookings/history": History,
  "/dashboard/profile": User,
  "/dashboard/settings": Settings,
};

const Sidebar = ({ isLoading = false }) => {
  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Bookings",
      path: "/dashboard/bookings",
    },
    {
      name: "Cars-List",
      path: "/dashboard/cars",
    },
    {
      name: "Add Car",
      path: "/dashboard/cars/add",
    },
    {
      name: "Car Details",
      path: "/dashboard/cars/details",
    },
    {
      name: "Update Car",
      path: "/dashboard/cars/update",
    },
    {
      name: "Filter Cars",
      path: "/dashboard/filter",
    },
    {
      name: "Booking History",
      path: "/dashboard/bookings/history",
    },
    {
      name: "My Profile",
      path: "/dashboard/profile",
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
    },
  ];

  // Optional Shimmer Skeleton State
  if (isLoading) {
    return (
      <div className="p-4 sm:p-5 space-y-4 animate-pulse select-none">
        <div className="h-7 w-28 bg-slate-200/80 rounded-xl mb-6" />
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="h-10 bg-slate-100 rounded-xl w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-between h-full font-sans select-none">
      <div>
        {/* --- BRAND / TITLE HEADER --- */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              User Panel
            </h2>
          </div>

          <span className="p-1 bg-emerald-50 border border-emerald-200/80 rounded-lg text-emerald-600">
            <Sparkles size={14} className="fill-emerald-500/20" />
          </span>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <nav className="space-y-1.5">
          {menus.map((menu) => {
            const Icon = MENU_ICONS[menu.path] || LayoutDashboard;

            return (
              <NavLink
                end
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ease-in-out cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 font-black"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active Accent Bar Indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-emerald-500 rounded-r-full" />
                    )}

                    <Icon
                      size={17}
                      className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                        isActive
                          ? "text-emerald-400"
                          : "text-slate-400 group-hover:text-slate-700"
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />

                    <span className="truncate tracking-wide">{menu.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* --- FOOTER BADGE --- */}
      <div className="mt-8 pt-4 border-t border-slate-100 px-2">
        <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 text-center">
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
            Dashboard v2.0
          </p>
          <p className="text-[11px] font-extrabold text-emerald-700 mt-0.5">
            Fleet Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);