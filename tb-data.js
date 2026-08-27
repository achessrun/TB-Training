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
    "row": 10,
    "acct": 100,
    "name": "Cash - Operating Account",
    "py": 450000,
    "un": 477000,
    "aje": 0,
    "cy": 477000,
    "lead": "1010.00",
    "cls": "Cash",
    "ticks": [],
    "why": "Cash because it is a demand deposit: available immediately, at face value, with no maturity date and no valuation judgment. That combination is exactly what separates the Cash area from Cash/Investments.",
    "risk": "Carries the entity's entire disbursement volume, which makes existence and cutoff the exposures. Cash is also the account most exposed to misappropriation."
  },
  {
    "row": 11,
    "acct": 110,
    "name": "Cash - Savings Account",
    "py": 300000,
    "un": 315000,
    "aje": 0,
    "cy": 315000,
    "lead": null,
    "cls": "Cash",
    "ticks": [],
    "why": "Cash for the same reason as the operating account \u2014 withdrawable at face value on demand. Earning interest does not make it an investment; having a maturity date would.",
    "risk": "Low activity means reconciling items are rare, so any that do appear carry more weight than they would in the operating account."
  },
  {
    "row": 12,
    "acct": 120,
    "name": "Investments",
    "py": 250000,
    "un": 270000,
    "aje": 0,
    "cy": 270000,
    "lead": null,
    "cls": "Cash/Investments",
    "ticks": [
      "noref"
    ],
    "why": "Not Cash, because it carries a fair value that can move and a counterparty that can fail. Not filed with a pure investment lead either, because the entity treats it as available liquidity. The hybrid label is the trial balance placing it between the two.",
    "risk": "Valuation and disclosure rather than existence. The fair value hierarchy and the deposit and investment risk disclosures are where the work sits, and this area has no lead reference assigned."
  },
  {
    "row": 13,
    "acct": 130,
    "name": "Short-Term Certificate of Deposit",
    "py": 150000,
    "un": 154500,
    "aje": 0,
    "cy": 154500,
    "lead": null,
    "cls": "Cash/Investments",
    "ticks": [
      "noref"
    ],
    "why": "Grouped with investments rather than cash because it has a maturity date. A term deposit cannot be drawn at face value on demand, and that is the line between the two areas even when the term is short.",
    "risk": "Check the maturity date. A term running past twelve months changes both the classification and the disclosure."
  },
  {
    "row": 14,
    "acct": 1000,
    "name": "Prepaid Expenses",
    "py": 35000,
    "un": 38500,
    "aje": 0,
    "cy": 38500,
    "lead": "2510.00",
    "cls": "Prepaid",
    "ticks": [],
    "why": "An asset rather than an expense because the entity has paid for something it has not yet consumed. It gets its own lead rather than sitting with expenses because the balance sheet holds the unconsumed portion, and testing that split is a different exercise from testing the spending.",
    "risk": "The balance rests entirely on a period allocation. An expired policy left on the schedule overstates assets and understates expense by the same amount."
  },
  {
    "row": 15,
    "acct": 1500,
    "name": "Accounts Receivable - Trade",
    "py": 120000,
    "un": 114000,
    "aje": 0,
    "cy": 114000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "why": "Revenue rather than an asset lead because a trade receivable is the unpaid half of a revenue transaction. Confirming the balance and testing the revenue behind it are the same evidence.",
    "risk": "Existence and collectibility on the balance, occurrence on the revenue behind it. A movement out of step with the revenue stream it comes from needs explaining before either number is accepted."
  },
  {
    "row": 16,
    "acct": 1501,
    "name": "Accounts Receivable - Grants",
    "py": 80000,
    "un": 92000,
    "aje": 0,
    "cy": 92000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs",
      "grant"
    ],
    "why": "Revenue, and specifically the receivable side of grant revenue: amounts earned by incurring eligible costs but not yet reimbursed. It follows the revenue because the recognition test is the same test.",
    "risk": "Recognition comes before collectibility here. A grant receivable can be genuinely owed and still not be revenue, if the eligible costs were not incurred by year end."
  },
  {
    "row": 17,
    "acct": 1502,
    "name": "Accounts Receivable - Other",
    "py": 15000,
    "un": 15000,
    "aje": 0,
    "cy": 15000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "why": "Revenue, on the same principle as trade receivables, though the underlying stream is not named in the account title.",
    "risk": "An unnamed receivable that has not moved in two years. Static balances may no longer be collectible, or may not be receivables at all."
  },
  {
    "row": 18,
    "acct": 1503,
    "name": "Accounts Receivable - Miscellaneous",
    "py": 8000,
    "un": 9600,
    "aje": 0,
    "cy": 9600,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "why": "Revenue. Miscellaneous receivables still originate in a revenue transaction, and that origin is what determines the area.",
    "risk": "The largest proportional movement among the receivables, on a small base. Materiality governs the response, but the composition should still be understood."
  },
  {
    "row": 19,
    "acct": 1504,
    "name": "Accounts Receivable - General",
    "py": 12000,
    "un": 10800,
    "aje": 0,
    "cy": 10800,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "why": "Revenue, by the same logic. Classification follows what created the balance, not how specifically the account happens to be named.",
    "risk": "A general catch-all receivable is where unreconciled differences settle. Establish what it comprises before accepting it."
  },
  {
    "row": 20,
    "acct": 2000,
    "name": "Accounts Payable",
    "py": -95000,
    "un": -101650,
    "aje": 0,
    "cy": -101650,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [
      "bs"
    ],
    "why": "Expense rather than a liability lead, because a payable is an expense incurred and not yet paid. The search for unrecorded liabilities tests both at once, so they share a workpaper.",
    "risk": "Completeness. An understated payable understates expense by the same amount, and neither requires an entry to conceal."
  },
  {
    "row": 21,
    "acct": 1550,
    "name": "Deferred/Unearned Revenue",
    "py": -60000,
    "un": -63000,
    "aje": 0,
    "cy": -63000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [
      "bs"
    ],
    "why": "Revenue, even though it is a liability, because it is revenue that has not been earned yet. Same area as a receivable, running in the opposite direction.",
    "risk": "Cutoff in both directions. Amounts left here with no remaining obligation are unrecorded revenue; amounts recognized early are overstated revenue."
  },
  {
    "row": 22,
    "acct": 6041,
    "name": "Payroll Liabilities:Federal Withholding Payable",
    "py": -18000,
    "un": -18720,
    "aje": 0,
    "cy": -18720,
    "lead": "6010.00",
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll, though it is a liability, because it is produced by the same payroll calculation that produces the expense. Reconciling wages to the 941s tests both at once.",
    "risk": "Should clear at the next deposit deadline. A balance that persists points to a remittance or filing problem rather than a measurement error."
  },
  {
    "row": 23,
    "acct": 6042,
    "name": "Payroll Liabilities:Medicare Payable",
    "py": -4500,
    "un": -4680,
    "aje": 0,
    "cy": -4680,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. Employee-side Medicare withheld from wages and held pending remittance \u2014 a byproduct of the payroll run, so it files with payroll.",
    "risk": "Recomputable against 1.45 percent of wages. A ratio away from that points to a wage base error."
  },
  {
    "row": 24,
    "acct": 6043,
    "name": "Payroll Liabilities:Social Security Payable",
    "py": -19000,
    "un": -19760,
    "aje": 0,
    "cy": -19760,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll, on the same basis. Withholding is not a separate transaction; it is part of the act of paying wages.",
    "risk": "Recomputable against 6.2 percent of covered wages up to the annual limit. The limit is what makes this ratio drift legitimately, so establish the wage base before drawing conclusions."
  },
  {
    "row": 25,
    "acct": 6045,
    "name": "Payroll Liabilities:State Withholding Payable",
    "py": -7500,
    "un": -7800,
    "aje": 0,
    "cy": -7800,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. State withholding files alongside federal withholding because a single payroll process generates both.",
    "risk": "Agree to the subsequent remittance, and confirm the filing frequency matches what the state requires at this payroll volume."
  },
  {
    "row": 26,
    "acct": 6046,
    "name": "Payroll Liabilities:Supplemental Insurance Payable",
    "py": -2000,
    "un": -2000,
    "aje": 0,
    "cy": -2000,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. Employee-funded insurance withheld through the payroll process rather than paid by the employee directly.",
    "risk": "Unchanged across both years. Withholding that does not move with headcount or premium is worth understanding."
  },
  {
    "row": 27,
    "acct": 6047,
    "name": "Payroll Liabilities:Health Insurance Payable",
    "py": -12000,
    "un": -12720,
    "aje": 0,
    "cy": -12720,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. Employee premium withholding held pending remittance to the insurance carrier.",
    "risk": "Agree to the subsequent payment and the carrier invoice. A balance exceeding one period's withholding suggests amounts were not remitted."
  },
  {
    "row": 28,
    "acct": 6048,
    "name": "Payroll Liabilities:Retirement Payable",
    "py": -15000,
    "un": -15750,
    "aje": 0,
    "cy": -15750,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. Employee deferrals withheld from wages and owed to the retirement plan.",
    "risk": "Deposit timing is a plan compliance requirement, not only an accounting one. Late deposits are reportable regardless of amount."
  },
  {
    "row": 29,
    "acct": 6049,
    "name": "Payroll Liabilities:Company Medicare Payable",
    "py": -4500,
    "un": -4680,
    "aje": 0,
    "cy": -4680,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. The employer's share of Medicare \u2014 an employer cost rather than a withholding, but arising from the same calculation.",
    "risk": "Should mirror 6042 closely. Divergence between the employee and employer sides indicates a calculation problem."
  },
  {
    "row": 30,
    "acct": 6050,
    "name": "Payroll Liabilities:Company Social Security Payable",
    "py": -19000,
    "un": -19760,
    "aje": 0,
    "cy": -19760,
    "lead": null,
    "cls": "Payroll",
    "ticks": [
      "bs"
    ],
    "why": "Payroll. The employer's share of Social Security, matching the employee withholding in 6043.",
    "risk": "Should mirror 6043, subject to the wage base. A gap between them points to either the wage base or the posting."
  },
  {
    "row": 31,
    "acct": 7000,
    "name": "Opening Balance Equity",
    "py": 0,
    "un": 0,
    "aje": 0,
    "cy": 0,
    "lead": "7010.00",
    "cls": "Net Assets",
    "ticks": [],
    "why": "Net assets. A conversion account created when the books were migrated between systems, not a real component of equity.",
    "risk": "Zero is the expected balance. Anything sitting here is an unallocated plug left over from that conversion."
  },
  {
    "row": 32,
    "acct": 7010,
    "name": "Unrestricted Net Assets",
    "py": -2015300,
    "un": -2079394,
    "aje": 0,
    "cy": -2079394,
    "lead": "7010.00",
    "cls": "Net Assets",
    "ticks": [],
    "why": "Net assets: the accumulated residual of every prior year's activity. It is not tested directly, it is proved by movement.",
    "risk": "Direct entries to equity bypass the operating statement. Any activity other than the year-end close needs explaining, and prior period adjustments need restatement disclosure."
  },
  {
    "row": 33,
    "acct": 1510,
    "name": "Tax Revenue",
    "py": -1200000,
    "un": -1260000,
    "aje": 0,
    "cy": -1260000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue, and the entity's principal operating stream. Tax revenue is nonexchange \u2014 no customer and no invoice \u2014 which is why the testing rests on the levy and on analytics rather than transaction sampling.",
    "risk": "The largest single line in the trial balance, so a small percentage error is material. Accuracy is proved against the levy, not against individual receipts."
  },
  {
    "row": 34,
    "acct": 1511,
    "name": "Tax Revenue:Other Tax Revenue",
    "py": -85000,
    "un": -88400,
    "aje": 0,
    "cy": -88400,
    "lead": null,
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue, a secondary tax stream. It sits in the same area because the recognition basis is identical to 1510.",
    "risk": "Confirm it represents a distinct tax rather than a residual belonging in 1510. Separate accounts should mean separate sources."
  },
  {
    "row": 35,
    "acct": 1512,
    "name": "Grant Revenue",
    "py": -220000,
    "un": -242000,
    "aje": 0,
    "cy": -242000,
    "lead": null,
    "cls": "Revenue",
    "ticks": [
      "grant"
    ],
    "why": "Revenue, but earned by performance rather than by billing. Grant revenue is recognized as eligible costs are incurred, which ties it to the spending in 2147 rather than to any receipt of cash.",
    "risk": "Recognition timing. Cash received ahead of eligible spending is deferred revenue, not revenue, so this account and 1550 have to be tested together."
  },
  {
    "row": 36,
    "acct": 1513,
    "name": "Investment Income - Interest",
    "py": -18000,
    "un": -19440,
    "aje": 0,
    "cy": -19440,
    "lead": null,
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue, generated by the balances in 120 and 130 rather than by operations. Nonoperating revenue is still revenue, so it stays in this area.",
    "risk": "Should be recomputable from the investment confirmations. Income that will not reconcile to the underlying balances means something is missing on one side or the other."
  },
  {
    "row": 37,
    "acct": 1514,
    "name": "Other Income",
    "py": -200,
    "un": -400,
    "aje": 0,
    "cy": -400,
    "lead": null,
    "cls": "Revenue",
    "ticks": [
      "coa"
    ],
    "why": "Revenue. A parent account carrying a balance of its own despite having a child beneath it.",
    "risk": "Amounts posted to a header are excluded from any analysis built on the child accounts."
  },
  {
    "row": 38,
    "acct": 1516,
    "name": "Other Income:Miscellaneous Revenue",
    "py": -14000,
    "un": -14280,
    "aje": 0,
    "cy": -14280,
    "lead": null,
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue. Receipts that do not belong to any named stream, recorded beneath the Other Income parent.",
    "risk": null
  },
  {
    "row": 39,
    "acct": 1555,
    "name": "Restricted Donation Fund",
    "py": -25000,
    "un": -28000,
    "aje": 0,
    "cy": -28000,
    "lead": null,
    "cls": "Revenue",
    "ticks": [
      "grant"
    ],
    "why": "Revenue, with a donor restriction attached. It stays in the revenue area because it is still revenue; the restriction governs how the money may be spent, not what the receipt is.",
    "risk": "The restriction has to be honored and disclosed. Test against the donor's stipulation and against the corresponding spending in 2144."
  },
  {
    "row": 40,
    "acct": 2144,
    "name": "Restricted Donation Fund Expense",
    "py": 18000,
    "un": 19800,
    "aje": 0,
    "cy": 19800,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [
      "grant"
    ],
    "why": "Expense. The spending is a period cost regardless of the restriction attached to its funding, which is why it sits here while the revenue sits in 1555.",
    "risk": "The restriction governs what the money could be spent on. Test permissibility against the donor's stipulation, not merely that the cost was incurred."
  },
  {
    "row": 41,
    "acct": 1517,
    "name": "Interest Earned",
    "py": -6000,
    "un": -6480,
    "aje": 0,
    "cy": -6480,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue, a second interest account alongside 1513. Two interest accounts usually means two sources, and the classification is the same for both.",
    "risk": "Establish which balances feed which account, so the recomputation runs against the right principal."
  },
  {
    "row": 42,
    "acct": 1518,
    "name": "Donations",
    "py": -40000,
    "un": -46000,
    "aje": 0,
    "cy": -46000,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue. Donations are nonexchange \u2014 nothing is given in return \u2014 which places them here alongside tax revenue rather than with exchange transactions.",
    "risk": "Donor restrictions travel with the money. Restricted amounts recorded here rather than in 1555 would misstate the restriction disclosure."
  },
  {
    "row": 43,
    "acct": 1519,
    "name": "Rental Income",
    "py": -30000,
    "un": -30900,
    "aje": 0,
    "cy": -30900,
    "lead": "1510.00",
    "cls": "Revenue",
    "ticks": [],
    "why": "Revenue. Rent received is an exchange transaction, earned across the occupancy period rather than at the moment of payment.",
    "risk": "Recognition across the lease term. Amounts collected in advance of the period they cover belong in deferred revenue."
  },
  {
    "row": 44,
    "acct": 2100,
    "name": "Dues and Licenses",
    "py": 9000,
    "un": 9270,
    "aje": 0,
    "cy": 9270,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed within the period the dues or license term covers, leaving no asset at year end.",
    "risk": null
  },
  {
    "row": 45,
    "acct": 2101,
    "name": "Bank Fees",
    "py": 3500,
    "un": 3675,
    "aje": 0,
    "cy": 3675,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A cost of maintaining the accounts in the Cash area, but a service charge rather than a financing cost, which is what keeps it out of Debt.",
    "risk": null
  },
  {
    "row": 46,
    "acct": 2102,
    "name": "Property Taxes",
    "py": 12000,
    "un": 12360,
    "aje": 0,
    "cy": 12360,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A period cost of holding property rather than a cost of acquiring it, which is why it is expensed instead of capitalized.",
    "risk": "A public entity paying property tax is worth understanding, since it implies property held outside the exempt purpose."
  },
  {
    "row": 47,
    "acct": 6109,
    "name": "Payroll Expenses:Wages:Overtime",
    "py": 65000,
    "un": 68900,
    "aje": 0,
    "cy": 68900,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll. Overtime is wages, distinguished from base pay by the rate applied rather than by its nature.",
    "risk": "Overtime concentrated in a few employees, or approved after the fact, is where the control weakness usually shows. Test authorization, not only calculation."
  },
  {
    "row": 48,
    "acct": 2104,
    "name": "Uniforms",
    "py": 14000,
    "un": 14700,
    "aje": 0,
    "cy": 14700,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed through use and below any threshold that would make capitalization appropriate.",
    "risk": "Uniform allowances paid to employees, rather than uniforms purchased by the entity, may be taxable wages."
  },
  {
    "row": 49,
    "acct": 2105,
    "name": "Vehicle Maintenance",
    "py": 4000,
    "un": 4500,
    "aje": 0,
    "cy": 4500,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "coa"
    ],
    "why": "Expense. Maintenance restores a vehicle to working order rather than extending its life or capability, and that distinction is what keeps it out of Capital Assets.",
    "risk": "Carries a balance despite having five vehicle accounts beneath it. Costs posted to the header are invisible to any per-vehicle analysis."
  },
  {
    "row": 50,
    "acct": 2106,
    "name": "Vehicle Maintenance:Vehicle 1",
    "py": 8000,
    "un": 8400,
    "aje": 0,
    "cy": 8400,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Capitalization requires extending useful life or adding capability; routine service restores existing capability, which falls on the expense side of that line.",
    "risk": null
  },
  {
    "row": 51,
    "acct": 2107,
    "name": "Vehicle Maintenance:Vehicle 2",
    "py": 6500,
    "un": 6825,
    "aje": 0,
    "cy": 6825,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. The per-vehicle split exists so the fleet can be compared, not because any one vehicle's costs are classified differently.",
    "risk": null
  },
  {
    "row": 52,
    "acct": 2108,
    "name": "Vehicle Maintenance:Vehicle 3",
    "py": 7200,
    "un": 7560,
    "aje": 0,
    "cy": 7560,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense, on the same test as the rest of the fleet: does the work restore the vehicle, or improve it?",
    "risk": null
  },
  {
    "row": 53,
    "acct": 2109,
    "name": "Vehicle Maintenance:Vehicle 4",
    "py": 5800,
    "un": 6090,
    "aje": 0,
    "cy": 6090,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. The smallest maintenance balance in the fleet, though the classification test is the nature of the work rather than its size.",
    "risk": null
  },
  {
    "row": 54,
    "acct": 2110,
    "name": "Vehicle Maintenance:Vehicle 5",
    "py": 9100,
    "un": 9555,
    "aje": 0,
    "cy": 9555,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. The largest maintenance balance in the fleet, but size alone never triggers capitalization.",
    "risk": "Large maintenance charges can conceal component replacements that extend useful life, which would belong in capital outlay."
  },
  {
    "row": 55,
    "acct": 2112,
    "name": "Professional Fees:Accounting Fees",
    "py": 22000,
    "un": 22880,
    "aje": 0,
    "cy": 22880,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A professional service consumed as it is delivered.",
    "risk": "If the same firm provides accounting services and the audit, independence has to be evaluated and documented."
  },
  {
    "row": 56,
    "acct": 2113,
    "name": "Professional Fees:Advertising",
    "py": 6000,
    "un": 6300,
    "aje": 0,
    "cy": 6300,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Advertising is expensed as incurred and creates no asset, even where the benefit is expected to persist beyond the period.",
    "risk": null
  },
  {
    "row": 57,
    "acct": 2114,
    "name": "Professional Fees:Audit",
    "py": 18000,
    "un": 18900,
    "aje": 0,
    "cy": 18900,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A professional service, and the account recording your own firm's fee.",
    "risk": "Should agree to the engagement letter."
  },
  {
    "row": 58,
    "acct": 2115,
    "name": "Office Supplies",
    "py": 11000,
    "un": 11440,
    "aje": 0,
    "cy": 11440,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed in the period, and below any threshold that would justify tracking them as inventory.",
    "risk": null
  },
  {
    "row": 59,
    "acct": 2116,
    "name": "Office Technology & Computers",
    "py": 16000,
    "un": 17600,
    "aje": 0,
    "cy": 17600,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense, which is the judgment worth examining. Computers are capitalizable by nature, so expensing them implies each purchase fell below the capitalization threshold.",
    "risk": "The threshold applies purchase by purchase, not to the account total. Items above it expensed here would understate capital assets."
  },
  {
    "row": 60,
    "acct": 2118,
    "name": "Utilities:Waste Disposal",
    "py": 4800,
    "un": 4992,
    "aje": 0,
    "cy": 4992,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A service consumed continuously under contract, with nothing left to carry forward.",
    "risk": null
  },
  {
    "row": 61,
    "acct": 2119,
    "name": "Utilities:Electric - Provider A",
    "py": 14000,
    "un": 14840,
    "aje": 0,
    "cy": 14840,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Utilities are consumed as delivered and cannot be stored, which makes them a pure period cost.",
    "risk": null
  },
  {
    "row": 62,
    "acct": 2120,
    "name": "Utilities:Electric - Provider B",
    "py": 9500,
    "un": 10070,
    "aje": 0,
    "cy": 10070,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Same treatment as the other utility accounts; separate provider accounts reflect billing sources rather than different classifications.",
    "risk": null
  },
  {
    "row": 63,
    "acct": 2121,
    "name": "Utilities:Water & Sewer",
    "py": 6200,
    "un": 6510,
    "aje": 0,
    "cy": 6510,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Water and sewer service consumed within the period.",
    "risk": null
  },
  {
    "row": 64,
    "acct": 2122,
    "name": "Utilities:Public Works",
    "py": 3400,
    "un": 3502,
    "aje": 0,
    "cy": 3502,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A utility purchased from another unit of government, which does not change how it is classified.",
    "risk": "If the providing government is a related party, the relationship requires disclosure."
  },
  {
    "row": 65,
    "acct": 2123,
    "name": "Utilities:Electric Cooperative",
    "py": 7800,
    "un": 8268,
    "aje": 0,
    "cy": 8268,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A cooperative bills on a different rate structure, but the service is consumed the same way.",
    "risk": null
  },
  {
    "row": 66,
    "acct": 2124,
    "name": "Utilities:Water - Municipal",
    "py": 4100,
    "un": 4305,
    "aje": 0,
    "cy": 4305,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. The municipal water account, paired with 2121 by service provider rather than by classification.",
    "risk": null
  },
  {
    "row": 67,
    "acct": 2125,
    "name": "Utilities:Natural Gas",
    "py": 8900,
    "un": 9612,
    "aje": 0,
    "cy": 9612,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Natural gas consumed within the period.",
    "risk": null
  },
  {
    "row": 68,
    "acct": 2126,
    "name": "Fuel and Oil",
    "py": 42000,
    "un": 46200,
    "aje": 0,
    "cy": 46200,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Fuel is consumed on use. Any quantity held at year end would be inventory, which this entity does not appear to track.",
    "risk": "High volume and low unit control. Fuel cards and unmetered dispensing are recognized misappropriation routes."
  },
  {
    "row": 69,
    "acct": 2127,
    "name": "Personnel Training",
    "py": 15000,
    "un": 15750,
    "aje": 0,
    "cy": 15750,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Training benefits the entity but creates no recognizable asset, so it is expensed as delivered.",
    "risk": null
  },
  {
    "row": 70,
    "acct": 2128,
    "name": "Conventions/Meetings",
    "py": 8000,
    "un": 8320,
    "aje": 0,
    "cy": 8320,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "coa"
    ],
    "why": "Expense. Travel and meeting costs consumed as incurred.",
    "risk": "Near-duplicate of 2129. One activity recorded across two accounts makes analysis of either account incomplete on its own."
  },
  {
    "row": 71,
    "acct": 2129,
    "name": "Conventions & Meetings",
    "py": 6500,
    "un": 6760,
    "aje": 0,
    "cy": 6760,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "coa"
    ],
    "why": "Expense, identical in nature to 2128.",
    "risk": "See 2128. Until the two are merged or genuinely distinguished, both have to be read together."
  },
  {
    "row": 72,
    "acct": 2131,
    "name": "Insurance:Vehicle & Building",
    "py": 55000,
    "un": 58850,
    "aje": 0,
    "cy": 58850,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Coverage is consumed across the policy period. Any premium paid for coverage beyond year end belongs in prepaid rather than here.",
    "risk": "The split between expense and prepaid depends on the policy period. Confirm the allocation was actually made."
  },
  {
    "row": 73,
    "acct": 2132,
    "name": "Insurance:General & Workers Comp",
    "py": 48000,
    "un": 51360,
    "aje": 0,
    "cy": 51360,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Workers compensation is driven by payroll but it is an insurance premium rather than compensation, which is what keeps it out of the Payroll area.",
    "risk": "Premiums move with payroll. A relationship that breaks down between this account and 6101 is worth understanding."
  },
  {
    "row": 74,
    "acct": 2133,
    "name": "Telecommunications:Wireless Carrier A",
    "py": 9600,
    "un": 10080,
    "aje": 0,
    "cy": 10080,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Telecommunications service consumed monthly under contract.",
    "risk": null
  },
  {
    "row": 75,
    "acct": 2134,
    "name": "Telecommunications:Internet & Cable",
    "py": 7200,
    "un": 7560,
    "aje": 0,
    "cy": 7560,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Same basis, under a service contract.",
    "risk": null
  },
  {
    "row": 76,
    "acct": 2136,
    "name": "Contract Services:Software Subscriptions",
    "py": 24000,
    "un": 26880,
    "aje": 0,
    "cy": 26880,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense rather than a capital asset, because a subscription conveys a right to use for a term rather than ownership. A perpetual license would raise a different question.",
    "risk": "Subscriptions renew without action. Recurring charges continuing past the point of use are a common and easily missed overspend."
  },
  {
    "row": 77,
    "acct": 2137,
    "name": "Building Maintenance",
    "py": 32000,
    "un": 33920,
    "aje": 0,
    "cy": 33920,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Maintenance preserves the building's existing condition; work extending its life or expanding its capability would be capital outlay instead.",
    "risk": "The line between repair and improvement is a judgment. Scan the detail for items that changed the building rather than maintained it."
  },
  {
    "row": 78,
    "acct": 2139,
    "name": "Household Supplies:Paper Products",
    "py": 3200,
    "un": 3328,
    "aje": 0,
    "cy": 3328,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed on use.",
    "risk": null
  },
  {
    "row": 79,
    "acct": 2140,
    "name": "Household Supplies:Food & Beverages",
    "py": 5400,
    "un": 5670,
    "aje": 0,
    "cy": 5670,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed on use, though the purpose behind the spending matters more here than the classification does.",
    "risk": "Public entities face particular scrutiny on food and beverage spending. Test against the entity's own policy, not only for accuracy."
  },
  {
    "row": 80,
    "acct": 2141,
    "name": "Household Supplies:Cleaning Supplies",
    "py": 2800,
    "un": 2912,
    "aje": 0,
    "cy": 2912,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed on use.",
    "risk": null
  },
  {
    "row": 81,
    "acct": 2142,
    "name": "Operations",
    "py": 28000,
    "un": 29680,
    "aje": 0,
    "cy": 29680,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A general operating account carrying no further breakdown.",
    "risk": "An account of this size with an unspecific name may hold items belonging elsewhere. Review the underlying detail."
  },
  {
    "row": 82,
    "acct": 2150,
    "name": "Special Events & Recognition",
    "py": 12000,
    "un": 12600,
    "aje": 0,
    "cy": 12600,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed as incurred.",
    "risk": "Employee recognition can be taxable compensation depending on its form and value."
  },
  {
    "row": 83,
    "acct": 2151,
    "name": "Other Expenses",
    "py": 9000,
    "un": 9270,
    "aje": 0,
    "cy": 9270,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A catch-all for costs without a named account of their own.",
    "risk": "Catch-all accounts accumulate items that belong elsewhere. Review the detail for anything material or unusual."
  },
  {
    "row": 84,
    "acct": 6101,
    "name": "Payroll Expenses:Wages:Salaries",
    "py": 780000,
    "un": 819000,
    "aje": 0,
    "cy": 819000,
    "lead": "6010.00",
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll. Compensation for services rendered, and the account that anchors the entire area.",
    "risk": "The largest line in the trial balance. Reconciles to the W-3 and the four quarterly 941s, and the year-end accrual has to cover days worked but not yet paid."
  },
  {
    "row": 85,
    "acct": 6102,
    "name": "Payroll Expenses:Wages:Hourly",
    "py": 240000,
    "un": 252000,
    "aje": 0,
    "cy": 252000,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll. Hourly wages differ from salaries in how they are calculated, not in what they are, so they share the area.",
    "risk": "Overtime eligibility and employee classification. Misclassification is the recurring finding in hourly payroll."
  },
  {
    "row": 86,
    "acct": 6103,
    "name": "Payroll Expenses:Wages:Phone Reimbursement",
    "py": 6000,
    "un": 6120,
    "aje": 0,
    "cy": 6120,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll rather than an expense reimbursement, because it is paid through the payroll system. That routing generally makes it taxable to the employee.",
    "risk": "Confirm it is being reported as taxable wages. Reimbursements run through payroll without that treatment create a filing exposure."
  },
  {
    "row": 87,
    "acct": 6105,
    "name": "Payroll Expenses:Payroll Taxes:Social Security - Company",
    "py": 63000,
    "un": 66150,
    "aje": 0,
    "cy": 66150,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll. An employer tax that exists only because wages were paid, so it belongs with the wages that generated it.",
    "risk": "Recomputable near 6.2 percent of covered wages. A material deviation points to the wage base."
  },
  {
    "row": 88,
    "acct": 6106,
    "name": "Payroll Expenses:Payroll Taxes:Medicare - Company",
    "py": 15000,
    "un": 15750,
    "aje": 0,
    "cy": 15750,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll, on the same basis as Social Security. Employer taxes follow the payroll that creates them.",
    "risk": "Recomputable near 1.45 percent with no cap, which makes it the simpler of the two employer tax checks."
  },
  {
    "row": 89,
    "acct": 6107,
    "name": "Payroll Expenses:Payroll Taxes:State Taxes",
    "py": 12000,
    "un": 12600,
    "aje": 0,
    "cy": 12600,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll. State unemployment or a similar employer assessment, again arising directly from wages.",
    "risk": "The rate is experience-based and resets annually. Obtain the current year rate notice rather than carrying last year's forward."
  },
  {
    "row": 90,
    "acct": 6108,
    "name": "Payroll Expenses:Retirement",
    "py": 95000,
    "un": 100700,
    "aje": 0,
    "cy": 100700,
    "lead": null,
    "cls": "Payroll",
    "ticks": [],
    "why": "Payroll. Employer retirement contributions sitting inside the Payroll Expenses tree, which is what places them here rather than with the Company Benefits accounts.",
    "risk": "Agree to the contribution formula in the plan document. Contribution rates change without leaving an obvious trail in the ledger."
  },
  {
    "row": 91,
    "acct": 2152,
    "name": "Travel",
    "py": 14000,
    "un": 14700,
    "aje": 0,
    "cy": 14700,
    "lead": "2010.00",
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Consumed as incurred, leaving no asset behind.",
    "risk": "Travel is tested against policy as much as against support. Approval and documentation are the usual exceptions."
  },
  {
    "row": 92,
    "acct": 6110,
    "name": "Company Benefits:Retirement - Company",
    "py": 42000,
    "un": 44520,
    "aje": 0,
    "cy": 44520,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense rather than Payroll, because the account sits in the Company Benefits tree rather than the Payroll Expenses tree. The trial balance is following the chart of accounts here rather than the substance, since this is compensation cost.",
    "risk": "Anyone totalling compensation from the Payroll area alone will miss this account and 6111."
  },
  {
    "row": 93,
    "acct": 6111,
    "name": "Company Benefits:IRA - Company",
    "py": 18000,
    "un": 18900,
    "aje": 0,
    "cy": 18900,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense, on the same basis as 6110: classified by its position in the account tree rather than by what it is.",
    "risk": "Establish which employees are eligible for which plan. Two concurrent retirement vehicles complicate the contribution test."
  },
  {
    "row": 94,
    "acct": 2148,
    "name": "Equipment - Operations",
    "py": 65000,
    "un": 70200,
    "aje": 0,
    "cy": 70200,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense, which is a judgment. Equipment is capitalizable by nature, so expensing it implies each item fell below the capitalization threshold.",
    "risk": "The same threshold question as 2116, on a larger balance. Items above the threshold expensed here would understate capital assets."
  },
  {
    "row": 95,
    "acct": 2149,
    "name": "Prevention Programs",
    "py": 22000,
    "un": 23100,
    "aje": 0,
    "cy": 23100,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Program delivery consumed within the period.",
    "risk": "If any portion is grant-funded, the eligibility rules follow the money into this account."
  },
  {
    "row": 96,
    "acct": 5100,
    "name": "Capital Expenditures",
    "py": 180000,
    "un": 153000,
    "aje": 0,
    "cy": 153000,
    "lead": "4010.00",
    "cls": "Capital Assets",
    "ticks": [],
    "why": "Capital Assets. On the modified accrual basis used in a governmental fund, acquiring a capital asset is an expenditure rather than an asset, so the outlay is recorded here while the asset itself lives in the government-wide conversion.",
    "risk": "Completeness of the capital asset listing depends on this account. Additions recorded here have to be picked up in the conversion, and repairs coded here have to come back out."
  },
  {
    "row": 97,
    "acct": 2147,
    "name": "Grant Expense",
    "py": 210000,
    "un": 231000,
    "aje": 0,
    "cy": 231000,
    "lead": null,
    "cls": "Expense",
    "ticks": [
      "grant"
    ],
    "why": "Expense. The spending that earns the grant revenue in 1512. It is a period cost even though it drives revenue recognition on the other side.",
    "risk": "Eligibility. Costs charged to a grant that the agreement does not permit are both a compliance finding and an overstatement of grant revenue."
  },
  {
    "row": 98,
    "acct": 2146,
    "name": "Community Outreach Program",
    "py": 16000,
    "un": 16960,
    "aje": 0,
    "cy": 16960,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. Program spending consumed as it is delivered.",
    "risk": "Program spending funded by grants or donations carries the funder's eligibility rules into this account."
  },
  {
    "row": 99,
    "acct": 2145,
    "name": "Penalties",
    "py": 2500,
    "un": 2000,
    "aje": 0,
    "cy": 2000,
    "lead": null,
    "cls": "Expense",
    "ticks": [],
    "why": "Expense. A cost of the period, though it records a compliance failure rather than an operating activity.",
    "risk": "Penalties indicate noncompliance somewhere. The amount is rarely the point; what was penalized is."
  },
  {
    "row": 100,
    "acct": 4120,
    "name": "Gain/Loss on Sale of Assets",
    "py": -12000,
    "un": -18000,
    "aje": 0,
    "cy": -18000,
    "lead": "4010.00",
    "cls": "Capital Assets",
    "ticks": [],
    "why": "Capital Assets. A gain or loss arises from disposing of a capital asset, so it files with the asset activity rather than with revenue, despite carrying a credit balance.",
    "risk": "The gain depends on the carrying value of the asset sold, which is maintained outside this trial balance. Recompute it and trace the proceeds into cash."
  },
  {
    "row": 101,
    "acct": 5120,
    "name": "Interest Expense",
    "py": 24000,
    "un": 22800,
    "aje": 0,
    "cy": 22800,
    "lead": "5010.00",
    "cls": "Debt",
    "ticks": [],
    "why": "Debt. Interest is a cost of financing rather than a cost of delivering services, and that distinction is what separates it from the Expense area.",
    "risk": "Should be recomputable from the amortization schedule. Interest that will not agree suggests the obligation is not what the schedule describes."
  },
  {
    "row": 102,
    "acct": 5130,
    "name": "Building Lease/Payment",
    "py": 96000,
    "un": 97920,
    "aje": 0,
    "cy": 97920,
    "lead": "5010.00",
    "cls": "Debt",
    "ticks": [],
    "why": "Debt rather than occupancy expense. Filing a lease payment under debt service implies the arrangement is a financing rather than a rental, carrying a lease liability.",
    "risk": "The classification drives whether a liability belongs on the statements at all. Confirm the conclusion against the agreement before relying on it."
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
