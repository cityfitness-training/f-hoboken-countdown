// ============================================================
// EDIT THIS FILE to update the countdown page. Never edit index.html.
//
// The page has a toggle at the top: "Maxwell" and "Southend" are the
// two clubs it switches between. Each club has its own block below.
//
// CURRENT MONTH VIEW
//   "Month Label" (just below) is the name of the month being shown, for
//   example "October". Change it once at the start of a new month and the
//   toggle button and every heading on the page update to match.
//   A club shows a second toggle ("Total Count" / the month) only if it has a
//   "Month" block. Maxwell has one. Southend does not, so it stays as it is.
//   Inside "Month", use the same fields as the club's totals but only for
//   that month. Leave a field as "" until you have the number and the page
//   will show a dash instead of a zero.
//
// TERM SPLIT (12 month / 3 month)
//   Each tier can show how many are on 12-month and 3-month terms. Type the
//   numbers in these fields, in the club's totals and/or inside "Month":
//     "Signed Performance+ 12M"   "Signed Performance+ 3M"
//     "Signed Studio+ 12M"        "Signed Studio+ 3M"
//     "Signed Neighborhood 12M"   "Signed Neighborhood 3M"
//   They show under each tier card, plus an overall 12M / 3M line under the
//   cards. If every one of these is left as "" the term lines stay hidden.
//   The tier totals ("Signed Performance+" etc.) are still typed like always.
//   If you ever leave a tier total blank, the page adds its 12M + 3M for you.
//
// PER-CLUB SETTINGS (inside each club block):
//   "Goal"            the signed-agreements target. 0 = not set yet.
//   "Goal Date"       last day to hit the goal, as "YYYY-MM-DD". "" = not set yet.
//   "Campaign Start"  the day that club's presale opened, "YYYY-MM-DD". "" = not set yet.
//   "Status Label"    (optional) the small tag next to the club name.
//   The progress bar needs "Goal". "Days To Goal Date" needs "Goal Date".
//   The Pace Check needs all three. (Total view only.)
//   Inside "Month" you may add an optional "Goal" for the month. With one, the
//   month view shows a progress bar. Without it, it just shows the count.
//
// ACTIVE MEMBERS and CANCELED are both typed in by hand (Active is NOT calculated). Type the canceled count
// in "Canceled" (totals and/or inside "Month"). Blank = not entered yet.
// The cancellation % is worked out for you (Canceled / Signed Agreements).
//
// IMPORTANT: never put commas inside numbers (write 1496, not 1,496).
// ============================================================
const STATS = {
  "Last Updated": "November 16, 8:30AM",
  "Month Label": "November",

  "Maxwell": {
    "Goal": 1200,
    "Goal Date": "2026-10-07",
    "Campaign Start": "2026-07-06",
    "Status Label": "Presale Open",

"Signed Agreements": 1642,
"Active Members": 1600,
"Canceled": 42,
    "Signed Performance+": 568,
    "Signed Studio+": 555,
    "Signed Neighborhood": 477,
    "Signed Performance+ 12M": "549",
    "Signed Performance+ 3M": "19",
    "Signed Studio+ 12M": "539",
    "Signed Studio+ 3M": "16",
    "Signed Neighborhood 12M": "452",
    "Signed Neighborhood 3M": "25",
    "Deposit Signed Count": 507,
    "Reserved Members": 725,
"Total Leads": 4091,
"MTD Leads": "429",
"Meta Leads": "1595",
"Meta MTD Leads": "193",

    // ---- Current month only (Month Label above). Fill these in. ----
    "Month": {
      "Goal": 400,
"Signed Agreements": "86",
"Active Members": "84",
"Canceled": "2",
      "Signed Performance+": "25",
      "Signed Studio+": "25",
      "Signed Neighborhood": "24",
      "Signed Performance+ 12M": "20",
      "Signed Performance+ 3M": "5",
      "Signed Studio+ 12M": "22",
      "Signed Studio+ 3M": "3",
      "Signed Neighborhood 12M": "24",
      "Signed Neighborhood 3M": "10",
      "Deposit Signed Count": "",
      "Reserved Members": "",
      "Total Leads": "429"
    }
  },

  "Southend": {
    "Goal": 1200,
    "Goal Date": "2027-01-01",
    "Campaign Start": "2026-10-18",
    "Status Label": "Presale Open",

"Signed Agreements": 103,
"Active Members": 101,
"Canceled": "2",
    "Signed Performance+": 47,
    "Signed Studio+": 33,
    "Signed Neighborhood": 23,
    "Deposit Signed Count": 0,
    "Reserved Members": 0,
    "Total Leads": 1065,
    "MTD Leads": "228",
    "Meta Leads": "845",
    "Meta MTD Leads": "167"
  }
};
