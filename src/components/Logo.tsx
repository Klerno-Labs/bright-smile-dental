import Link from "next/link";
import siteConfig from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="bg-secondary text-white p-1.5 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M4.5 12.5C4.5 12.5 4.5 8 12 8c7.5 0 7.5 4.5 7.5 4.5v4.5c0 .5-.5 1-1 1h-13c-.5 0-1-.5-1-1v-4.5z" />
          <path d="M12 8V2" />
          <path d="M12 2L10 4" />
          <path d="M12 2L14 4" />
        </svg>
      </div>
      <span className="font-heading font-bold text-xl text-primary tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
}