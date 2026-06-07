const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconWrap({ children }) {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden>
      {children}
    </svg>
  );
}

/** Line chart with nodes — CISePOS analytics style */
export function IconAnalytics() {
  return (
    <IconWrap>
      <path {...s} d="M6 24V14M12 24V10M18 24V16M24 24V6" />
      <circle fill="currentColor" stroke="none" cx="6" cy="14" r="2" />
      <circle fill="currentColor" stroke="none" cx="12" cy="10" r="2" />
      <circle fill="currentColor" stroke="none" cx="18" cy="16" r="2" />
      <circle fill="currentColor" stroke="none" cx="24" cy="6" r="2" />
      <path {...s} d="M6 14l6-4 6 6 6-10" />
    </IconWrap>
  );
}

/** Smiley + thumbs up */
export function IconCustomers() {
  return (
    <IconWrap>
      <circle {...s} cx="13" cy="13" r="5.5" />
      <circle fill="currentColor" stroke="none" cx="11" cy="12" r="0.75" />
      <circle fill="currentColor" stroke="none" cx="15" cy="12" r="0.75" />
      <path {...s} d="M11 15.5c1.2 1 2.8 1 4 0" />
      <path {...s} d="M21 10v8a2 2 0 01-2 2h-1.5" />
      <path {...s} d="M21 14h3.5l-2.5 4-2.5-4H21" />
    </IconWrap>
  );
}

/** Credit card */
export function IconFastPay() {
  return (
    <IconWrap>
      <rect {...s} x="5" y="9" width="22" height="14" rx="2.5" />
      <path {...s} d="M5 14h22" />
      <path {...s} d="9 19h6" />
      <rect fill="currentColor" stroke="none" x="20" y="17" width="4" height="3" rx="0.5" />
    </IconWrap>
  );
}

/** Monitor + bar chart */
export function IconDecisions() {
  return (
    <IconWrap>
      <rect {...s} x="6" y="7" width="20" height="14" rx="2" />
      <path {...s} d="M11 26h10" />
      <path {...s} d="M16 21v5" />
      <path {...s} d="M10 17V13M14 17V11M18 17V14M22 17V9" strokeLinecap="round" />
    </IconWrap>
  );
}

/** Stacked boxes / inventory */
export function IconInventory() {
  return (
    <IconWrap>
      <path {...s} d="M16 6L7 11v10l9 5 9-5V11l-9-5z" />
      <path {...s} d="M16 16l9-5M16 16v10M16 16L7 11" />
      <path {...s} d="M7 11l9 5 9-5" />
    </IconWrap>
  );
}

/** Dashboard grid */
export function IconDashboard() {
  return (
    <IconWrap>
      <rect {...s} x="6" y="6" width="9" height="9" rx="1.5" />
      <rect {...s} x="17" y="6" width="9" height="6" rx="1.5" />
      <rect {...s} x="17" y="14" width="9" height="12" rx="1.5" />
      <rect {...s} x="6" y="17" width="9" height="9" rx="1.5" />
    </IconWrap>
  );
}

/** Coin / affordable pricing */
export function IconAffordable() {
  return (
    <IconWrap>
      <circle {...s} cx="16" cy="16" r="9" />
      <path {...s} d="M16 10v12M13 12.5h4a2 2 0 010 4h-4a2 2 0 000 4h6" />
    </IconWrap>
  );
}

/** Headset support */
export function IconSupport() {
  return (
    <IconWrap>
      <path {...s} d="M8 15a8 8 0 0116 0v3a2.5 2.5 0 01-2.5 2.5h-1.5l-2 3.5-2-3.5H10.5A2.5 2.5 0 018 18v-3z" />
      <path {...s} d="M13 8v3M10 10.5h6" />
    </IconWrap>
  );
}
