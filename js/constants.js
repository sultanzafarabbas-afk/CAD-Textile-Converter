/**
 * Global conversion factors and application constants
 * All conversions reference millimeters (mm) as the base unit
 */

export const CONVERSION_UNITS = [
  { id: 0, name: "Micron (µm)", factor: 0.001, abbr: "µm" },
  { id: 1, name: "Millimeter (mm)", factor: 1, abbr: "mm" },
  { id: 2, name: "Centimeter (cm)", factor: 10, abbr: "cm" },
  { id: 3, name: "Mil / Thou (mil)", factor: 0.0254, abbr: "mil" },
  { id: 4, name: "Inch (in)", factor: 25.4, abbr: "in" },
  { id: 5, name: "Feet (ft)", factor: 304.8, abbr: "ft" },
  { id: 6, name: "Yard (yd)", factor: 914.4, abbr: "yd" },
  { id: 7, name: "Meter (m)", factor: 1000, abbr: "m" },
  { id: 8, name: "Kilometer (km)", factor: 1000000, abbr: "km" },
  { id: 9, name: "Mile (mi)", factor: 1609344, abbr: "mi" }
];

export const FABRIC_CALC_MODES = {
  kg: {
    id: "kg",
    target: "KG",
    required: ["gsm", "width", "length"],
    formula: "KG = GSM × Width(in) × Length(in) ÷ (1000 × 1550.0031)"
  },
  length: {
    id: "length",
    target: "Length",
    required: ["gsm", "width", "kg"],
    formula: "Length(in) = KG × (1000 × 1550.0031) ÷ (GSM × Width(in))"
  },
  width: {
    id: "width",
    target: "Width",
    required: ["gsm", "length", "kg"],
    formula: "Width(in) = KG × (1000 × 1550.0031) ÷ (GSM × Length(in))"
  },
  gsm: {
    id: "gsm",
    target: "GSM",
    required: ["kg", "width", "length"],
    formula: "GSM = KG × (1000 × 1550.0031) ÷ (Width(in) × Length(in))"
  },
  meterKg: {
    id: "meterKg",
    target: "KG",
    required: ["gsm", "width", "length"],
    formula: "KG = GSM × Width(in) × Length(m) ÷ 1,000,000"
  },
  meter: {
    id: "meter",
    target: "Meter",
    required: ["kg", "gsm", "width"],
    formula: "Length(m) = KG × 1,000,000 ÷ (GSM × Width(in))"
  }
};

// Fabric consumption denominator (constant for all calculations)
export const FABRIC_DENSITY_FACTOR = 1000 * 1550.0031; // 1,550,003.1

// UI Configuration
export const UI_CONFIG = {
  decimalPlaces: 8,
  formatOptions: { maximumFractionDigits: 8 },
  copyFeedbackDuration: 1200, // milliseconds
  maxHistoryItems: 10,
  localStoragePrefix: "cad-textile-"
};

// Error Messages
export const ERROR_MESSAGES = {
  invalidInput: "Please enter valid positive numeric values.",
  missingRequired: "Missing or invalid required value.",
  calculationFailed: "Calculation could not be completed. Check inputs and units.",
  invalidResult: "Result is invalid or out of bounds.",
  clipboardUnavailable: "Clipboard is not available. Copy manually.",
  clipboardDenied: "Permission denied. Cannot copy to clipboard.",
  noClipboardSupport: "Your browser does not support clipboard operations."
};

export const WARNING_MESSAGES = {
  largeNumber: "Result is unusually large. Please verify inputs.",
  smallNumber: "Result is unusually small. Please verify inputs.",
  zeroResult: "Result is zero or negative. Check your inputs."
};
