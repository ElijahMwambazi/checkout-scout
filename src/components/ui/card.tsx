export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`rounded-2xl bg-white p-5 shadow-sm ${className}`} />;
}
