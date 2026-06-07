function ReasonIconBadge({ children }) {
  return (
    <div className="relative shrink-0">
      <div
        className="absolute -inset-1 rounded-full bg-[#4a9ae8] opacity-50 blur-md"
        aria-hidden
      />
      <div className="relative w-[62px] h-[62px] rounded-full bg-[#2e7fd9] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(46,125,217,0.55)]">
        {children}
      </div>
    </div>
  );
}

export default ReasonIconBadge;
