// Generated from New_staff_training.xlsx. Edit descriptions here.
const CATEGORIES = [
  {
    "key": "Cash",
    "name": "Cash",
    "lead": "1010.00",
    "tagline": "Money the entity holds and controls right now.",
    "why": "Cash gets its own lead schedule because the evidence is external and objective. A bank will tell you the balance directly, and the client's reconciliation either ties to the general ledger or it doesn't. There is almost no judgment involved, which is exactly why it sits at the front of the workpaper index.",
    "risk": "Low valuation risk, higher existence and cutoff risk. Cash is also the account most exposed to misappropriation, so the fraud lens matters more here than the measurement lens.",
    "testing": [
      "Confirm every account directly with the financial institution",
      "Agree the year-end reconciliation to the GL and to the bank statement",
      "Scan outstanding check lists for stale or unusual items",
      "Test disbursements and receipts either side of year end for cutoff"
    ]
  },
  {
    "key": "Cash/Investments",
    "name": "Cash / Investments",
    "lead": null,
    "tagline": "Near-cash that still behaves like an investment.",
    "why": "A certificate of deposit maturing inside twelve months spends like cash, so it sits beside cash on the trial balance. But it is not cash. It carries a fair value, a maturity date, and a counterparty, and for a governmental entity it triggers deposit and investment risk disclosures that operating cash does not. This is also the one area with no lead reference assigned, which is a question for the in-charge before fieldwork starts.",
    "risk": "Valuation and disclosure. The balance is easy to confirm; the harder question is whether the fair value hierarchy and the credit, custodial, concentration, and interest rate risk disclosures are complete.",
    "testing": [
      "Confirm holdings and maturity dates with the custodian",
      "Agree fair value to a third-party pricing source at year end",
      "Recompute accrued interest and trace to investment income",
      "Draft the deposit and investment risk disclosure from the confirmations"
    ]
  },
  {
    "key": "Prepaid",
    "name": "Prepaid",
    "lead": "2510.00",
    "tagline": "Costs paid in advance of the period they benefit.",
    "why": "Prepaids are a period-allocation account. The entity wrote a check this year for something it will consume next year, and the balance sheet holds the unconsumed portion. The audit question is almost never whether the payment happened, it is whether the split between this year and next was calculated correctly.",
    "risk": "Usually immaterial in total, but a common home for expired items nobody wrote off. Watch for balances that never move.",
    "testing": [
      "Obtain the prepaid schedule and foot it",
      "Recompute the amortization on the largest items",
      "Agree a sample to the underlying invoice and policy period",
      "Scan for prepaids whose benefit period has already lapsed"
    ]
  },
  {
    "key": "Revenue",
    "name": "Revenue",
    "lead": "1510.00",
    "tagline": "Every revenue stream, plus the receivables those streams create.",
    "why": "This is the grouping new staff question most, so it is worth being precise. Accounts receivable is a balance sheet asset. It is filed with revenue anyway because receivables and revenue are opposite ends of the same transaction. You confirm a receivable to get evidence that the revenue behind it was real. You test revenue cutoff to get evidence that receivables are complete. Deferred revenue sits here too, for the same reason running the other direction. Splitting these onto separate lead schedules would mean doing one walkthrough twice.",
    "risk": "Occurrence and cutoff on the revenue side, existence and collectibility on the receivable side. For a government, grant revenue adds an eligibility question: revenue is not earned just because cash arrived.",
    "testing": [
      "Confirm a sample of receivable balances directly with customers or grantors",
      "Test revenue cutoff for a window either side of year end",
      "Analytically compare each stream to prior year and to budget",
      "Review the aging for collectibility and assess the allowance",
      "Trace grant revenue to the award agreement and test eligibility of the underlying costs"
    ]
  },
  {
    "key": "Expense",
    "name": "Expense",
    "lead": "2010.00",
    "tagline": "Operating expenses, plus the payables that fund them.",
    "why": "Accounts payable is indexed here for the same reason receivables sit under revenue. The signature payable procedure, the search for unrecorded liabilities, is really an expense completeness test wearing a different hat. You pull disbursements made after year end, ask which ones relate to goods or services received before year end, and every one you find is simultaneously a missing payable and a missing expense. One procedure, two assertions, one workpaper.",
    "risk": "Completeness above all. Understating expenses and payables is the easiest way to make results look better, and unlike revenue it requires no entry at all, just silence.",
    "testing": [
      "Search for unrecorded liabilities using subsequent disbursements and open invoice files",
      "Analytically compare expense lines to prior year, investigating anything that moved against expectation",
      "Vouch a sample of disbursements to invoice, approval, and receiving evidence",
      "Scan for expenses posted in the wrong period around the cutoff date"
    ]
  },
  {
    "key": "Payroll",
    "name": "Payroll",
    "lead": "6010.00",
    "tagline": "Wages, employer taxes, benefits, and every related withholding liability.",
    "why": "Payroll earns a dedicated lead because it is the largest expense in most service and governmental entities, and because it is generated by a system rather than by individual invoices. Nobody vouches 26 pay periods of wages to source documents. You test the controls in the payroll process, tie the totals to filed returns, and use analytics to confirm the total is the size it should be. The withholding liabilities sit here too, because they are a byproduct of the same calculation.",
    "risk": "Accuracy and occurrence. The classic findings are ghost employees, unauthorized rate changes, and accrued wages that stop at the last pay date rather than at year end.",
    "testing": [
      "Reconcile GL wages to the W-3 and the four quarterly 941s",
      "Test a sample of employees to the authorized rate in the personnel file",
      "Recompute the year-end accrual for days worked but not yet paid",
      "Agree withholding liability balances to the subsequent remittance",
      "Analytically test total payroll against headcount and rate changes"
    ]
  },
  {
    "key": "Net Assets",
    "name": "Net Assets",
    "lead": "7010.00",
    "tagline": "The accumulated residual, and the roll-forward that proves it.",
    "why": "Net assets is not really tested on its own. It is proved by movement: prior year audited ending balance, plus the current year change in net assets, equals the current year ending balance. If that equation holds and nothing was posted directly to net assets during the year, the account is done. If something was posted directly, that is where the audit work starts.",
    "risk": "Direct entries to equity that bypass the operating statement, and prior period adjustments that were never disclosed as restatements.",
    "testing": [
      "Roll forward from the prior year audited balance and agree the change to the operating statement",
      "Scan the account activity for any entry that is not the year-end close",
      "Confirm restricted and unrestricted amounts agree to the underlying donor or statutory restrictions"
    ]
  },
  {
    "key": "Capital Assets",
    "name": "Capital Assets",
    "lead": "4010.00",
    "tagline": "Capital outlay and disposals, as the fund-level books record them.",
    "why": "Notice what is missing: there is no asset cost account, no accumulated depreciation, and no depreciation expense. That is the fingerprint of a governmental fund on the modified accrual basis, where buying a truck is an expenditure, not an asset. The depreciated capital asset base exists only in the government-wide conversion entries, maintained on a separate schedule outside this trial balance.",
    "risk": "Completeness of the capital asset listing and the capitalization threshold. Items expensed here need to be picked up in the conversion, and repairs coded as capital outlay need to come back out.",
    "testing": [
      "Agree current year additions to the capital asset roll-forward maintained outside the TB",
      "Vouch the largest additions to invoice and evidence of placement in service",
      "Test that items above and below the capitalization threshold were treated consistently",
      "Recompute gain or loss on disposals and trace proceeds to cash"
    ]
  },
  {
    "key": "Debt",
    "name": "Debt",
    "lead": "5010.00",
    "tagline": "Debt service: what it costs to carry the obligation.",
    "why": "Interest expense belongs here rather than in operating expense because it is a financing cost, not a cost of delivering services. The building lease payment sitting alongside it is the interesting one. If it were an ordinary month-to-month rental it would be an occupancy expense. Grouping it under debt service implies somebody concluded this is a financed arrangement with a lease liability, which is a very different accounting answer.",
    "risk": "Completeness of the obligation and accuracy of the split between principal and interest. Also the classification question above, which changes both the balance sheet and the disclosure.",
    "testing": [
      "Confirm balances and terms directly with the lender or lessor",
      "Recompute interest from the amortization schedule and agree to the GL",
      "Read the debt and lease agreements for covenants and prepare the maturity disclosure",
      "Determine whether each arrangement is a financing or an operating lease, and document the conclusion"
    ]
  }
];

