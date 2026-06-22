export function BarberGoLogo({ className = "w-12 h-12", animate = true }: { className?: string; animate?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${animate ? "animate-pulse" : ""} ${className}`}>
      <img
        src="/logo.png"
        className="w-full h-full object-cover rounded-full border border-zinc-800/80 shadow-md"
        alt="DoctorCorpo GO"
      />
    </div>
  );
}

// Export DoctorCorpoLogo as an alias for better naming context
export const DoctorCorpoLogo = BarberGoLogo;

