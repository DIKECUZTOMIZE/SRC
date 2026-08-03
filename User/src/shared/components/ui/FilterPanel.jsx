/* eslint-disable no-unused-vars */
import React from "react";
import { SlidersHorizontal, RotateCcw, Search, Car, Users } from "lucide-react";

import Input from "./Input";
import Card from "./Card";
import Button from "./Button";
import { Select } from "./Select";

import { filterPanelToken } from "../../styles";
import { cx } from "../../utils/cn";

// Helper utility for combining classes
// let [showBudget, setShowBudget] = "true";
export const FilterPanel = React.memo(
  ({
    // Search
    searchQuery,
    setSearchQuery,

    // Classification
    selectedType,
    setSelectedType,
    carTypes = [],

    // Seats
    selectedSeats,
    setSelectedSeats,

    // Budget
    maxPrice,
    setMaxPrice,
    maxDailybudgetClassName,

    // Actions
    isFilterActive,
    handleResetFilters,
    showBudget,
  }) => {
    return (
      <Card className={filterPanelToken.wrapper}>
        {/* Header Bar */}
        <div className={filterPanelToken.header}>
          <span className={filterPanelToken.titleBadge}>
            <div className={filterPanelToken.titleIcon}>
              <SlidersHorizontal size={14} />
            </div>
            Filter Panel
          </span>

          {isFilterActive && (
            <Button
              variant="danger"
              size="sm"
              onClick={handleResetFilters}
              leftIcon={RotateCcw}
              className="text-xs px-2.5 py-1 rounded-[var(--radius-sm)]"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Inputs Horizontal Grid Layout */}
        <div className={filterPanelToken.grid}>
          {/* 1. Vehicle Name Search */}
          <div className={filterPanelToken.searchCol}>
            <Input
              label="Search Vehicles"
              placeholder="Innova, Swift, Fortuner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={Search}
            />
          </div>

          {/* 2. Vehicle Type Classification */}
          <div className={filterPanelToken.typeCol}>
            <Select
              label="Vehicle Classification"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              options={carTypes}
              leftIcon={Car}
              placeholder={null}
            />
          </div>

          {/* 3. Seating Capacity (Number Input) */}
          <div className={filterPanelToken.seatsCol}>
            <Input
              type="number"
              label="Seating Capacity"
              placeholder="e.g. 5, 7"
              min="1"
              max="20"
              value={selectedSeats || ""}
              onChange={(e) => setSelectedSeats?.(e.target.value)}
              leftIcon={Users}
            />
          </div>

          {/* 4. Max Daily Budget Slider */}
          {showBudget && (
            <div className={filterPanelToken.budgetCol}>
              <div className={filterPanelToken.labelGroup}>
                <label
                  className={cx(
                    filterPanelToken.label,
                    maxDailybudgetClassName,
                  )}
                >
                  Max Daily Budget
                </label>
                <span className={filterPanelToken.badgeValue}>
                  ₹{Number(maxPrice || 0).toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className={filterPanelToken.rangeInput}
              />

              <div className={filterPanelToken.rangeLimits}>
                <span>Min: ₹100</span>
                <span>Max: ₹20,000</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    );
  },
);

FilterPanel.displayName = "FilterPanel";

export default FilterPanel;
