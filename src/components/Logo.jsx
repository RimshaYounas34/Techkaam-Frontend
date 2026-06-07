import { Link } from "react-router-dom";
import { useId } from "react";

function LogoMark({ className = "h-11 w-11", gradId = "tk-gradient" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradId})`} />
      <path d="M14 16h20v4H22v14h-4V20h-4v-4z" fill="white" />
      <circle cx="34" cy="14" r="3" fill="#93c5fd" />
      <path
        d="M30 32l4 4 8-8"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function Logo({ variant = "dark", showText = true, compact = false, className = "" }) {
  const gradId = useId().replace(/:/g, "") + "-grad";
  const isLight = variant === "light";

  const text = showText && (
    <span className="flex flex-col leading-none">
      <span
        className={`font-bold tracking-tight ${
          compact ? "text-lg" : "text-xl"
        } ${isLight ? "text-white" : "text-slate-800"}`}
      >
        Tech<span className={isLight ? "text-blue-300" : "text-brand-600"}>Kaam</span>
      </span>
      {!compact && (
        <span
          className={`text-[10px] font-medium uppercase tracking-widest mt-0.5 ${
            isLight ? "text-blue-200/80" : "text-slate-500"
          }`}
        >
          Software Solutions
        </span>
      )}
    </span>
  );

  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 hover:opacity-90 transition ${className}`}
    >
      <LogoMark gradId={gradId} className="h-11 w-11 shrink-0 drop-shadow-sm" />
      {text}
    </Link>
  );
}

export default Logo;
export { LogoMark };
