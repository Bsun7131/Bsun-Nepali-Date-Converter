function formatDay(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long"
  });
}

function loadTodayBsDate() {

  const today = new Date();

  const bsDate = new NepaliDate(today);

  document.getElementById("todayBs").textContent =
    `${bsDate.getYear()} ${bsDate.getMonthName()} ${bsDate.getDate()}`;

  document.getElementById("todayAd").textContent =
    `${today.toDateString()} · ${formatDay(today)}`;
}

function convertAdToBs() {

  const adInput = document.getElementById("adDate").value;

  if (!adInput) {
    alert("Please select an English date.");
    return;
  }

  const adDate = new Date(adInput);

  const bsDate = new NepaliDate(adDate);

  document.getElementById("adToBsResult").textContent =
    `${bsDate.getYear()} ${bsDate.getMonthName()} ${bsDate.getDate()}`;

  document.getElementById("adToBsDay").textContent =
    formatDay(adDate);
}

function convertBsToAd() {

  const year = parseInt(
    document.getElementById("bsYear").value
  );

  const month = parseInt(
    document.getElementById("bsMonth").value
  ) - 1;

  const day = parseInt(
    document.getElementById("bsDay").value
  );

  if (!year || !day) {
    alert("Please complete BS date fields.");
    return;
  }

  try {

    const bsDate = new NepaliDate(
      year,
      month,
      day
    );

    const adDate = bsDate.toJsDate();

    document.getElementById("bsToAdResult").textContent =
      adDate.toDateString();

    document.getElementById("bsToAdDay").textContent =
      formatDay(adDate);

  } catch (error) {

    document.getElementById("bsToAdResult").textContent =
      "Invalid BS date.";

    document.getElementById("bsToAdDay").textContent =
      "";
  }
}

loadTodayBsDate();
