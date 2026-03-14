export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        className="h-8 w-8 text-[#4CA1A3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 12.5C4.5 12.5 5 9 9 9c4 0 5.5 4.5 5.5 4.5S15.5 18 12 18c-3.5 0-5-3.5-5-3.5" />
        <path d="M19.5 12.5c0 0-.5-3.5-4.5-3.5-4 0-5.5 4.5-5.5 4.5S8.5 18 12 18c3.5 0 5-3.5 5-3.5" />
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
      </svg>
      <span className="font-manrope font-bold text-xl tracking-tight text-[#0E3A53]">
        Bright<span className="text-[#4CA1A3]">Smile</span>
      </span>
    </div>
  );
}