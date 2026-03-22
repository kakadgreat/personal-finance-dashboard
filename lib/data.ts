export const netWorthSeries = [
  { month: "Jan", value: 646000 },
  { month: "Feb", value: 654000 },
  { month: "Mar", value: 661500 },
  { month: "Apr", value: 668200 },
  { month: "May", value: 676400 },
  { month: "Jun", value: 683300 },
  { month: "Jul", value: 691900 },
  { month: "Aug", value: 699600 },
  { month: "Sep", value: 708300 },
  { month: "Oct", value: 716500 },
  { month: "Nov", value: 724200 },
  { month: "Dec", value: 733400 }
];

export const spendingSeries = [
  { label: "Housing", value: 1400 },
  { label: "Car", value: 1450 },
  { label: "Utilities", value: 420 },
  { label: "Food", value: 700 },
  { label: "Fitness", value: 160 },
  { label: "Insurance", value: 240 },
  { label: "Other", value: 530 }
];

export const yearlyForecast = [
  { year: "2026", equity: 492000, debt: 506000 },
  { year: "2027", equity: 560000, debt: 463000 },
  { year: "2028", equity: 632000, debt: 414000 },
  { year: "2029", equity: 716000, debt: 359000 },
  { year: "2030", equity: 804000, debt: 298000 },
  { year: "2031", equity: 902000, debt: 226000 },
  { year: "2032", equity: 1006000, debt: 148000 },
  { year: "2033", equity: 1119000, debt: 84000 },
  { year: "2034", equity: 1236000, debt: 18000 },
  { year: "2035", equity: 1365000, debt: 0 }
];

export const recurring = [
  { name: "Canton Mortgage", amount: 1400, due: "1st" },
  { name: "Gordon Rd Mortgage", amount: 1855, due: "1st" },
  { name: "Macan GTS Loan", amount: 1450, due: "12th" },
  { name: "OneLife Fitness", amount: 59, due: "5th" }
];

export const transactions = [
  { name: "IBM Paycheck", type: "Income", amount: 3150 },
  { name: "Gordon Rd Rent", type: "Rental Income", amount: 2300 },
  { name: "Canton Mortgage", type: "Housing", amount: -1400 },
  { name: "Macan Payment", type: "Auto", amount: -1450 },
  { name: "Publix / Costco", type: "Food", amount: -285 },
  { name: "OneLife Fitness", type: "Health", amount: -59 }
];

export const accounts = [
  { name: "Primary Checking", type: "Cash", balance: 24850 },
  { name: "Emergency Fund", type: "Cash", balance: 20000 },
  { name: "Canton House", type: "Asset", balance: 500000 },
  { name: "Gordon Rd Rental", type: "Asset", balance: 310000 },
  { name: "Canton Mortgage", type: "Liability", balance: -180000 },
  { name: "Gordon Rd Mortgage", type: "Liability", balance: -213200 },
  { name: "2023 Macan GTS", type: "Asset", balance: 69000 },
  { name: "Macan Loan", type: "Liability", balance: -64000 }
];

export const builderPrompt = `Build a premium personal finance dashboard inspired by modern wealth-tracking apps. The platform should support: a left navigation with Dashboard, Accounts, Transactions, Cash Flow, Reports, Budget, Recurring, Goals, Investments, Advice, and Settings; net worth tracking; linked assets and liabilities; rental property analysis; mortgage and escrow tracking; recurring bill reminders; goal progress; categorized transactions; cash-flow summaries; scenario planning; and personalized financial recommendations.

Tailor the experience to this user: 51-year-old male, salary about $110k, primary residence in Canton, GA with an estimated $500k value and about $180k mortgage at 5.2% with a minimum payment of $1,400; rental at 699 Gordon Rd, Jasper, GA valued around $310k with principal balance $213,200 at 8.0%, maturity Jan 1 2055, taxes about $2,191/year, insurance about $1,266/year, escrow about $265/month, and rent of $2,300/month; 2023 Porsche Macan GTS with payment about $1,450/month and estimated value around $69k; $20k available cash; strong interest in mortgage recasting, debt optimization, future rental expansion, and 10-year net-worth growth.

The app should show exact, practical advice for this user: prioritize higher-rate debt, compare recast vs. additional rental purchase, show monthly surplus after rent, show personal out-of-pocket obligations, display debt-free projection, and include a scenario module for partner capital of $90k-$100k. Use a clean affluent aesthetic, rounded cards, subtle motion, charts, and clear labels. Make it feel like a polished production MVP that could be deployed to Netlify or Vercel.`;
