function todayString() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

function loadTodayBsDate() {
  const today = todayString();
  const bs = new DateConverter(today).toBs();

  document.getElementById("todayBs").textContent =
    `${bs.year} ${bs.month} ${bs.date} BS`;

  document.getElementById("todayAd").textContent =
    `${today} · ${bs.day}`;
}

function convertAdToBs() {
  const adInput = document.getElementById("adDate").value;

  if (!adInput) {
    alert("Please select an English date.");
    return;
  }

  const bs = new DateConverter(adInput).toBs();

  document.getElementById("adToBsResult").textContent =
    `${bs.year} ${bs.month} ${bs.date} BS`;

  document.getElementById("adToBsDay").textContent = bs.day;
}

function clearForm() {
  document.querySelectorAll("input").forEach(input => {
    input.value = "";
  });

  document.getElementById("adToBsResult").textContent = "Result appears here";
  document.getElementById("adToBsDay").textContent = "Day of week appears here.";

  document.getElementById("bsToAdResult").textContent = "Result appears here";
  document.getElementById("bsToAdDay").textContent = "Day of week appears here.";

}

function convertBsToAd() {
  const year = document.getElementById("bsYear").value;
  const month = document.getElementById("bsMonth").value.padStart(2, "0");
  const day = document.getElementById("bsDay").value.padStart(2, "0");

  if (!year || !month || !day) {
    alert("Please complete BS date fields.");
    return;
  }

  try {
    const ad = new DateConverter(`${year}-${month}-${day}`).toAd();

    document.getElementById("bsToAdResult").textContent =
      `${ad.year}-${String(ad.month).padStart(2, "0")}-${String(ad.date).padStart(2, "0")} AD`;

    document.getElementById("bsToAdDay").textContent = ad.day;
  } catch (error) {
    document.getElementById("bsToAdResult").textContent = "Invalid BS date.";
    document.getElementById("bsToAdDay").textContent = "";
  }
}

loadTodayBsDate();
