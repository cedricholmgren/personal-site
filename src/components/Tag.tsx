interface TagProps {
  children: React.ReactNode;
  variant?:
    | "blue"
    | "green"
    | "purple"
    | "cyan"
    | "emerald"
    | "yellow"
    | "orange"
    | "red"
    | "amber"
    | "rose"
    | "indigo"
    | "teal";
  size?: "sm" | "md";
}

export default function Tag({
  children,
  variant = "blue",
  size = "sm",
}: TagProps) {
  const variants = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    cyan: "bg-cyan-100 text-cyan-800",
    emerald: "bg-emerald-100 text-emerald-800",
    yellow: "bg-yellow-100 text-yellow-800",
    orange: "bg-orange-100 text-orange-800",
    red: "bg-red-100 text-red-800",
    amber: "bg-amber-100 text-amber-800",
    rose: "bg-rose-100 text-rose-800",
    indigo: "bg-indigo-100 text-indigo-800",
    teal: "bg-teal-100 text-teal-800",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`${variants[variant]} ${sizes[size]} rounded-full font-medium inline-block`}
    >
      {children}
    </span>
  );
}
