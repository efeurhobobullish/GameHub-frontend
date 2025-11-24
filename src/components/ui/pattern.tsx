export default function Pattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] w-full bg-background relative overflow-y-scroll">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, var(--primary) 2px, transparent 0),
            radial-gradient(circle at 75% 75%, var(--muted) 2px, transparent 0)
          `,
          backgroundSize: "50px 50px, 30px 30px",
          backgroundPosition: "0 0, 25px 25px",
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at top right, var(--secondary) 0%, transparent 60%),
            radial-gradient(ellipse at bottom left, var(--foreground) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}