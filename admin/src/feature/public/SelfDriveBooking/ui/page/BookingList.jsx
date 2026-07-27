/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  ChevronRight,
  FileSearch,
  ChevronLeft,
  Download,
  ArrowUpDown,
  Phone,
  Copy,
  MoreVertical,
  CheckCircle2,
  Clock,
  XCircle,
  IndianRupee,
} from "lucide-react";
import { useBookings } from "../../hook/useBookings";

const BookingList = () => {
  const navigate = useNavigate();
  const { bookings = [], loading } = useBookings();

  // State Management
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Default Sort set to 'createdAt' and 'desc' (Naya Data Upar, Purana Data Neeche)
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const itemsPerPage = 10;

  // Calculate High-Level Metrics
  const stats = useMemo(() => {
    let pending = 0;
    let approved = 0;
    let rejected = 0;
    let revenue = 0;

    bookings.forEach((b) => {
      const status = b.bookingStatus?.toLowerCase();
      if (status === "pending") pending++;
      if (status === "rejected") rejected++;
      if (status === "accepted" || status === "approved") {
        approved++;
        revenue += Number(b.totalAmount) || 0;
      }
    });

    return { total: bookings.length, pending, approved, rejected, revenue };
  }, [bookings]);

  // Combined Filtering & Sorting
  const filteredAndSortedBookings = useMemo(() => {
    let list = bookings.filter((item) => {
      // 1. Status Filter
      if (statusFilter !== "all") {
        const itemStatus = item.bookingStatus?.toLowerCase();
        if (
          statusFilter === "approved" &&
          !(itemStatus === "accepted" || itemStatus === "approved")
        )
          return false;
        if (statusFilter === "pending" && itemStatus !== "pending")
          return false;
        if (statusFilter === "rejected" && itemStatus !== "rejected")
          return false;
      }

      // 2. Search Filter
      const search = searchTerm.toLowerCase().trim();
      if (!search) return true;

      return (
        item.bookingId?.toLowerCase().includes(search) ||
        item.customer?.name?.toLowerCase().includes(search) ||
        item.customer?.mobile?.toString().includes(search) ||
        item.name?.toLowerCase().includes(search)
      );
    });

    // Sorting Logic - Guaranteed Latest/New Data First
    return list.slice().sort((a, b) => {
      let valA = a[sortBy] || a.createdAt || a._id;
      let valB = b[sortBy] || b.createdAt || b._id;

      if (sortBy === "createdAt" || sortBy === "pickupDate") {
        valA = new Date(valA || 0).getTime();
        valB = new Date(valB || 0).getTime();
      } else if (sortBy === "totalAmount") {
        valA = Number(valA) || 0;
        valB = Number(valB) || 0;
      } else if (typeof valA === "string") {
        valA = valA.toLowerCase();
        valB = (valB || "").toLowerCase();
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [bookings, searchTerm, statusFilter, sortBy, sortOrder]);

  // Pagination Computation
  const totalPages =
    Math.ceil(filteredAndSortedBookings.length / itemsPerPage) || 1;
  const paginatedBookings = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedBookings.slice(start, start + itemsPerPage);
  }, [filteredAndSortedBookings, currentPage]);

  // Date Formatting Helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return isNaN(date.getTime())
      ? "N/A"
      : date.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
  };

  // CSV Export Utility
  const handleExportCSV = () => {
    if (!filteredAndSortedBookings.length) return;

    const headers = [
      "Booking ID",
      "Customer Name",
      "Customer Mobile",
      "Car Name",
      "Pickup Date",
      "Duration",
      "Amount (INR)",
      "Status",
    ];

    const rows = filteredAndSortedBookings.map((b) => [
      b.bookingId || "",
      b.customer?.name || "",
      b.customer?.mobile || "",
      b.name || "",
      formatDate(b.pickupDate),
      `${b.quantity || 0} ${b.bookingType || "Days"}`,
      b.totalAmount || 0,
      b.bookingStatus || "N/A",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `bookings_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy ID to Clipboard
  const handleCopyId = (e, id) => {
    e.stopPropagation();
    if (id) {
      navigator.clipboard.writeText(id);
      setActiveMenuId(null);
    }
  };

  /* Status Badges */
  const getStatusBadge = (status) => {
    const val = status?.toLowerCase();
    if (val === "pending") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Pending
        </span>
      );
    }
    if (val === "accepted" || val === "approved") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Approved
        </span>
      );
    }
    if (val === "rejected") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          Rejected
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        {status || "Unknown"}
      </span>
    );
  };

  /* Skeleton Loading State */
  if (loading) {
    return (
      <section className="p-4 sm:p-8 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-20 bg-slate-200/60 rounded-xl animate-pulse"
              />
            ))}
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 bg-slate-100 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="p-4 sm:p-8 bg-slate-50/60 min-h-screen text-slate-800 antialiased"
      onClick={() => setActiveMenuId(null)}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Block & Export */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Bookings Management
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Track, review, and manage customer vehicle reservations
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              disabled={!filteredAndSortedBookings.length}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 shadow-xs px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 transition-all cursor-pointer disabled:opacity-50"
            >
              <Download size={14} />
              Export CSV
            </button>
          </div>
        </div>

        {/* Quick Analytics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 bg-slate-100 rounded-lg text-slate-600">
              <FileSearch size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">
                Total Bookings
              </p>
              <p className="text-lg font-bold text-slate-900">{stats.total}</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">
                Pending Approval
              </p>
              <p className="text-lg font-bold text-amber-700">
                {stats.pending}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Approved</p>
              <p className="text-lg font-bold text-emerald-700">
                {stats.approved}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs flex items-center gap-3">
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-lg">
              <XCircle size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Rejected</p>
              <p className="text-lg font-bold text-rose-700">
                {stats.rejected}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs flex items-center gap-3 col-span-2 lg:col-span-1">
            <div className="p-2.5 bg-slate-900 text-white rounded-lg">
              <IndianRupee size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">
                Approved Revenue
              </p>
              <p className="text-lg font-bold text-slate-900">
                ₹{stats.revenue.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* Filter & Controls Bar */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl w-full lg:w-auto overflow-x-auto">
            {[
              { key: "all", label: "All Bookings" },
              { key: "pending", label: "Pending" },
              { key: "approved", label: "Approved" },
              { key: "rejected", label: "Rejected" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setStatusFilter(tab.key);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  statusFilter === tab.key
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box and Sort Controls */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full lg:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search ID, Customer, Car..."
                className="w-full bg-slate-50/50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl pl-10 pr-4 py-2 text-sm font-medium outline-none focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-900/5 transition-all"
              />
            </div>

            {/* Sort Toggle (Asc/Desc Switch) */}
            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              title={`Sorting: ${sortOrder === "desc" ? "Latest First" : "Oldest First"}`}
              className="p-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-xl transition-all cursor-pointer flex-shrink-0"
            >
              <ArrowUpDown size={16} />
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 pl-6">Booking ID</th>
                  <th className="py-3.5 px-4">Customer</th>
                  <th className="py-3.5 px-4">Vehicle</th>
                  <th className="py-3.5 px-4">Pickup Date</th>
                  <th className="py-3.5 px-4">Duration</th>
                  <th className="py-3.5 px-4">Total Amount</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 pr-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {paginatedBookings.length > 0 ? (
                  paginatedBookings.map((item) => (
                    <tr
                      key={item._id}
                      onClick={() =>
                        navigate(`/dashboard/booking-details/${item._id}`)
                      }
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer group relative"
                    >
                      {/* Booking ID */}
                      <td className="py-4 px-4 pl-6">
                        <span className="font-mono font-semibold text-slate-900 bg-slate-100 px-2 py-1 rounded text-xs">
                          #{item.bookingId || "N/A"}
                        </span>
                      </td>

                      {/* Customer Info */}
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-semibold text-slate-900 truncate max-w-[140px]">
                            {item.customer?.name || "N/A"}
                          </p>
                          <p className="text-xs text-slate-400 font-normal">
                            {item.customer?.mobile || "N/A"}
                          </p>
                        </div>
                      </td>

                      {/* Vehicle & Seats */}
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-semibold text-slate-800 truncate max-w-[140px]">
                            {item.name || "N/A"}
                          </p>
                          <p className="text-xs text-slate-400 font-normal">
                            {item.seats ? `${item.seats} Seater` : "Standard"}
                          </p>
                        </div>
                      </td>

                      {/* Pickup Date */}
                      <td className="py-4 px-4 text-slate-600 text-xs font-medium">
                        {formatDate(item.pickupDate)}
                      </td>

                      {/* Duration */}
                      <td className="py-4 px-4 text-slate-600 text-xs capitalize">
                        {item.quantity
                          ? `${item.quantity} ${item.bookingType || "Days"}`
                          : "N/A"}
                      </td>

                      {/* Total Amount */}
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        ₹{item.totalAmount ?? 0}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        {getStatusBadge(item.bookingStatus)}
                      </td>

                      {/* Action Menu */}
                      <td
                        className="py-4 px-4 pr-6 text-right relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="inline-flex items-center gap-1">
                          <button
                            onClick={() =>
                              setActiveMenuId(
                                activeMenuId === item._id ? null : item._id,
                              )
                            }
                            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                          >
                            <MoreVertical size={16} />
                          </button>
                        </div>

                        {/* Dropdown Popup */}
                        {activeMenuId === item._id && (
                          <div className="absolute right-6 top-12 z-20 w-44 bg-white border border-slate-200 rounded-xl shadow-lg p-1 text-left text-xs font-medium">
                            <button
                              onClick={() =>
                                navigate(
                                  `/dashboard/booking-details/${item._id}`,
                                )
                              }
                              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700"
                            >
                              <ChevronRight size={14} /> View Details
                            </button>
                            {item.bookingId && (
                              <button
                                onClick={(e) => handleCopyId(e, item.bookingId)}
                                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700"
                              >
                                <Copy size={14} /> Copy Booking ID
                              </button>
                            )}
                            {item.customer?.mobile && (
                              <a
                                href={`tel:${item.customer.mobile}`}
                                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700"
                              >
                                <Phone size={14} /> Call Customer
                              </a>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="py-12 text-center">
                      <div className="max-w-xs mx-auto space-y-2">
                        <FileSearch
                          size={32}
                          className="mx-auto text-slate-300"
                        />
                        <p className="text-sm font-semibold text-slate-800">
                          No bookings match your criteria
                        </p>
                        <p className="text-xs text-slate-400">
                          Try adjusting your filters or search terms.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Pagination Bar */}
          {filteredAndSortedBookings.length > itemsPerPage && (
            <div className="px-6 py-3.5 bg-slate-50/50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong>{(currentPage - 1) * itemsPerPage + 1}</strong>{" "}
                to{" "}
                <strong>
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredAndSortedBookings.length,
                  )}
                </strong>{" "}
                of <strong>{filteredAndSortedBookings.length}</strong> entries
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white disabled:opacity-40 hover:bg-slate-100 text-slate-700 transition-all cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="font-medium text-slate-700 px-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white disabled:opacity-40 hover:bg-slate-100 text-slate-700 transition-all cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Responsive Cards */}
        <div className="block md:hidden space-y-3">
          {paginatedBookings.length > 0 ? (
            paginatedBookings.map((item) => (
              <div
                key={item._id}
                onClick={() =>
                  navigate(`/dashboard/booking-details/${item._id}`)
                }
                className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs space-y-3 active:bg-slate-50"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-mono text-xs font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                    #{item.bookingId || "N/A"}
                  </span>
                  {getStatusBadge(item.bookingStatus)}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-slate-400 font-medium">Customer</p>
                    <p className="font-semibold text-slate-800">
                      {item.customer?.name || "N/A"}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {item.customer?.mobile || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium">Vehicle</p>
                    <p className="font-semibold text-slate-800">
                      {item.name || "N/A"}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {item.seats ? `${item.seats} Seater` : "Standard"}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium">Pickup Date</p>
                    <p className="font-medium text-slate-700">
                      {formatDate(item.pickupDate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium">Total Amount</p>
                    <p className="font-bold text-slate-900 text-sm">
                      ₹{item.totalAmount ?? 0}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white border border-slate-200/80 rounded-xl p-8 text-center">
              <p className="text-xs text-slate-500">
                No matching bookings found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingList;