const TICKS = {
  "bs": {
    "mark": "\u2020",
    "label": "Balance sheet account on an income statement lead",
    "detail": "The account is an asset or a liability, but it is filed with the activity that produces it, because the same procedures give evidence about both."
  },
  "grant": {
    "mark": "\u2021",
    "label": "Grant or donor-restricted money",
    "detail": "Carries obligations beyond the financial statement audit. The grant agreement or the donor's stipulation governs how the money could be spent, and that has to be tested on its own terms."
  },
  "noref": {
    "mark": "\u25ca",
    "label": "No lead reference assigned",
    "detail": "Every other area has an index number. These accounts do not, so ask the in-charge where they should be filed before starting work on them."
  },
  "coa": {
    "mark": "\u00a7",
    "label": "Chart of accounts housekeeping",
    "detail": "Not a misstatement, but something that will cause confusion every year until somebody fixes it. Usually a management letter comment."
  }
};

const ACCOUNTS = [
  {
    "acct": 100,
    "name": "Cash - Operating Account",
    "py": 450000,
    "cy": 477000,
    "lead": "1010.00",
    "cls": "Cash",
    "ticks": [],
    "note": "The account everything flows through. Confirm it directly with the bank, agree the year-end reconciliation to the general ledger, and concentrate your cutoff testing here rather than on the savings account."
  },
  {
    "acct": 110,
    "name": "Cash - Savings Account",
    "py": 300000,
    "cy": 315000,
    "lead": null,
    "cls": "Cash",
    "ticks": [],
    "note": "Low activity, so it should reconcile cleanly. Any reconciling item other than posted interest deserves a question, because there is rarely a legitimate reason for one."
  },
  {
    "acct": 120,
    "name": "Investments",
    "py": 250000,
    "cy": 270000,
    "lead": null,
    "cls": "Cash/Investments",
    "ticks": [
      "noref"
    ],
    "note": "Confirm the holdings and the year-end fair value with the custodian. Proving the balance is quick; drafting the credit, custodial, and concentration risk disclosure is the part that takes real time."
  },
  {
    "acct": 130,
    "name": "Short-Term Certificate of Deposit",
    "py": 150000,
    "cy": 154500,
    "lead": null,
    "cls": "Cash/Investments",
    "ticks": [
      "noref"
    ],
    "note": "Liquid enough to sit beside cash, still an investment for disclosure purposes. Check the maturity date, because if it runs past twelve months the classification changes."
  },
  {
    "acct": 1000,
    "name": "Prepaid Expenses",
    "py": 35000,
    "cy": 38500,
    "lead": "2510.00",
    "cls": "Prepaid",
    "ticks": [],
    "note": "One line usually hiding several unrelated policies with different coverage periods. Get the supporting schedule, foot it, and recompute the amortization on the largest items to test the split between this year and next."
  },
  {
    "acct": 1500,
    "name": "Accounts Receivable - Trade",
    "py": 120000,
    "cy": 114000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "note": "Down 5 percent while tax revenue rose, which is the direction you want to see but still needs an explanation. Confirmations sent here test whether the revenue behind the balance occurred, not merely whether the asset exists."
  },
  {
    "acct": 1501,
    "name": "Accounts Receivable - Grants",
    "py": 80000,
    "cy": 92000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs",
      "grant"
    ],
    "note": "Up 15 percent against grant revenue's 10 percent, so receivables are growing faster than the revenue producing them. Ask whether reimbursement requests are going out on time, and test that the underlying costs were eligible and incurred before year end."
  },
  {
    "acct": 1502,
    "name": "Accounts Receivable - Other",
    "py": 15000,
    "cy": 15000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "note": "Unchanged at exactly $15,000 for two years running. A balance that never moves is usually stale, so find out what makes it up before accepting it."
  },
  {
    "acct": 1503,
    "name": "Accounts Receivable - Miscellaneous",
    "py": 8000,
    "cy": 9600,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "note": "The largest percentage move in receivables at 20 percent, though on a small base. Scope it by materiality, but ask what drove it."
  },
  {
    "acct": 1504,
    "name": "Accounts Receivable - General",
    "py": 12000,
    "cy": 10800,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "note": "A vague account name on a declining balance. Ask what actually posts here, because general and catch-all receivables are where reconciling differences quietly settle."
  },
  {
    "acct": 2000,
    "name": "Accounts Payable",
    "py": -95000,
    "cy": -101650,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [
      "bs"
    ],
    "note": "Filed under expense because the search for unrecorded liabilities tests this balance and expense completeness in one procedure. Pull disbursements made after year end and ask which ones relate to goods or services received before it."
  },
  {
    "acct": 1550,
    "name": "Deferred/Unearned Revenue",
    "py": -60000,
    "cy": -63000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "note": "Cash received before it was earned, the mirror image of a receivable. Test that what remains here genuinely has unmet eligibility requirements rather than being revenue somebody forgot to recognize."
  },
  {
    "acct": 6041,
    "name": "Payroll Liabilities:Federal Withholding Payable",
    "py": -18000,
    "cy": -18720,
    "lead": "6010.00",
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Agree to the subsequent federal deposit. Withholding at year end should clear within days of the next deposit deadline, so a balance that lingers is a filing problem rather than a measurement one."
  },
  {
    "acct": 6042,
    "name": "Payroll Liabilities:Medicare Payable",
    "py": -4500,
    "cy": -4680,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Employee-side Medicare withheld and not yet remitted. Recompute against 1.45 percent of wages as a reasonableness check."
  },
  {
    "acct": 6043,
    "name": "Payroll Liabilities:Social Security Payable",
    "py": -19000,
    "cy": -19760,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Employee-side Social Security withholding. Recompute against 6.2 percent of covered wages up to the annual limit; a ratio well off that points to a wage base error."
  },
  {
    "acct": 6045,
    "name": "Payroll Liabilities:State Withholding Payable",
    "py": -7500,
    "cy": -7800,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Agree to the subsequent state remittance, and confirm the filing frequency matches what the state requires at this payroll volume."
  },
  {
    "acct": 6046,
    "name": "Payroll Liabilities:Supplemental Insurance Payable",
    "py": -2000,
    "cy": -2000,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Unchanged at $2,000 across both years. Employee-funded withholding that never moves is worth one question."
  },
  {
    "acct": 6047,
    "name": "Payroll Liabilities:Health Insurance Payable",
    "py": -12000,
    "cy": -12720,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Employee premium withholding awaiting remittance to the carrier. Agree to the subsequent payment and to the carrier invoice."
  },
  {
    "acct": 6048,
    "name": "Payroll Liabilities:Retirement Payable",
    "py": -15000,
    "cy": -15750,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "Employee deferrals withheld but not yet deposited to the plan. Late deposits are a plan compliance issue, so test the timing, not just the amount."
  },
  {
    "acct": 6049,
    "name": "Payroll Liabilities:Company Medicare Payable",
    "py": -4500,
    "cy": -4680,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "The employer match, which should mirror account 6042 almost exactly. It does, and that symmetry is itself part of the test."
  },
  {
    "acct": 6050,
    "name": "Payroll Liabilities:Company Social Security Payable",
    "py": -19000,
    "cy": -19760,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "note": "The employer match to 6043. If the two diverge, something is wrong with either the wage base or the way the entries post."
  },
  {
    "acct": 7000,
    "name": "Opening Balance Equity",
    "py": 0,
    "cy": 0,
    "lead": "7010.00",
    "cls": "Net Assets",
    "ticks": [],
    "note": "Zero, which is exactly what you want. A balance sitting here means an accounting system conversion left a plug that nobody ever allocated to a real account."
  },
  {
    "acct": 7010,
    "name": "Unrestricted Net Assets",
    "py": -2015300,
    "cy": -2079394,
    "lead": "7010.00",
    "cls": "Net Assets",
    "ticks": [],
    "note": "Prove this by roll-forward: prior year audited ending balance, plus the current year change in net assets, equals this number. Then scan the account for anything posted during the year that was not the year-end close."
  },
  {
    "acct": 1510,
    "name": "Tax Revenue",
    "py": -1200000,
    "cy": -1260000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "note": "The largest single line in the entity. Tax revenue is rarely testable transaction by transaction, so analytics carry the weight: compare against the levy, against prior year, and against budget."
  },
  {
    "acct": 1511,
    "name": "Tax Revenue:Other Tax Revenue",
    "py": -85000,
    "cy": -88400,
    "lead": null,
    "cls": "Revenue",
    "ticks": [],
    "note": "A secondary tax stream moving in step with the main one. Confirm it is a genuinely different tax rather than a residual that belongs in 1510."
  },
  {
    "acct": 1512,
    "name": "Grant Revenue",
    "py": -220000,
    "cy": -242000,
    "lead": null,
    "cls": "Revenue",
    "ticks": [
      "grant"
    ],
    "note": "Recognized as eligible costs are incurred, not when the award is signed and not when the cash arrives. Read the award agreements and tie the revenue to the spending behind it in account 2147."
  },
  {
    "acct": 1513,
    "name": "Investment Income - Interest",
    "py": -18000,
    "cy": -19440,
    "lead": null,
    "cls": "Revenue",
    "ticks": [],
    "note": "Should track the balances in accounts 120 and 130. Recompute from the investment confirmations and ask whether the implied yield is plausible."
  },
  {
    "acct": 1514,
    "name": "Other Income",
    "py": -200,
    "cy": -400,
    "lead": null,
    "cls": "Revenue",
    "ticks": [
      "coa"
    ],
    "note": "Four hundred dollars posted directly to a parent account that has a child beneath it. The amount is trivial; the habit is the problem, because it hides activity from anyone reading the account tree."
  },
  {
    "acct": 1516,
    "name": "Other Income:Miscellaneous Revenue",
    "py": -14000,
    "cy": -14280,
    "lead": null,
    "cls": "Revenue",
    "ticks": [],
    "note": "Small and stable. Ask what makes it up once, then scope it out."
  },
  {
    "acct": 1555,
    "name": "Restricted Donation Fund",
    "py": -25000,
    "cy": -28000,
    "lead": null,
    "cls": "Revenue",
    "ticks": [
      "grant"
    ],
    "note": "Donor restrictions follow the money. Trace the receipts to the donor's stipulation, then confirm the spending in account 2144 stayed inside it."
  },
  {
    "acct": 2144,
    "name": "Restricted Donation Fund Expense",
    "py": 18000,
    "cy": 19800,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [
      "grant"
    ],
    "note": "The spending side of the restriction in 1555. Test that the costs charged here were actually permitted by the donor, not merely that they were incurred."
  },
  {
    "acct": 1517,
    "name": "Interest Earned",
    "py": -6000,
    "cy": -6480,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "note": "A second interest account alongside 1513, so establish which balances feed which. Two interest lines usually means two sources, typically bank deposits and investments."
  },
  {
    "acct": 1518,
    "name": "Donations",
    "py": -40000,
    "cy": -46000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "note": "Up 15 percent, the fastest-growing revenue stream in the entity. Determine whether any of it carries donor restrictions that should be sitting in 1555 instead."
  },
  {
    "acct": 1519,
    "name": "Rental Income",
    "py": -30000,
    "cy": -30900,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "note": "The entity collects rent here while making a building lease payment in 5130. Establish whether those two relate to the same property before writing up either one."
  },
  {
    "acct": 2100,
    "name": "Dues and Licenses",
    "py": 9000,
    "cy": 9270,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [],
    "note": "Recurring and predictable. An analytical comparison to prior year is normally enough."
  },
  {
    "acct": 2101,
    "name": "Bank Fees",
    "py": 3500,
    "cy": 3675,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Tie to the bank statements already in hand from the cash work rather than requesting anything new."
  },
  {
    "acct": 2102,
    "name": "Property Taxes",
    "py": 12000,
    "cy": 12360,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A public entity paying property tax is unusual enough to ask about. It may relate to property held outside the entity's exempt purpose."
  },
  {
    "acct": 6109,
    "name": "Payroll Expenses:Wages:Overtime",
    "py": 65000,
    "cy": 68900,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "Overtime running at about 8 percent of salaries. Compare against prior year and against headcount, since sustained overtime usually signals unfilled positions rather than extra work."
  },
  {
    "acct": 2104,
    "name": "Uniforms",
    "py": 14000,
    "cy": 14700,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Routine spending. Worth confirming whether uniform allowances are reported as taxable wages where the rules require it."
  },
  {
    "acct": 2105,
    "name": "Vehicle Maintenance",
    "py": 4000,
    "cy": 4500,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "coa"
    ],
    "note": "Forty-five hundred dollars coded straight to a parent account that has five vehicle accounts beneath it. Somebody charged work to the header instead of to a vehicle, which defeats the point of tracking by vehicle at all."
  },
  {
    "acct": 2106,
    "name": "Vehicle Maintenance:Vehicle 1",
    "py": 8000,
    "cy": 8400,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Vehicle-level detail supports a fleet analytic: cost per vehicle should be broadly comparable unless one is much older or much harder used."
  },
  {
    "acct": 2107,
    "name": "Vehicle Maintenance:Vehicle 2",
    "py": 6500,
    "cy": 6825,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Moving in line with the rest of the fleet at 5 percent. That consistency across all five vehicles is itself mild evidence the coding is reliable."
  },
  {
    "acct": 2108,
    "name": "Vehicle Maintenance:Vehicle 3",
    "py": 7200,
    "cy": 7560,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Mid-fleet by cost and moving with the others. Nothing here calls for work beyond the analytic."
  },
  {
    "acct": 2109,
    "name": "Vehicle Maintenance:Vehicle 4",
    "py": 5800,
    "cy": 6090,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "The cheapest vehicle in the fleet to maintain. If it is also the newest, that is the expected pattern rather than an anomaly."
  },
  {
    "acct": 2110,
    "name": "Vehicle Maintenance:Vehicle 5",
    "py": 9100,
    "cy": 9555,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "The most expensive vehicle to maintain. Ask whether it is the oldest or the hardest used, and whether replacement is already planned."
  },
  {
    "acct": 2112,
    "name": "Professional Fees:Accounting Fees",
    "py": 22000,
    "cy": 22880,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Separate from the audit fee in 2114. Confirm whether the same firm provides both services, because that raises an independence question you need answered."
  },
  {
    "acct": 2113,
    "name": "Professional Fees:Advertising",
    "py": 6000,
    "cy": 6300,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Advertising filed under professional fees, which suggests an agency relationship rather than direct media buys."
  },
  {
    "acct": 2114,
    "name": "Professional Fees:Audit",
    "py": 18000,
    "cy": 18900,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Your own firm's billing. Read the engagement letter, and expect the client's record of the fee to agree to it."
  },
  {
    "acct": 2115,
    "name": "Office Supplies",
    "py": 11000,
    "cy": 11440,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "High volume, low value, immaterial. Analytics only."
  },
  {
    "acct": 2116,
    "name": "Office Technology & Computers",
    "py": 16000,
    "cy": 17600,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 10 percent. Check whether anything in here exceeds the capitalization threshold and should have been coded to capital outlay instead."
  },
  {
    "acct": 2118,
    "name": "Utilities:Waste Disposal",
    "py": 4800,
    "cy": 4992,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A stable service contract. Compare to the contract rate rather than testing individual invoices."
  },
  {
    "acct": 2119,
    "name": "Utilities:Electric - Provider A",
    "py": 14000,
    "cy": 14840,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "One of two electric providers, alongside 2120 and the cooperative in 2123. Multiple providers usually means multiple sites, so establish the locations before treating any of them as unusual."
  },
  {
    "acct": 2120,
    "name": "Utilities:Electric - Provider B",
    "py": 9500,
    "cy": 10070,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "The second electric provider. Different rates across providers are expected; what would be odd is two providers billing for the same location."
  },
  {
    "acct": 2121,
    "name": "Utilities:Water & Sewer",
    "py": 6200,
    "cy": 6510,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "One of two water accounts, paired with 2124. Confirm the split reflects different locations rather than inconsistent coding."
  },
  {
    "acct": 2122,
    "name": "Utilities:Public Works",
    "py": 3400,
    "cy": 3502,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A utility payment to another unit of government. Determine whether that unit is a related party, because the disclosure requirement follows from that."
  },
  {
    "acct": 2123,
    "name": "Utilities:Electric Cooperative",
    "py": 7800,
    "cy": 8268,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A third electric account. Rural cooperatives bill on a different structure, so a different rate here is expected rather than alarming."
  },
  {
    "acct": 2124,
    "name": "Utilities:Water - Municipal",
    "py": 4100,
    "cy": 4305,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "The municipal water account, paired with 2121. Same question about whether the split maps to locations."
  },
  {
    "acct": 2125,
    "name": "Utilities:Natural Gas",
    "py": 8900,
    "cy": 9612,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 8 percent, the largest utility movement. Weather and rate changes both explain it, but the analytic should say which one."
  },
  {
    "acct": 2126,
    "name": "Fuel and Oil",
    "py": 42000,
    "cy": 46200,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 10 percent against a fleet whose maintenance rose only 5 percent. That gap is either price or mileage, and the explanation needs to say which."
  },
  {
    "acct": 2127,
    "name": "Personnel Training",
    "py": 15000,
    "cy": 15750,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "The line this training program itself would be charged to. Predictable and immaterial."
  },
  {
    "acct": 2128,
    "name": "Conventions/Meetings",
    "py": 8000,
    "cy": 8320,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "coa"
    ],
    "note": "Effectively the same account name as 2129. Find out what distinguishes them, because if nothing does, one should be closed and the balances merged."
  },
  {
    "acct": 2129,
    "name": "Conventions & Meetings",
    "py": 6500,
    "cy": 6760,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "coa"
    ],
    "note": "The near-twin of 2128. Duplicate accounts split the history of one activity across two lines, which makes every year-over-year comparison harder than it needs to be."
  },
  {
    "acct": 2131,
    "name": "Insurance:Vehicle & Building",
    "py": 55000,
    "cy": 58850,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 7 percent. Tie to the policy declarations page, which you will want in the file anyway for the insurance disclosure."
  },
  {
    "acct": 2132,
    "name": "Insurance:General & Workers Comp",
    "py": 48000,
    "cy": 51360,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Workers compensation premiums track payroll, so this should move with account 6101, and it does. When it stops moving with payroll, that is the signal."
  },
  {
    "acct": 2133,
    "name": "Telecommunications:Wireless Carrier A",
    "py": 9600,
    "cy": 10080,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A single wireless carrier account. Note that phone reimbursement is handled through payroll in 6103, so the entity does both, which is worth understanding."
  },
  {
    "acct": 2134,
    "name": "Telecommunications:Internet & Cable",
    "py": 7200,
    "cy": 7560,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A stable service contract. Compare against the contract rather than testing invoices."
  },
  {
    "acct": 2136,
    "name": "Contract Services:Software Subscriptions",
    "py": 24000,
    "cy": 26880,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 12 percent, the largest operating expense increase in the trial balance. Recurring software renews itself, so ask which subscriptions were actively reauthorized and which simply rolled over."
  },
  {
    "acct": 2137,
    "name": "Building Maintenance",
    "py": 32000,
    "cy": 33920,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 6 percent. Scan the detail for anything that should have been capitalized as a building improvement instead of expensed."
  },
  {
    "acct": 2139,
    "name": "Household Supplies:Paper Products",
    "py": 3200,
    "cy": 3328,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Consumable and immaterial. Analytics only."
  },
  {
    "acct": 2140,
    "name": "Household Supplies:Food & Beverages",
    "py": 5400,
    "cy": 5670,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Public entities face particular scrutiny on food and beverage spending. Test it against the entity's own policy, not only for mathematical accuracy."
  },
  {
    "acct": 2141,
    "name": "Household Supplies:Cleaning Supplies",
    "py": 2800,
    "cy": 2912,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Consumable and immaterial. Analytics only."
  },
  {
    "acct": 2142,
    "name": "Operations",
    "py": 28000,
    "cy": 29680,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Almost $30,000 in an account called nothing more specific than Operations. Accounts this size with no breakdown deserve a look at the underlying detail."
  },
  {
    "acct": 2150,
    "name": "Special Events & Recognition",
    "py": 12000,
    "cy": 12600,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Employee recognition can be taxable compensation depending on its form and value. Ask what it was actually spent on before concluding it is routine."
  },
  {
    "acct": 2151,
    "name": "Other Expenses",
    "py": 9000,
    "cy": 9270,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A catch-all. Scan the detail for anything large enough or specific enough to belong in a named account."
  },
  {
    "acct": 6101,
    "name": "Payroll Expenses:Wages:Salaries",
    "py": 780000,
    "cy": 819000,
    "lead": "6010.00",
    "cls": "Payroll",
    "ticks": [],
    "note": "The largest line in the trial balance. Reconcile to the W-3 and the four quarterly 941s, and test a sample of employees back to their authorized rate in the personnel file."
  },
  {
    "acct": 6102,
    "name": "Payroll Expenses:Wages:Hourly",
    "py": 240000,
    "cy": 252000,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "Hourly wages at roughly a third of salaries. Test overtime eligibility here, because employee classification is the common finding in this area."
  },
  {
    "acct": 6103,
    "name": "Payroll Expenses:Wages:Phone Reimbursement",
    "py": 6000,
    "cy": 6120,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "Run through payroll rather than as an expense reimbursement, which generally makes it taxable to the employee. Confirm that is how it is being reported."
  },
  {
    "acct": 6105,
    "name": "Payroll Expenses:Payroll Taxes:Social Security - Company",
    "py": 63000,
    "cy": 66150,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "The employer match. Should land near 6.2 percent of covered wages; recompute as a reasonableness test rather than vouching anything."
  },
  {
    "acct": 6106,
    "name": "Payroll Expenses:Payroll Taxes:Medicare - Company",
    "py": 15000,
    "cy": 15750,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "Should land near 1.45 percent of wages with no cap. A one-line recomputation that reliably catches wage base errors."
  },
  {
    "acct": 6107,
    "name": "Payroll Expenses:Payroll Taxes:State Taxes",
    "py": 12000,
    "cy": 12600,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "Employer state unemployment or a similar assessment. The rate is experience-based, so get the current year rate notice rather than assuming last year's rate carried over."
  },
  {
    "acct": 6108,
    "name": "Payroll Expenses:Retirement",
    "py": 95000,
    "cy": 100700,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "note": "Employer retirement contributions on the payroll side. Agree to the contribution formula in the plan document instead of assuming the prior year rate still applies."
  },
  {
    "acct": 2152,
    "name": "Travel",
    "py": 14000,
    "cy": 14700,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [],
    "note": "Test against the entity's written travel policy and confirm approvals. Travel is a reliable finding area precisely because the policy is often stricter than the practice."
  },
  {
    "acct": 6110,
    "name": "Company Benefits:Retirement - Company",
    "py": 42000,
    "cy": 44520,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Employer retirement contributions classified to Expense, while the wage-side retirement in 6108 sits under Payroll. The split follows the account tree rather than the substance, so remember it when totalling compensation."
  },
  {
    "acct": 6111,
    "name": "Company Benefits:IRA - Company",
    "py": 18000,
    "cy": 18900,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "A second employer retirement vehicle alongside 6110. Establish which employees are eligible for which plan, because that drives whether the contributions are correct."
  },
  {
    "acct": 2148,
    "name": "Equipment - Operations",
    "py": 65000,
    "cy": 70200,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Up 8 percent. The capitalization question again: equipment above the threshold belongs in capital outlay, not here."
  },
  {
    "acct": 2149,
    "name": "Prevention Programs",
    "py": 22000,
    "cy": 23100,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Program spending. If any of it is grant-funded, the grant's eligibility rules follow the money into this account."
  },
  {
    "acct": 5100,
    "name": "Capital Expenditures",
    "py": 180000,
    "cy": 153000,
    "lead": "4010.00",
    "cls": "Capital Assets",
    "ticks": [],
    "note": "Down 15 percent. Ask whether a planned purchase slipped into next year rather than concluding capital spending declined. Agree the additions to the capital asset roll-forward kept outside this trial balance."
  },
  {
    "acct": 2147,
    "name": "Grant Expense",
    "py": 210000,
    "cy": 231000,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "grant"
    ],
    "note": "The spending side of grant revenue in 1512, up 10 percent in step with it. That relationship is precisely what makes the grant revenue recognizable."
  },
  {
    "acct": 2146,
    "name": "Community Outreach Program",
    "py": 16000,
    "cy": 16960,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Program spending, moving steadily. Ask whether any portion is donor-restricted and therefore belongs with the restricted fund accounts."
  },
  {
    "acct": 2145,
    "name": "Penalties",
    "py": 2500,
    "cy": 2000,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "note": "Down 20 percent, but penalties are a compliance signal rather than a cost line. Find out what was penalized, and whether the same thing was penalized last year."
  },
  {
    "acct": 4120,
    "name": "Gain/Loss on Sale of Assets",
    "py": -12000,
    "cy": -18000,
    "lead": "4010.00",
    "cls": "Capital Assets",
    "ticks": [],
    "note": "A gain, so assets were sold above their carrying value. Recompute the gain from the disposal schedule and trace the proceeds into cash."
  },
  {
    "acct": 5120,
    "name": "Interest Expense",
    "py": 24000,
    "cy": 22800,
    "lead": "5010.00",
    "cls": "Debt",
    "ticks": [],
    "note": "Falling while the lease payment rises, which is the signature of an amortizing obligation. Recompute from the amortization schedule and agree the split between principal and interest."
  },
  {
    "acct": 5130,
    "name": "Building Lease/Payment",
    "py": 96000,
    "cy": 97920,
    "lead": "5010.00",
    "cls": "Debt",
    "ticks": [],
    "note": "Filed under debt service rather than occupancy expense, which implies a financing arrangement carrying a lease liability. Confirm that conclusion against the agreement, and note the entity also collects rent in 1519."
  }
];

