// =====================================
// Bsun Nepali Date Engine
// Developer: Bisan Subba
// Copyright © Bisan 2026
// =====================================

// Simple demo Nepali date engine

const nepaliMonths = [
  "Baishakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra"
];

function getTodayNepaliDate() {

  const today = new Date();

  // Demo conversion logic
  // (temporary basic system)

  const bsYear = today.getFullYear() + 57;
  const bsMonth = nepaliMonths[today.getMonth()];
  const bsDay = today.getDate();

  return `${bsDay} ${bsMonth} ${bsYear} BS`;
}

function showTodayNepaliDate() {

  const result = document.getElementById("today-nepali-date");

  if (result) {
    result.innerText = getTodayNepaliDate();
  }
}