const REASONING = [
  {
    "q": "Accounts Receivable is an asset. Why is it filed with the Revenue lead schedule instead of an asset lead?",
    "options": [
      "Because receivables and revenue are two ends of the same transaction and share the same testing",
      "Because receivables are immaterial and do not warrant their own lead",
      "Because the balance nets to zero once the cash is collected",
      "Because assets get their own lead only when they exceed materiality"
    ],
    "a": 0,
    "why": "Confirming a receivable produces evidence that the revenue behind it occurred. Testing revenue cutoff produces evidence that receivables are complete. Grouping them means one walkthrough and one workpaper instead of two that constantly cross-reference each other."
  },
  {
    "q": "Accounts Payable is filed with the Expense lead. Which procedure is the reason for that grouping?",
    "options": [
      "Confirmation of payable balances with vendors",
      "The search for unrecorded liabilities",
      "Recalculation of the payable aging",
      "Agreeing the payable subledger to the general ledger"
    ],
    "a": 1,
    "why": "The search examines disbursements made after year end to find costs that belonged to the prior period. Every item found is both a missing payable and a missing expense, so one procedure covers assertions on both accounts."
  },
  {
    "q": "The payroll withholding liabilities sit on the Payroll lead rather than with other liabilities. What principle is that?",
    "options": [
      "Liabilities are always filed with the expense that created them",
      "Withholding liabilities are immaterial and get absorbed into the nearest lead",
      "The same procedure that tests payroll expense also gives evidence about the withholding",
      "Payroll liabilities are not audited separately"
    ],
    "a": 2,
    "why": "Same logic as receivables under revenue. Reconciling wages to the 941s tests the expense and the withholding at once, and each liability balance is proved by agreeing it to the subsequent remittance. Testing them apart would mean repeating the reconciliation."
  },
  {
    "q": "This trial balance has no accumulated depreciation and no depreciation expense, only Capital Expenditures. What does that tell you?",
    "options": [
      "The entity leases all of its capital assets",
      "The entity has fully depreciated every asset it owns",
      "Depreciation was omitted in error and needs an audit adjustment",
      "These are fund-level books on the modified accrual basis, where capital outlay is an expenditure"
    ],
    "a": 3,
    "why": "In a governmental fund, buying an asset is an expenditure. The depreciated capital asset base lives only in the government-wide conversion entries, on a schedule kept outside this trial balance."
  },
  {
    "q": "Opening Balance Equity shows a zero balance. How should you read that?",
    "options": [
      "As expected. A balance would suggest a system conversion left an uncleared plug",
      "As a red flag, since the account should carry the prior year balance",
      "As evidence the entity has no equity",
      "As a rounding difference worth investigating"
    ],
    "a": 0,
    "why": "Opening Balance Equity is a conversion artifact. Zero means whoever migrated the books finished the job. A balance means something never got allocated to a real account."
  },
  {
    "q": "Building Lease/Payment is grouped under Debt rather than as an occupancy expense. What does that imply?",
    "options": [
      "The payment is for a month-to-month rental",
      "Somebody concluded this is a financing arrangement rather than an operating rental",
      "The lease is with a related party",
      "The payment was misclassified and belongs in Expense"
    ],
    "a": 1,
    "why": "Debt service grouping implies a lease liability rather than rent expense. That is a materially different accounting answer, so confirm the conclusion against the agreement before accepting it."
  },
  {
    "q": "Which assertion drives most of the testing on the Expense lead?",
    "options": [
      "Existence",
      "Valuation",
      "Completeness",
      "Rights and obligations"
    ],
    "a": 2,
    "why": "Understating expenses requires no entry at all, only silence. That makes completeness the dominant risk, and it is why the search for unrecorded liabilities is the signature procedure here."
  },
  {
    "q": "Grant Revenue rose 10 percent while Accounts Receivable - Grants rose 15 percent. What is the first thing to check?",
    "options": [
      "Whether the grantor confirmed the balance",
      "Whether the receivable is collectible",
      "Whether interest was accrued on the receivable",
      "Whether the eligible costs behind the revenue were incurred before year end"
    ],
    "a": 3,
    "why": "Grant revenue is earned as eligible costs are incurred, not when the award is signed or the cash arrives. Collectibility and confirmation matter, but they come after the recognition question."
  },
  {
    "q": "Payroll is tested through controls, reconciliation to filings, and analytics rather than by vouching individual payments. Why?",
    "options": [
      "Because payroll is generated by a system and the volume makes transaction testing impractical",
      "Because payroll is immaterial to the financial statements",
      "Because payroll records are confidential and cannot be examined",
      "Because the payroll provider's own audit covers it"
    ],
    "a": 0,
    "why": "Wages here run to roughly $1.15M across 26 pay periods. Nobody vouches that transaction by transaction. You test the system producing it, tie totals to the W-3 and the 941s, and use analytics to confirm the total is the size it should be."
  },
  {
    "q": "Vehicle Maintenance (2105) carries a $4,500 balance even though five individual vehicle accounts sit beneath it. What is the issue?",
    "options": [
      "The parent account should always equal the sum of its children",
      "Costs were coded to the header instead of to a specific vehicle, which defeats the tracking",
      "The balance represents an unallocated accrual",
      "Nothing. Parent accounts normally carry their own balances"
    ],
    "a": 1,
    "why": "The whole reason for five vehicle accounts is knowing what each vehicle costs. Anything posted to the parent is invisible to that analysis. It is a management letter comment rather than a misstatement."
  },
  {
    "q": "Every classification in this trial balance maps to a lead reference except Cash/Investments. What should you do?",
    "options": [
      "Assume it rolls into Cash at 1010.00 and proceed",
      "Leave it unreferenced, since the balances are confirmable either way",
      "Assign it a new number yourself so the workpapers can be indexed",
      "Ask the in-charge where it should be filed before starting work in that area"
    ],
    "a": 3,
    "why": "The index reference is how a reviewer finds your work. Guessing means your reference will not agree to the trial balance the client signed off on, and inventing a number creates a reference nobody else in the file recognizes."
  },
  {
    "q": "Conventions/Meetings (2128) and Conventions & Meetings (2129) both carry balances. What is the concern?",
    "options": [
      "The combined balance exceeds the materiality threshold",
      "One of the two must be a posting error",
      "Duplicate accounts split one activity across two lines and distort year-over-year comparison",
      "Two accounts with similar names always indicate fraud"
    ],
    "a": 2,
    "why": "Neither balance is wrong on its own. The problem is that one activity has two homes, so every analytic on either line is incomplete unless you remember to combine them. That is a management letter comment."
  }
];
